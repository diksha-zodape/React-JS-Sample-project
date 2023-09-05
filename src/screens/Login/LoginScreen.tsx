import React, { useState } from 'react'
import { Box, TextField, Button, Grid, Link, InputAdornment, AppBar, Toolbar } from "@mui/material";
import { AccountCircle, VisibilityOff } from "@material-ui/icons";
import { Checkbox, FormControlLabel, Typography, } from "@material-ui/core";
import { useNavigate } from 'react-router-dom';

function LoginScreen() {
    const [invalidEmailMessage, setInvalidEmailMessage] = useState("")
    const [invalidPasswordMessage, setInvalidPasswordMessage] = useState("")
    const navigate = useNavigate();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
        const email = data.get('email');
        const password = data.get('password');
        isValidate(email, password)
    };

    const isValidate = (email: any, password: any) => {
        let isValid = false;
        const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (email == "" || email == null || email == undefined) {
            setInvalidEmailMessage("Please Enter Email")
            isValid = false
        } else if (password == "" || password == null || password == undefined) {
            setInvalidPasswordMessage("Please Enter password")
            isValid = false
        } else if (email != '') {
            if (!regEmail.test(email.trim())) {
                setInvalidEmailMessage("Please enter valid email");
                isValid = false
            } else {
                setInvalidEmailMessage('');
                isValid = true
            }
        } else {
            console.log("Validation done")
            isValid = true
        }
        if (password != "") {
            setInvalidPasswordMessage("")
        }

        if (isValid) {
            navigate('/home')
        }
    }

    return (
        <React.Fragment>
            <AppBar position="static">
                <Toolbar>
                    <Link href="#" variant="body2" style={{ color: 'white' }}>
                        <b>Sign Up</b>
                    </Link>
                </Toolbar>
            </AppBar>
            <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
                <Typography component="h1" variant="h5" align="center">
                    Sign in
                </Typography>
                <Box component="form" onSubmit={handleSubmit} style={{ width: 600, height: 600, }}>
                    <TextField
                        margin="normal"
                        //required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="start">
                                    <AccountCircle />
                                </InputAdornment>
                            ),
                        }}
                    />
                    {invalidEmailMessage != "" && <p style={{ color: 'red' }}>{invalidEmailMessage}</p>}
                    <TextField
                        margin="normal"
                        //required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="start">
                                    <VisibilityOff />
                                </InputAdornment>
                            ),
                        }}
                    // <InputAdornment position="end">
                    //     <IconButton
                    //     aria-label="toggle password visibility"
                    //     onClick={handleClickShowPassword}
                    //     onMouseDown={handleMouseDownPassword}
                    //   >
                    //     {showPassword ? <Visibility /> : <VisibilityOff />}
                    //   </IconButton>
                    // </InputAdornment>
                    />
                    {invalidPasswordMessage != "" && <p style={{ color: 'red' }}>{invalidPasswordMessage}</p>}
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="#" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </React.Fragment>
    )
}

export default LoginScreen