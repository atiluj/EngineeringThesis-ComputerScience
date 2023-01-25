import * as React from 'react';
import 'highlight.js/styles/dark.css';

import "../style.css";

export default function Code({ children }) {
  return (
    <pre>
      <code class="hljs language-excel">
        {children}
      </code>
    </pre>
  );
}
