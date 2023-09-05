import React, { useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import '../../css/style.css'
import { menu } from "./menu";
import { AppBar, Avatar, Checkbox, FormControlLabel, FormGroup, ImageList, ImageListItem, Radio, Slider, Toolbar, Typography, Dialog, DialogTitle, Card, CardContent, Accordion, AccordionSummary, AccordionDetails, CircularProgress, LinearProgress } from "@material-ui/core";
import BookImg from '../../assets/book.jpeg';
import EducationImg from '../../assets/education.webp';
import { Tab, Tabs, Box, TextField, Button, Grid, Link, Alert, InputAdornment } from "@mui/material";
import { makeStyles, } from '@material-ui/core/styles';
import { AccountCircle, VisibilityOff } from "@material-ui/icons";
import Calculator from "../Calculator/calculator";

const useStyles = makeStyles(theme => ({
    root: {
        height: theme.spacing(3),
        //backgroundColor: theme.palette.background.default,
    },
}));
export default function SideMenu() {
    const [openDialog, setOpenDialog] = useState(false);
    const [sideMenuTitle, setSideMenuTitle] = useState('Home')
    const list = ["Rajgad", "Torna", "Shivneri", "Raigad", "Sinhgad", "Pratapgad"]
    const [projectName, setProjectName] = useState('Project Info')
    const [tabIndex, setTabIndex] = useState(0)
    const classes = useStyles();

    const organizationList = [
        {
            title: "Company Name",
            value: "Excellon Software"
        },
        {
            title: "Company Address",
            value: "AG Trade Center"
        }
    ]

    const educationList = [
        {
            title: "Bachelor's Degree",
            school: "Priyadarshini Bhagwati college of Engineering",
            year: "2021"
        },
        {
            title: "12th (HSC)",
            school: "J. M. Patel College",
            year: "2017"
        },
        {
            title: "10th (SSC)",
            school: "Lal Bahadur Shatri Vidyalay",
            year: "2015"
        }
    ]

    const projectList = [
        {
            projectName: 'Ather'
        },
        {
            projectName: 'KTM'
        },
        {
            projectName: 'Bajaj Connect IB'
        }
    ]
    const handleClick = (item: any) => {
        console.log("WHat is in item-", item)
        if (item.title == "Home") {
            setSideMenuTitle('Home')
            setProjectName('Project Info')
        } else if (item.title == "Education") {
            setSideMenuTitle('Education')
            setProjectName('Project Info')
        } else if (item.title == "Projects") {
            setSideMenuTitle('Projects')
        } else if (item.title == "Common components") {
            setSideMenuTitle('Common components')
            setProjectName('Project Info')
        } else {
            setSideMenuTitle('')
        }
    };

    const handleClickOpen = () => {
        setOpenDialog(true);
    }
    const onCloseClick = () => {
        setOpenDialog(false);
    }

    const handleEducationOpen = () => {

    }
    const handleTabChange = (event: any, newTabIndex: any) => {
        console.log("newTabIndex=", newTabIndex)
        setTabIndex(newTabIndex);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
        const email = data.get('email');
        alert("Welcome " + email);
    };

    const blankProjectName = () =>{
        setProjectName('Project Info')
    }

    return (
        <React.Fragment>
            <AppBar position="static">
                <Toolbar>
                    <Typography color="inherit" align="center" className="typo">
                        <b>Web UI</b>
                    </Typography>
                </Toolbar>
            </AppBar>
            <div className="side_menu">
                <div style={{ float: 'left' }}>
                    {
                        menu.map((item, i) => {
                            return (
                                <ListItem button onClick={() => { handleClick(item) }} >
                                    <ListItemIcon>{item.icon}</ListItemIcon>
                                    <ListItemText primary={item.title} />
                                </ListItem>
                            )
                        })
                    }
                </div>
                <div className="vertical-line"></div>
            </div>
            <div className="side_content">
                {
                    sideMenuTitle == 'Home' && (
                        <div>
                            <div style={{ float: "right", marginRight: '30px' }}>
                                <Avatar alt="Example Alt" src={BookImg} style={{ width: '150px', height: '150px' }} />
                                <Typography style={{ marginTop: '20px', fontSize: '20px' }}>Diksha Zodape</Typography>
                                <FormGroup style={{ flexDirection: 'row' }}>
                                    <FormControlLabel control={<Radio defaultChecked checked={true} color="primary" />} label="Female" />
                                    <FormControlLabel disabled control={<Radio />} label="Male" style={{ float: 'right' }} />
                                </FormGroup>
                                <Typography style={{ marginTop: '20px', fontSize: '20px' }}>Skills:</Typography>
                                <div>
                                    <Typography style={{ marginTop: '10px', fontSize: '15px' }}>React Native</Typography>
                                    <Slider disabled defaultValue={70} aria-label="Disabled slider" />
                                    <Typography style={{ marginTop: '5px', fontSize: '15px' }}>React JS</Typography>
                                    <Slider disabled defaultValue={25} aria-label="Disabled slider" />
                                </div>
                                <Button variant="contained" color="primary" onClick={() => { handleClickOpen() }} style={{ marginTop: '20px' }}>
                                    Organization Details
                                </Button>
                                <Dialog open={openDialog} onClose={() => { onCloseClick() }}>
                                    <DialogTitle>Organization Details</DialogTitle>
                                    {organizationList.map((item, i) => {
                                        return (
                                            <ListItem key={'item_' + i} >
                                                <ListItemText primary={item.title + ': '} ></ListItemText>
                                                <ListItemText primary={item.value}></ListItemText>
                                            </ListItem>
                                        )
                                    })}
                                </Dialog>
                            </div>
                            <div style={{ float: "left", width: '60%', height: '100%', borderWidth: 2, borderColor: 'gray' }}>
                                <Typography variant="h3" align="center">React JS</Typography><br />
                                <Typography>
                                    React is a JavaScript-based UI development library. Facebook and an open-source developer community run it. Although React is a library rather than a language, it is widely used in web development. The library first appeared in May 2013 and is now one of the most commonly used frontend libraries for web development.<br /><br />
                                    The React. js framework is an open-source JavaScript framework and library developed by Facebook. It's used for building interactive user interfaces and web applications quickly and efficiently with significantly less code than you would with vanilla JavaScript.
                                </Typography>
                            </div>
                        </div>
                    )
                }
                {
                    sideMenuTitle == 'Education' && (
                        <div>
                            <Typography variant="h3" style={{marginLeft: 300}}>Education</Typography>
                            <div className="education-columns">
                                {
                                    educationList.map((item, index) => {
                                        return (
                                            <div className="education-column">
                                                <Card className="card-shadow">
                                                    <CardContent>
                                                        <Typography variant="h6" align="center">{item.title}</Typography><br />
                                                        <Avatar alt="Example Alt" src={EducationImg} style={{ width: '80px', height: '80px', marginTop: '10px', margin: 'auto' }} />
                                                        <div className="education-text">
                                                            <Typography align="center" style={{ marginTop: '30px' }}>{item.year}</Typography><br />
                                                            <Typography align="center">{item.school}</Typography><br />
                                                        </div>
                                                    </CardContent>
                                                </Card>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    )
                }
                {
                    sideMenuTitle == 'Projects' && (
                        <div className="education-columns">
                            <div className="education-column" style={{ width: '40%' }}>
                            <Typography align="center" variant="h5">{projectName}</Typography><br />
                                {
                                    projectName == 'Ather' ? (
                                        <Typography>
                                            Ather is a B2B application. B2B stands for Business to Bussiness. In ather mobile application We have 3 main modules. i.e., Appointment, Service Estimate and Job card. User can see Vehicle history for their service in application. 
                                        </Typography>
                                    ) : projectName == 'KTM' ? (
                                        <Typography>
                                            KTM is a B2C application. B2C stands for Business to Customer. In KTM mobile application We have 2 sections. i.e., Service Booking and KOGO section. In Service booking section customer can book service from mobile app for their vehicle. Also customer can see vehicle history for their servicing. Nearest dealer, fuel pump lopcator can see in application
                                        </Typography>
                                    ) : projectName == 'Bajaj Connect IB' ? (
                                        <Typography>
                                            Bajaj Connect IB is a B2B application. B2C stands for Business to Customer. IB stands for International Bajaj. As the name indicates Bajaj connect IB is used for out of India customers. Customer can book service from mobile application.
                                        </Typography>
                                    ) : (
                                        <Typography>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                        </Typography>
                                    )
                                }
                            </div>
                            <div className="education-column" style={{ width: '50%', marginLeft: '100px' }}>
                                <Accordion style={{ width: 400 }}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        IconButtonProps={{
                                            onClick: blankProjectName
                                        }}
                                        onClick={blankProjectName}
                                    >
                                        <Typography
                                            style={{
                                                fontWeight: 10,
                                            }}
                                        >
                                            Project List
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        {
                                            <List className="list" component="nav">
                                                {
                                                    projectList.map((item, i) => {
                                                        return (
                                                            <ListItem key={'item_' + i}>
                                                                <ListItemText primary={'Project ' + (i + 1)} ></ListItemText>
                                                                <Button variant="text" size="small" style={{ color: '#000'}} onClick={() => {setProjectName(item.projectName)}}>
                                                                    <ListItemText className="project_list" primary={item.projectName} style={{fontFamily: 'Arial'}}></ListItemText>
                                                                </Button>
                                                            </ListItem>
                                                        )
                                                    })
                                                }
                                            </List>
                                        }
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                        </div>
                    )
                }
                {
                    sideMenuTitle == 'Common components' && (
                        <div>
                            <Box>
                                <Tabs value={tabIndex} onChange={handleTabChange}>
                                    <Tab label="Tab 1" />
                                    <Tab label="Tab 2" />
                                    <Tab label="Tab 3" />
                                </Tabs>
                            </Box>
                            <Box sx={{ padding: 2 }}>
                                {
                                    tabIndex === 0 && (
                                        <Box sx={{ width: 400, height: 400 }}>
                                            <Calculator />
                                        </Box>

                                    )
                                }
                                {
                                    tabIndex === 1 && (
                                        <div className="education-columns">
                                            <div className="education-column" style={{ marginTop: '10px', width: '40%' }}>
                                                <Typography >Circular Progress</Typography>
                                                <div style={{ marginTop: '20px' }}>
                                                    <CircularProgress
                                                        size={`${30}%`}
                                                        value={100}
                                                        thickness={10}
                                                        variant="static"
                                                        color="primary"
                                                    />
                                                </div>
                                            </div>
                                            <div className="education-column" style={{ marginTop: '10px', width: '40%' }}>
                                                <Typography style={{ marginLeft: '25px' }}>Linear Progress</Typography>
                                                <div style={{ marginTop: '20px' }}>
                                                    <LinearProgress
                                                        variant="determinate"
                                                        value={40}
                                                        classes={{
                                                            root: classes.root,
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                                {
                                    tabIndex === 2 && (
                                        <List className="list" component="nav">
                                            {
                                                list.map((item, i) => {
                                                    return (
                                                        <ListItem key={'item_' + i}>
                                                            <ListItemText primary={'Item ' + (i + 1)} ></ListItemText>
                                                            <ListItemText className="side" secondary={item}></ListItemText>
                                                        </ListItem>
                                                    )
                                                })
                                            }
                                        </List>
                                    )
                                }
                            </Box>
                        </div>
                    )
                }
            </div>
        </React.Fragment>
    );
};
