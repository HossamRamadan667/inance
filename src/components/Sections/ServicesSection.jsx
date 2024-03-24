import Btn from "../Btn";
import Service from "../Service";
import Service1 from "../../images/s1.png";
import Service2 from "../../images/s2.png";
import Service3 from "../../images/s3.png";
function ServicesSection() {
    return (
        <section id="services">
            <div className="container py-5 d-flex flex-column justify-content-center">

                <div className="row mb-4">

                    <Service icon={Service1} title="Maintenance" >
                        when looking at its layout.
                        The point of using Lorem Ipsum is that it has a more-or-less normal
                    </Service>

                    <Service icon={Service2} title="Electrical">
                        when looking at its layout.
                        The point of using Lorem Ipsum is that it has a more-or-less normal
                    </Service>

                    <Service icon={Service3} title="Plumbing">
                        when looking at its layout.
                        The point of using Lorem Ipsum is that it has a more-or-less normal
                    </Service>

                </div>

                <Btn className='m-auto'>READ MORE</Btn>

            </div>
        </section>
    );
}

export default ServicesSection;