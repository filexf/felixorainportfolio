export interface ProjectImage {
  src: string;
  alt: string;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  githubLink: string;
  websiteLink: string;
  images?: ProjectImage[];
}

// Project data
export const projects: Project[] = [
  {
    title: "lifoAI",
    description: "lifoAI",
    image: "/images/Photo-projets-dev/LIFO-Logo-light-BG.png",
    githubLink: "https://github.com/lifo-ai",
    websiteLink: "https://lifo-app.com",
  },
  {
    title: "gis",
    description: "gis",
    image: "/images/Photo-projets-dev/Web_Gis_Cover_Picture.jpg",
    githubLink: "https://github.com/filexf/webGIS-app",
    websiteLink: "https://data-visualizer-mocha.vercel.app/",
    images: [
      {
        src: "/images/Screenshots-GIS-Project/WebGIS-project-screenshot-1.jpg",
        alt: "Screenshot 1",
      },
      {
        src: "/images/Screenshots-GIS-Project/WebGIS-project-screenshot-2.jpg",
        alt: "Screenshot 2",
      },
    ],
  },
  {
    title: "portfolio",
    description: "portfolio",
    image: "/images/Photo-GGB/Photo_GGB_Squared.jpg",
    githubLink: "https://github.com/filexf/felixorainportfolio",
    websiteLink: "https://www.felix-orain.com",
  },
  {
    title: "carbonSavings",
    description: "carbonSavings",
    image: "/images/Photo-projets-dev/Carbon_Savings_simulator.jpg",
    githubLink: "https://github.com/filexf/carbon-savings-simulator",
    websiteLink: "https://carbon-savings-simulator.vercel.app/",
    images: [
      {
        src: "/images/Screenshots-Carbon-Savings-Simulator/Carbon_savings_screenshot-1.jpg",
        alt: "Screenshot 1",
      },
      {
        src: "/images/Screenshots-Carbon-Savings-Simulator/Carbon_savings_screenshot-2.jpg",
        alt: "Screenshot 2",
      },
    ],
  },
  {
    title: "movieWatchlist",
    description: "movieWatchlist",
    image: "/images/Photo-projets-dev/Watchlist_Cover.jpg",
    githubLink: "https://github.com/filexf/movies-watchlist",
    websiteLink: "https://movies-watchlist.vercel.app/",
    images: [
      {
        src: "/images/Screenshots-Watchlist/Watchlist-Screenshot-1.jpg",
        alt: "Screenshot 1",
      },
      {
        src: "/images/Screenshots-Watchlist/Watchlist-Screenshot-2.jpg",
        alt: "Screenshot 2",
      },
      {
        src: "/images/Screenshots-Watchlist/Watchlist-Screenshot-3.jpg",
        alt: "Screenshot 3",
      },
      {
        src: "/images/Screenshots-Watchlist/Watchlist-Screenshot-4.jpg",
        alt: "Screenshot 4",
      },
      {
        src: "/images/Screenshots-Watchlist/Watchlist-Screenshot-5.jpg",
        alt: "Screenshot 5",
      },
    ],
  },
  {
    title: "sportify",
    description: "sportify",
    image: "/images/Photo-projets-dev/Photo_Couverture_Sportify.png",
    githubLink: "https://github.com/filexf/sportify",
    websiteLink: "#",
    images: [
      {
        src: "/images/Screenshots-Sportify/Screenshots-Sportify-1.jpg",
        alt: "Screenshot 1",
      },
      {
        src: "/images/Screenshots-Sportify/Screenshots-Sportify-2.jpg",
        alt: "Screenshot 2",
      },
      {
        src: "/images/Screenshots-Sportify/Screenshots-Sportify-3.jpg",
        alt: "Screenshot 3",
      },
      {
        src: "/images/Screenshots-Sportify/Screenshots-Sportify-4.jpg",
        alt: "Screenshot 4",
      },
      {
        src: "/images/Screenshots-Sportify/Screenshots-Sportify-5.jpg",
        alt: "Screenshot 5",
      },
      {
        src: "/images/Screenshots-Sportify/Screenshots-Sportify-6.jpg",
        alt: "Screenshot 6",
      },
      {
        src: "/images/Screenshots-Sportify/Screenshots-Sportify-7.jpg",
        alt: "Screenshot 7",
      },
      {
        src: "/images/Screenshots-Sportify/Screenshots-Sportify-8.jpg",
        alt: "Screenshot 8",
      },
    ],
  },
  {
    title: "tymouet",
    description: "tymouet",
    image: "/images/Photo-projets-dev/Photo_Ty_Mouet.jpg",
    githubLink: "https://github.com/filexf/ty-mouet",
    websiteLink: "https://ty-mouet-c5897a5b74b0.herokuapp.com/",
    images: [
      {
        src: "/images/Screenshots-Tymouet/Tymouet-screenshot-1.jpeg",
        alt: "Screenshot 1",
      },
      {
        src: "/images/Screenshots-Tymouet/Tymouet-screenshot-2.jpeg",
        alt: "Screenshot 2",
      },
      {
        src: "/images/Screenshots-Tymouet/Tymouet-screenshot-3.jpeg",
        alt: "Screenshot 3",
      },
      {
        src: "/images/Screenshots-Tymouet/Tymouet-screenshot-4.jpeg",
        alt: "Screenshot 4",
      },
      {
        src: "/images/Screenshots-Tymouet/Tymouet-screenshot-5.jpeg",
        alt: "Screenshot 5",
      },
      {
        src: "/images/Screenshots-Tymouet/Tymouet-screenshot-6.jpeg",
        alt: "Screenshot 6",
      },
      {
        src: "/images/Screenshots-Tymouet/Tymouet-screenshot-7.jpeg",
        alt: "Screenshot 7",
      },
      {
        src: "/images/Screenshots-Tymouet/Tymouet-screenshot-8.jpeg",
        alt: "Screenshot 8",
      },
      {
        src: "/images/Screenshots-Tymouet/Tymouet-screenshot-9.jpeg",
        alt: "Screenshot 9",
      },
    ],
  },
];
