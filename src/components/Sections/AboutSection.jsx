import Btn from '../Btn'
import aboutImg from '../../images/about-img.jpg';
function AboutSection() {
    return (
        <section id="about">
            <div className="container">
                <div className="row py-5 d-flex align-items-center">

                    <div className="col-12 col-md-6 ">

                        <h2>ABOUT US</h2>

                        <p>
                            There are many variations of passages of Lorem Ipsum available,
                            but the majority have suffered alteration in some form,
                            by injected humour,
                            or randomisedThere are many variations of passages of Lorem Ipsum available,
                            but the majority have suffered alteration in some form,
                            by injected humour, or randomised
                        </p>

                        <Btn>READ MORE</Btn>

                    </div>

                    <div className="col-12 col-md-6 mt-5 mt-md-0">
                        <img src={aboutImg} alt="" className='aboutImg' />
                    </div>

                </div>
            </div>
        </section>
    );
}

export default AboutSection;