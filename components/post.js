import Image from 'next/future/image'
import Link from 'next/link'

import { formatearFecha } from '../utils/helpers'

import styles from '../styles/blog.module.css'



const Post = ({post}) => {
    const { contenido, imagen, titulo, url, publishedAt} = post
    const imagenPost = imagen.data.attributes.formats.medium.url
    return (
        <article>
            <Image src={imagenPost} alt={`imagen blog ${titulo}`} height={400} width={600}/>
            
            <div className={styles.contenido}>
                <h3>{titulo}</h3>
                <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
                <p className={styles.resumen}>{contenido}</p>
                <Link href={`/blog/${url}`}>
                    <a className={styles.enlace}>
                        Leer Post
                    </a>
                </Link>
            </div>
        </article>
    )
}

export default Post
