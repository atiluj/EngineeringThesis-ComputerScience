import styles from './Interpreter.module.css';
import * as React from 'react';
import MonacoEditor from "react-monaco-editor";
import usePython from "react-py/dist/hooks/usePython.js";
import { useEffect, useState } from "react";

function Editor() {
    const [code, changeCode] = useState("");
    const [editor, setEditor] = useState(null);
    const { runPython, stdout, stderr, isLoading, isRunning } = usePython();

    useEffect(() => {
        const listener = () => {
            if (editor) {
                editor.layout({});
                editor.layout();
            }
        };
        window.addEventListener("resize", listener);
        return () => window.removeEventListener("resize", listener);
    }, [editor]);

    return (
        <div className={styles.editor}>
            <MonacoEditor
                editorWillMount={(editor) => setEditor(editor)}
                language="python"
                theme="vs-dark"
                className={styles.editor_monaco}
                height="65vh"
                value={code}
                onChange={changeCode}
            />
            <input
                type="submit"
                className={styles.editor_button}
                value={isLoading ? "Loading..." : isRunning ? "Running..." : "Run!"}
                disabled={isLoading || isRunning}
                onClick={(e) => {
                    e.preventDefault();
                    runPython(code);
                }}
            />
            <div className={styles.editor_output}>
                <div className={styles.editor_stdout}>
                    <p>Output</p>
                    <pre><code>{stdout}</code></pre>
                </div>
                <div className={styles.editor_stderr}>
                    <p>Error</p>
                    <pre><code>{stderr}</code></pre>
                </div>
            </div>
        </div>
    );
}

function Interpreter() {
    return <main className={styles.main}>
        <Editor />
    </main>;
}

export default Interpreter;