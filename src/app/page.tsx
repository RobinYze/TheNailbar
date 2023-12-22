"use client"

import React, { useRef, useState, useEffect } from 'react'
import { CornerRightDown, Dot, Heart, MoveRight } from 'lucide-react'
import autoAnimate from '@formkit/auto-animate'
import Link from 'next/link'
import Image from 'next/image'
import { Fade } from "react-awesome-reveal";

const Page = () => {
    const [show_one, setshow_one] = useState(true)
    const [show_two, setshow_two] = useState(false)
    const [show_three, setshow_three] = useState(false)

    const parent_one = useRef(null)
    const parent_two = useRef(null)
    const parent_three = useRef(null)

    useEffect(() => {
        parent_one.current && autoAnimate(parent_one.current)
    }, [parent_one])

    useEffect(() => {
        parent_two.current && autoAnimate(parent_two.current)
    }, [parent_two])

    useEffect(() => {
        parent_three.current && autoAnimate(parent_three.current)
    }, [parent_three])

  return (
    <>
    <div className='mb-10 py-4'>
        <div className='container px-4 sm:px-0 mx-auto grid grid-cols-2 sm:grid-cols-3'>
            <div className='hidden sm:flex items-center opacity-50 select-none'>
                <Dot />
                <p className='uppercase font-medium'>Studio in Antwerp</p>
            </div>
            <div className='flex items-center sm:justify-center'>
                <Link href="/"><p className='text-emerald-900 uppercase kyiv sm:text-center leading-none text-lg'>The<br></br>NailBar</p></Link>
            </div>
            <div className='flex items-center justify-end gap-4'>
                <Link href="https://www.instagram.com/nailbar_antwerp/" target="_blank" className='uppercase border-b border-black leading-relaxed'>Instagram</Link>
            </div>
        </div>
    </div>

    <div className='hidden min-h-fit md:grid grid-rows-3'>
        <div className='flex justify-start'><h1 className="scotch text-[50vw] sm:text-[22vw] leading-none from-emerald-800 to-emerald-950 bg-clip-text text-transparent bg-gradient-to-br">Th<span className='italic'>e</span></h1></div>
        <div className='-translate-y-10 md:-translate-y-20 mx-auto w-fit relative'>
            <div className='hidden md:block absolute right-0 top-0 translate-x-full -translate-y-1/2 w-[200px] h-[300px] bg-emerald-900/70 shadow-lg'>
                <div className='h-full w-full border-2 border-[#fffbeb]'>
                    <Image className='object-cover h-full w-full' alt="" src="https://i0.wp.com/imerikamarie.com/wp-content/uploads/2022/06/aestheticnails1.png?w=1000&ssl=1" width={200} height={300} />
                </div>
            </div>
            <div className='hidden md:block absolute right-0 top-0 translate-x-full -translate-y-1/2 w-[200px] h-[300px] bg-emerald-900/70 shadow-lg'>
                <div className='rotate-[10deg] h-full w-full border-2 border-[#fffbeb]'>
                    <Image className='object-cover h-full w-full' alt="" src="https://i0.wp.com/imerikamarie.com/wp-content/uploads/2022/06/summernails1.png?w=1000&ssl=1" width={200} height={300}/>
                </div>
            </div>
        <h1 className="scotch italic text-[50vw] sm:text-[22vw] leading-none from-emerald-900 to-emerald-950 bg-clip-text text-transparent bg-gradient-to-br">Nail</h1>
        </div>
        <div className='-translate-y-20 md:-translate-y-40 flex justify-end relative'>
            <h1 className="scotch text-[50vw] sm:text-[22vw] leading-none from-emerald-900 to-[#011a14] bg-clip-text text-transparent bg-gradient-to-br">B<span className='italic'>a</span>r</h1>
        
                <div className='hidden sm:block row-start-2 absolute left-10 top-1/2 -translate-y-1/2'>
                    <Link href="/afspraak">
                    <button className='group uppercase border border-black rounded-full px-10 py-6 relative w-[200px] h-[200px] leading-none hover:leading-normal hover:bg-black hover:text-white duration-300 outline-offset-0 hover:outline-offset-8 outline outline-transparent hover:outline-black'>
                        <MoveRight className='absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 group-hover:translate-x-4 group-hover:opacity-0 duration-500' strokeWidth={1} />
                        Maak een afspraak
                    </button>
                    </Link>
            </div>
        </div>
        
       
    </div>

    <div className='md:hidden min-h-[100dvh] mb-20 flex flex-col items-center gap-4'>
        <p className='text-green-950 text-9xl scotch-display text-center'>Th<span className='italic'>e</span><br></br>N<span className='italic'>ai</span>l</p>
        <div className='w-full flex justify-center relative'>
            <div className='h-[230px]'></div>
            <div className='z-10 absolute left-1/2 -translate-x-1/2 w-1/2 h-[230px] bg-red-50'><Image src="https://i0.wp.com/imerikamarie.com/wp-content/uploads/2022/06/aestheticnails1.png?w=1000&ssl=1" className='h-full w-full object-cover' alt="" width={150} height={200} /></div>
                  <div className='absolute left-1/2 -translate-x-1/2 rotate-[10deg] w-1/2 h-[230px] bg-red-50'><Image src="https://i0.wp.com/imerikamarie.com/wp-content/uploads/2022/06/summernails1.png?w=1000&ssl=1" className='h-full w-full object-cover' alt="" width={150} height={200} /></div>
            <div className='absolute left-1/2 -translate-x-1/2 rotate-[-10deg] w-1/2 h-[230px] bg-red-50'><Image src="https://i0.wp.com/imerikamarie.com/wp-content/uploads/2022/06/aestheticnails1.png?w=1000&ssl=1" className='h-full w-full object-cover' alt="" width={150} height={200} /></div>
        </div>
        <p className='text-green-950 text-9xl scotch-display'>B<span className='italic'>a</span>r</p>

        <button className='group uppercase border border-black rounded-full px-10 py-6 relative w-[160x] max-w-[160px] max-h-[160px] min-h-[160px] h-[160x] leading-none hover:leading-normal hover:bg-black hover:text-white duration-300 outline-offset-0 hover:outline-offset-8 outline outline-transparent hover:outline-black'>
            <MoveRight className='absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 group-hover:translate-x-4 group-hover:opacity-0 duration-500' strokeWidth={1} />
            Maak een afspraak
        </button>
    </div>

    <div className='px-4 sm:px-0 container mx-auto'>
        <div className='flex mb-10 sm:mb-20 scotch-display'>
            <h2 className='hidden sm:block text-green-950 col-span-full sm:text-7xl uppercase tracking-widest leading-none'>Een beetje meer<br></br><span className='pl-60'>over mezelf</span></h2>
            <h2 className='sm:hidden text-green-950 col-span-full sm:text-7xl uppercase tracking-widest leading-none'>Een beetje meer over mezelf</h2>
        </div>
        <div className='grid sm:grid-cols-2 space-y-10'>
            
            <div className='flex flex-col gap-4 col-span-full'><Fade>
                <p className='text-8xl opacity-20 scotch-display'>01</p>
                <p className='text-4xl scotch font-thin'>It all began as a dream</p>
                <p className='max-w-lg leading-relaxed opacity-50'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga nam rerum dolor veniam eaque. Nisi eveniet officia et optio pariatur dignissimos illum atque incidunt facilis! Quas tempore perspiciatis odit ducimus.</p>
            </Fade></div>
            
            
            <div className='flex flex-col gap-4 sm:col-start-2'><Fade>
                <p className='text-8xl opacity-20 scotch-display'>02</p>
                <p className='text-4xl scotch font-thin'>A professional training</p>
                <p className='max-w-lg leading-relaxed opacity-50'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga nam rerum dolor veniam eaque. Nisi eveniet officia et optio pariatur dignissimos illum atque incidunt facilis! Quas tempore perspiciatis odit ducimus.</p>
            </Fade></div>
            
            <div className='flex flex-col gap-4 col-span-full'><Fade>
                <p className='text-8xl opacity-20 scotch-display'>03</p>
                <p className='text-4xl scotch font-thin'>My first studio</p>
                <p className='max-w-lg leading-relaxed opacity-50'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga nam rerum dolor veniam eaque. Nisi eveniet officia et optio pariatur dignissimos illum atque incidunt facilis! Quas tempore perspiciatis odit ducimus.</p>
            </Fade></div>
            
        </div>
    </div>

    <Fade >
    <div className='w-screen mt-32'>
        <div className='container mx-auto grid sm:grid-cols-2 md:grid-cols-3 auto-rows-[200px] md:auto-rows-[300px] gap-10 md:gap-20 overflow-hidden'>
            <div><Image className='h-full w-full object-cover' src="https://images.squarespace-cdn.com/content/v1/632851b4c1c95808b97ec2d4/abd38cda-92e4-49f5-a459-b181d181984b/Bert+Demasure_LCIA+Marcelle+web21.jpg?format=2500w" alt="nailbar" width={400} height={400} /></div>
            <div><Image className='h-full w-full object-cover' src="https://images.squarespace-cdn.com/content/v1/632851b4c1c95808b97ec2d4/abd38cda-92e4-49f5-a459-b181d181984b/Bert+Demasure_LCIA+Marcelle+web21.jpg?format=2500w" alt="nailbar" width={400} height={400} /></div>
            <div><Image className='h-full w-full object-cover' src="https://images.squarespace-cdn.com/content/v1/632851b4c1c95808b97ec2d4/abd38cda-92e4-49f5-a459-b181d181984b/Bert+Demasure_LCIA+Marcelle+web21.jpg?format=2500w" alt="nailbar" width={400} height={400} /></div>
            <div><Image className='h-full w-full object-cover' src="https://images.squarespace-cdn.com/content/v1/632851b4c1c95808b97ec2d4/abd38cda-92e4-49f5-a459-b181d181984b/Bert+Demasure_LCIA+Marcelle+web21.jpg?format=2500w" alt="nailbar" width={400} height={400} /></div>
            <div><Image className='h-full w-full object-cover' src="https://images.squarespace-cdn.com/content/v1/632851b4c1c95808b97ec2d4/abd38cda-92e4-49f5-a459-b181d181984b/Bert+Demasure_LCIA+Marcelle+web21.jpg?format=2500w" alt="nailbar" width={400} height={400} /></div>
            <div><Image className='h-full w-full object-cover' src="https://images.squarespace-cdn.com/content/v1/632851b4c1c95808b97ec2d4/abd38cda-92e4-49f5-a459-b181d181984b/Bert+Demasure_LCIA+Marcelle+web21.jpg?format=2500w" alt="nailbar" width={400} height={400} /></div>
        </div>
    </div>
    </Fade>

    <div className='mt-32'>
        <div className='px-4 sm:px-0 container mx-auto mb-10'>
            <h2 className='text-green-950 scotch-display uppercase text-5xl sm:text-7xl text-right'>Bij mij</h2>
            <h2 className='text-green-950 scotch-display uppercase text-5xl sm:text-7xl text-right'>ben je in</h2>
            <h2 className='text-green-950 scotch-display uppercase text-5xl sm:text-7xl text-right'>goede handen</h2>
        </div>

        <div>
            {/* Hoofdstuk 1 */}
            <div ref={parent_one}>
                <div onClick={()=>{setshow_one(p=>!p)}} className='flex border-y border-black/20 w-full py-4 items-center justify-between cursor-pointer'>
                    <div className='flex items-center'>
                        <div className='text-xl sm:text-5xl uppercase scotch-display w-[50px] sm:w-[100px] flex justify-center items-center opacity-20'><p>01</p></div>
                        <div className='text-green-950 text-xl sm:text-5xl uppercase scotch-display flex items-center'><p>Gellak <span className='italic'>&</span> Extras</p></div>
                    </div>
                    <div className='flex items-center'>
                        <CornerRightDown className={`${show_one ? 'rotate-90' : 'rotate-0'} w-5 h-5 sm:w-10 sm:h-10 duration-300`} strokeWidth={1}/>
                        <div className='md:w-[100px]'></div>
                    </div>
                </div>
                {show_one && <>
                <div className='flex w-full border-b border-black/20 py-4'>
                    <div className='w-[50px] sm:w-[100px]'></div>
                    <div>
                        <p className='uppercase scotch text-lg sm:text-2xl'>Gellak</p>
                        <div className='flex gap-8'>
                            <div className='flex flex-col'><p className='opacity-50'>Duur</p><p>2 uur</p></div>
                            <div className='flex flex-col'><p className='opacity-50'>Prijs</p><p>25 EUR</p></div>
                        </div>
                    </div>
                </div>
                <div className='flex w-full border-b border-black/20 py-4'>
                    <div className='w-[50px] sm:w-[100px]'></div>
                    <div>
                        <p className='uppercase scotch text-lg sm:text-2xl'>Gellak met versteviging</p>
                        <div className='flex gap-8'>
                            <div className='flex flex-col'><p className='opacity-50'>Duur</p><p>2 uur</p></div>
                            <div className='flex flex-col'><p className='opacity-50'>Prijs</p><p>30 EUR</p></div>
                        </div>
                    </div>
                </div>
                <div className='flex w-full border-b border-black/20 py-4'>
                    <div className='w-[50px] sm:w-[100px]'></div>
                    <div>
                        <p className='uppercase scotch text-lg sm:text-2xl'>Herstelling binnen 5 dagen</p>
                        <div className='flex gap-8'>
                            <div className='flex flex-col'><p className='opacity-50'>Prijs</p><p>Gratis</p></div>
                        </div>
                    </div>
                </div>
                <div className='flex w-full border-b border-black/20 py-4'>
                    <div className='w-[50px] sm:w-[100px]'></div>
                    <div>
                        <p className='uppercase scotch text-lg sm:text-2xl'>Herstelling na 5 dagen</p>
                        <div className='flex gap-8'>
                            <div className='flex flex-col'><p className='opacity-50'>Prijs</p><p>10 EUR</p></div>
                        </div>
                    </div>
                </div>
                </>}
            </div>

            {/* Hoofdstuk 2 */}
            <div ref={parent_two}>
                <div onClick={() => { setshow_two(p => !p) }} className='flex border-y border-black/20 w-full py-4 items-center justify-between cursor-pointer'>
                    <div className='flex items-center'>
                        <div className='text-xl sm:text-5xl uppercase scotch-display w-[50px] sm:w-[100px] flex justify-center items-center opacity-20'><p>02</p></div>
                        <div className='text-green-950 text-xl sm:text-5xl uppercase scotch-display flex items-center'><p>Gelnagels <span className='italic'>&</span> Biab <span className='text-lg'>(bijwerking)</span></p></div>
                    </div>
                    <div className='flex items-center'>
                        <CornerRightDown className={`${show_two ? 'rotate-90' : 'rotate-0'} w-5 h-5 sm:w-10 sm:h-10 duration-300`} strokeWidth={1} />
                        <div className='md:w-[100px]'></div>
                    </div>
                </div>

                {show_two && <>
                <div className='flex w-full border-b border-black/20 py-4'>
                    <div className='w-[50px] sm:w-[100px]'></div>
                    <div>
                        <p className='uppercase scotch text-lg sm:text-2xl'>Kleur / naturel</p>
                        <div className='flex gap-8'>
                            <div className='flex flex-col'><p className='opacity-50'>Duur</p><p>2 uur</p></div>
                            <div className='flex flex-col'><p className='opacity-50'>Prijs</p><p>35 EUR</p></div>
                        </div>
                    </div>
                </div>
                <div className='flex w-full border-b border-black/20 py-4'>
                    <div className='w-[50px] sm:w-[100px]'></div>
                    <div>
                        <p className='uppercase scotch text-lg sm:text-2xl'>French</p>
                        <div className='flex gap-8'>
                            <div className='flex flex-col'><p className='opacity-50'>Duur</p><p>2 uur</p></div>
                            <div className='flex flex-col'><p className='opacity-50'>Prijs</p><p>35 EUR</p></div>
                        </div>
                    </div>
                </div>
                <div className='flex w-full border-b border-black/20 py-4'>
                    <div className='w-[50px] sm:w-[100px]'></div>
                    <div>
                        <p className='uppercase scotch text-lg sm:text-2xl'>Babyboom</p>
                        <div className='flex gap-8'>
                            <div className='flex flex-col'><p className='opacity-50'>Duur</p><p>2 uur</p></div>
                            <div className='flex flex-col'><p className='opacity-50'>Prijs</p><p>35 EUR</p></div>
                        </div>
                    </div>
                </div>
                <div className='flex w-full border-b border-black/20 py-4'>
                    <div className='w-[50px] sm:w-[100px]'></div>
                    <div>
                        <p className='uppercase scotch text-lg sm:text-2xl'>Met verlenging</p>
                        <div className='flex gap-8'>
                            <div className='flex flex-col'><p className='opacity-50'>Duur</p><p>2 uur</p></div>
                            <div className='flex flex-col'><p className='opacity-50'>Prijs</p><p>39 EUR</p></div>
                        </div>
                    </div>
                </div>
                <div className='flex w-full border-b border-black/20 py-4'>
                    <div className='w-[50px] sm:w-[100px]'></div>
                    <div>
                        <p className='uppercase scotch text-lg sm:text-2xl'>Nailart</p>
                        <div className='flex gap-8'>
                            <div className='flex flex-col'><p className='opacity-50'>Prijs</p><p>+1 EUR / nagel</p></div>
                        </div>
                    </div>
                </div>
                </>}
            </div>

            {/* Hoofdstuk 3 */}
            <div ref={parent_three}>
                <div onClick={() => { setshow_three(p => !p) }} className='flex border-y border-black/20 w-full py-4 items-center justify-between cursor-pointer'>
                    <div className='flex items-center'>
                        <div className='text-xl sm:text-5xl uppercase scotch-display w-[50px] sm:w-[100px] flex justify-center items-center opacity-20'><p>03</p></div>
                        <div className='text-green-950 text-xl sm:text-5xl uppercase scotch-display flex items-center'><p>Gelnagels <span className='italic'>&</span> Biab <span className='text-lg'>(nieuwe set)</span></p></div>
                    </div>
                    <div className='flex items-center'>
                        <CornerRightDown className={`${show_three ? 'rotate-90' : 'rotate-0'} w-5 h-5 sm:w-10 sm:h-10 duration-300`} strokeWidth={1} />
                        <div className='md:w-[100px]'></div>
                    </div>
                </div>
                {show_three && <>
                <div className='flex w-full border-b border-black/20 py-4'>
                    <div className='w-[50px] sm:w-[100px]'></div>
                    <div>
                        <p className='uppercase scotch text-lg sm:text-2xl'>Kleur / naturel</p>
                        <div className='flex gap-8'>
                            <div className='flex flex-col'><p className='opacity-50'>Duur</p><p>2 uur</p></div>
                            <div className='flex flex-col'><p className='opacity-50'>Prijs</p><p>39 EUR</p></div>
                        </div>
                    </div>
                </div>
                <div className='flex w-full border-b border-black/20 py-4'>
                    <div className='w-[50px] sm:w-[100px]'></div>
                    <div>
                        <p className='uppercase scotch text-lg sm:text-2xl'>French</p>
                        <div className='flex gap-8'>
                            <div className='flex flex-col'><p className='opacity-50'>Duur</p><p>2 uur</p></div>
                            <div className='flex flex-col'><p className='opacity-50'>Prijs</p><p>39 EUR</p></div>
                        </div>
                    </div>
                </div>
                <div className='flex w-full border-b border-black/20 py-4'>
                    <div className='w-[50px] sm:w-[100px]'></div>
                    <div>
                        <p className='uppercase scotch text-lg sm:text-2xl'>Babyboom</p>
                        <div className='flex gap-8'>
                            <div className='flex flex-col'><p className='opacity-50'>Duur</p><p>2 uur</p></div>
                            <div className='flex flex-col'><p className='opacity-50'>Prijs</p><p>39 EUR</p></div>
                        </div>
                    </div>
                </div>
                <div className='flex w-full border-b border-black/20 py-4'>
                    <div className='w-[50px] sm:w-[100px]'></div>
                    <div>
                        <p className='uppercase scotch text-lg sm:text-2xl'>Met verlenging</p>
                        <div className='flex gap-8'>
                            <div className='flex flex-col'><p className='opacity-50'>Duur</p><p>2 uur</p></div>
                            <div className='flex flex-col'><p className='opacity-50'>Prijs</p><p>43 EUR</p></div>
                        </div>
                    </div>
                </div>
                <div className='flex w-full border-b border-black/20 py-4'>
                    <div className='w-[50px] sm:w-[100px]'></div>
                    <div>
                        <p className='uppercase scotch text-lg sm:text-2xl'>Nailart</p>
                        <div className='flex gap-8'>
                            <div className='flex flex-col'><p className='opacity-50'>Prijs</p><p>+1 EUR / nagel</p></div>
                        </div>
                    </div>
                </div>
                </>}
            </div>
        </div>
    </div>

    <div className='mt-64'>
        <Fade>
        <div className='mx-auto container'>
            <div className='hidden mx-auto md:grid md:grid-cols-2 max-w-4xl space-y-2 text-green-950'>
                <h2 className='whitespace-nowrap scotch-display text-2xl md:text-7xl uppercase col-span-full'>Ben je overtuigt mij</h2>
                <h2 className='whitespace-nowrap scotch-display text-2xl md:text-7xl uppercase col-span-full text-right'>te vertrouwen</h2>
                <h2 className='whitespace-nowrap scotch-display text-2xl md:text-7xl uppercase text-right translate-x-10'>met jouw</h2><i></i>
                <h2 className='whitespace-nowrap scotch-display text-2xl md:text-7xl uppercase col-start-2 -translate-x-10'>beauty?</h2>
            </div>
            <h2 className='scotch-display uppercase text-2xl text-center md:hidden'>Ben je overtuigt mij te vertrouwen met jouw beauty?</h2>
            
            <p className='mt-10 max-w-xl text-center mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio repellat non doloribus molestiae reiciendis nobis modi ducimus iure quae doloremque optio temporibus impedit beatae dicta ab perspiciatis, nesciunt, aut accusantium?</p>
            
            <div className='flex justify-center mt-10'>
                <Link href="/afspraak"><button className='group uppercase border border-black rounded-full px-10 py-6 relative w-[200px] h-[200px] leading-none hover:leading-normal hover:bg-black hover:text-white duration-300 outline-offset-0 hover:outline-offset-8 outline outline-transparent hover:outline-black'>
                    <MoveRight className='absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 group-hover:translate-x-4 group-hover:opacity-0 duration-500' strokeWidth={1} />
                    Maak een afspraak
                </button></Link>
            </div>
        </div>
        </Fade >
    </div>

    <div className='mt-32 border-t border-black/20 py-16'>
        <div className='container mx-auto grid grid-cols-3 opacity-20 text-sm'>
            <p>Copyright The Nailbbar</p>
            <div className='flex justify-center'><p className='underline cursor-pointer'>Afspraak maken</p></div>
            <div className='flex justify-end'><Heart className='w-4' /></div>
        </div>
    </div>
    </>
  )
}

export default Page