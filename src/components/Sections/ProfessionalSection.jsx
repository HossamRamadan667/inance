import proImg from '../../images/professional-img.png'
import Btn from '../Btn'
function ProfessionalSection() {
    return (
        <section id='pro'>
            <div className="container">
                <div className="row py-5 d-flex align-items-center">

                    <div className="col-12 col-md-6 d-none d-md-block">
                        <img src={proImg} alt="" className='proImg' />
                    </div>

                    <div className="col-12 col-md-6 mt-5 mt-md-0">

                        <h2>
                            WE PROVIDE PROFESSIONAL
                            HOME SERVICES.
                        </h2>

                        <p>
                            randomised words which don't look even slightly believable.
                            If you are going to use a passage of Lorem Ipsum,
                            you need to be sure there isn't anything embarrassing hidden in the middle of text.
                            All randomised words which don't look even slightly
                        </p>

                        <Btn type='warning'>READ MORE</Btn>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProfessionalSection;