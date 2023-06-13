import Link from 'next/link';
import styles from '../styles/Carousel.module.css';
import 'swiper/css/bundle'
import { Swiper, SwiperSlide } from 'swiper/react' //カルーセル用のタグをインポート
import SwiperCore, { Pagination, Navigation, Autoplay } from 'swiper' //使いたい機能をインポート


export default function WorkCarousel(props) {
    return (
        <div className={styles.sell2}>
            <Swiper
                slidesPerView={1} //一度に表示するスライドの数
                pagination={{
                    clickable: true,
                }} //　何枚目のスライドかを示すアイコン、スライドの下の方にある
                navigation={true} //スライドを前後させるためのボタン、スライドの左右にある
                loop={true}
                modules={[Navigation, Autoplay, Pagination]}
                className={styles.swiper}
                speed={1500}
                autoplay={{
                    delay: 5000,
                    // disableOnInteraction: false,
                }}
            >
                {props.images.map((src, index) => {
                    return (
                        <SwiperSlide key={`${index}`}>
                            <img className={styles.img}
                                src={src}
                            />
                        </SwiperSlide>
                    )
                })}
                {props.videos.map((src, index) => {
                    return (
                        <SwiperSlide key={`${index}`}>
                            <iframe className={styles.img}
                                src={"https://www.youtube.com/embed/"+src}
                                title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen
                            ></iframe>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    );
}