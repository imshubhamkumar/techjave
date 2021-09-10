import ServicePage from '../../components/servicePage';
import { useRouter } from 'next/router'
const Services = () => {
    const router = useRouter();
    return ( 
        <>
        {router.query.serviceId && <ServicePage urlData={router.query.serviceId}/>}
        </>
     );
}
 
export default Services;