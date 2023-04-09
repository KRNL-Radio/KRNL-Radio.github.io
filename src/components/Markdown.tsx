import React from "react";
import remarkGfm from "remark-gfm";
import removeComments from "remark-remove-comments";
const ReactMarkdown = React.lazy(() => import("react-markdown"));

type MarkdownProps = {
  children: string;
  className?: string;
};

function Markdown({ children: content, className }: MarkdownProps) {
  return (
    <React.Suspense fallback={<div className={className}>Loading...</div>}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm, removeComments]}
        className={className}
      >
        {content}
      </ReactMarkdown>
    </React.Suspense>
  );
}

export default Markdown;
