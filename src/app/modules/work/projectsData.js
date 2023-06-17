const projects = [
  {
    id: 4,
    name: 'Soundclash',
    role: 'Software Engineer',
    description:
      'Utilizing the Spotify API, pit your top songs against each other in an elimination style tournament and find your favorite song amongst your favorites.',
    stack: [
      'React',
      'Typescript',
      'Spotify API',
      'Express.js',
      'Oauth 2.0',
      'TailwindCSS',
    ],
    link: 'https://github.com/kevinleaves/Soundclash',
    image: 'soundclash.png',
  },
  {
    id: 3,
    name: 'Harper',
    role: 'Software Engineer',
    description:
      'A content management platform designed for artists, empowering them to showcase their work effectively. Artists have full control over the featured video, can display their music videos, and share upcoming streams and tour dates, fostering direct connections with their fans.',
    stack: ['React', 'Redux', 'TailwindCSS', 'Firebase', 'Express.js'],
    link: 'https://github.com/kevinleaves/Harper-Woodward',
    image: 'harper_woodward.gif',
  },
  {
    id: 1,
    name: 'Mecca',
    role: 'Software Engineer',
    description:
      'A modern redesign of an e-commerce website. Accessed existing product data through RESTful API endpoints to display client product information. Created resusable, responsive components that adapt to various screen sizes.',
    stack: ['React', 'Javascript', 'CSS', 'Node.js', 'Express.js'],
    link: 'https://github.com/RFP-Coco/Mecca',
    image: 'Mecca.png',
  },
  {
    id: 2,
    name: 'Atelier',
    role: 'Software Engineer',
    description:
      "Deployed an RESTful API microservice capable of handling real-world traffic. Performed ETL process on 15 million+ rows of CSV data, loaded data into a deployed Amazon EC2 instance, then stress tested using Loader.io to validate the system's resilience under peak loads. Optimized by using NGINX to horizonally scale to improve response times and user experience.",
    stack: [
      'PostgreSQL',
      'Redis',
      'Node.js',
      'NGINX',
      'AWS EC2',
      'Loader.io',
      'k6',
      'Express.js',
    ],
    link: 'https://github.com/kevinleaves/sdc-products-api',
    image: 'loader.io.png',
  },
  {
    id: 5,
    name: 'Pomoquest',
    role: 'Software Engineer',
    description:
      'A production-ready, gamified pomodoro timer to improve productivity. Upon completion of any of the timers, user gains coins which you can use to improve the in-app experience. Deployed on Vercel & PlanetScale',
    stack: [
      'React',
      'TypeScript',
      'Next.js',
      'Clerk Auth',
      'TRPC',
      'Prisma ORM',
      'Material UI',
      'TailwindCSS',
    ],
    link: 'https://github.com/kevinleaves/pomoquest',
    link2: 'https://pomoquest.vercel.app',
    image: 'pomoquest.png',
  },
]

export default projects
