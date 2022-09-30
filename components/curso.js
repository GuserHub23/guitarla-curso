import styles from '../styles/curso.module.css'

const Curso = ({curso}) => {
    const { contenido, imagen, titulo} = curso.attributes
    const imagenCurso = imagen?.data?.attributes?.url
    return (
        <section className={`${styles.curso} curso`}>
            <style jsx>
                {`.curso {
                    background-image: linear-gradient(to right, rgb(0 0 0 / .65), rgb(0 0 0 / .7)), url(${imagenCurso})
                }`}
            </style>
            <div className={`contenedor ${styles.grid}`}>
                <div className={styles.contenido}>
                    <h2 className='heading'>{titulo}</h2>
                    <p className={styles.resumen}>{contenido}</p>
                </div>
            </div>
        </section>
    )
}

export default Curso
