"use client";

import { useState } from "react";

interface AttributionProps {
    imageCredit: React.ReactNode;
}


export function Attribution(props: AttributionProps) {

    const [showCredit, setShowCredit] = useState(false);

    return (

        <div className="text-white cursor-pointer"
            onMouseEnter={() => setShowCredit(true)}
            onMouseLeave={() => setShowCredit(false)}
            onClick={() => setShowCredit(!showCredit)}
        >
            <div>
                <span className='text-s'>
                    {showCredit ? (
                        <span>{props.imageCredit}</span>
                    ) : (
                        <span>(i)</span>
                    )}
                </span>
            </div>
        </div>
    )
}