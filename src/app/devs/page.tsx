import DfcSplashPage from "@/components/DfcSplashPage";
import MainContent from "@/components/MainContent";

export default function Home() {

    const cssH2 = "text-4xl md:text-6xl font-bold";
    const cssH3 = "text-2xl md:text-4xl font-bold";

    return (
        <DfcSplashPage splashRoute="devs">
            <MainContent />
        </DfcSplashPage>
    );
}

