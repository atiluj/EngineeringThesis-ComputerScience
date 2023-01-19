import * as React from 'react';
import styles from "./Code.module.css";
import hljs from 'highlight.js';
import 'highlight.js/styles/dark.css';

import "../style.css";

export default function Code({ children }) {
  // hljs.initHighlightingOnLoad();
  // hljs.highlightAll();
  // React.useEffect(() => { hljs.highlightAll(); }, []);
  return (
    <div className={styles.code}>
      <code>{children}</code>
    </div>
  );
}
