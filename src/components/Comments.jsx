import * as React from 'react';

function Comments({issue}) {
    const url = new URL(window.location.href);
    const session = url.searchParams.get("utterances");
    if (session) { localStorage.setItem("utterances-session", session); }

    const params = {
        repo: "atiluj/uni-project-jan",
        "issue-term": issue,
        crossorigin: "anonymous",
        theme: "dark-blue",
        url: window.location.href,
        origin: window.location.origin,
        session: session || localStorage.getItem("utterances-session"),
    };
    const iframe = `https://utteranc.es/utterances.html?${new URLSearchParams(params)}`;

    const [height, setHeight] = React.useState(100);
    React.useEffect(() => {
        const listener = e => {
            if (e.origin != "https://utteranc.es") return;
            if (e.data?.type == "resize" && e.data?.height) {
                setHeight(e.data.height);
            }
        };
        window.addEventListener("message", listener);
        return () => window.removeEventListener("message", listener);
    }, []);

    return <div className="utterances" style={{height: `${height}px`}}>
        <iframe className="utterances-frame" title="Comments" scrolling="no" src={iframe} loading="lazy"></iframe>
    </div>
}

export default Comments;