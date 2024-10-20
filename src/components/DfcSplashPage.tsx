import { CenterLimitWidth } from "@/components/CenterLimitWidth";
import SplashNav from "@/components/SplashNav";
import Footer from "@/components/Footer";
import { SplashRoute } from "@/lib/types";

interface DfcSplashProps {
    splashRoute: SplashRoute
    children?: React.ReactNode,
}

export default function DfcSplashPage(props: DfcSplashProps) {

    return (

        <main className="flex flex-col items-center bg-[#0f0f0f] text-white">
            <SplashNav splashRoute={props.splashRoute}></SplashNav>
            <CenterLimitWidth>
                {props.children}
                <Footer />
            </CenterLimitWidth>
        </main>
    );
}

