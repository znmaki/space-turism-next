import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import data from '../db/data.json'
import { useRouter } from 'next/router'

const Header = () => {
    const [sidebar, setSidebar] = useState(false);
    console.log(sidebar)
    const router = useRouter();
    return (
        <>
            <div className='font-Barlow flex items-center justify-between'>
                <Link href='/'>
                    <a className='w-full max-w-[3.5rem] rounded-full mr-[4rem]'>
                        <Image src='/shared/logo.svg' alt='Logo' width={70} height={70} />
                    </a>
                </Link>
                <hr className='h-[1px] w-full -mr-10 hidden xl:block' />
                <nav className='bg-white px-[4rem] bg-opacity-5 sm:px-32 -mr-[48px] hidden lg:block xl:mr-[48px]'>
                    <ul className='whitespace-nowrap space-x-9'>
                        {data.pages.map((page, index) =>
                            <li className={`btn-primary py-[2rem] hover:border-b-4 hover:border-white hover:border-opacity-5 transition duration-300 ${router.pathname === page.path && "border-b-4"}`}
                                key={index}><Link href={`${page.path}`}
                                ><a className='py-[2rem]'><span className='font-bold'>0{`${index}`}</span> {page.name}</a></Link>
                            </li>)}
                    </ul>
                </nav>
                <a className='w-full max-w-[1.5rem] cursor-pointer lg:hidden' onClick={() => { setSidebar(!sidebar) }}>
                    <Image src='/shared/icon-hamburger.svg' alt='Logo' width={70} height={70} />
                </a>
            </div>

            <aside className={`${sidebar ? 'translate-x-0' : 'translate-x-full'} bg-blue-full h-full fixed right-0 top-0 p-[3rem] z-10 lg:hidden transition-transform duration-300 ease-in-out`}>
                <nav>
                    <a className='w-full rounded-full cursor-pointer block text-right' onClick={() => { setSidebar(!sidebar) }}>
                        <Image src='/shared/icon-close.svg' alt='Logo' width={30} height={30} />
                    </a>
                    <ul>
                        {data.pages.map((page, index) =>
                            <li className={`btn-primary py-[2rem] block hover:border-b-4 hover:border-white hover:border-opacity-5 transition duration-300 ${router.pathname === page.path && "border-b-4"}`}
                                key={index}><Link href={`${page.path}`}
                                ><a className='py-[2rem] pr-[15rem]'><span className='font-bold'>0{`${index}`}</span> {page.name}</a></Link>
                            </li>)}
                    </ul>
                </nav>
            </aside>
        </>
    )
}

export default Header