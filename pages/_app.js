import { useEffect } from 'react'
import Layout from '../components/layout'
import Aos from 'aos'
import 'aos/dist/aos.css'
import '../styles/vendors/mdi/css/materialdesignicons.min.css'
import '../styles/css/style.css'
import '../styles/globals.css'
import '../styles/vendors/jquery-flipster/css/jquery.flipster.css'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'

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
