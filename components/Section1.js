import Image from 'next/image'
import Link from 'next/link'
import Author from './_child/Author'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SwiperCore, {Autoplay} from 'swiper'
import Spinner from './_child/Spinner';
import Error from './_child/Error';
import fetcher from '../lib/fetcher'

export default function Section1() {

    const {data, isLoading, isError} = fetcher('api/trending')
    if(isLoading) return <Spinner/>
    if(isError) return <Error/>

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
    {
        data?.map((val, index) => <SwiperSlide key={index}><Slide data={val} /></SwiperSlide>)
    }
      ...
    </Swiper>
            </div>
        </section>
    )
}

function Slide({data}) {
    const { id, title, category, img, published, description ,author } = data;

    return (
        <div className="grid md:grid-cols-2">
            <div className="image">
                <Link legacyBehavior href={"/"}><a><Image src={img || "/"} width={600} height={600} alt="" /></a></Link>
            </div>
            <div className="info flex justify-center flex-col">
                <div className="cat">
                    <Link legacyBehavior href={"/"}><a className="text-orange-600 hover:text-orange-800">{category || "Unknown"}</a></Link>
                    <Link legacyBehavior href={"/"}><a className="text-gray-800 hover:text-gray-600">- {published || "Unknown"}</a></Link>
                </div>
                <div className="title">
                    <Link legacyBehavior href={"/"}><a className="text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-600">{title || "Unknown"}</a></Link>
                </div>
                <p className="text-gray-500 py-3">
                    {description || "description"}
                </p>
                { author ? <Author></Author> : <></>}
            </div>
        </div>
    )
}
