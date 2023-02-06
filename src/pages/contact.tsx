import mailtoLink from "mailto-link";
import { useState } from "react";
import Header from "../components/Header";

function info(
  name: string,
  email: string,
  category: string,
  force_debug: boolean = false
) {
  let debug = force_debug || category === "Report a Problem";
  return `
--INFO--
(Please do not edit!)
Name: ${name}
Preferred Email: ${email}
Category: ${category}
Website Version: 2.2.0
Player Version: 1.1.0
User Agent: ${navigator.userAgent}
${
  debug
    ? `
Hash Path: ${window.location.hash}
Console:
${JSON.stringify(console.everything)}
`
    : ""
}
`;
}

export function createLink(
  subject: string,
  message: string,
  name: string,
  category: string,
  from_email: string,
  to_email: string = "krnl@cornellcollege.edu"
) {
  return mailtoLink({
    to: to_email,
    subject: subject,
    body: message + info(name, from_email, category),
  });
}

function ContactPage() {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [category, setCategory] = useState("General");
  let [subject, setSubject] = useState("");
  let [message, setMessage] = useState("");

  let sendMessage = (e: any) => {
    let link = createLink(subject, message, name, category, email);
    window.open(link, "_blank");
  };

  return (
    <div>
      <Header />
      <div className="flex flex-col items-center justify-center p-4 text-white">
        <h1 className="text-4xl font-bold">Contact</h1>

        {/* <div className="p-4"><KRNLSocialButtons /></div> */}

        <p className="text-xl">
          If you have any questions, please contact us at
          krnl@cornellcollege.edu .
        </p>

        <p className="text-xl">
          We also have meetings every Thursday at 4:30 PM in the Studio (second
          floor of Thomas Commons, right next to the Orange Carpet).
        </p>

        {/* TODO: force theme to dark */}
        <form
          className="flex flex-col items-center justify-center p-4"
          data-theme="luxury"
        >
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input
              type="text"
              autoComplete="name"
              placeholder="Paul"
              className="input input-bordered w-full"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Your Email</span>
            </label>
            <label className="input-group w-full">
              <span>Email</span>
              <input
                type="email"
                autoCapitalize="email"
                placeholder="info@site.com"
                className="input input-bordered w-full"
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <select
              className="select select-bordered w-full"
              onChange={(e) => setCategory(e.target.value)}
            >
              <option>General</option>
              <option>Music Requests</option>
              <option>Website Questions</option>
              <option>Other Questions</option>
              <option>Report a Problem</option>
            </select>
          </div>
          {category === "Report a Problem" && (
            <div className="text-center w-[32rem]">
              If you are reporting a problem with the website, please include as
              much information as possible!
              <div
                className="tooltip"
                data-tip="The data contains, but may not be limited to, your browser info, including your operating system and platform, the console's logs. You may view and redact this before sending."
              >
                Various information about your browser and the website will be
                included automatically for the purposes of debugging.
              </div>
            </div>
          )}
          {/* {category === "Music Requests" && (
                        <p className="text-center w-[32rem]">
                            
                        </p>
                    )} */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Subject</span>
            </label>
            <input
              type="text"
              placeholder="I'd Like To See..."
              className="input input-bordered w-full"
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Message</span>
            </label>
            <textarea
              value={message}
              className="textarea textarea-bordered h-48 w-full"
              placeholder="Waiting for something to happen?"
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <button className="btn btn-success" onClick={sendMessage}>
            Send!
          </button>
          <p>
            This will open in a new window, or your mail client. Just press
            send!
          </p>
        </form>
        <script src="https://embed.radio.co/request/wb7e9242.js"></script>
      </div>
    </div>
  );
}

export default ContactPage;
