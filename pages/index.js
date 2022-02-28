import Layout from "../components/Layout";
import Header from "../components/Header";
import Link from "next/link";

export default function Home() {
  return (
    <Layout pagina="Home">
      <div className="bg-home-mobile xl:bg-home-desktop lg:bg-home-tablet sm:bg-home-mobile bg-[length:100%_100%] h-full min-h-screen">
        <div className="max-w-[1450px] m-auto py-[2rem] px-[3rem]">
          <Header />
          <main className="grid items-center xl:grid-cols-2 xl:pt-[8rem] xl:pl-[6.25rem]">
            <article className="text-white mx-auto text-center my-[5rem] xl:mx-0 xl:text-left">
              <h2 className="font-BarlowCondensed uppercase text-[1.75rem] text-blue-opacity pb-[3rem]">
                So, you want to travel to
              </h2>
              <h1 className="uppercase font-Bellefair text-[80px] m-0 xl:text-[10rem] lg:text-[150px]">
                Space
              </h1>
              <p className="font-Barlow text-[15px] text-blue-opacity w-full max-w-[444px] leading-[2rem] word-spacing-1 xl:text-[1.125rem]">
                Let’s face it; if you want to go to space, you might as well
                genuinely go to outer space and not hover kind of on the edge of
                it. Well sit back, and relax because we’ll give you a truly out
                of this world experience!
              </p>
            </article>
            <div className="flex flex-col items-center">
              <Link href="/destination">
                <a className="w-full max-w-[274px] h-full max-h-[274px] py-[137px] rounded-full bg-white hover:ring-[4rem] ring-white ring-opacity-10 transition duration-300">
                  <h2 className="text-center -mt-[20px] text-[3rem] uppercase font-Bellefair">
                    Explore
                  </h2>
                </a>
              </Link>
            </div>
          </main>
        </div>
      </div>
    </Layout>
  );
}
