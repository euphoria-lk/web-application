import ClientLayout from "../components/client-layout";
import Head from "next/head";

export default function Home() {
    return(
        <ClientLayout>
            <Head>
                <title>Home</title>
            </Head>
            <h1>Home Page</h1>
        </ClientLayout>
    );
}
