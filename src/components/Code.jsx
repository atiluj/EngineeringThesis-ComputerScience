import * as React from 'react';

export default function Code({ children }) {
  return (
    <pre>
      <code class="hljs language-excel">
        {children}
      </code>
    </pre>
  );
}
