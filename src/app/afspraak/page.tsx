"use client"
import { Dot } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { InlineWidget } from "react-calendly";

const AfspraakPage = () => {
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

          
          <InlineWidget url="https://calendly.com/robinyze/30min" />
    </>
  )
}

export default AfspraakPage