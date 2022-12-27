import './Interpreter.css';
import * as React from 'react';
import MonacoEditor from "react-monaco-editor";
import usePython from "react-py/dist/hooks/usePython.js";
import { useEffect, useState } from "react";

function Editor() {
    const [code, changeCode] = useState("");
    const [editor, setEditor] = useState(null);
    const { runPython, stdout, stderr, isLoading, isRunning } = usePython();

    useEffect(() => {
        window.addEventListener("resize", () => {
            if (editor) {
                editor.layout({});
                editor.layout();
            }
        });
    }, [editor]);

    return (
        <div className="editor">
            <MonacoEditor
                editorWillMount={(editor) => setEditor(editor)}
                language="python"
                theme="vs-dark"
                className="editor-monaco"
                height="70vh"
                value={code}
                onChange={changeCode}
            />
            <input
                type="submit"
                className="editor-button"
                value={isLoading ? "Loading..." : isRunning ? "Running..." : "Run!"}
                disabled={isLoading || isRunning}
                onClick={(e) => {
                    e.preventDefault();
                    runPython(code);
                }}
            />
            <div className="editor-output">
                <div className="editor-stdout">
                    <p>Output</p>
                    <pre><code>{stdout}</code></pre>
                </div>
                <div className="editor-stderr">
                    <p>Error</p>
                    <pre><code>{stderr}</code></pre>
                </div>
            </div>
        </div>
    );
}

export default function() {
    return <main>
        <Editor />
    </main>;
}