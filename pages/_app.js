import { useEffect } from 'react'
import Layout from '../components/layout'
import Aos from 'aos'
import 'aos/dist/aos.css'
import '../styles/vendors/mdi/css/materialdesignicons.min.css'
import '../styles/css/style.css'
import '../styles/vendors/jquery-flipster/css/jquery.flipster.css'
import '../styles/vendors/owl.carousel/css/owl.carousel.css'
import '../styles/vendors/owl.carousel/css/owl.theme.default.min.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  },[])
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
