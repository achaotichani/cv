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
    "Graphic Designer",
  summary:
    "A passionate & results-driven Marketing graduate with a strong focus on creative design. Well-groomed with a business-oriented mindset & the ability to access a wide range of resources thanks to my fluency in English and Japanese, my designs breathe unique ideas supported with careful research & critical thinking.",
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
      degree: "Multidisciplinary Design Program, Sole Awardee of the 50% Tuition Scholarship",
      start: "Nov 2023",
      end: "Dec 2024 (Expected)",
    },
    {
      school: "Ritsumeikan Asia Pacific University",
      degree: "Bachelor's Degree in Business Administration, CGPA 3.84",
      start: "2019",
      end: "2023",
    },
  ],
  work: [ 
    {
      company: "Japan-based Rakuten Software Engineer",
      link: "https://global.rakuten.com/corp/",
      badges: ["Remote"],
      title: "Personal Branding Assistant and Designer",
      logo: ParabolLogo, // this needs to be changed
      start: "Dec 2023",
      end: "Present",
      description: (
        <ul>
          <li>• Assisting in the development of a personal brand for a professional in the field of AI through designing personal branding materials such as designing posts, writing captions, and creating content for LinkedIn and blog posts.</li>
          <li>• Technologies: Adobe Illustrator, Adobe Photoshop, Figma.</li>
        </ul>
        )
      },
    {
      company: "Mitsubishi Fuso Truck and Bus Corporation",
      link: "https://www.mitsubishi-fuso.com/en/",
      badges: ["Hybrid"],
      title: "Internal Marketing and Media Production Intern",
      logo: ClevertechLogo,  // this needs to be changed
      start: "Apr 2023",
      end: "Aug 2023",
      description: (
        <ul>
          <li>• Conceptualized and created content for 3+ eLearning modules using Articulate 360, enhancing training accessibility for over 10,000 employees across the MFTBC network.</li>
          <li>• Collaborated directly with the department manager to optimize internal and promotional communication design using Adobe CC, resulting in improved visual consistency and messaging.</li>
          <li>• Developed and executed engaging media content and newsletters for both internal and external communication.</li>
          <li>• Technologies: Articulate 360, Adobe Illustrator, Adobe Photoshop.</li>
        </ul>
        )
      },
  ],
  skills: [
    "Adobe Illustrator",
    "Figma",
    "Adobe Photoshop",
    "Procreate",
  ],
  projects: [
    {
      title: "Sakura Card Captor OST",
      techStack: [
        "Graphic Design",
        "Personal Project",
        "Illustration",
        "Adobe Illustrator",
        "Adobe Photoshop",
      ],
      description: "A music album design project as a tribute to my favorite childhood animation \"Cardcaptor Sakura\"",
      logo: ConsultlyLogo, // this needs to be changed
      link: {
        label: "haningo.com/music-album-design-sakura-card-captor-ost", // pay attention to this, may not work
        href: "https://haningo.com/music-album-design-sakura-card-captor-ost",
      },
    },
    {
      title: "Poster Design Collection",
      techStack: [
        "Graphic Design",
        "Personal Project",
        "SNS Management",
        "Adobe Illustrator",
        "Adobe Photoshop",
        "Figma",
      ],
      description:
        "A series of posters for my design blog on Instagram to record my journey of being a multidisciplinary designer.",
      logo: MonitoLogo, // this needs to be changed
      link: {
        label: "instagram.com/_chaotic.visual_/", // pay attention to this, may not work
        href: "https://www.instagram.com/_chaotic.visual_/",
      },
    },
    {
      title: "haningo.com",
      techStack: [
        "Personal Website",
        "Graphic Design",
      ],
      description:
        "My personal website and blog to share my design journey and thoughts. I also use it as a platform to showcase my design projects and portfolio.",
      logo: JarockiMeLogo, // this needs to be changed
      link: {
        label: "haningo.com/",
        href: "https://haningo.com/",
      },
    },
  ],
} as const;
