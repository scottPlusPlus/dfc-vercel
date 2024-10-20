import GrainTexture from "./GrainTexture";

interface FullImageHeroProps {
    imageSrc: string;
    gradientFromColor: string;
    children?: React.ReactNode,
}

export default function FullHeroImage(props: FullImageHeroProps) {
    return (
        <div className="absolute w-full h-screen overflow-hidden flex items-center justify-center box-border">
            <img
                src={props.imageSrc}
                alt="Full screen"
                className="absolute w-screen h-screen object-cover"
            />
            <GrainTexture/>
            <div className={`absolute bg-gradient-to-t ${props.gradientFromColor} via-transparent to-transparent h-full w-full`}/>
            {props.children}
        </div>
    );
}
