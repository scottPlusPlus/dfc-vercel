"use client";

import { useEffect, useState } from "react";

export default function GrainTexture(){

    const [animVal, setAnimVal] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setAnimVal(Math.floor(Math.random()*200))

        }, 100);
        return () => clearInterval(intervalId); // Clean up the interval on component unmount
    }, []);


    const bgcss = `bg-repeat bg-[url('/img/noisy.svg')]`;
    const style = {
        backgroundPosition: `${animVal}px ${animVal}px`  // Adjust the offset as needed
      }

    return (
        <div className={bgcss + " absolute h-screen w-screen object-cover opacity-40"} style={style}></div>
    )
}