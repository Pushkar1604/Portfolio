type TSection = {
  p: string;
  h2: string;
  content?: string;
  photo?: string; // Added photo property
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    certifications: TSection; // Added certifications to type
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Pushkar Singh",
    fullName: "Pushkar Singh",
    email: "pushkarishu2004@gmail.com",
  },
  hero: {
    name: "Pushkar Singh",
    p: ["I develop 3D visuals, user", "interfaces and web applications"],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `I'm a skilled software developer with experience in TypeScript and
      JavaScript, and expertise in frameworks like React, Node.js, and
      Three.js. I'm a quick learner and collaborate closely with clients to
      create efficient, scalable, and user-friendly solutions that solve
      real-world problems. Let's work together to bring your ideas to life!`,
      photo: "/pass_pic.png", // Added your photo - replace with your actual photo URL
    },
    experience: {
      p: "What I have done so far",
      h2: "Work Experience.",
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
    },
    certifications: { // Fixed to match TSection structure
      p: "My credentials", // Changed from subtitle to p
      h2: "Certifications", // Changed from title to h2
      content: "My professional certifications and achievements in blockchain development, cybersecurity, and full-stack development", // Optional content
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `Following projects showcases my skills and experience through
    real-world examples of my work. Each project is briefly described with
    links to code repositories and live demos in it. It reflects my
    ability to solve complex problems, work with different technologies,
    and manage projects effectively.`,
    photo: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg", // Added your photo - replace with your actual photo URL
    },
  },
};