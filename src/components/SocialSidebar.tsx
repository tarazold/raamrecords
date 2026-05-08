import { SiSpotify, SiInstagram, SiX, SiYoutube } from "react-icons/si";

const SocialSidebar = () => {
  const socialLinks = [
    {
      icon: SiSpotify,
      href: "https://open.spotify.com/artist/2u9drGMWG4VhfZ3tJTvAn4",
      label: "Spotify",
      color: "hover:text-[#1DB954]"
    },
    {
      icon: SiInstagram,
      href: "https://www.instagram.com/_raam96/",
      label: "Instagram",
      color: "hover:text-[#E4405F]"
    },
    {
      icon: SiX,
      href: "https://twitter.com/raam_records",
      label: "X (Twitter)",
      color: "hover:text-white"
    },
    {
      icon: SiYoutube,
      href: "https://www.youtube.com/@raam-records",
      label: "YouTube",
      color: "hover:text-[#FF0000]"
    },
  ];

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-6">
      {socialLinks.map((social, index) => (
        <a
          key={index}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          className={`text-white/50 transition-all duration-300 ${social.color} hover:scale-110`}
        >
          <social.icon className="w-[18px] h-[18px]" />
        </a>
      ))}
      <div className="w-px h-12 bg-white/15 mx-auto mt-2" />
    </div>
  );
};

export default SocialSidebar;
