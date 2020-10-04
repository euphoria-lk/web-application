import React, {Component} from 'react'
import {Avatar, Card, CardActionArea, CardContent, CardHeader, Grid, Typography} from '@material-ui/core'
import NavBarLandingPage from "../../components/common/NavBarLandingPage";
import {makeStyles} from '@material-ui/core/styles';
import {TitleComponent} from '../../components/common/Title'
import {Alert, AlertTitle} from '@material-ui/lab';

const axios = require('axios').default;

class UserHomeView extends Component {

    constructor(props) {
        super(props);
        this.state = {
/*            error: null,*/
            isLoaded: false,
            appointments: [],
            error: '',
            user: '',
            progress: true,

        };
    }

    componentWillMount() {

        //    const email = localStorage.getItem('counselor_email');
        // axios.get('http://localhost:5002/api/v1/counselling-service/counsellor/profile/'+email,
        //     {
        //         headers: {
        //             'Content-Type': 'application/json',
        //         }
        //     }).then((response) => {
        //         console.log(response.data);
        //         this.setState({
        //             appointments:response.data,
        //         })
        //     }).catch((err) => {
        //         this.setState({
        //             error:err
        //         })
        //     })
        //     console.log("this is appointments"+this.state.appointments.length)
    }


    componentDidMount() {
        // const email = localStorage.getItem('counselor_email');
        // axios.get('http://localhost:5002/api/v1/counselling-service/counsellor/profile/'+email,
        //     {
        //         headers: {
        //             'Content-Type': 'application/json',
        //         }
        //     }).then((response) => {
        //         this.setState({
        //             appointments:response.data,
        //         })
        //     }).catch((err) => {
        //         this.setState({
        //             error:err
        //         })
        //     })
    };

