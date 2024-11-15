import { useEffect } from "react";
import { motion } from "framer-motion";
import ProfileCard from "../ProfileCard";
import { fadeIn } from "../Variants";

const socialMediaProfiles = [
  {
    platform: "Instagram",
    coverImage: "https://d2oe4z990jupbo.cloudfront.net/Artist@work.jpg",
    displayImage: "https://d2oe4z990jupbo.cloudfront.net/smartist.JPG",
    link: "https://www.instagram.com/artist-profile/",
    title: "Follow on Instagram",
  },
  {
    platform: "TikTok",
    coverImage: "https://d2oe4z990jupbo.cloudfront.net/Artist@work.jpg",
    displayImage: "/smartist.JPG",
    link: "https://www.tiktok.com/@artist-profile",
    title: "Follow on TikTok",
  },
  {
    platform: "Pinterest",
    coverImage: "https://d2oe4z990jupbo.cloudfront.net/Artist@work.jpg",
    displayImage: "/smartist.JPG",
    link: "https://www.pinterest.com/artist-profile/",
    title: "Follow on Pinterest",
  },
  {
    platform: "Behance",
    coverImage: "https://d2oe4z990jupbo.cloudfront.net/Artist@work.jpg",
    displayImage: "/smartist.JPG",
    link: "https://www.behance.net/artist-profile",
    title: "Follow on Behance",
  },
  {
    platform: "DeviantArt",
    coverImage: "https://d2oe4z990jupbo.cloudfront.net/Artist@work.jpg",
    displayImage: "/smartist.JPG",
    link: "https://www.deviantart.com/artist-profile",
    title: "Follow on DeviantArt",
  },
];

const SocialMediaProfiles = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <main className="relative sm:-top-[100px]">
        <header className="header-container text-gray-200 relative sm:py-[200px]">
          <div className="mx-3">
            <motion.h1 
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.1 }} className="sm:text-4xl text-center">
              {" "}
              Follow and Subscribe on all Social Media Platforms
            </motion.h1>
          </div>
        </header>
        <div className="max-w-7xl sm:px-5 md:p-6 lg:px-10 py-[100px] flex flex-col sm:gap-[50px]">
          <h1 className="text-3xl font-bold mb-4 sm:text-center ">
            Social Media Profiles
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {socialMediaProfiles.map((profile, index) => (
              <motion.div
                variants={fadeIn("up", 0.5)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.1 }}
                key={index}
                className="bg-white shadow-md rounded-lg p-4"
              >
                <a
                  href={profile.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ProfileCard
                    coverImage={profile.coverImage}
                    displayImage={profile.displayImage}
                    name={profile.platform}
                    title={profile.title}
                  />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default SocialMediaProfiles;
