import Image from "next/image"
import Link from "next/link"
import getPost from "../lib/helper"
import Author from "./_child/Author"
import fetcher from '../lib/fetcher'
import Spinner from "./_child/Spinner"
import Error from "./_child/Error"

export default function Section2() {
    const {data, isLoading, isError} = fetcher('api/posts')

    if(isLoading) return <Spinner/>
    if(isError) return <Error/>
    
  return (
    <section className="container mx-auto md:px-20 py-10">
        <h1 className="font-bold text-4xl py-12 text-center">Latest Posts</h1>

        {/* grid columns */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
            {
                data?.map((post, index) => <Post data={post} key={index} />)
            }
        </div>
    </section>
  )
}

function Post({data}){
    const {id, category, img, published, author, title, subtitle} = data
    return (
        <div className="item">
            <div className="images">
                <Link legacyBehavior href={"/"}><a><Image src={img || '/'} className="rounded" width={500} height={350} alt=""/></a></Link>
            </div>
            <div className="info flex justify-center flex-col py-4">
                <div className="cat">
                    <Link legacyBehavior href={"/"}><a className="text-orange-600 hover:text-orange-800">{category || 'unknown'}</a></Link>
                    <Link legacyBehavior href={"/"}><a className="text-gray-800 hover:text-gray-600">- {published || 'unknown'}</a></Link>
                </div>
                <div className="title">
                    <Link legacyBehavior href={"/"}><a className="text-xl font-bold text-gray-800 hover:text-gray-600">{title || 'title'}</a></Link>
                </div>
                <p className="text-gray-500 py-3">
                    {subtitle || 'subtitle'}
                </p>
                {
                    author && <Author></Author>
                }
            </div>
        </div>
    )
}
