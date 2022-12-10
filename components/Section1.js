import Image from 'next/image'
import Link from 'next/link'
import Author from './_child/Author'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SwiperCore, {Autoplay} from 'swiper'

export default function Section1() {
    SwiperCore.use([Autoplay])
    const bg = {
        background: "url('/images/banner.png') no-repeat",
        backgroundPosition: "right"
    }
    return (
        <section className="py-16" style={bg}>
            <div className="container mx:auto md:px-20">
                <h1 className="font-bold text-4xl pb-12 text-center">Trending</h1>
                <Swiper
      slidesPerView={1}
      autoplay={{
        delay: 2000
      }}
      loop={true}
    >
      <SwiperSlide>{Slide()}</SwiperSlide>
      <SwiperSlide>{Slide()}</SwiperSlide>
      <SwiperSlide>{Slide()}</SwiperSlide>
      <SwiperSlide>{Slide()}</SwiperSlide>
      
      ...
    </Swiper>
            </div>
        </section>
    )
}

function Slide() {
    return (
        <div className='grid md:grid-cols-2'>
            <div className='image'>
            <Link legacyBehavior href={"/"}><a><Image src={"/images/img1.jpg"} width={600} height={600} alt="" /></a></Link>
            </div>

            <div className='info flex justify-center flex-col'>
                <div className="category">
                    <Link legacyBehavior href={"/"}><a className="text-orange-600 hover:text-orange-800">Business, travel </a></Link>
                    <Link legacyBehavior href={"/"}><a className="text-gray-800 hover:text-gray-600">- December 08</a></Link>
                </div> 
                <div className="title">
                    <Link legacyBehavior href={"/"}><a className="text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-600 text-justify">Your most unhappy customers are the best source of learning and improving!</a></Link>
                </div>
                <p className="text-gray-800 py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga doloribus repellat eligendi, quibusdam aut inventore est at quo ad facere.</p>
                <Author/>
            </div>

        </div>
    )
}
