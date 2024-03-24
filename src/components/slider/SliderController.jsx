import { useSwiper } from "swiper/react";
import Btn from '../Btn'

function SliderControllers() {
    const swiper = useSwiper();
    return (
        <div className="sliderControllers d-flex  gap-2 pt-3">
            <Btn type='warning' onClick={() => swiper.slidePrev()}><i className="fa-solid fa-angle-left"></i> </Btn>
            <Btn type='warning' onClick={() => swiper.slideNext()}> <i className="fa-solid fa-angle-right"></i> </Btn>
        </div>
    );
}

export default SliderControllers;