export default function MainContent() {
    const cssH2 = "text-4xl md:text-6xl font-bold";
    const cssH3 = "text-2xl md:text-4xl font-bold";
    return (
        <>
            <div className="w-full text-left">
                <div className="py-12 space-y-2">
                    <p>this is very wip.  follow progress below</p>
                    <p>or get involved with these champs:</p>
                    <p>-- <a href="https://novaukraine.org/"><u>nova ukraine</u></a></p>
                    <p>-- <a href="https://meaningfulcode.org/"><u>meaningful code</u></a></p>
                    <p>-- <a href="https://www.starvoting.org/"><u>star voting</u></a></p>
                    <p>-- <a href="https://www.empower-kit.com/"><u>empower-kit</u></a></p>
                </div>
            </div>
            <div className="w-full text-left">
                <div className="py-12 space-y-2">
                    <h2 className={cssH2}>progress \m/</h2>
                    <h3 className={cssH3 + " pt-4"}>2024.10.20</h3>
                    <p>launched <a href="https://x.com/devsforcharity/status/1844667675127218253"><u>on twitter</u></a></p>
                    <p>set up this website!</p>
                    <p>...</p>
                    <p>okay, now the real work begins</p>
                </div>
            </div>
        </>
    )
}