    render() {
        const classes = makeStyles((theme) => ({
            root: {
                display: 'flex',
                '& > * + *': {
                    marginLeft: theme.spacing(2),
                },
            },
        }));
        setTimeout(() => {
                this.setState({
                    progress: false
                })
            }
            , 2000)
        return (
            <div>
                <NavBarLandingPage></NavBarLandingPage>
                <TitleComponent title="Home | User"/>
                <h2 style={{textalign: "center", marginLeft: '40%', marginTop: '20px'}}>Top Rated Threads </h2>
                <Grid style={{marginTop: '20px', marginLeft: '50px'}} container spacing={3}>
                    {this.state.error &&
                    <Alert style={{textalign: 'center', marginLeft: '35%'}} onClose={() => {
                        this.setState({
                            error: false
                        })
                    }} severity="error"

                    >
                        <AlertTitle>Error</AlertTitle>
                        <strong>{this.state.error.message}</strong>
                    </Alert>
                    }
                    <Card style={{width: '90%', height: '300px', margin: '10px'}} className={classes.root}>
                        <CardActionArea>
                            <CardHeader
                                avatar={
                                    <Avatar style={{backgroundColor: 'blue', width: "50px", height: "50px"}}
                                            aria-label="recipe">
                                        D
                                    </Avatar>
                                }
                                style={{height: '30%'}}
                                title="Dimuthu"
                                subheader="Answered on 2020-06-20"
                            />


                            <CardContent style={{height: ''}}>

                                {/* <Avatar style={{width:'200px',height:'200px',marginLeft:'30%',marginTop:'-30px',marginBottom:'30px'}} alt="Dimuthu" src={this.props.counselors.image } /> */}
                                <Typography style={{marginBottom: '10px'}} variant="body2" color="textSecondary">
                                    <b>Why do I need to keep informed?</b>
                                </Typography>
                                <Typography style={{marginBottom: '10px'}} variant="body2" color="textSecondary">
                                    It may be tempting to try to block out the world altogether to avoid bad news, but
                                    it's important to keep yourself informed. We all have to step up during a pandemic
                                    because we all have a part to play in reducing the spread of the virus. It's
                                    important that you know what must be done and how you should do it. This is
                                    important for the health of your neighbours and your own mental health, and taking
                                    action can help counter difficult feelings like hopelessness and despair.

                                    One study from people in China found that people who had reliable up-to-date
                                    information about the coronavirus and COVID-19 illness and accurate instructions on
                                    how they should act (such as instructions around hand-washing and wearing a mask)
                                    felt more resilient and felt better able to handle the virus. People who received
                                    good, accurate information reported lower levels of stress, anxiety, and depression.
                                    This research is available for free at www.mdpi.com/1660-4601/17/5/1729.
                                </Typography>
                                <Typography variant="body2" color="textSecondary">

                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    <Card style={{width: '90%', height: '750px', margin: '10px'}} className={classes.root}>
                        <CardActionArea>
                            <CardHeader
                                avatar={
                                    <Avatar style={{backgroundColor: 'blue', width: "50px", height: "50px"}}
                                            aria-label="recipe">
                                        S
                                    </Avatar>
                                }
                                style={{height: '30%'}}
                                title="Saman"
                                subheader="Answered on Yesterday"
                            />


                            <CardContent style={{height: ''}}>

                                {/* <Avatar style={{width:'200px',height:'200px',marginLeft:'30%',marginTop:'-30px',marginBottom:'30px'}} alt="Dimuthu" src={this.props.counselors.image } /> */}
                                <Typography style={{marginBottom: '10px'}} variant="body2" color="textSecondary">
                                    <b> 10 top tips for good mental health </b>
                                </Typography>
                                <Typography style={{marginBottom: '10px'}} variant="body2" color="textSecondary">
                                    An important part of keeping fit and healthy is to take care of your own mental
                                    health. There are plenty of things you can do to help make sure you keep yourself
                                    mentally healthy.
                                    <br/>
                                    Get plenty of sleep
                                    Sleep is really important for our physical and mental health. Sleep helps to
                                    regulate the chemicals in our brain that transmit information. These chemicals are
                                    important in managing our moods and emotions. If we don't get enough sleep, we can
                                    start to feel depressed or anxious.
                                    <br/>
                                    The Sleep Foundation provides tips on how to sleep well, and to overcome problems
                                    with sleeping.
                                    <br/>
                                    Eat well
                                    Eating well isn't just important for our bodies, but it's also important for our
                                    minds. Certain mineral deficiencies, such as iron and vitamin B12 deficiencies, can
                                    give us a low mood. Try to eat a balanced diet. If you find you're a particularly
                                    stressed or anxious person, you should try limiting or cutting out caffeine as this
                                    can make you feel jittery and anxious.
                                    <br/>
                                    Avoid alcohol, smoking and drugs
                                    Drinking and smoking aren't things which we always associate with withdrawal
                                    symptoms, but they can cause some which impact on your mental health. When you've
                                    had a few drinks you can feel more depressed and anxious the next day, and it can be
                                    harder to concentrate. Excessive drinking for prolonged periods can leave you with a
                                    thiamine deficiency. Thiamine is important for our brain function and a deficiency
                                    can lead to severe memory problems, motor (coordination) problems, confusion and eye
                                    problems. If you smoke, between cigarettes your body and brain go into withdrawal
                                    which makes you irritable and anxious.
                                    <br/>
                                    Other drugs will often leave you in withdrawal and can often cause very low moods
                                    and anxiety. More severe effects of drugs include paranoia and delusions. There is
                                    some research that suggests drug use is related to developing mental disorders like
                                    schizophrenia.
                                    <br/>
                                    Have a look at our pages on Help to stop smoking and on Alcohol and subtance use for
                                    more information.
                                    <br/>
                                    Get plenty of sunlight
                                    Sunlight is a great source of vitamin D. Vitamin D is a really important vitamin for
                                    our bodies and our brains. It helps our brains to release chemicals which improve
                                    our mood, like endorphins and serotonin. Try to go out in the sun when you can, but
                                    make sure you keep your skin and eyes safe. 30 minutes to two hours a day of
                                    sunlight is ideal. During the winter, some people become depressed because they
                                    aren't getting enough sunlight - this is known as Seasonal Affective Disorder (SAD).
                                    Some people find using a special light-therapy lamp helps to alleviate the symptoms.
                                    <br/>
                                    Manage stress
                                    Stress is often unavoidable, but knowing what triggers your stress and knowing how
                                    to cope is key in maintaining good mental health. Try to manage your
                                    responsibilities and worries by making a list or a schedule of when you can resolve
                                    each issue. Often if you break down your worries and stresses and write them down,
                                    you realise that they are manageable. Try to avoid burying your head in the sand,
                                    and tackle problems face on. If you find you are having trouble sleeping, or are
                                    waking up thinking about all of the things that are stressing you out, write them
                                    down and reassure yourself that you can deal with them in the morning.
                                    <br/>
                                    Activity and exercise
                                    Activity and exercise are essential in maintaining good mental health. Being active
                                    not only gives you a sense of achievement, but it boosts the chemicals in your brain
                                    that help put you in a good mood. Exercising can help eliminate low mood, anxiety,
                                    stress and feeling tired and lazy. It is also linked to living a longer life.
                                    <br/>
                                    You don't need to run a marathon or play 90 minutes of football; a short walk or
                                    some another gentle activity might do the trick.
                                    <br/>
                                    Take a look at our Exercise and sport section, or go to our Events calendar, for
                                    ideas and information on what is going on in your area.
                                    <br/>
                                    Do something you enjoy
                                    Try to make time for doing the fun things you enjoy. If you like going for a walk,
                                    painting or a specific TV show, try to set aside time to enjoy yourself. If we don't
                                    spend any time doing things we enjoy, we can become irritable and unhappy.
                                    <br/>
                                    Whether you need help to get out and about or not take a look at our Things To Do
                                    section, or go to our Events calendar, for ideas and information on what is going on
                                    in your area.
                                    <br/>
                                    Connect with others and be sociable
                                    Make an effort to maintain good relationships and talk to people whenever you get
                                    the chance. Having friends is important not just for your self-esteem, but also for
                                    providing support when you're not feeling too great. Research has found that talking
                                    to others for just ten minutes can improve memory and test scores!
                                    <br/>
                                    Whether or not you find going out and meeting people difficult you can have a look
                                    at our Social Activities pages or our Events calendar for inspiration.
                                </Typography>
                                <Typography variant="body2" color="textSecondary">

                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>

                    <Card style={{width: '90%', height: '300px', margin: '10px'}} className={classes.root}>
                        <CardActionArea>
                            <CardHeader
                                avatar={
                                    <Avatar style={{backgroundColor: 'blue', width: "50px", height: "50px"}}
                                            aria-label="recipe">
                                        M
                                    </Avatar>
                                }
                                style={{height: '30%'}}
                                title="Milinda"
                                subheader="Answered on 2020-07-03"
                            />


                            <CardContent style={{height: ''}}>

                                {/* <Avatar style={{width:'200px',height:'200px',marginLeft:'30%',marginTop:'-30px',marginBottom:'30px'}} alt="Dimuthu" src={this.props.counselors.image } /> */}
                                <Typography style={{marginBottom: '10px'}} variant="body2" color="textSecondary">
                                    <b> Everyday Mental Health Tips </b>
                                </Typography>
                                <Typography style={{marginBottom: '10px'}} variant="body2" color="textSecondary">
                                    Enjoy life and have the ability to laugh and have fun.
                                    <br/>
                                    Are able to deal with stress and bounce back from adversity.
                                    <br/>
                                    Feel a sense of meaning and purpose, in both their activities and their
                                    relationships.
                                    <br/>
                                    Are flexible and adaptable to change.
                                    <br/>
                                    Are able to build and maintain fulfilling relationships.
                                </Typography>
                                <Typography variant="body2" color="textSecondary">

                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </div>

        );
    };
}

export default UserHomeView;
