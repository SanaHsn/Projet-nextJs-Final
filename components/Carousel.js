import React from "react";
import styles from "../src/styles/Carousel.module.css";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from 'next/image';
import img1 from '../public/imgs/hero.png';
import img2 from '../public/imgs/hero2.png';
import img3 from '../public/imgs/hero3.png';
import img4 from '../public/imgs/hero4.png';

export default function carousel() {
    return (
    <div className={styles.carousel}>
        <Carousel>
        <Carousel.Item interval={6000}>
            <div className={styles.carou}>
            <div className={styles.gauche}>
                <p>LET'S MAKE THE BEST INVESTMENT</p>
                <h1>
                There Is No Friend AS <br />
                Loyal As A Book
                </h1>
                <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis
                deserunt animi odit at blanditiis molestias fugiat vero iure
                ducimus cumque.
                </p>
                <button>
                <span className={styles.spanCarousel}> Show now</span>
                </button>
            </div>
            <div className={styles.droite}>
                <Image src={img1} width={400} height={500}></Image>
            </div>
            </div>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
            <div className={styles.carou}>
            <div className={styles.gauche}>
                <p>LET'S MAKE THE BEST INVESTMENT</p>
                <h1>
                There Is No Friend AS <br />
                Loyal As A Book
                </h1>
                <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis
                deserunt animi odit at blanditiis molestias fugiat vero iure
                ducimus cumque.
                </p>
                <button>
                <span className={styles.spanCarousel}> Show now</span>
                </button>
            </div>
            <div className={styles.droite}>
                <Image src={img2} width={400} height={500}></Image>
            </div>
            </div>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
            <div className={styles.carou}>
            <div className={styles.gauche}>
                <p>LET'S MAKE THE BEST INVESTMENT</p>
                <h1>
                There Is No Friend AS <br />
                Loyal As A Book
                </h1>
                <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis
                deserunt animi odit at blanditiis molestias fugiat vero iure
                ducimus cumque.
                </p>
                <button>
                <span className={styles.spanCarousel}> Show now</span>
                </button>
            </div>
            <div className={styles.droite}>
                <Image src={img3} width={350} height={400}></Image>
            </div>
            </div>
        </Carousel.Item>
        <Carousel.Item>
            <div className={styles.carou}>
            <div className={styles.gauche}>
                <p>LET'S MAKE THE BEST INVESTMENT</p>
                <h1>
                There Is No Friend AS <br />
                Loyal As A Book
                </h1>
                <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis
                deserunt animi odit at blanditiis molestias fugiat vero iure
                ducimus cumque.
                </p>
                <button>
                <span className={styles.spanCarousel}> Show now</span>
                </button>
            </div>
            <div className={styles.droite}>
                <Image src={img4} width={350} height={400}></Image>
            </div>
            </div>
        </Carousel.Item>
        </Carousel>
    </div>
    );
    }




// import Image from 'next/image';
// // import style from '../src/styles/globals.css'
// import img1 from '../public/imgs/hero.png';
// import img2 from '../public/imgs/hero2.png';
// import img3 from '../public/imgs/hero3.png';
// import img4 from '../public/imgs/hero4.png';



// import "react-responsive-carousel/lib/styles/carousel.min.css";

// import React, { Component } from 'react';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
  
// export default class NextJsCarousel extends Component {
//     render() {
//         return (
//             <div id="default-carousel" class=" carouse  w-full bg-gray-300/30 py-[200px]  px-[200px]  relative" data-carousel="slide">

//             <div class="relative overflow-hidden  rounded-lg md:h-96">

