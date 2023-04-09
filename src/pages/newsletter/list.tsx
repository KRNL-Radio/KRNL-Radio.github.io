import { useEffect, useState } from "react";
import { ErrorElem } from "../../ErrorElem";
import Header from "../../components/Header";

// https://raw.githubusercontent.com/KRNL-Radio/newsletter-archive/main/website/data.json
function NewsletterList() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/KRNL-Radio/newsletter-archive/main/website/data.json"
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
      });
  }, []);

  return (
    <div className="text-white">
      <Header />
      <div>
        <div className="flex flex-col items-center justify-center p-4">
          <h1 className="text-4xl font-bold">Newsletter Issues</h1>
        </div>
        <div className="flex flex-wrap justify-center p-4 w-full">
          <div>
            {loading ? (
              <div>Loading...</div>
            ) : error ? (
              <div>errored!!</div>
            ) : (
              <div>{JSON.stringify(data)}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsletterList;
