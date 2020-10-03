import ClientLayout from "../components/client-layout";
import Head from "next/head";
import {Container} from "@material-ui/core";

export default function Home() {
    return (
        <ClientLayout>
            <Head>
                <title>Home</title>
            </Head>
            <Container>
                <h1>Home Page</h1>
            </Container>
        </ClientLayout>
    );
}
