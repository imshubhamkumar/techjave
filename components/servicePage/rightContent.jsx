import Image from "next/image"

const RightContent = ({ data, number }) => {
    return ( 
        <>
        <div className="row">
            <div className="col-md-6 big-screen">
                <Image src="/images/cloud-computing.png" alt="cloud-computing" height="400" width="400"/>
            </div>
            <div className="col-md-6 col-12">
                <h4 className="sub-service-count">{number < 10 ? `0${number}` : number}</h4>
                <div className="subServiceTitle">
                    <h3 className="sub-service-head">{data.name}</h3>
                </div>
                <div className="small-screen">
                <Image src="/images/cloud-computing.png" alt="cloud-computing" height="400" width="400"/>
                </div>
                <div className="subServiceBody">
                    <p>{data.details}</p>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default RightContent;