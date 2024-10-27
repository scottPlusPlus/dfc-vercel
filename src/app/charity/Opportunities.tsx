import { OpportunitiesData } from "@/app/charity/gatoData"
import Opportunity from "@/components/Opportunity"

type Props = {
    data: OpportunitiesData
}

export default function Opportunities(props: Props) {

    const vmatchUrl = "https://www.volunteermatch.org/search?v=true&sk=335%2C336%2C147%2C334%2C74";
    return (
        <div className="w-full text-left space-y-8">
            <div>
                <p>recent volunteer programming opportunities from <a target="_blank" href={vmatchUrl}><u>VolunteerMatch.com</u></a></p>
                <p>only the orgs with a website and twitter account</p>
            </div>
            <div className="space-y-4">
                {props.data.opportunities.map((opp, index) => {
                    return (
                        <Opportunity key={index} data={opp} />
                    )
                })}

            </div>
        </div>
    )
}