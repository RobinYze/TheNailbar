// import type { Metadata } from 'next'
// import { Inter, Josefin_Sans } from 'next/font/google'
// import './globals.css'
// import Head from 'next/head'
// import Link from 'next/link'

// const inter = Inter({ subsets: ['latin'] })

// export const josefin = Josefin_Sans({
//   subsets: ['latin'],
//   display: 'swap',
// })

// export const metadata: Metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en">
//       <body className={`${inter.className}`}>
//         <div className='w-full fixed flex justify-center top-0 z-10'>
//           <div className='max-w-5xl grid grid-cols-3 z-10 mx-auto p-4'>
//             <Link href="/"><div className='text-white uppercase text-3xl font-semibold'>THE NAILBAR</div></Link>
            
//             <ul className={`${josefin.className} flex justify-center items-center gap-8 text-white`}>
//               <li className='relative after:content-[""] after:absolute after:h-px after:w-0 after:bottom-0 after:left-0 after:bg-white hover:after:w-full after:duration-300'><Link href="over-mij">Over mij</Link></li>
//               <li className='relative after:content-[""] after:absolute after:h-px after:w-0 after:bottom-0 after:left-0 after:bg-white hover:after:w-full after:duration-300'><Link href="service">Service & Diensten</Link></li>
//               <li className='relative after:content-[""] after:absolute after:h-px after:w-0 after:bottom-0 after:left-0 after:bg-white hover:after:w-full after:duration-300'><Link href="prijslijst">Prijslijst</Link></li>
//             </ul>
            
//             <div className='flex justify-end'>
//               <button className={`${josefin.className} border rounded-full p-2 px-4 text-green border-[#46645C] hover:bg-[#46645C] hover:text-[#DD91A2] duration-300`}>Contacteren</button>
//             </div>
//           </div>
//         </div>
//         {children}
//       </body>
//     </html>
//   )
// }