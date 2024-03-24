import Feature from "../Feature";
import FeatureOne from "../../icons/FeatureOne";
import FeatureTwo from "../../icons/FeatureTwo";
import FeatureThree from "../../icons/FeatureThree";
function FeatureSection() {
    return (
        <section id="features" className="py-5">
            <div className="container">
                <div className="row   justify-content-center  content">

                    <Feature>
                        <FeatureOne />
                        <h5 className="mt-3">REPAIR</h5>
                    </Feature>

                    <Feature>
                        <FeatureTwo />
                        <h5 className="mt-3">IMPROVE</h5>
                    </Feature>

                    <Feature>
                        <FeatureThree />
                        <h5 className="mt-3">MAINTAIN</h5>
                    </Feature>

                </div>
            </div>
        </section>
    );
}

export default FeatureSection;