"use client";

type Props = {
    children: React.ReactNode,
};

export function ClientWrap(props: Props) {

    return (
        <>{props.children}</>
    )
}
