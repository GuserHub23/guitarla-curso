import Link from "next/link"
import Layout from "../components/Layout"

const Pagina404 = () => {
    return (
        <Layout
            title="Pagina no encontrada"
        >
            <p className="error">
                Página no encontrada
            </p>
            <Link href='/'>
                <a className="error-enlace">
                    Volver al inicio
                </a>
            </Link>
        </Layout>
    )
}

export default Pagina404
