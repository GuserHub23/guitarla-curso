import Image from "next/future/image"
import Link from "next/link"

import styles from "../styles/guitarras.module.css"


const Guitarra = ({guitarra}) => {
    const { nombre, descripcion, precio, imagen, url } = guitarra
    
    const imagenGuitarra = imagen.data.attributes.formats.medium.url
    
    return (
        <div className={styles.guitarra}>
            <Image src={imagenGuitarra} alt={`imagen guitarra ${nombre}`} width={600} height={400}/>
            <div className={styles.contenido}>
                <h3>{nombre}</h3>
                
                <p className={styles.descripcion}>{descripcion}</p>
                
                <p className={styles.precio}>$ {precio}</p>
                
                <Link href={`/guitarras/${url}`}>
                    <a className={styles.enlace}>
                        Ver Producto...
                    </a>
                </Link>
            </div>
        </div>
    )
}

export default Guitarra
