import { Attribution } from "./Attribution";
import { CenterLimitWidth } from "./CenterLimitWidth";
import FullImageHero from "./FullImageHero";

type SplashRoute = "main" | "devs" | "charities";

export type Props = {
    splashRoute: SplashRoute
}

export default function SplashNav(props: Props) {
    let imgSrc = getImage(props.splashRoute);

    return (
        <>
            <FullImageHero imageSrc={imgSrc} gradientFromColor="from-[#0f0f0f]" >
                <div
                    className="absolute top-5 right-5">
                    <Attribution imageCredit={(<a target="_blank" href="https://unsplash.com/photos/green-trees-beside-bridge-Uf6Ej4w6_sE">img by Galen Crout</a>)} />
                </div>
                <div className="absolute bottom-4 z-10">
                    <CenterLimitWidth>
                        <div className="w-full mx-auto">
                            <div className="text-left pb-8 w-full mr-auto">
                                <h1 className="text-6xl md:text-8xl font-bold">{"<💚/>"}<br></br>devs for charity </h1>
                            </div></div>
                    </CenterLimitWidth>
                </div>
            </FullImageHero>
            <div className="relative h-screen"></div>
        </>
    )
}

function getImage(opt: SplashRoute): string {
    if (opt == "main") {
        return "/img/dfc-splash-main.jpg";
    }
    if (opt == "devs") {
        return "/img/dfc-splash-devs.jpg";
    }
    return "/img/dfc-splash-charity.jpg";
}