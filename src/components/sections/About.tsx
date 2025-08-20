// import React from "react";
// import Tilt from "react-parallax-tilt";
// import { motion } from "framer-motion";

// import { services } from "../../constants";
// import { SectionWrapper } from "../../hoc";
// import { fadeIn } from "../../utils/motion";
// import { config } from "../../constants/config";
// import { Header } from "../atoms/Header";

// interface IServiceCard {
//   index: number;
//   title: string;
//   icon: string;
// }

// const ServiceCard: React.FC<IServiceCard> = ({ index, title, icon }) => (
//   <Tilt
//     glareEnable
//     tiltEnable
//     tiltMaxAngleX={30}
//     tiltMaxAngleY={30}
//     glareColor="#aaa6c3"
//   >
//     <div className="max-w-[250px] w-full xs:w-[250px]">
//       <motion.div
//         variants={fadeIn("right", "spring", index * 0.5, 0.75)}
//         className="green-pink-gradient shadow-card w-full rounded-[20px] p-[1px]"
//       >
//         <div className="bg-tertiary flex min-h-[280px] flex-col items-center justify-evenly rounded-[20px] px-12 py-5">
//           <img
//             src={icon}
//             alt="web-development"
//             className="h-16 w-16 object-contain"
//           />

//           <h3 className="text-center text-[20px] font-bold text-white">
//             {title}
//           </h3>
//         </div>
//       </motion.div>
//     </div>
//   </Tilt>
// );

// const About = () => {
//   return (
//     <>
//       <Header useMotion={true} {...config.sections.about} />

//       <motion.p
//         variants={fadeIn("", "", 0.1, 1)}
//         className="text-secondary mt-4 max-w-3xl text-[17px] leading-[30px]"
//       >
//         {config.sections.about.content}
//       </motion.p>

//       <div className="mt-20 flex flex-wrap gap-10 max-sm:justify-center">
//         {services.map((service, index) => (
//           <ServiceCard key={service.title} index={index} {...service} />
//         ))}
//       </div>
//     </>
//   );
// };

// export default SectionWrapper(About, "about");


import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { services } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";

// Import your photo - make sure the path is correct
import myPhoto from "../../assets/pass_pic.png";

interface IServiceCard {
  index: number;
  title: string;
  icon: string;
}

const ServiceCard: React.FC<IServiceCard> = ({ index, title, icon }) => (
  <Tilt
    glareEnable
    tiltEnable
    tiltMaxAngleX={30}
    tiltMaxAngleY={30}
    glareColor="#aaa6c3"
  >
    <div className="max-w-[250px] w-full xs:w-[250px]">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="green-pink-gradient shadow-card w-full rounded-[20px] p-[1px]"
      >
        <div className="bg-tertiary flex min-h-[280px] flex-col items-center justify-evenly rounded-[20px] px-12 py-5">
          <img
            src={icon}
            alt="web-development"
            className="h-16 w-16 object-contain"
          />

          <h3 className="text-center text-[20px] font-bold text-white">
            {title}
          </h3>
        </div>
      </motion.div>
    </div>
  </Tilt>
);

const About = () => {
  return (
    <div className="relative">
      <Header useMotion={true} {...config.sections.about} />

      <div className="flex flex-col md:flex-row items-start gap-10 mt-8">
        {/* Photo Section */}
        <motion.div
          variants={fadeIn("right", "spring", 0.5, 0.75)}
          className="flex justify-center md:block"
        >
          <div className="relative">
            <div className="green-pink-gradient p-1 rounded-full shadow-card">
              <div className="bg-tertiary rounded-full p-2 flex justify-center items-center">
                <img
                  src={myPhoto}
                  alt="Pushkar Singh"
                  className="rounded-full w-56 h-56 object-cover border-4 border-[#151030]"
                  onError={(e) => {
                    // Fallback in case image fails to load
                    console.error("Image failed to load:", e);
                    e.currentTarget.src = "https://placehold.co/224x224/151030/FFFFFF?text=Pushkar+Singh";
                  }}
                />
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full green-pink-gradient"></div>
            <div className="absolute -bottom-2 -left-2 w-8 h-8 rounded-full green-pink-gradient"></div>
          </div>
        </motion.div>

        {/* Content Section */}
        <motion.div
          variants={fadeIn("left", "spring", 0.5, 0.75)}
          className="flex-1"
        >
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="text-secondary text-[18px] leading-[32px]"
          >
            {config.sections.about.content}
          </motion.p>
          
          {/* Additional info section */}
          <motion.div 
            variants={fadeIn("up", "spring", 0.7, 0.75)}
            className="mt-6 p-4 rounded-xl bg-[#15103080] border border-[#7042f861]"
          >
            <h3 className="text-white text-xl font-bold mb-2">What I Do</h3>
            <ul className="text-secondary list-disc pl-5 space-y-1">
              <li>Full-stack web development with modern frameworks</li>
              <li>Creating interactive 3D visuals and user interfaces</li>
              <li>Building scalable and efficient solutions</li>
              <li>Collaborating with clients to bring ideas to life</li>
            </ul>
          </motion.div>
        </motion.div>
      </div>

      <div className="mt-20 flex flex-wrap gap-10 max-sm:justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");