import type { BearData } from "~/types";

const bear: BearData[] = [
  {
    id: "profile",
    title: "Profile",
    icon: "i-icon-park-outline:user-positioning",
    md: [
      {
        id: "about-me",
        title: "About Me",
        file: "markdown/about-me.md",
        icon: "i-icon-park-outline:user",
        excerpt: "성홍제 (Hongje Seong) | Frontend Developer"
      }
      // {
      //   id: "github-stats",
      //   title: "Github Stats",
      //   file: "markdown/github-stats.md",
      //   icon: "i-icon-park-outline:github",
      //   excerpt: "My Github stats and BOJ Tier"
      // }
    ]
  },
  {
    id: "project",
    title: "Projects",
    icon: "i-icon-park-outline:web-page",
    md: [
      {
        id: "lab",
        title: "실습실 대여 시스템",
        file: "not found",
        icon: "i-heroicons-solid:computer-desktop",
        excerpt: "경북소프트웨어마이스터고등학교 실습실 대여 시스템",
        link: "https://github.com/GBSM-LANTAL-SYSYEM/GBSM-Frontend-V2"
      },
      {
        id: "folink",
        title: "Folink",
        file: "https://raw.githubusercontent.com/Strawberry-nose-Sinwoo/.github/main/profile/README.md",
        icon: "i-heroicons-solid:plus-circle",
        excerpt: "이력서와 포트폴리오를 더 깔끔하게, Folink",
        link: "https://github.com/Strawberry-nose-Sinwoo/FOLINK-Frontend"
      }
      /*{
        id: "text-classification",
        title: "Text Classification",
        file: "https://raw.githubusercontent.com/Renovamen/Text-Classification/master/README.md",
        icon: "i-icon-park-outline:book-open",
        excerpt: "PyTorch implementation of text classificaiton models...",
        link: "https://github.com/Renovamen/Text-Classification"
      },
      {
        id: "speech-emotion-recognition",
        title: "Speech Emotion",
        file: "https://raw.githubusercontent.com/Renovamen/Speech-Emotion-Recognition/master/README.md",
        icon: "i-ant-design:audio-filled",
        excerpt: "Speech emotion recognition using Keras and sklearn...",
        link: "https://github.com/Renovamen/Speech-Emotion-Recognition"
      },
      {
        id: "pcalg-py",
        title: "PC Algorithm",
        file: "https://raw.githubusercontent.com/Renovamen/pcalg-py/master/README.md",
        icon: "i-tabler:atom-2",
        excerpt: "Implement PC algorithm in Python...",
        link: "https://github.com/Renovamen/pcalg-py"
      },
      {
        id: "midgard",
        title: "Interactable Resume",
        file: "https://raw.githubusercontent.com/Renovamen/midgard/master/README.md",
        icon: "i-bx:game",
        excerpt: "An interactable version of my resume, powered by Vue...",
        link: "https://resume.zxh.io/"
      },
      {
        id: "image-captioning",
        title: "Image Captioning",
        file: "https://raw.githubusercontent.com/Renovamen/Image-Captioning/master/README.md",
        icon: "i-bi:image-fill",
        excerpt: "PyTorch implementation of image captioning models...",
        link: "https://github.com/Renovamen/Image-Captioning"
      },
      {
        id: "wordle-helper",
        title: "Wordle Helper",
        file: "https://raw.githubusercontent.com/Renovamen/wordle-helper/main/README.md",
        icon: "i-bi:grid-1x2",
        excerpt: "Help you solve Wordle puzzles...",
        link: "https://wordle.zxh.io"
      },
      {
        id: "cube-solver",
        title: "Cube Solver",
        file: "https://raw.githubusercontent.com/Renovamen/Just-a-Cube/master/README.md",
        icon: "i-bx:cube",
        excerpt: "A rubik's cube solver (layer-by-layer & two-phase)...",
        link: "https://cube.zxh.io"
      },
      {
        id: "alkaid",
        title: "Alkaid",
        file: "https://raw.githubusercontent.com/Renovamen/alkaid/main/README.md",
        icon: "i-simple-icons:stellar",
        excerpt: "Minimal reinforcement-learning toolbox for PyTorch...",
        link: "https://github.com/Renovamen/alkaid"
      },
      {
        id: "fishmail",
        title: "Fishmail",
        file: "https://raw.githubusercontent.com/Renovamen/Fishmail/master/README.md",
        icon: "i-game-icons:fish-escape",
        excerpt: "上班的时候装作在 Gmail 上查邮件的样子看知乎摸鱼...",
        link: "https://fishmail.vercel.app"
      }*/
    ]
  }
];

export default bear;
