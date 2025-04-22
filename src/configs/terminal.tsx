import type { TerminalData } from "~/types";

const terminal: TerminalData[] = [
  {
    id: "about",
    title: "about",
    type: "folder",
    children: [
      {
        id: "about-bio",
        title: "bio.txt",
        type: "file",
        content: (
          <div className="py-1">
            <div>Hello there!👋 &nbsp; I'm Student Frontend Developer, Hongje Seong.</div>
          </div>
        )
      },
      // {
      //   id: "about-studying",
      //   title: "studying.txt",
      //   type: "file",
      //   content: "React.js / TypeScript "
      // },
      // {
      //   id: "about-who-cares",
      //   title: "who-cares.txt",
      //   type: "file",
      //   content: ""
      // },
      {
        id: "about-contact",
        title: "contact.txt",
        type: "file",
        content: (
          <ul className="list-disc ml-6">
            <li>
              Email:{" "}
              <a
                className="text-blue-300"
                href="hongjeeeeeee@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                hongjeeeeeee@gmail.com
              </a>
            </li>
            <li>
              Github:{" "}
              <a
                className="text-blue-300"
                href="https://github.com/806gw"
                target="_blank"
                rel="noreferrer"
              >
                @806gw
              </a>
            </li>
            <li>
              Linkedin:{" "}
              <a
                className="text-blue-300"
                href="https://www.linkedin.com/in/hongjeee"
                target="_blank"
                rel="noreferrer"
              >
                hongje-seong
              </a>
            </li>
          </ul>
        )
      }
    ]
  },
  {
    id: "about-dream",
    title: "about-me.json",
    type: "file",
    content: (
      <div className="py-1">
        <div>{"{"}</div>
        <div>
          <span className="text-white-400 ml-9 json-key">name</span>:
          <span className="text-yellow-400 key json-value"> "Hongje Seong"</span>,
        </div>

        <div>
          <span className="text-white-400 ml-9 json-key">birthday</span>:
          <span className="text-yellow-400 key json-value"> "2007.08.06"</span>,
        </div>

        <div>
          <span className="text-white-400 ml-9 json-key">skills</span>:
          <span className="text-yellow-400 key json-value">
            {" "}
            <span className={"text-white"}>[</span>
            "React.js"<span className={"text-white"}>,</span> "TypeScript"
            <span className={"text-white"}>,</span> "JavaScript"
            <span className={"text-white"}>]</span>
          </span>
          ,
        </div>

        <div>
          <span className="text-white-400 ml-9 json-key">certificates</span>:
          <span className="text-yellow-400 key json-value">
            {" "}
            <span className={"text-white"}>[</span>
            "정보처리산업기사"<span className={"text-white"}></span>
            <span className={"text-white"}>]</span>
          </span>
        </div>

        <div>
          <span>{"}"}</span>
        </div>
      </div>
    )
  }
];

export default terminal;
