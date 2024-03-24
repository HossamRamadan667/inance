import Btn from './Btn'
import heroImg from '../images/hero-img.png'
function hero() {
    return (
        <section className="py-5 overflow-hidden" id="hero">
            <div className="container">
                <div className="row d-flex align-item-center">
                    <div className="col-12 col-md-6 mb-5 mb-md-0 d-flex justify-content-center  flex-column">

                        <h1>
                            Repair and
                            <br />
                            Maintenance
                            <br />
                            Services
                        </h1>

                        <p className='mb-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim, beatae? Dolorem ducimus, repellat atque nam aspernatur, est sed cum velit, commodi pariatur repudiandae cumque totam voluptate labore aliquid. Officiis, quis?</p>

                        <Btn type='warning' >CONTACT US</Btn>

                    </div>

                    <div className="col-12 col-md-6" style={{ height: 600 + "px" }}>
                        <img src={heroImg} alt="hero img" />
                    </div>

                </div>
            </div>
        </section>
    );
}

export default hero;