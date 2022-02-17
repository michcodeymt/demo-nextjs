import React from 'react';
import Layout from "../../components/Layout";
import Link from 'next/link'

const index = ({data}) => {
    return (
        <Layout>
            <h1>Lista de post</h1>
            {
                data.map(({id, title, body}) => (
                    <div key={id}>
                        <h3>
                            <Link href={`/blog/${id}`}>
                                <a>{id} - {title}</a>
                            </Link>
                        </h3>
                        <p>{body}</p>
                    </div>
                ))
            }
        </Layout>
    );
};

export default index;

export async function getStaticProps() {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
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
