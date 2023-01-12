import * as React from 'react';

function Comments({issue}) {
    const url = new URL(window.location.href);
    const session = url.searchParams.get("utterances");
    if (session) { localStorage.setItem("utterances-session", session); }

    const [height, setHeight] = React.useState(100);
    const [darkMode, setDarkMode] = React.useState(localStorage.getItem("dark-mode") === "true");
    React.useEffect(() => {
        const listener = e => {
            if (e.origin == "https://utteranc.es") {
                if (e.data?.type == "resize" && e.data?.height) {
                    setHeight(e.data.height);
                }
            } else if (e.origin == window.location.origin) {
                if (e.data?.darkMode != null) {
                    setDarkMode(e.data?.darkMode);
                }
            }
        };
        window.addEventListener("message", listener);
        return () => window.removeEventListener("message", listener);
    }, []);

    const params = {
        repo: "atiluj/uni-project-jan",
        "issue-term": issue,
        crossorigin: "anonymous",
        theme: darkMode ? "dark-blue" : "github-light",
        url: window.location.href,
        origin: window.location.origin,
        session: session || localStorage.getItem("utterances-session"),
    };
    const iframe = `https://utteranc.es/utterances.html?${new URLSearchParams(params)}`;

    return <div className="utterances" style={{height: `${height}px`}}>
        <iframe className="utterances-frame" title="Comments" scrolling="no" src={iframe} loading="lazy"></iframe>
    </div>
}

export default Comments;