import ClientLayout from "../../components/client-layout";
import LoginLayout from "../../components/login-layout";
import Head from "next/head";
import {Container, Grid, Typography} from "@material-ui/core";
import CounselorCard from "../../components/client/CounselorCard";
import NewAppointmentView from "../../components/client/NewAppointmentView";
import React from "react";
import SignIn from "../../components/client/SignIn";
import CounsellorSignIn from "../../components/counsellor/CounsellorSignIn";

// export async function getServerSideProps() {
//     const res  = await fetch('http://localhost:5002/api/v1/counselling-service/counsellor/10');
//     const data = await res.json();
//
//     return {props: {data}};
// }


export default function counsellorsLogin({data}) {

    console.log("Data", data.length);

    const [state, setState] = React.useState({
        selectedCounsellor: null
    });

    const setSelectedCounsellor = (counsellor) => {
        setState({
            ...state,
            selectedCounsellor:counsellor,
        })
    }

    let appointmentView = null;

    // if (state.selectedCounsellor !== '' && state.selectedCounsellor !== null) {
    //     appointmentView = <NewAppointmentView counsellor={state.selectedCounsellor} onChange={setSelectedCounsellor}/>
    //     console.log('New Appointment View',state.selectedCounsellor);
    // }else{
    //     console.log('No Appointment');
    // }

    return (
        <LoginLayout>
            <Head>
                <title>Login | Counsellor</title>
            </Head>
            <CounsellorSignIn/>
            {/*<Container>*/}
            {/*    */}
            {/*</Container>*/}
        </LoginLayout>
    );
}
