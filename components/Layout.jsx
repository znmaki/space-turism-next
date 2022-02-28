import React from 'react'
import Head from 'next/head'

const Layout = ({ children, pagina }) => {
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <title>Space Tourism - {pagina}</title>
                <meta name="description" content="Sitio web de turismo en el espacio" />
                <link rel="icon" href="favicon.ico" />               
            </Head>
            {children}
        </>
    )
}

export default Layout