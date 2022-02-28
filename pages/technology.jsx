import React from 'react'
import Layout from '../components/Layout'
import Header from "../components/Header";
import data from '../db/data.json'
import { useState } from "react";
import Image from "next/image";

const technology = () => {
    console.log(data.technology)

    const [indexContent, setIndexContent] = useState(0);
    const { description, images: { landscape, portrait }, name } = data.technology[indexContent];

    return (
        <Layout pagina='Technology'>
            <div className="bg-technology-mobile bg-[length:100%_100%] h-full min-h-screen xl:bg-technology-desktop lg:bg-technology-tablet sm:bg-technology-mobile">
                <div className="max-w-[1450px] m-auto py-[2rem] px-[3rem]">
                    <Header />
                    <main className="grid items-center xl:grid-cols-2 xl:pt-[8rem] xl:pl-[6.25rem]">
                        <h2 className="text-[1.75rem] uppercase font-BarlowCondensed text-white tracking-[0.2rem] mt-[3rem] xl:col-span-2"><span className="text-white/50">02</span> meet your crew</h2>
                        <section className="order-last text-white mx-auto mt-[3.3125rem] text-center xl:flex xl:text-left xl:ml-[20px] xl:order-2 lg:text-center sm:text-center">
                            <article className="text-blue-opacity space-x-[2rem] mb-[2rem] xl:mb-[0rem] xl:space-y-[2rem] xl:space-x-0 xl:mr-[5rem]">
                                {data.technology.map((technology, index) =>
                                    <button
                                        className={`${indexContent === index && 'bg-white text-blue-full'} border-2 border-white hover:border-white/60 text-white rounded-full w-[40px] h-[40px] xl:block xl:w-[80px] xl:h-[80px] xl:text-[2rem] lg:w-[60px] lg:h-[60px] lg:text-[1.5rem]`}
                                        key={technology.name}
                                        onClick={() => { setIndexContent(index) }}>{index}
                                    </button>

                                )}
                            </article>
                            <article>
                                <h2 className='uppercase font-Bellefair opacity-50 text-[14px] lg:text-[1rem]'>the terminology...</h2>
                                <h1 className="uppercase font-Bellefair my-4 text-[35px] xl:text-[3.25rem] lg:text-[2.5rem]">
                                    {name}
                                </h1>
                                <p className="font-Barlow text-blue-opacity w-full max-w-[444px] leading-[2rem] word-spacing-1 text-[15px] xl:text-[1.125rem] lg:text-[1rem]">
                                    {description}
                                </p>
                            </article>
                        </section>

                        <div className="m-auto hidden relative xl:w-[515px] xl:h-[527px] xl:block xl:order-3">
                            <Image src={portrait} layout='fill' alt={image} />
                        </div>

                        <div className='-mx-[3rem] xl:hidden mt-[3rem]'>
                            <Image src={landscape} layout='responsive' width={700} height={185.5} alt={image} />
                        </div>
                    </main>
                </div>
            </div>
        </Layout>
    )
}

export default technology