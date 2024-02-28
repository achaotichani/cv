import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { BehanceIcon, LinkedInIcon, InstagramIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Hani Ngo",
  initials: "HA",
  location: "Ho Chi Minh City, Vietnam",
  locationLink: "https://www.google.com/maps/place/Ho+Chi+Minh+City,+Vietnam/",
  about:
    "A passionate and results-driven Marketing graduate with a strong focus on digital marketing, media planning, and creative design.",
  summary:
    "I excel at implementing innovative strategies to improve brand presence, drive engagement, and deliver results. With a proven track record in SEO analysis, social media optimization, and project management, I have experience collaborating with diverse teams to achieve goals.",
  avatarUrl: "https://media.licdn.com/dms/image/D5603AQGtJNXma9noJQ/profile-displayphoto-shrink_800_800/0/1693970843623?e=1714608000&v=beta&t=Pi4wEjLsSLA5m0L2j0WAgEA2ELEClKYto-SO1XNgmME",
  personalWebsiteUrl: "https://haningo.com/",
  contact: {
    email: "hani@haningo.com",
    tel: "+84 98 5002 402",
    social: [
      {
        name: "Behance",
        url: "https://www.behance.net/haningo/",
        icon: BehanceIcon, 
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/haningo2608/",
        icon: LinkedInIcon,
      },
      {
        name: "Instagram", 
        url: "https://www.instagram.com/_chaotic.visual_/",
        icon: InstagramIcon,
      },
    ],
  },
  education: [
    {
      school: "Design Anthropology School",
      badges: ["Ho Chi Minh City, Vietnam"],
      url: "https://das.info.vn/"
      degree: "Multidisciplinary Design Program, Sole Awardee of the 50% Tuition Scholarship",
      start: "November 2023",
      end: "December 2024 (Expected)",
    },
    {
      school: "Ritsumeikan Asia Pacific University",
      badges: ["Beppu, Japan"],
      url: "https://en.apu.ac.jp/home/"
      degree: "Bachelor's Degree in Business Administration, CGPA 3.84",
      start: "2019",
      end: "2023",
    },
  ],
  work: [ 
    {
      company: "Sumit Pokharel",
      link: "https://linkedin.com/in/sumit-pokharel/",
      badges: ["Remote"],
      title: "Personal Branding Assistant and Designer",
      logo: ParabolLogo,
      start: "2023",
      end: "Present",
      description:
        "Assisting in the development of a personal brand for a professional in the field of AI through designing personal branding materials such as designing posts, writing captions, and creating content for LinkedIn and blog posts. Technologies: Adobe Illustrator, Adobe Photoshop, Figma.",
    },
    {
      company: "Mitsubishi Fuso Truck and Bus Corporation",
      link: "https://www.mitsubishi-fuso.com/en/",
      badges: ["Hybrid"],
      title: "Internal Marketing and Media Production Intern",
      logo: ClevertechLogo,
      start: "April 2023",
      end: "August 2023",
      description:
        "• Conceptualized and created content for 3+ eLearning modules using Articulate 360, enhancing training accessibility for over 10,000 employees across the MFTBC network.\n• Collaborated directly with the department manager to optimize internal and promotional communication design using Adobe CC, resulting in improved visual consistency and messaging.\n• Developed and executed engaging media content and newsletters for both internal and external communication.",
    },
  ],
  skills: [
    "Illustrator",
    "Figma",
    "Photoshop",
    "Procreate",
  ],
  projects: [
    {
      title: "Consultly",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Vite",
        "GraphQL",
        "WebRTC",
      ],
      description: "A platform to build and grow your online business",
      logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
    {
      title: "Monito",
      techStack: ["Side Project", "TypeScript", "Next.js", "Browser Extension"],
      description:
        "Browser extension that records everything happening in a web application",
      logo: MonitoLogo,
      link: {
        label: "monito.dev",
        href: "https://monito.dev/",
      },
    },
    {
      title: "Jarocki.me",
      techStack: ["Side Project", "Next.js", "MDX"],
      description:
        "My personal website and blog. Built with Next.js and Notion API",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://jarocki.me/",
      },
    },
    {
      title: "Minimal",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Minimalist calendars, habit trackers and planners generator",
      logo: Minimal,
      link: {
        label: "useminimal.com",
        href: "https://useminimal.com/",
      },
    },
    {
      title: "Barepapers",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Generates beautiful wallpapers using random shapes and gradients",
      logo: BarepapersLogo,
      link: {
        label: "barepapers.com",
        href: "https://barepapers.com/",
      },
    },
    {
      title: "Year progress",
      techStack: ["Side Project", "TypeScript", "Next.js"],
      description: "Tracks current year progress and displays a countdown",
      logo: YearProgressLogo,
      link: {
        label: "getyearprogress.com",
        href: "https://getyearprogress.com/",
      },
    },
    {
      title: "Parabol",
      techStack: [
        "Full Stack Developer",
        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "The Agile meeting co-pilot that delivers better meetings with less effort",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://parabol.co/",
      },
    },
    {
      title: "Evercast",
      techStack: [
        "Lead Frontend Developer",

        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "Creative collaboration platform that combines video conferencing and HD media streaming",
      logo: EvercastLogo,
      link: {
        label: "evercast.us",
        href: "https://www.evercast.us/",
      },
    },
    {
      title: "Mobile Vikings",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for leading virtual mobile operator in Poland",
      logo: MobileVikingsLogo,
      link: {
        label: "mobilevikings.pl",
        href: "https://mobilevikings.pl/",
      },
    },
    {
      title: "Howdy",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Howdy is a place for you to join communities you care about",
      logo: Howdy,
      link: {
        label: "play.google.com",
        href: "https://howdy.co/",
      },
    },
    {
      title: "Tastycloud",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for managing and displaying restaurant menus in kiosk mode",
      logo: TastyCloudLogo,
      link: {
        label: "tastycloud.fr",
        href: "https://www.tastycloud.fr/",
      },
    },
    {
      title: "Ambit",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with sharing your contact details",
      logo: AmbitLogo,
    },
    {
      title: "Bim",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with booking a table in a restaurants",
      logo: BimLogo,
    },
    {
      title: "Canal Digital GO",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Video streaming mobile application for Canal Digital subscribers",
      logo: CDGOLogo,
    },
  ],
} as const;
