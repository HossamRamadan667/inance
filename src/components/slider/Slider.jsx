
import { Swiper, SwiperSlide } from 'swiper/react';
import CLient1 from '../../images/client-1.jpg';
import CLient2 from '../../images/client-1.jpg';
import SliderControllers from './SliderController';
import { useState } from 'react';
import 'swiper/css';
import SlideContent from './SlideContent';
let customers = [
    {
        avatar: CLient1,
        stars: 5,
        name: 'name',
        message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium facilis distinctio voluptas dolorum laborum debitis. Voluptatem illum suscipit, ullam incidunt saepe ea quo cum exercitationem ipsam! Officiis optio dicta odio!'
    },
    {
        avatar: CLient2,
        stars: 3,
        name: 'name',
        message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium facilis distinctio voluptas dolorum laborum debitis. Voluptatem illum suscipit, ullam incidunt saepe ea quo cum exercitationem ipsam! Officiis optio dicta odio!'
    },
    {
        avatar: CLient1,
        stars: 1,
        name: 'name',
        message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium facilis distinctio voluptas dolorum laborum debitis. Voluptatem illum suscipit, ullam incidunt saepe ea quo cum exercitationem ipsam! Officiis optio dicta odio!'
    },
    {
        avatar: CLient2,
        stars: 3,
        name: 'name',
        message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium facilis distinctio voluptas dolorum laborum debitis. Voluptatem illum suscipit, ullam incidunt saepe ea quo cum exercitationem ipsam! Officiis optio dicta odio!'
    }
];

function Slider() {

    // to make the slider responsive
    const [slidesPerView, setSlidesPerView] = useState(window.innerWidth <= 767 ? 1 : 2);
    window.addEventListener('resize', () => {
        setSlidesPerView(window.innerWidth <= 767 ? 1 : 2)
    })

    return (

        <Swiper spaceBetween={50} slidesPerView={slidesPerView} >

            {customers.map(
                (el) =>
                    <SwiperSlide>
                        <SlideContent
                            img={el.avatar}
                            name={el.name}
                            stars={el.stars}
                            message={el.message} />
                    </SwiperSlide>
            )}

            <SliderControllers />

        </Swiper>

    );
}

export default Slider;