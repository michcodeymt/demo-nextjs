import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'

const PrimerPost = () => {
    return (
        <div>
            <Head>
                <title>Mi post</title>
                <meta name="description" content="Descripción de mi primer post" />
            </Head>
         <h1>prime post</h1>
            <Image src="/img/1.jpeg" width={600} height={600} alt="mi imagen con imagen"/>
            <Link href="/">
                <a>Anclar al inicio</a>
            </Link>
        </div>
    );
};

export default PrimerPost;
