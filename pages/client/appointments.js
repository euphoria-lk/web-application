import ClientLayout from "../../components/client-layout";
import Head from "next/head";
import {Container, Grid, Typography} from "@material-ui/core";
import CounselorCard from "../../components/client/CounselorCard";
import NewAppointmentView from "../../components/client/NewAppointmentView";
import React from "react";

export async function getServerSideProps() {
    const res  = await fetch('http://localhost:5002/api/v1/counselling-service/counsellor/10');
    const data = await res.json();

    return {props: {data}};
}


export default function clientCounsellors({data}) {

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
        <ClientLayout>
            <Head>
                <title>Appointments</title>
            </Head>
            <Container>
                {/*<Typography variant={"h4"} component={'h2'} color={"textSecondary"}>*/}
                {/*</Typography>*/}
                <Grid container>
                    {data.map((counsellor) => (
                        <Grid item xs={6}>
                            <CounselorCard counsellor={counsellor} onCounsellorSelect={setSelectedCounsellor}/>
                        </Grid>
                    ))}
                </Grid>
            </Container>
            {/*<Dialog open={true} style={{width:'1000px'}}>*/}
            {appointmentView}
            {/*</Dialog>*/}
        </ClientLayout>
    );
}
