import DfcSplashPage from "@/components/DfcSplashPage";
import MainContent from "@/components/MainContent";
import { loadGatoVmatchData, OpportunitiesData } from "./gatoData";
import Opportunities from "./Opportunities";


async function getServerData():Promise<OpportunitiesData>{
    'use server'
    return await loadGatoVmatchData();
}

export default async function Home() {

    const cssH2 = "text-4xl md:text-6xl font-bold";
    const cssH3 = "text-2xl md:text-4xl font-bold";
    const serverData = await getServerData();

    return (
        <DfcSplashPage splashRoute="charities">
            <Opportunities data={serverData} />
            <MainContent />
        </DfcSplashPage>

    );
}

