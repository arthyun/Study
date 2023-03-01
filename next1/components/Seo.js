import Head from "next/head";

const Seo = (props) => {

    return (
        <Head>
            {/* title란에 백틱으로 처리하지 않으면 페이지 새로고침 시 title란에 이상한 문자가 보인다. */}
            <title>{`${props.title} | Next Movies`}</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    )
}

export default Seo;