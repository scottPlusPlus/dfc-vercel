export interface OpportunityData {
    opportunityLink: string;
    summary: string;
    externalPage: string;
    title: string;
    image: string;
    twitter: string;
    skills: Array<string>;
    cause: string;
    commitment: string;
    date: string;
}

export interface OpportunitiesData {
    opportunities: Array<OpportunityData>;
    lastDate: string;
}

const NEXT_PUBLIC_GATO_URL = process.env.NEXT_PUBLIC_GATO_URL;
const NEXT_PUBLIC_GATO_PASSWORD = process.env.NEXT_PUBLIC_GATO_PASSWORD;

export async function loadGatoVmatchData(): Promise<OpportunitiesData> {
    console.log('loadGatoResources');
    ensureEnv();
    const url = new URL('/api/dfc/vmatch-opportunities', NEXT_PUBLIC_GATO_URL);
    try {
        const res = await fetch(url, { next: { revalidate: 1800 }, headers: { authorization: `Bearer ${NEXT_PUBLIC_GATO_PASSWORD}` } });
        console.log(`loadGatoResources - status = ${res.status}`);
        const json = await res.json();
        console.log(`loadGatoResources - got some json`);
        return json;
    } catch (err) {
        console.error('failed loading gato resources', err);
        throw err;
    }
}

const ensureEnv = () => {
    if (!NEXT_PUBLIC_GATO_URL) {
        const errMsg = 'missing env variable: NEXT_PUBLIC_GATO_URL';
        console.error(errMsg);
        throw new Error(errMsg);
    }
    if (!NEXT_PUBLIC_GATO_PASSWORD) {
        const errMsg = 'missing env variable: NEXT_PUBLIC_GATO_PASSWORD';
        console.error(errMsg);
        throw new Error(errMsg);
    }
};
