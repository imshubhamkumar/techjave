import dynamic from 'next/dynamic'
import AboutUsSection from "./aboutUsSection"
import HomeSection from "./homeSection"
import ServiceSection from "./serviceSection"
import BlogSection from "./blogSection";

const TestimonialSection = dynamic(() => import("./testimonialSection"))

const HomePage = () => {
    return ( 
        <>
        <HomeSection/>
        <AboutUsSection/>
        <ServiceSection/>
        <TestimonialSection/>
        <BlogSection/>
        </>
     );
}
 
export default HomePage;