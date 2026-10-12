import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/axios";
import { useLocation} from "react-router-dom";

export default function Navbar() {

  const [announcement, setAnnouncement] = useState("Loading...");
  const location = useLocation();
  const isAboutPage = location.pathname === "/about";

  useEffect(() => {
    api.get("/settings/announcement")
      .then(res => setAnnouncement(res.data.announcement))
      .catch(() => setAnnouncement("✨ Welcome to FX Algo"));
  }, []);

  return (
    <header className="w-full">

      {/* OFFER BAR */}
      <a
        href="#products"
        className="block h-10 bg-[#6b3f14] text-yellow-300 flex items-center justify-center text-sm font-medium
                   cursor-pointer hover:bg-[#7a4a1c] transition"
      >
        {announcement}
      </a>

      {/* WHITE BAR */}
      <div className="bg-white h-10 flex items-center justify-between px-10 border-b border-gray-200">

      



{/* LEFT */}
<Link
  to="/about"
  style={{ cursor: "pointer" }}
  className="
    group relative isolate
    inline-flex items-center justify-center
    shrink-0 whitespace-nowrap
    px-3 sm:px-4 py-2
    text-xs sm:text-sm font-semibold tracking-wide
    text-[#352719]
    !cursor-pointer select-none
    transition-colors duration-200
    hover:text-[#9a641c]
    focus-visible:outline-none
    focus-visible:ring-2 focus-visible:ring-yellow-600
    [&_*]:!cursor-pointer
  "
>
  {/* Brush background */}
  <span
    aria-hidden="true"
    className="
      pointer-events-none
      absolute inset-x-0 top-1/2 -translate-y-1/2
      h-7 sm:h-8
      -rotate-2
      bg-[#4b596e]
      opacity-90
      [clip-path:polygon(5%_18%,18%_8%,35%_13%,52%_5%,72%_12%,94%_7%,88%_24%,100%_38%,91%_55%,97%_70%,79%_76%,61%_88%,39%_82%,18%_94%,4%_79%,9%_61%,0%_43%)]
      transition-all duration-200
      group-hover:rotate-0
      group-hover:opacity-100
    "
  />

  <span className="relative z-10 !cursor-pointer text-white">
    About Us
  </span>
</Link>





{/* Breadcrumb: only visible on About page */}
{isAboutPage && (
  <nav
    aria-label="Breadcrumb"
    className="
      flex items-center gap-2.5 sm:gap-3
      ml-2 sm:ml-4
      whitespace-nowrap
      text-sm sm:text-base
      font-medium
      select-none
    "
  >
    <Link
      to="/"
      style={{ cursor: "pointer" }}
      className="
        inline-flex items-center gap-1.5
        !cursor-pointer
        text-gray-700
        hover:text-amber-700
        transition-colors duration-200
        [&_*]:!cursor-pointer
      "
    >
      <svg
        // xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-4 h-4 sm:w-5 sm:h-5 pointer-events-none"
        aria-hidden="true"
      >
        <path d="m3 10 9-7 9 7" />
        <path d="M5 9v12h14V9" />
        <path d="M9 21v-8h6v8" />
      </svg>

      <span className="pointer-events-none">Home</span>
    </Link>

    <span
      className="text-gray-400 pointer-events-none"
      aria-hidden="true"
    >
      /
    </span>

    <span
      aria-current="page"
      className="
        text-amber-800
        font-bold
        pointer-events-none
      "
    >
      About
    </span>
  </nav>
)}


        {/* RIGHT: SOCIAL ICONS */}
        <div className="flex gap-4 items-center">
          <a href="https://www.facebook.com/share/1AYLJsFUxz/" target="_blank" rel="noopener noreferrer">
            <img src="/fb.png" alt="Facebook" className="w-8 h-8 cursor-pointer hover:scale-110 transition" />
          </a>

          <a href="https://www.instagram.com/fxalgo1?igsh=MThtczE5eDJmZ2Z0aA==" target="_blank" rel="noopener noreferrer">
            <img src="/insta.png" alt="Instagram" className="w-8 h-8 cursor-pointer hover:scale-110 transition" />
          </a>

          <a href="https://youtube.com/@fxalgo-g2o?si=TEMhTZ3b1fd0m_ZB" target="_blank" rel="noopener noreferrer">
            <img src="/yt.png" alt="YouTube" className="w-10 h-10 cursor-pointer hover:scale-110 transition" />
          </a>

          <a href="https://whatsapp.com/channel/0029VbAOm4b0gcfO8W7d7l2J" target="_blank" rel="noopener noreferrer">
            <img src="/whatsapp.png" alt="WhatsApp" className="w-8 h-8 cursor-pointer hover:scale-110 transition" />
          </a>

          <a href="https://t.me/fxalgofficial" target="_blank" rel="noopener noreferrer">
            <img src="/telegram.png" alt="Telegram" className="w-8 h-8 cursor-pointer hover:scale-110 transition" />
          </a>
            
        </div>

      </div>
    </header>
  );
}
