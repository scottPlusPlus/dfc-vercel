import { OpportunityData } from "@/app/charity/gatoData"
import TwitterIcon from '@/assets/twitter.svg';
import WebIcon from '@/assets/site-alt.svg';
import HeartIcon from '@/assets/heart-svgrepo-com.svg';

type Props = {
    data: OpportunityData
}

export default function Opportunity(props: Props) {

    const iconCss = 'w-6 h-6 fill-gray-300 hover:fill-gray-100';
    const headingCss = 'text-gray-400';

    const data = props.data;
    return (
        <>
            <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-1/3">
                    <a target="_blank" href={data.opportunityLink}>
                        <div className="aspect-[16/9] overflow-hidden min-w-64">
                            <img src={data.image} alt={`${data.title} image`} className="object-cover w-full h-full" loading="lazy" />
                        </div>
                    </a>
                    <div className="flex flex-row gap-4 pt-4">
                        <a target="_blank" href={data.opportunityLink}><HeartIcon className={iconCss} /></a>
                        <a target="_blank" href={data.externalPage}><WebIcon className={iconCss} /></a>
                        <a target="_blank" href={"https://x.com/" + data.twitter}><TwitterIcon className={iconCss} /></a>
                    </div>
                    <p className="pt-4">{data.title}</p>
                </div>
                <div className="flex flex-col gap-2 w-full overflow-hidden">
                    <p>{data.summary}</p>
                    <p><span className={headingCss}>cause:</span> <b>{data.cause}</b></p>
                    <p><span className={headingCss}>skills:</span> {data.skills.join(", ")}</p>
                    <p><span className={headingCss}>time:</span> {data.commitment}</p>
                    <p><span className={headingCss}>posted:</span> {data.date}</p>
                    <p><a target="_blank" href={data.opportunityLink}>{"-> [more]"}</a></p>
                </div>
            </div>
            <div className="flex w-full items-center text-center justify-center mx-auto">
                - - - - -
            </div>
        </>
    )
}


// export default function IconLinks() {
//     const iconCss = 'w-full h-full fill-gray-800 hover:fill-blue-700 ';
//     // const twitterCss = "w-12 h-12 fill-stone-200 hover:fill-stone-50 inline-block align-middle my-auto";
//     const cssAlign = 'w-14 h-16 align-middle my-auto';
//     const cssAlignTw = 'w-12 h-12 align-middle my-auto';
//     return (
//         <div className="flex flex-row w-full gap-4 mx-auto justify-center align-middle my-auto">
//             <div className={cssAlignTw}>
//                 <a href="https://twitter.com/ScottPlusPlus" target="_blank">
//                     <TwitterIcon className={iconCss} />
//                 </a>
//             </div>