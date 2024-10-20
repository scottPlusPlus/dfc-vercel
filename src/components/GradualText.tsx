"use client";

import React, { useState, useEffect } from 'react';

interface GradualTextProps {
    text: string;
    start: boolean;
    charactersPerSecond?: number; // Optional prop to control the typing speed
    updateInterval?: number;
}

export default function GradualText(props: GradualTextProps) {
    const cps = props.charactersPerSecond ?? 16;
    const intrvl = props.updateInterval ?? 100;
    const [displayedText, setDisplayedText] = useState('');
    const [startTime, setStartTime] = useState(-1);
  

    function startAnim(){
        const intervalId = setInterval(() => {
            const dur = new Date().getTime() - startTime;
            console.log()
            const characters = Math.floor(dur / 1000 * cps);
            setDisplayedText(props.text.slice(0, characters));
            if (characters > props.text.length) {
                clearInterval(intervalId);
            }
        }, intrvl);
        return () => clearInterval(intervalId);
    }

    useEffect(() => {
        if (!props.start) {
            return;
        }
        if (startTime < 0){
            setStartTime(new Date().getTime());
        } else {
            startAnim();
        }
 // Clean up the interval on component unmount
    }, [intrvl, cps, props.start, props.text, startTime]);

    return <div className="text-lg font-mono">{displayedText}</div>;
};
