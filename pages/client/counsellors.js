import ClientLayout from "../../components/client-layout";
import Head from "next/head";
import {Container, Grid, Modal, Typography, Dialog} from "@material-ui/core";
import CounselorCard from "../../components/client/CounselorCard";
import NewAppointmentView from "../../components/client/NewAppointmentView";

export async function getServerSideProps(){
    const res = await fetch('http://localhost:5002/api/v1/counselling-service/counsellor/10');
    const data = await res.json();

    return {props: {data}};
}

export default function clientCounsellors({data}) {

    console.log("Data",data.length);

    return (
        <ClientLayout>
            <Head>
                <title>Home</title>
            </Head>
            <Container>
                <Typography variant={"h4"} component={'h2'} color={"textSecondary"}>
                    Our Trusted Counselors
                </Typography>
                <Grid container>
                    {data.map((counsellor)=>(
                        <Grid item xs={6}>
                            <CounselorCard counsellor={counsellor}/>
                        </Grid>
                    ))}
                </Grid>
            </Container>
            <Dialog open={true} style={{width:'1000px'}}>
                <NewAppointmentView/>
            </Dialog>
        </ClientLayout>
    );
}
