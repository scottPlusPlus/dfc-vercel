import DfcSplashPage from "@/components/DfcSplashPage";
import MainContent from "@/components/MainContent";
import Opportunities from "./charity/Opportunities";
import { loadGatoVmatchData, OpportunitiesData } from "./charity/gatoData";


async function getServerData():Promise<OpportunitiesData>{
    'use server'
    return await loadGatoVmatchData();
}

export default async function Home() {

    const serverData = await getServerData();
    
    return (
        <DfcSplashPage splashRoute="main">
            <Opportunities data={serverData} />
            <MainContent />
        </DfcSplashPage>
    );
}

