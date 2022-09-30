import Image from 'next/future/image'

import Layout from '../components/layout'

import styles from '../styles/Nosotros.module.css'

const Nosotros = () => {
    return (
        <Layout 
            title={'Nosotros'} 
            description={'Sobre nosotros, GuitarLA, tienda de música'}
        >
            <main className='contenedor'>
                <h1 className='heading'>Nosotros</h1>
                <div className={styles.contenido}>

                    <Image src='/img/nosotros.jpg' alt='nosotros imagen' height={800} width={1000}/>

                    <div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut viverra enim, vel euismod nisi. Mauris nec leo est. Suspendisse potenti. In ac dignissim quam. Fusce mattis nulla non sapien gravida, a suscipit dolor egestas. Pellentesque in erat condimentum, bibendum purus tincidunt, elementum dolor. Phasellus a odio a lacus condimentum hendrerit.

                            Vestibulum ut tincidunt dolor. Aenean gravida in augue et vehicula. Ut sed felis felis. In ut vehicula nibh. Nunc varius vulputate mauris. Cras lobortis, risus eu eleifend blandit, metus purus vehicula libero, ut tincidunt massa metus vel magna. Aliquam erat volutpat. Cras facilisis viverra felis non cursus.
                        </p>
                    </div>
                </div>
            </main>
        </Layout>
    )
}

export default Nosotros