//                 <div class="hidden duration-700 ease-in-out" data-carousel-item>
//                     <div className='flex w-full justify-between pr-20 shrink-0'>
//                         <div className='pt-[200px] w-[50%]'>
//                             <p className='uppercase tracking-widest font-bold text-vr mb-2'>Let's make the best investment</p>
//                             <p className='font-titre font-semibold text-5xl text-bl tracking-wider mb-6'>There Is No Friend As <br /> Loyal As  A Book</p>
//                             <p className='p-2 text-gray-500 text-xl pb-14'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad harum quibusdam, assumenda quia explicabo.</p>
//                             <button className='bg-vr px-7 py-3 text-black rounded'>Shop now</button>
//                         </div>
//                         <div>
//                             <Image src={img1} className='w-[400px] h-[700px]' alt="" />
//                         </div>
//                     </div>
//                 </div>

//                 <div class="hidden duration-700 ease-in-out" data-carousel-item>
//                 <div className='flex w-full justify-between pr-20 shrink-0'>
//                         <div className='pt-[100px] w-[50%]'>
//                             <p className='uppercase tracking-widest font-bold text-vr mb-2'>Let's make the best investment</p>
//                             <p className='font-titre font-semibold text-5xl text-bl tracking-wider mb-6'>There Is No Friend As <br /> Loyal As  A Book</p>
//                             <p className='p-2 text-gray-500 text-xl pb-14'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad harum quibusdam, assumenda quia explicabo.</p>
//                             <button className='bg-vr px-7 py-3 text-white rounded'>Shop now</button>
//                         </div>
//                         <div>
//                             <Image src={img2} className='w-[400px] h-[700px]' alt="" />
//                         </div>
//                     </div>
//                 </div>

//                 <div class="hidden duration-700 ease-in-out" data-carousel-item>
//                 <div className='flex w-full justify-between pr-20 shrink-0'>
//                         <div className='pt-[100px] w-[50%]'>
//                             <p className='uppercase tracking-widest font-bold text-vr mb-2'>Let's make the best investment</p>
//                             <p className='font-titre font-semibold text-5xl text-bl tracking-wider mb-6'>There Is No Friend As <br /> Loyal As  A Book</p>
//                             <p className='p-2 text-gray-500 text-xl pb-14'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad harum quibusdam, assumenda quia explicabo.</p>
//                             <button className='bg-vr px-7 py-3 text-white rounded'>Shop now</button>
//                         </div>
//                         <div>
//                             <Image src={img3} className='w-[400px] h-[700px]' alt="" />
//                         </div>
//                     </div>
//                 </div>

//                 <div class="hidden duration-700 ease-in-out" data-carousel-item>
//                 <div className='flex w-full justify-between pr-20 shrink-0'>
//                         <div className='pt-[100px] w-[50%]'>
//                             <p className='uppercase tracking-widest font-bold text-vr mb-2'>Let's make the best investment</p>
//                             <p className='font-titre font-semibold text-5xl text-bl tracking-wider mb-6'>There Is No Friend As <br /> Loyal As  A Book</p>
//                             <p className='p-2 text-gray-500 text-xl pb-14'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad harum quibusdam, assumenda quia explicabo.</p>
//                             <button className='bg-vr px-7 py-3 text-white rounded'>Shop now</button>
//                         </div>
//                         <div>
//                             <Image src={img4} className='w-[400px] h-[700px]' alt="" />
//                         </div>
//                     </div>
//                 </div>

                
//             </div>

//             <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
//                 <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
//                 <button  type="button" class="w-3 h-3 rounded-full bg-green-700" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
//                 <button type="button" class="w-3 h-3 rounded-full bg-green-700" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
//                 <button type="button" class="w-3 h-3 rounded-full bg-green-700" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
//                 <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
//             </div>

//             <button type="button" class="absolute b_un top-0 left-0 z-30 flex items-center duration-500 -translate-x-full opacity-0  justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
//                 <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10  bg-vr/60 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//                     <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
//                     <span class="sr-only">Previous</span>
//                 </span>
//             </button>
//             <button type="button" class="absolute duration-500 translate-x-full opacity-0  b_deux top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
//                 <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-vr/60 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//                     <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
//                     <span class="sr-only">Next</span>
//                 </span>
//             </button>
//         </div>
//         );
//     }
// };
