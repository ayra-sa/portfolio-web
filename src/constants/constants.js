import { SiBootstrap, SiCss3, SiGit, SiGithub, SiHtml5, SiJavascript, SiNextdotjs, SiReact, SiReactrouter, SiRedux, SiSass, SiTailwindcss, SiWebflow } from "react-icons/si";

export const projects = [
  {
    title: 'Landing Page',
    description: "Using HTML5, CSS3 and Javascript. Simple Landing Page to show little bit about coffee",
    image: '/images/Kopi-landing.jpeg',
    tags: ['HTML5', 'CSS3', 'Javascript'],
    source: 'https://github.com/ayra-sa/landing-page',
    visit: 'https://ayra-sa.github.io/landing-page',
    id: 0,
  },
  {
    title: 'Hijrahacademy',
    description:"Slcing UI/UX design from Figma. Using HTML5, CSS3 and Bootstrap 4. Minimalist and elegant design",
    image: '/images/hijrahacademy.jpeg',
    tags: ['HTML5', 'CSS3', 'Bootstrap', 'Figma'],
    source: 'https://hijrahacademy.com',
    visit: 'https://hijrahacademy.com',
    id: 1,
  },
  {
    title: 'Youtube Clone',
    description: "A simple Youtube Clone. With the youtube API, build with React, React Hooks, Axios. You can search any video and watch it.",
    image: '/images/youtube.PNG',
    tags: ['React', 'React Hooks', 'Axios', 'API', 'Clone'],
    source: 'https://github.com/ayra-sa/react-youtube',
    visit: 'https://ayra-youtube.netlify.app',
    id: 2,
  },
  {
    title: 'Hosting Id',
    description: "Web Hosting with HTML, CSS and Bootstrap 5, and reference this web's niagahoster.com",
    image: '/images/hostingid.jpeg',
    tags: ['HTML5', 'CSS3', 'Bootstrap', 'Clone'],
    source: 'https://hostingid.co.id',
    visit: 'https://hostingid.co.id',
    id: 3,
  },
  {
    title: 'Blog App',
    description: "Simple Blog App with React and Gnews API. Build with React, React Hooks, Material UI, Axios. You can read articles at this app",
    image: '/images/blog.PNG',
    tags: ['react', 'api', 'material ui', 'react-hooks', 'axios'],
    source: 'https://github.com/ayra-sa/react-blog',
    visit: 'https://ayra-blog.netlify.app',
    id: 4,
  },
  {
    title: 'Gallery App',
    description: "Gallery App with Unsplash API. Build with React, React Hooks, Axios, Infinite Scroll. See various pictures here.",
    image: '/images/gallery-app.jpeg',
    tags: ['react', 'api', 'infinite-scroll', 'react-hooks', 'axios'],
    source: 'https://github.com/ayra-sa/react-gallery',
    visit: 'https://ayra-gallery.netlify.app',
    id: 5,
  },
  {
    title: 'Quiz App',
    description: "Quizz App with Javascript. You can play mini quiz with right and wrong answer, and timer",
    image: '/images/quizz.PNG',
    tags: ['javascript', 'quiz', 'css'],
    source: 'https://github.com/ayra-sa/quiz-app',
    visit: 'https://ayra-sa.github.io/quiz-app',
    id: 6,
  },
  {
    title: 'Weather App',
    description: "Weather App with API weather. You can search city's weather",
    image: '/images/Weather-App.png',
    tags: ['javascript', 'api', 'fetch-api','weather'],
    source: 'https://github.com/ayra-sa/weather-app',
    visit: 'https://ayra-sa.github.io/weather-app',
    id: 7,
  },
];

export const TimeLineData = [
  { year: 2017, text: 'Started my journey', },
  { year: 2018, text: 'Worked as a freelance developer', },
  { year: 2019, text: 'Founded JavaScript Mastery', },
  { year: 2020, text: 'Shared my projects with the world', },
  { year: 2021, text: 'Started my own platform', },
];

export const abouts = {
    desc: "My name is Arya. I'm from Indonesian. I have more than two years work experience in front-end and have a firm knowledge of HTML, CSS and JavaScript language and possess a good knowledge of computer software packages (frameworks and tools) that are used in today???s technology.",
    desc2: "On a personal level, I am highly-motivated, result oriented, self-driven, hard-working, fast learner and constantly seeking to improve my skills and am fully aware of the latest Front-end Development Tools.",
    // image: '/images/me.png',
    image: '/images/default.png',
    github: 'https://github.com/ayra-sa',
    linkedin: 'https://linkedin.com/in/rizkysaputra21',
    resume: '/asset/My Resume.pdf',
  }

export const tech = [
  {icon: <SiHtml5 />, label: 'HTML'},
  {icon: <SiCss3 />, label: 'CSS'},
  {icon: <SiJavascript />, label: 'Javascript'},
  {icon: <SiBootstrap />, label: 'Bootstrap'},
  {icon: <SiTailwindcss />, label: 'Tailwind CSS'},
  {icon: <SiReact />, label: 'React js'},
  {icon: <SiNextdotjs />, label: 'Next js'},
  {icon: <SiReactrouter />, label: 'React Router'},
  {icon: <SiRedux />, label: 'Redux'},
  {icon: <SiGit />, label: 'Git'},
  {icon: <SiGithub />, label: 'Github'},
  {icon: <SiSass />, label: 'Sass/SCSS'},
  {icon: <SiWebflow />, label: 'Webflow'},
]