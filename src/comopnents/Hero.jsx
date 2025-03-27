"use client"
import React, { useEffect } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CHART_LIST } from '@/utils/helper';
import Image from 'next/image';
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    useEffect(() => {
        const mm = gsap.matchMedia();
        const tl = gsap.timeline();
        mm.add("(min-width: 1023.98px)", () => {
            ScrollTrigger.create({
                trigger: "#intro",
                start: "top top",
                end: "600%",
                pin: true,
                animation: tl,
                scrub: 2,
            });
            tl.fromTo(".chart-0", { opacity: 1 }, { opacity: 0, scale: 0.99, display: "none", position: "absolute" })
                .fromTo(".chart-1", { opacity: 0.4, scale: 0.99 }, { opacity: 1, duration: 1, display: "flex", scale: 1 }, "0.1")
                .fromTo(".chart-1", { opacity: 1 }, { opacity: 0, duration: 1, scale: 0.99, display: "none", position: "absolute" })
                .fromTo(".chart-2", { opacity: 0.4, scale: 0.99 }, { opacity: 1, duration: 1, display: "flex", scale: 1 }, "1.2")
                .fromTo(".chart-2", { opacity: 1 }, { opacity: 0, duration: 1, scale: 0.99, display: "none", position: "absolute" })
                .fromTo(".chart-3", { opacity: 0.4, scale: 0.99 }, { opacity: 1, duration: 1, display: "flex", scale: 1 }, "2.3");
        })
    }, []);
    return (
        <div className='min-h-screen flex items-center justify-center max-lg:pt-[50px] lg:py-10 max-xl:px-4 max-lg:pb-[50px]' id="intro">
            <div className="flex items-center justify-center container max-w-[1145px] relative">
                <div className="flex items-center justify-center container flex-col max-lg:gap-16 max-sm:gap-12">
                    {CHART_LIST.map((item, index) => (
                        <div key={index} className={` chart-${index} flex max-lg:flex-col items-center justify-center gap-4 ${index === 0 ? "flex" : "lg:hidden flex"}`}>
                            <div className={`px-[26px] py-4 flex flex-col rounded-2xl lg:max-w-[519px] h-full lg:h-[660px] xl:h-[674px] ${index === 0 ? "bg-[#6FFFA8]" : index === 1 ? "bg-[#6621E9] text-white" : index === 2 ? "bg-[#FFABC7] " : "bg-[#026070] text-white"} `}>
                                <p className='lg:text-[26px] text-lg leading-[130%] font-semibold'>{item.title} </p>
                                <div className="lg:py-[26px] md:py-3 py-2 lg:gap-2 md:gap-1 gap-0.99 flex flex-col leading-[150%] lg:text-base md:text-sm text-xs ">
                                    <p>{item.descriptionOne}</p>
                                    <p>{item.descriptionTwo}</p>
                                    <p>{item.descriptionThree}</p>
                                    <p>{item.descriptionFour}</p>
                                </div>
                                <p className='lg:text-[26px] leading-[130%] text-lg font-semibold'>{item.titleTwo} </p>
                                <div className="lg:pt-[26px] md:pt-3 pt-2 lg:gap-2 md:gap-1 gap-0.99 flex flex-col leading-[150%] lg:text-base text-xs ">
                                    <p>{item.descriptionFive}</p>
                                    <p>{item.descriptionSix}</p>
                                    <p>{item.descriptionSeven}</p>
                                </div>
                            </div>
                            <div className="w-full">
                                <Image className='xl:h-[675px] lg:h-[660px] w-full lg:w-[604px] rounded-2xl' src={item.image} height={675} width={604} alt='image' />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    );
}

export default Hero;