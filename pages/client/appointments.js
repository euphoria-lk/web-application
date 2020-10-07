import ClientLayout from "../../components/client-layout";
import Head from "next/head";
import {Container, Grid} from "@material-ui/core";
import React, {useEffect} from "react";
import AppointmentCard from "../../components/client/AppointmentCard";
import EuChat from "../../components/Chat";
const axios = require('axios').default;

// export async function getServerSideProps() {
    // const res  = await fetch('http://35.193.105.188:5002/api/v1/counselling-service/counsellor/profile/');
    // const data = await res.json();
    //
    // return {props: {data}};
// }


export default function clientAppointments() {

    // console.log("Data", data.length);

    const [state, setState] = React.useState({
        appointmentsUpdate: true,
        chatOpen:false
    });

    const [chat, setChat] = React.useState({
        userId:'',
        userName:'',
        image:'',
        channelId:'',
    });

    const [appointments,setAppointments] = React.useState([]);

    // const setSelectedCounsellor = (counsellor) => {
    //     setState({
    //         ...state,
    //         selectedCounsellor:counsellor,
    //     })
    // }

    let chatView = null;

    const loadAppointments = () => {
        const email = localStorage.getItem('userEmail');
        axios.get('http://35.193.105.188:5002/api/v1/counselling-service/appointments/user/'+email,
            {
                headers: {
                    'Content-Type': 'application/json',
                }
            }).then((response) => {
            if(response.data.message && response.status === 200){
                this.setState({
                    show:false
                })
            }else{
                // this.setState({
                //     appointments:response.data,
                //     show:true
                // })
                setAppointments(response.data);
                setState({
                    ...state,
                    appointmentsUpdate: false
                })
                console.log(response.data);

            }

            // console.log('show'+this.state.appointments.length!=null)
            // if(this.state.appointments.length!=null){

            //      this.setState({
            //          show:false
            //      })
            // }
        }).catch((err) => {
            this.setState({
                error:err
            })
        })
    }

    const loadChat = (counselor) => {
        const userObj = JSON.parse(localStorage.getItem("userObj"));
        const userId = userObj._id;
        const counsellorId = counselor._id;

        // setChat({
        //     ...chat,
        //     userId: userId,
        //     userName: userObj.firstname,
        // })

        const url2 = `http://35.193.105.188:5002/api/v1/counselling-service/chat/chatRoom`;

        const requestOption2 = {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: `CounselorID=${counsellorId}&ClientID=${userId}`
        }

        // console.log(requestOption2);

        fetch(url2, requestOption2)
            .then(res => res.json())
            .then(res => {
                // console.log('ChannelId ', res.id);
                setChat({
                    ...chat,
                    userId: userId,
                    userName: userObj.firstname,
                    channelId: res.id
                });
                setState({
                    chatOpen: true,
                })
            })
            .catch(err => {
                console.log(err);
            })

    }

    const closeChat = (status) => {
        setState({
            chatOpen: status,
        })
    }

    React.useEffect(()=>{
        loadAppointments();
    },[state.appointmentsUpdate])


    if (chat.channelId !== '' && chat.channelId !== null && state.chatOpen) {
        chatView = <EuChat chat={chat} onClose={closeChat}/>
        // console.log('New Appointment View',state.selectedCounsellor);
    }else{
        // console.log('No Appointment');
    }



    return (
        <ClientLayout>
            <Head>
                <title>Appointments</title>
            </Head>
            <Container>
                {/*<Typography variant={"h4"} component={'h2'} color={"textSecondary"}>*/}
                {/*</Typography>*/}
                <Grid container>
                    {appointments.map((appointment) => (
                        <Grid item xs={6}>
                            <AppointmentCard appointment={appointment} onChatActivate={loadChat}/>
                        </Grid>
                    ))}
                </Grid>
            </Container>
            {/*<Dialog open={true} style={{width:'1000px'}}>*/}
            {chatView}
            {/*</Dialog>*/}
        </ClientLayout>
    );
}
