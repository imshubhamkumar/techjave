import dynamic from 'next/dynamic'
import Head from "next/head";
import AboutUsSection from "./aboutUsSection"
import HomeSection from "./homeSection"
import ServiceSection from "./serviceSection"
import BlogSection from "./blogSection";

const TestimonialSection = dynamic(() => import("./testimonialSection"))

const HomePage = () => {
    return ( 
        <>
        <Head>
            <title>TechJave.</title>
        </Head>
        <HomeSection/>
        <AboutUsSection/>
        <ServiceSection/>
        <TestimonialSection/>
        <BlogSection/>
        </>
     );
}
 
export default HomePage;