import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Markdown from "../../components/Markdown";
import Header from "../../components/Header";

function NewsletterIndividualPage() {
  const { id } = useParams();
  const [text, setText] = useState("");
  const [data, setData] = useState({ title: "", date: "" });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/KRNL-Radio/newsletter-archive/main/website/data.json"
    )
      .then((res) => res.json())
      .then((fetched_data) => {
        // console.log(data.newsletter_issues)
        setData(
          fetched_data.newsletter_issues.filter(
            (issue: { id: string }) => issue.id === id
          )[0]
        );
        const path = fetched_data.newsletter_issues.filter(
          (issue: { id: string }) => issue.id === id
        )[0].path;
        fetch(
          `https://raw.githubusercontent.com/KRNL-Radio/newsletter-archive/main/${path}`
        )
          .then((res) => res.text())
          .then((data) => {
            setText(data);
            setLoading(false);
          });
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
      });
  }, []);

  return (
    // <div>
    //     {loading ? (
    //         <div>Loading...</div>
    //     ) : error ? (
    //         <div>
    //             errored!!
    //         </div>
    //     ) : (
    //         <div>
    //             <Markdown>{data}</Markdown>
    //         </div>
    //     )}
    // </div>
    <div className="text-white">
      <Header />
      <div>
        <div className="bg-gradient-to-b to-slate-900 from-slate-700 flex justify-center p-4 w-4/5 mx-auto rounded-lg m-4">
          <div className="flex flex-col items-center w-full">
            <h1 className="text-xl">{data.title}</h1>
            <h2 className="text-sm">{data.date}</h2>
            <Markdown className="prose !prose-invert max-w-none p-4 bg-slate-700 rounded-xl my-8">
              {text}
            </Markdown>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsletterIndividualPage;
