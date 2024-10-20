"use client"

import GradualText from "./GradualText";
import Observer from "./Observer";
import { useState } from "react";

interface GradualTextOnViewProps {
    text: string;
    charactersPerSecond?: number;
    updateInterval?: number;
}

export default function GradualTextOnView(props: GradualTextOnViewProps) {

    const [start, setStart] = useState(false);

    return (
        <>
            <Observer onFirstObserve={()=>setStart(true)} />
            <GradualText text={props.text} start={start} />
        </>
    )
}