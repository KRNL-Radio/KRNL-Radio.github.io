import ReactMarkdown from "react-markdown";

function Markdown({ content }: { content: string }) {
  return <ReactMarkdown>{content}</ReactMarkdown>;
}

export default Markdown;
