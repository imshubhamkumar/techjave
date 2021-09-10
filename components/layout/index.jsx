import Footer from "../footer"
import Navbar from "../navbar"
import Head from 'next/head'

const Layout = ({children}) => {
    return ( 
        <>
        <Head>
        <link rel="shortcut icon" href="/logo/logo-07.ico"/>
        </Head>
        <Navbar/>
        <div className="page-body-wrapper">
            {children}
        </div>
        <Footer/>
        </>
     );
}
 
export default Layout;