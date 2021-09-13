import Head from 'next/head';
import LeftContent from "./leftContent";
import RightContent from "./rightContent";
import {services as data} from '../../data/services';
import HeroSection from '../heroSection';
import CenterContext from './centerContent';

const ServicePage = ({urlData}) => {
    const newData = data.filter(item => item.url === urlData)
    return ( 
        <>
        <Head>
            <title>
                {newData[0].name} | TechJave
            </title>
        </Head>
        <HeroSection imgUrl={newData[0].imgUrl} title={newData[0].name}/>
        <section className="mt-2">
            <div className="container">
                <div className="center">
                <h3>Overview</h3>
                <p>{newData[0].overview}</p>
                </div>
                <ul className="servicesList">
                    {newData.length > 0 && newData[0].subService.map((element, idx) => 
                    idx % 2 === 0 ?
                    <li key={idx}>
                        {!element.imgUrl ? <CenterContext data={element} number={idx+1}/>:
                        <RightContent data={element} number={idx+1}/>}
                    </li> :
                    <li key={idx}>
                        {!element.imgUrl ? <CenterContext data={element} number={idx+1}/>:
                        <LeftContent data={element} number={idx+1}/>}
                    </li>
                    )}
                </ul>
            </div>
        </section>
        </>
     );
}
 
export default ServicePage;