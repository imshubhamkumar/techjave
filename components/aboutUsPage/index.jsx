import HeroSection from '../heroSection';
const AboutUsPage = () => {
    return ( 
        <>
        <HeroSection imgUrl="" title="About Us"/>
        <section className="container">
            <h3>Title</h3>
            <p>Body</p>
            <div className="team row">
                <div className="card col-md-4 col-sm-6 col-12 border-0 mt-2 mb-2">
                    <div className="card-body shadow rounded">
                        <img className="avatar border-0" height="50px" width="50px"/>
                        <h5>Name</h5>
                    </div>
                </div>
                <div className="card col-md-4 col-sm-6 col-12 border-0 mt-2 mb-2">
                    <div className="card-body shadow rounded">
                        <img className="avatar border-0" height="50px" width="50px"/>
                        <h5>Name</h5>
                    </div>
                </div>
                <div className="card col-md-4 col-sm-6 col-12 border-0 mt-2 mb-2">
                    <div className="card-body shadow rounded">
                        <img className="avatar border-0" height="50px" width="50px"/>
                        <h5>Name</h5>
                    </div>
                </div>
                <div className="card col-md-4 col-sm-6 col-12 border-0 mt-2 mb-2">
                    <div className="card-body shadow rounded">
                        <img className="avatar border-0" height="50px" width="50px"/>
                        <h5>Name</h5>
                    </div>
                </div>
            </div>
        </section>
        </>
     );
}
 
export default AboutUsPage;