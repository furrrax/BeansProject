import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import style from './style.module.css';

const testimonials = [
    { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.', name: 'John Doe' },
    { text: 'Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.', name: 'Jane Smith' },
    { text: 'Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.', name: 'Alice Johnson' },
    { text: 'Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent.', name: 'Bob Brown' },
    { text: 'Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor.', name: 'Charlie Davis' },
    { text: 'Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis.', name: 'Diana Evans' },
];

export const ReviewsPage = () => {
    return(
        <div className={style.slider__container}>
            <h1>Reviews (drag-n-drop slider)</h1>
            <Swiper
                centeredSlides= {false}
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                    },
                    900: {
                        slidesPerView: 2,
                    },
                    1460: {
                        slidesPerView: 3,
                    },
                }}
            >
                {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index}>
                        <div className={style.inner}>
                            <p>{testimonial.text}</p>
                            <h4>{testimonial.name}</h4>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default ReviewsPage;