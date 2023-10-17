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
            <div>
              Hi, this is Xiaohan Zou. I am a PhD student at the Computer Science and
              Engineering department of Pennsylvania State University.
            </div>
          </div>
        )
      },
      {
        id: "about-interests",
        title: "interests.txt",
        type: "file",
        content: "Machine Learning / Computer Vision / Vision-Language Learning"
      },
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
                href="mailto:renovamenzxh@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                renovamenzxh@gmail.com
              </a>
            </li>
            <li>
              Github:{" "}
              <a
                className="text-blue-300"
                href="https://github.com/Renovamen"
                target="_blank"
                rel="noreferrer"
              >
                @Renovamen
              </a>
            </li>
            <li>
              <a
                className="text-blue-300"
                href="https://scholar.google.com/citations?user=RuW6xgMAAAAJ"
                target="_blank"
                rel="noreferrer"
              >
                Google Scholar
              </a>
            </li>
            <li>
              Linkedin:{" "}
              <a
                className="text-blue-300"
                href="https://www.linkedin.com/in/xiaohan-zou"
                target="_blank"
                rel="noreferrer"
              >
                xiaohan-zou
              </a>
            </li>
            <li>
              Personal Website:{" "}
              <a
                className="text-blue-300"
                href="https://zxh.io"
                target="_blank"
                rel="noreferrer"
              >
                https://zxh.io
              </a>
            </li>
            <li>
              知乎:{" "}
              <a
                className="text-blue-300"
                href="https://www.zhihu.com/people/chao-neng-gui-su"
                target="_blank"
                rel="noreferrer"
              >
                @西伯利亚大恶龙
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
          <span className="text-yellow-400 key json-value"> "Jinhyo Kim"</span>,
        </div>

        <div>
          <span className="text-white-400 ml-9 json-key">birthday</span>:
          <span className="text-yellow-400 key json-value"> "2005.02.16"</span>,
        </div>

        <div>
          <span className="text-white-400 ml-9 json-key">skills</span>:
          <span className="text-yellow-400 key json-value">
            {" "}
            <span className={"text-white"}>[</span>
            "React.js"<span className={"text-white"}>,</span> "Python"
            <span className={"text-white"}>,</span> "Linux"
            <span className={"text-white"}>]</span>
          </span>
          ,
        </div>

        <div>
          <span className="text-white-400 ml-9 json-key">certificates</span>:
          <span className="text-yellow-400 key json-value">
            {" "}
            <span className={"text-white"}>[</span>
            "정보처리산업기사"<span className={"text-white"}>,</span> "정보처리기능사"
            <span className={"text-white"}>, </span>
            "리눅스 마스터 2급"<span className={"text-white"}>]</span>
          </span>
          ,
        </div>

        <div>
          <span>{"}"}</span>
        </div>
      </div>
    )
  }
];

export default terminal;
