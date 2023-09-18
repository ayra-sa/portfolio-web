import { SiBootstrap, SiCss3, SiGit, SiGithub, SiHtml5, SiJavascript, SiNextdotjs, SiReact, SiReactrouter, SiRedux, SiSass, SiTailwindcss, SiTypescript, SiWebflow } from "react-icons/si";



export const hero = {
  welcome: "Welcome 👋🏼",
  image: "/images/me-gs.png",
  text1: "I'm Frontend Developer",
  text2: "The guy who love coffee ☕",
  text3: "Love code to",

}

export const projects = [
  {
    id: 'ayshop-ecommerce',
    title: 'AyShop - E-commerce App',
    description: "AyShop is E-commerce App which integreted with Stripe",
    image: '/images/ayshop-main.png',
    tags: ['Nextjs', 'Sanity', 'Stripe', 'tailwind css', 'Typescript'],
    full_title: 'AyShop E-cpmmerce App with Stripe',
    full_description: "AyShop is a e-commerce app, which is integrated with Stripe. Who sell electronic products, using sanity as a product store, and you can add products to the basket, and checkout using stripe, you can use a certain credit card number to be able to use it in test mode",
    built_with: ['Next js', 'Sanity', 'tailwind css', 'Typescript' ],
    image_description: ['/images/ayshop.jpg', '/images/ayshop-2.jpg', '/images/ayshop-3.jpg', '/images/ayshop-4.jpg'],
    source: 'https://github.com/ayra-sa/ecommerce-app',
    visit: 'https://ayshop.vercel.app/',
  },
  {
    id: 'arya-blog',
    title: 'Arya Blog',
    description: "A modern blog web-based app which is integrated with Sanity.io, a headless CMS",
    image: '/images/preview-blog.png',
    tags: ['Nextjs', 'Sanity', 'tailwind css'],
    full_title: 'Arya Blog - A blog app with Sanity.io',
    full_description: 'Arya Blog is a modern blog web-based app which is integrated with Sanity.io, a headless CMS.  This Blog can be considered a personal blog publishing which is you can write your blog and publish it to Blog via Sanity. The key point in this project is the technology I used, especially Next.js. This one is so powerful and a bit complicated for sure. All blogs there come from Sanity which I already managed it before writing the code.',
    built_with: ['Next js', 'Sanity', 'tailwind css', 'Typescript' ],
    image_description: ['/images/blog-1.jpg', '/images/blog-full.png'],
    source: 'https://github.com/ayra-sa/my-blog',
    visit: 'https://my-next-sanity-blog.vercel.app/',
  },
  {
    id: 'metube',
    title: 'MeTube',
    description: "Youtube Clone app which is integrated with Rapid API Youtube v3",
    image: '/images/metube.png',
    tags: ['Reactjs', 'rapid api', 'tailwind css'],
    full_title: 'MeTube - Youtube Clone App',
    full_description: 'MeTube is a Youtube Clone which is integrated with Rapid API, Youtube v3 API. MeTube can be considered a web app which is you can search and watch any video in this app. The key point in this project is the technology I used, especially React.js. This one is so powerful and a bit complicated for sure. The videos there come from Youtube v3 API which I already managed it before writing the code.',
    built_with: ['Next js', 'Sanity', 'tailwind css', 'Typescript' ],
    image_description: ['/images/metube-1.jpg', '/images/metube-2.jpg'],
    source: 'https://github.com/ayra-sa/youtube-clone-app',
    visit: 'https://metube-app.vercel.app/',
  },
  {
    id: 'disney-clone',
    title: 'Disney+ Clone',
    description: "Disney+ Clone which is integrated with TMDB API",
    image: '/images/disnep.png',
    tags: ['Nextjs', 'Firebase', 'tailwind css'],
    full_title: 'Disney+ Clone App with TMDB API',
    full_description: "This is a Disney+ clone app, which is integrated with TMDB API. This app can be considered a web app which is you can search any movie and tv series and watch the trailer in this app. The key point in this project is the technology I used, especially Next.js. This one is so powerful and a bit complicated for sure. For example, you can sign in with your google account and log out again, and of course it's all safe",
    built_with: ['Next js', 'next-auth', 'firebase', 'tailwind css', 'Typescript' ],
    image_description: ['/images/disnep-login.jpg', '/images/disnep-home.jpg', '/images/disnep-detail.jpg'],
    source: 'https://github.com/ayra-sa/next-disney-clone',
    visit: 'https://next-disney-clone.vercel.app/',
  },
  {
    id: 'fementor-solutions',
    title: 'Frontend Mentor Solutions',
    description: "Collection of answers from challenges of frontendmentor.io",
    image: '/images/fementor.png',
    tags: ['Reactjs', 'tailwind css'],
    full_title: 'Frontend Mentor Solutions - from challenges of frontendmentor.io',
    full_description: <span>This is a collection of answers from challenges on <a href="https://www.frontendmentor.io/challenges" target='_blank'>frontendmentor.io</a>, I collected them together and can be selected according to the criteria for the challenge. you will find various kinds of technology here</span>,
    built_with: ['Reactjs', 'Next js', 'tailwind css' ],
    image_description: ['/images/fementor-1.jpg',],
    source: 'https://github.com/ayra-sa/frontend-mentor',
    visit: 'https://ayra-sa.github.io/frontend-mentor/',
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
    desc: "My name is Arya. I'm from Indonesian. I have more than two years work experience in front-end and have a firm knowledge of HTML, CSS and JavaScript language and possess a good knowledge of computer software packages (frameworks and tools) that are used in today’s technology.",
    desc2: "On a personal level, I am highly-motivated, result oriented, self-driven, hard-working, fast learner and constantly seeking to improve my skills and am fully aware of the latest Front-end Development Tools.",
    image: '/images/aboutMe.png',
    // image: '/images/default.png',
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
  {icon: <SiRedux />, label: 'Redux'},
  {icon: <SiGit />, label: 'Git'},
  {icon: <SiGithub />, label: 'Github'},
  {icon: <SiSass />, label: 'Sass/SCSS'},
  {icon: <SiWebflow />, label: 'Webflow'},
  {icon: <SiTypescript />, label: 'Typescript'},
]