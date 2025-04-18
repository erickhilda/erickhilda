import type { Portfolio } from '@/types'

export const portfolios: Portfolio = {
  project: [
    {
      name: 'Unsur',
      desc: 'An interactive periodic table web app with clickable elements and animated atomic models, built to explore data visualization and user interaction.',
      link: 'https://unsur.vercel.app',
      image: '/images/unsur-preview.gif',
      repo: 'https://github.com/erickhilda/unsur',
      tools: ['NextJs', 'Typescript', 'Three.Js', 'Tailwindcss', 'D3'],
    },
    {
      name: 'erickhilda.com',
      desc: 'My digital space for sharing thoughts, showcasing projects, and building a personal brand.',
      link: 'https://erickhilda.com',
      image: '/images/personal-blog-preview.png',
      repo: 'https://github.com/erickhilda/erickhilda',
      tools: ['Vue', 'Typescript', 'Markdown', 'Tailwindcss'],
    },
    {
      name: 'Furniture Configurator',
      desc: 'A 3D interactive web app featuring a customizable couch, built to demonstrate my skills in creative programming and real-time visual interaction using 3D web technologies.',
      link: 'https://honey-jar.vercel.app',
      image: '/images/furniture-configurator.gif',
      repo: 'https://github.com/erickhilda/furniture-configurator',
      tools: ['NextJs', 'Typescript', 'Three.Js', 'Tailwindcss'],
    },
  ],
  'work-experience': [
    {
      company: 'Trustmedis',
      position: 'Software Engineer',
      period: 'Dec 2023–Mar 2025',
      description:
        'Managing the frontend team for an HR management system tailored for healthcare, contribute to modernizing legacy systems into modular solutions, and drive frontend strategy for scalable, user-friendly interfaces.',
    },
    {
      company: 'Agri Sparta',
      position: 'Fullstack Engineer',
      period: 'Aug 2023–Feb 2024',
      description:
        'led the development of a web platform from the ground up, using Supabase for the backend and working closely with product and DevOps teams to ensure a smooth, scalable launch.',
    },
    {
      company: 'Alterra Academy x Kampus Merdeka',
      position: 'Mentor Frontend Engineer',
      period: 'Apr 2022–Jul 2022',
      description:
        'I mentored students in frontend engineering with Vue.js, guiding them through a real-world project to build technical and teamwork skills—an experience that sharpened my own mentorship abilities and deepened my passion for growing new talent.',
    },
    {
      company: 'Ajaib',
      position: 'Web Frontend Engineer',
      period: 'Jan 2022–Oct 2023',
      description:
        'Worked on premium features for Ajaib Prime, led early development for a Play-to-Earn project, improved UI components and performance, and contributed to a stock chart revamp that boosted user engagement.',
    },
    {
      company: 'Bonza',
      position: 'Frontend Engineer',
      period: 'Jul 2020–Dec 2021',
      description:
        'Help built UIs for creating data pipelines, ML models, and SQL queries, developed fraud investigation tools, and helped launch a Jupyter-based workspace for collaborative analytics.',
    },
    {
      company: 'Lanius Inovasi Indonesia',
      position: 'Frontend Engineer',
      period: 'Aug 2018–Sep 2019',
      description:
        'Worked with Indonesian companies on Industry 4.0 initiatives, building scalable Vue/Nuxt apps, designing micro-frontend architecture for MES, and creating SIM tools to boost productivity while maintaining workforce engagement.',
    },
  ],
}
