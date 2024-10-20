import { Attribution } from "./Attribution";
import { CenterLimitWidth } from "./CenterLimitWidth";
import FullImageHero from "./FullImageHero";

type SplashRoute = "main" | "devs" | "charities";

export type Props = {
    splashRoute: SplashRoute
}

export default function SplashNav(props: Props) {
    let imgSrc = getImage(props.splashRoute);

    /* eslint-disable react/no-unescaped-entities */
    const gradualText = "status: currently working on injesting articles to populate a knowledge graph";
    const cssH2 = "text-4xl md:text-6xl font-bold";
    const cssH3 = "text-2xl md:text-4xl font-bold";
    const cssText = "font-bold";
    const cssLink = "cursor-pointer"

    function mu(text: string): React.ReactNode {
        if (text == props.splashRoute) {
            return <u className="px-4">{text}</u>
        }
        return <span className="px-4">{text}</span>
    }

    //&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
    return (

        <>
            <FullImageHero imageSrc={imgSrc} gradientFromColor="from-[#0f0f0f]" >
                <div
                    className="absolute top-5 right-5">
                    <Attribution imageCredit={(<a href="https://unsplash.com/photos/green-trees-beside-bridge-Uf6Ej4w6_sE">img by Galen Crout</a>)} />
                </div>
            </FullImageHero>
            <div className="relative h-screen"></div>
            <div className="-mt-60 lg:-mt-80 z-10 w-full">
                <CenterLimitWidth>

                    <div className="w-full mx-auto">
                        <div className="text-left pb-8 w-full mr-auto">
                            <h1 className="text-6xl md:text-8xl font-bold pb-4">{"<💚/>"}<br></br>devs for charity </h1>
                            <h2 className={cssH2 + " pt-4"}>
                                <a href="/charity">{mu("charities")}</a>|
                                <a href="/">{mu("main")}</a>|
                                <a href="/devs">{mu("devs")}</a>
                            </h2>
                        </div>
                    </div>
                </CenterLimitWidth>
            </div>
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