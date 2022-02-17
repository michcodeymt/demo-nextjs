import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'

const Id = ({data}) => {
    return (
        <div>
            <Head>
                <title>Mi post</title>
                <meta name="description" content="Descripción de mi primer post"/>
            </Head>
            <h1>{data.id} - {data.title}</h1>
            <Image src="/img/1.jpeg" width={600} height={600} alt="mi imagen con imagen"/>
            <Link href="/">
                <a>Anclar al inicio</a>
            </Link>
        </div>
    );
};

export default Id;

export async function getStaticPaths() {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await res.json()
        const paths = data.map(({id}) => ({params: {id: `${id}`}}))
        return {
            paths,
            fallback: false
        }
    } catch (error) {
        console.log(error)
    }
}

export async function getStaticProps({params}) {
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/` + params.id)
        const data = await res.json()
        return {
            props: {
                data
            }
        }
    } catch (error) {
        console.log('error', error)
    }
}
