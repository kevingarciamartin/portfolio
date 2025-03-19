import doremir from "../../img/work/doremir_logo.png";
import playlistManager from "../../img/work/playlist-manager.png";
import chess50 from "../../img/work/chess50.png";
import fjordsmaken from "../../img/work/fjordsmaken_5.7.png";

export const workData = [
  {
    name: "Doremir Music Research",
    role: "Internship",
    stack: ["React"],
    description: [
      "I developed the company React dashboard for internal statistics by continously fetching new relevant data from their API and implementing new pages, charts and tables.",
      "In addition, I analyzed the UI of one of the company's products for Windows and implemented the corresponding design in React for an upcoming hybrid application. In conjuction, I did a refactoring of the project where I removed Bootstrap, to more easily be able to implement the specific design from the computer version.",
    ],
    image: {
      src: doremir,
      alt: "Doremir Music Research's logo",
      viewTransitionName: "doremir-img",
    },
    link: {
      text: "doremir.com",
      href: "https://doremir.com/",
    },
  },
  {
    name: "Chess50",
    stack: ["Flask", "Python", "JavaScript", "SQLite"],
    description: [
      "A mini-clone application of the popular website chess.com, using their public API for various features. Authentication is implemented with an SQL database to store users.",
      "Features inlude:",
      "- playing chess against an engine (Stockfish 17) with take-back moves, engine moves on demand and flipping the board,",
      "- solving chess.com's Daily Puzzle,",
      "- keeping track of the leaderboards for the most popular time controls,",
      "- and searching for valid chess.com usernames to get their profile information and game statistics.",
    ],
    image: {
      src: chess50,
      alt: "Chess50's homepage",
      viewTransitionName: "chess50-img",
    },
    link: {
      text: "chess50-dde8edd06871.herokuapp.com",
      href: "https://chess50-dde8edd06871.herokuapp.com/",
    },
  },
  {
    name: "Playlist Manager",
    stack: ["React", "Framer Motion"],
    description: [
      "A React web application that integrates with the Spotify API, allowing users to seamlessly manage their playlists and explore music. The primary goal is to provide an interactive, user-friendly interface that enhances the music experience by integrating playlist management, discovery, and playback into one seamless app.",
      "Features include: ",
      "- Authentication: Log in with Spotify to access user data",
      "- Routing: Implemented using React Router for smooth navigation",
      "- Spotify Data Integration: Fetch playlists, tracks, and recommendations directly from Spotify",
      "- Playlist Management: Create, edit, and delete playlists",
      "- Music Playback: Play and pause music using the Spotify Web Playback SDK",
      "- Search Functionality: Find Spotify playlists based on keywords",
      "- Personalized Recommendations: Get suggested playlists based on favorite genres.",
      "The application requires you to be whitelisted to be able to log in. Contact me for a live demo."
    ],
    image: {
      src: playlistManager,
      alt: "Playlist Manager's homepage",
    },
    link: {
      text: "the-playlist-manager.netlify.app",
      href: "https://the-playlist-manager.netlify.app/",
    },
  },
  {
    name: "Fjordsmaken",
    stack: ["Webpack", "JavaScript"],
    description: [
      "A concept of what a single page restaurant website could look like.",
    ],
    image: {
      src: fjordsmaken,
      alt: "Fjordsmaken's homepage",
      viewTransitionName: "fjordsmaken-img",
    },
    link: {
      text: "kevingarciamartin.github.io/restaurant-page",
      href: "https://kevingarciamartin.github.io/restaurant-page/",
    },
  },
];
