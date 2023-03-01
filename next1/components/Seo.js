import Head from "next/head";

const Seo = (props) => {

    return (
        <Head>
            <title>{props.title} | Next Movies</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    )
}

export default Seo;