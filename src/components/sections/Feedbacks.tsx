import { motion } from "framer-motion";

import { styles } from "../../constants/styles";
import { fadeIn } from "../../utils/motion";
import { certifications } from "../../constants";
import { Header } from "../atoms/Header";
import { TCertification } from "../../types";
import { config } from "../../constants/config";

const CertificationCard: React.FC<{ index: number } & TCertification> = ({
  index,
  title,
  issuer,
  score,
  image,
  credentialLink,
  name, // Added name from TCommonProps
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 xs:w-[320px] w-full rounded-3xl p-10"
  >
    <p className="text-[48px] font-black text-white">"</p>

    <div className="mt-1">
      <p className="text-[18px] tracking-wider text-white">{title}</p>
      <p className="text-[14px] text-gray-400 mt-2">Issued by: {issuer}</p>
      {score && (
        <p className="text-[14px] text-green-400 mt-1">Score: {score}</p>
      )}

      <div className="mt-7 flex items-center justify-between gap-1">
        <div className="flex flex-1 flex-col">
          <p className="text-[16px] font-medium text-white">
            <span className="blue-text-gradient">✓</span> {name || issuer} {/* Use name if available, fallback to issuer */}
          </p>
          {credentialLink && (
            <a 
              href={credentialLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-secondary mt-1 text-[12px] hover:underline"
            >
              Verify Credential
            </a>
          )}
        </div>

        <img
          src={image}
          alt={`certificate-${name || title}`}
          className="h-10 w-10 rounded-full object-cover"
        />
      </div>
    </div>
  </motion.div>
);

const Certifications = () => {
  return (
    <div className="bg-black-100 mt-12 rounded-[20px]">
      <div
        className={`${styles.padding} bg-tertiary min-h-[300px] rounded-2xl`}
      >
        <Header useMotion={true} {...config.sections.certifications} />
      </div>
      <div
        className={`${styles.paddingX} -mt-20 flex flex-wrap gap-7 pb-14 max-sm:justify-center`}
      >
        {certifications.map((certification, index) => (
          <CertificationCard 
            key={certification.name || certification.title} // Use name or title as fallback
            index={index} 
            {...certification} 
          />
        ))}
      </div>
    </div>
  );
};

export default Certifications;