import FaceTime from "~/components/apps/FaceTime";
import Terminal from "~/components/apps/Terminal";
import Safari from "~/components/apps/Safari";
import Bear from "~/components/apps/Bear";
import Typora from "~/components/apps/Typora";
import VSCode from "~/components/apps/VSCode";
import { appBarHeight } from "~/utils";
import type { AppsData } from "~/types";

const apps: AppsData[] = [
  {
    id: "launchpad",
    title: "Launchpad",
    desktop: false,
    img: "img/icons/launchpad.png"
  },
  {
    id: "Hongje",
    title: "Hongje",
    desktop: true,
    width: 1080,
    height: 560,
    show: true,
    y: -20,
    img: "img/icons/hongje.png",
    content: <Bear />
  },
  {
    id: "notes",
    title: "Notes",
    desktop: true,
    width: 600,
    height: 580,
    y: -20,
    img: "img/icons/notes.png",
    content: <Typora />
  },
  // {
  //   id: "safari",
  //   title: "Safari",
  //   desktop: true,
  //   width: 1024,
  //   minWidth: 375,
  //   minHeight: 200,
  //   x: -20,
  //   img: "img/icons/safari.png",
  //   content: <Safari />
  // },
  // {
  //   id: "vscode",
  //   title: "VSCode",
  //   desktop: true,
  //   width: 900,
  //   height: 600,
  //   x: 80,
  //   y: -30,
  //   img: "img/icons/vscode.png",
  //   content: <VSCode />
  // },
  {
    id: "facetime",
    title: "FaceTime",
    desktop: true,
    img: "img/icons/facetime.png",
    width: 500 * 1.7,
    height: 500 + appBarHeight,
    minWidth: 350 * 1.7,
    minHeight: 350 + appBarHeight,
    aspectRatio: 1.7,
    x: -80,
    y: 20,
    content: <FaceTime />
  },
  {
    id: "terminal",
    title: "Terminal",
    desktop: true,
    img: "img/icons/terminal.png",
    content: <Terminal />
  },
  {
    id: "github",
    title: "Github",
    desktop: false,
    img: "img/icons/github.png",
    link: "https://github.com/806gw"
  }
];

export default apps;
