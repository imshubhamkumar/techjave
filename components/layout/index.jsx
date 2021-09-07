import Footer from "../footer"
import Navbar from "../navbar"

const Layout = ({children}) => {
    return ( 
        <>
        <Navbar/>
        <div className="page-body-wrapper">
            {children}
        </div>
        <Footer/>
        </>
     );
}
 
export default Layout;