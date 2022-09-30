import Image from "next/future/image"

import Layout from "../../components/Layout"

import { formatearFecha } from '../../utils/helpers'

import styles from '../../styles/blog.module.css'


export async function getServerSideProps({query: {url}}) {
    const respuesta = await fetch(`${process.env.API_URL}/posts?filters[url]=${url}&populate=imagen`)
    const { data: post } = await respuesta.json()
    return {
        props: {
            post
        }
    }    
}

const Post = ({post}) => {
    const { contenido, imagen, publishedAt, titulo} = post[0].attributes
    
    const imagenPost = imagen.data.attributes.url
    
    return (
        <Layout
            title={titulo}
            description={`Post ${titulo}`}

        >
            <article className={`${styles.post} ${styles['mt-3']}`}>
                <Image src={imagenPost} alt={`imagen blog ${titulo}`} height={600} width={1200}/>
                
                <div className={styles.contenido}>
                    <h3>{titulo}</h3>
                    <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
                    <p className={styles.texto}>{contenido}</p>
                </div>
            </article>
        </Layout>
    )
}

export default Post
