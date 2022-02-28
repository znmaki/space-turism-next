import React from 'react'
import Layout from '../components/Layout'
import Header from "../components/Header";
import data from '../db/data.json'
import { useState } from "react";
import Image from "next/image";

const Crew = () => {

    const [indexContent, setIndexContent] = useState(0);
    /* console.log(data.crew[indexContent]); */
    const { bio, images: { png }, name, role } = data.crew[indexContent];

    return (
        <Layout pagina='Crew'>
            <div className="bg-crew-mobile bg-[length:100%_100%] h-full min-h-screen xl:bg-crew-desktop lg:bg-crew-tablet sm:bg-crew-mobile">
                <div className="max-w-[1450px] m-auto pt-[2rem] px-[3rem]">
                    <Header />
                    <main className="grid items-center mt-[5rem] xl:mt-0 xl:grid-cols-2 xl:pt-[8rem] xl:pl-[6.25rem]">
                        <section className="text-white text-center xl:text-left xl:ml-[20px] lg:text-center sm:text-center">
                            <h2 className="text-[1.75rem] uppercase font-BarlowCondensed text-white tracking-[0.2rem] text-left"><span className="text-white/50">02</span> meet your crew</h2>
                            <article className='mt-[5rem] mb-[2rem]'>
                                <h2 className='uppercase text-[2rem] font-Bellefair opacity-50'>{role}</h2>
                                <h1 className="uppercase font-Bellefair text-[3.25rem] my-4">
                                    {name}
                                </h1>
                                <p className="font-Barlow text-[1.125rem] text-blue-opacity w-full max-w-[444px] leading-[2rem] word-spacing-1 mx-auto">
                                    {bio}
                                </p>
                            </article>
                            <article className="space-x-[0.93rem] text-blue-opacity my-[4rem]">
                                {data.crew.map((crew, index) =>
                                    <button
                                        className={`tracking-[0.2rem] w-[20px] h-[20px] hover:bg-opacity-20 bg-white bg-opacity-5 rounded-full ${indexContent === index && 'bg-white bg-opacity-100'}`}
                                        key={crew.name}
                                        onClick={() => { setIndexContent(index) }}>
                                    </button>

                                )}
                            </article>
                        </section>

                        <div className="flex flex-row m-auto relative w-[170px] h-[170px] xl:w-[572px] xl:h-[572px] lg:w-[300px] lg:h-[300px] sm:w-[170px] sm:h-[170px] border-b-[2px] border-b-slate-50/50">
                            <Image src={png} layout='fill' alt={name} />
                        </div>
                    </main>
                </div>
            </div>
        </Layout>
    )
}

export default Crew