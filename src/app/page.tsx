'use client'

import { motion } from "framer-motion";

import Image from 'next/image'
import Particles from '@/components/particles'
import { useState } from "react";

export default function Home() {
  const [position, setPosition] = useState({ x: 150, y: 150 })


  return (
    <>
      <main className='relative min-h-screen flex flex-col justify-center bg-slate-900 overflow-hidden background-animate'>
        <div className='w-full max-w-6xl mx-auto px-4 md:px-6 py-24'>
          <div className='text-center'>

            {/* Illustration #1 */}
            <div
              className='absolute top-0 left-0 rotate-180 -translate-x-3/4 -scale-x-100 blur-3xl opacity-70 pointer-events-none'
              aria-hidden='true'
            >
              <Image src='/shape.svg' className='max-w-none' width={852} height={582} alt='Illustration' />
            </div>

            {/* Illustration #2 */}
            <div
              className='absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 blur-3xl opacity-70 pointer-events-none'
              aria-hidden='true'
            >
              <Image src='/shape.svg' className='max-w-none' width={852} height={582} alt='Illustration' />
            </div>

            {/* Particles animation */}
            <Particles className='absolute inset-0 pointer-events-none' quantity={250} staticity={30} />

            <div className='relative'>
              <h1 className='inline-flex font-extrabold text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4'>
                Coming soon
              </h1>

            </div>
          </div>
          <motion.div
          // className="absolute mb-32 rounded-[99999px] left-0 right-0 w-[100vw] h-[100vw] blur-3xl bg-gradient-radial from-purple-200 via-purple-900"
          // animate={["initial"]}
          // whileHover={["grow"]}
          // variants={{
          //   grow: {
          //     scale: 1.1
          //   },
          //   rotate: {
          //     rotate: [null, -5, 5, 0],
          //     transition: {
          //       // delay,
          //       duration: 10
          //       // repeat: Infinity,
          //       // repeatDelay: 0.2,
          //       // repeatType: "reverse"
          //     }
          //   },
          //   initial: {
          //     // y: [-20, 20],
          //     rotate: 0,
          //     transition: {
          //       delay: 1,
          //       duration: 2,
          //       repeat: Infinity,
          //       repeatDelay: 0.2,
          //       repeatType: "reverse"
          //     }
          //   }
          // }}
          >
          </motion.div>
          {/* <div className="absolute m-auto bottom-12 translate-y-1/2 rounded-[99999px] blur-3xl opacity-80 left-0 right-0 w-[75vw] h-[50vw]  bg-gradient-radial from-purple-400 via-purple-900" ></div> */}
        </div>
      </main>
    </>
  )
}
