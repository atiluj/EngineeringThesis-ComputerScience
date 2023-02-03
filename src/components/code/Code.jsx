import * as React from 'react';

export default function Code({ children }) {
  return (
    <pre>
      <code className="hljs language-excel">
        {children}
      </code>
    </pre>
  );
}
