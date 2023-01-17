import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import Header from "../components/Header";
import Changelog from "../assets/CHANGELOG.md";
import { useEffect, useState } from "react";
import remarkGfm from "remark-gfm";

function ChangelogPage() {
  let [changelogMarkdown, setChangelogMarkdown] = useState("Loading...");

  useEffect(() => {
    fetch(Changelog)
      .then((response) => response.text())
      .then((text) => setChangelogMarkdown(text));
  }, []);

  return (
    <div>
      <Header />
      {/* center, and add a background */}
      <div className="flex flex-col items-center">
        <div className="bg-gray-900">
          {/* todo: change to markdown */}
          <ReactMarkdown
            className="prose !prose-invert"
            remarkPlugins={[remarkGfm]}
          >
            {changelogMarkdown}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
}

export default ChangelogPage;
