import Head from 'next/head'
const SeoHead = ({seotitle}) => {
    return ( 
        <Head>
            <title>{seotitle}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
     );
}
 
export default SeoHead;