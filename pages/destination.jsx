import Layout from "../components/Layout";
import Header from "../components/Header";
import data from '../db/data.json'
import { useState } from "react";
import Image from "next/image";

const Destination = () => {

    const [indexContent, setIndexContent] = useState(0);
    /* console.log(data.destinations[indexContent])
    console.log(indexContent) */

    const { description, distance, name, travel, images: { png } } = data.destinations[indexContent];

    return (
        <Layout pagina={`${data.destinations[indexContent].name}`}>
            <div className="bg-destination-mobile bg-[length:100%_100%] h-full min-h-screen xl:bg-destination-desktop lg:bg-destination-tablet sm:bg-destination-mobile">
                <div className="max-w-[1450px] m-auto py-[2rem] px-[3rem]">
                    <Header />
                    <main className="grid items-center mt-[5rem] xl:mt-0 xl:grid-cols-2 xl:pt-[8rem] xl:pl-[6.25rem]">
                        <div>
                            <h2 className="text-[1.75rem] uppercase font-BarlowCondensed text-white tracking-[0.2rem]"><span className="text-white/50">01</span> pick your destination</h2>
                            <div className="flex flex-row m-auto relative w-[170px] h-[170px] mt-[5rem] mb-[2rem] xl:w-[445px] xl:h-[445px] lg:w-[300px] lg:h-[300px] sm:w-[170px] sm:h-[170px]">
                                <Image src={png} layout='fill' alt={name} />
                            </div>
                        </div>

                        <section className="text-white mx-auto mt-[3.3125rem] text-center xl:text-left lg:text-center sm:text-center">
                            <article className="space-x-[0.93rem] text-blue-opacity">
                                {data.destinations.map((destination, index) =>
                                    <button className={` uppercase tracking-[0.2rem] hover:border-b-4 hover:border-white hover:border-opacity-10 transition duration-300 pb-2 ${indexContent === index && 'border-b-4 text-white pb-2'}`} key={index} onClick={() => { setIndexContent(index) }}>{destination.name}</button>
                                )}
                            </article>
                            <article className="mt-[3rem]">
                                <h1 className="uppercase font-Bellefair text-[6.25rem] m-0">
                                    {name}
                                </h1>
                                <p className="font-Barlow text-[1.125rem] text-blue-opacity w-full max-w-[444px] leading-[2rem] word-spacing-1">
                                    {description}
                                </p>
                                <hr className="mb-[1.5rem] mt-[3rem] opacity-20" />
                                <div className="flex justify-evenly xl:justify-start lg:justify-evenly sm:justify-evenly">
                                    <p className="title-distance xl:text-left xl:mr-[2rem] lg:mr-0 sm:mr-0">avg. distance <span className="info-distance">{distance}</span></p>
                                    <p className="title-distance xl:text-left lg:text-center">est. travel time <span className="info-distance">{travel}</span></p>
                                </div>
                            </article>
                        </section>
                    </main>
                </div>
            </div>
        </Layout>
    )
}

export default Destination