import Header from "../components/Header";
import Changelog from "../assets/CHANGELOG.md";
import { useEffect, useState } from "react";
import Markdown from "../components/Markdown";

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
          <Markdown className="prose !prose-invert">
            {changelogMarkdown}
          </Markdown>
        </div>
      </div>
    </div>
  );
}

export default ChangelogPage;
