import SpinningModel from "../islands/SpinningModel.tsx";
import TypingAnimation from "../islands/TypingAnimation.tsx";
import { Icon, loadIcons } from "@iconify-icon/react";
import Wave from "../components/Wave.tsx";

// preload icons
loadIcons([
  "mdi:graduation-cap",
  "logos:mysql",
  "tabler:calendar-filled",
  "carbon:location-filled",
  "mdi:flower",
  "mdi:hard-hat",
  "mdi:motorbike",
  "vscode-icons:file-type-js-official",
  "vscode-icons:file-type-js-official",
  "logos:html-5",
  "logos:css-3",
  "logos:php",
  "logos:typescript-icon",
  "skill-icons:react-dark",
  "devicon:nextjs",
  "skill-icons:nuxtjs-dark",
  "logos:nestjs",
  "logos:fresh",
  "skill-icons:laravel-dark",
  "skill-icons:tailwindcss-dark",
  "devicon:nodejs",
  "vscode-icons:file-type-mongo",
  "logos:postgresql",
  "logos:mariadb-icon",
  "skill-icons:cassandra-light",
  "skill-icons:docker",
]);

function Hero() {
  return (
    <section class="p-4 flex justify-evenly items-center flex-wrap">
      <div class="max-w-sm mt-8">
        <h1 class="text-4xl font-bold text-primary">
          <TypingAnimation
            strings={[
              'Hi my name is Sam!',
              "I'm a developer.",
              'Hi my name is Sam!',
              "I'm a Graphic Designer.",
            ]}
            autoStart={true}
          />
        </h1>
        <p class="text-xl mt-4">
        Hi! im Sammuel B. Lera a 4th-year IT student from the Polytechnic University of the Philippines, passionate about technology, web development, and graphic design.
        </p>
      </div>
      <SpinningModel />
    </section>
  );
}

interface Value {
  title: string;
  description: string;
  image: string;
}

function Values() {
  const values: Value[] = [
    {
      title: "Focused on Gaining Practical IT Experience",
      description:
        "Eager to apply my skills and contribute to innovative projects, Ready to gain hands-on experience and enhance my technical expertise in a dynamic IT environment.",
      image: "/img/sam1.jpg",
    },
    {
      title: "Passionate about emerging technologies and continuous learning.",
      description:
        "I stay ahead of industry trends, constantly exploring new technologies to enhance my skills and innovate solutions.",
      image: "/img/sam3.jpg",
    },
    {
      title: "Collaboration and Communication",
      description:
        "I excel in team environments and communicate effectively with stakeholders.",
      image: "/img/sam2.jpg",
    },
  ];

  return (
    <>
      <Wave flip={false} />
      <section class="p-4 flex justify-center items-center gap-4 flex-wrap bg-primary">
        {values.map((value, i) => (
          <div
            class={"card md:h-auto md:max-w-64 bg-base-100 flex-row md:flex-col shadow-lg" +
              (i % 2 ? " md:-translate-y-8" : "")}
          >
            <figure class="w-1/3 md:h-48 md:w-auto rounded-none rounded-l-box md:rounded-none md:rounded-t-box">
              <img
                class="w-full h-full object-cover"
                src={value.image}
                alt={value.title}
              />
            </figure>
            <div class="card-body w-2/3 md:w-auto">
              <h2 class="card-title">{value.title}</h2>
              <p>{value.description}</p>
            </div>
          </div>
        ))}
      </section>
      <Wave flip={true} />
    </>
  );
}

interface Experience {
  title: string;
  company: string;
  timePeriod: string;
  location: string;
}

function Experience() {
  const experiences: Experience[] = [
    {
      title: "Polytechnic University of the Philippines",
      company: "Bachelor of Science in Information Technology",
      timePeriod: "2021 - Present",
      location: "Sta. Mesa, Manila",
    },
    {
      title: "Polytechnic University of the Philippines",
      company: "Senior High",
      timePeriod: "2019 - 2021",
      location: "Sta. Mesa, Manila",
    },
  ];

  return (
    <section class="p-4 flex flex-wrap-reverse justify-evenly items-center gap-4">
      <div class="flex flex-col">
        {experiences.map((experience, i) => (
          <>
            {i > 0 &&
              (
                <div class="flex flex-col gap-2 ml-8 my-2">
                  {[...Array(3)].map(() => (
                    <span className="w-1 aspect-square bg-gray-500 rounded-full" />
                  ))}
                </div>
              )}

            <div class="card">
              <div class="card-body p-4">
                <h2 class="card-title">{experience.title}</h2>
                <span class="flex items-center gap-2 text-gray">
                  <Icon
                    icon="mdi:graduation-cap"
                    width="none"
                    height="none"
                  />
                  {experience.company}
                </span>
                <span class="flex items-center gap-2 text-gray">
                  <Icon
                    icon="tabler:calendar-filled"
                    width="none"
                    height="none"
                  />
                  {experience.timePeriod}
                </span>
                <span class="flex items-center gap-2 text-gray">
                  <Icon
                    icon="carbon:location-filled"
                    width="none"
                    height="none"
                  />
                  {experience.location}
                </span>
              </div>
            </div>
          </>
        ))}
      </div>
      <h1 class="text-3xl font-bold text-primary">Academic Background</h1>
    </section>
  );
}

interface Project {
  title: string;
  description: string;
  link: string;
  type: string;
  icon: string;
}

function Projects() {
  const projects: Project[] = [
    {
      title: "Floresette",
      description:
        "Floressette is an e-commerce platform for flowers, offering an interactive bouquet builder with real-time pricing, data-driven flower trends, multiple delivery options, and a seamless checkout experience.",
      link: "https://github.com/SammLera/Floressette",
      type: "Academic Project",
      icon: "mdi:flower",
    },
    {
      title: "Philsafe Inc.",
      description:
        "PhilSafety is an e-commerce platform for industrial safety equipment, featuring an intuitive interface for seamless browsing and purchasing, real-time inventory updates, and secure payment processing.",
      link: "https://philsafety.co",
      type: "Work Project",
      icon: "mdi:hard-hat",
    },
    {
      title: "TrackCycle",
      description:
        "This mobile and web loan management system offers real-time updates, a loan calculator, a referral system, and Machine Learning-based fraud detection with Biometric Authentication.",
      link: "https://philsafety.co",
      type: "Academic Project",
      icon: "mdi:motorbike",
    },
  ];

  return (
    <section class="p-4 my-8">
      <h1 class="text-3xl font-bold text-primary text-center mb-4">
        Projects
      </h1>
      <div class="flex flex-wrap justify-center items-center gap-2">
        {projects.map((project) => (
          <div class="card max-w-96">
            <div class="card-body p-4">
              <h2 class="card-title">
                <Icon
                  class="w-6 h-6"
                  icon={project.icon}
                  width="none"
                  height="none"
                />
                {project.title}
                <span class="badge badge-ghost ml-auto">{project.type}</span>
              </h2>
              <p>{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                class="btn btn-primary text-base-100"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Technologies() {
  const technologies = [
    "vscode-icons:file-type-js-official",
    "logos:html-5",
    "logos:css-3",
    "logos:php",
    "logos:typescript-icon",
    "skill-icons:react-dark",
    "devicon:nodejs",
    "vscode-icons:file-type-mongo",
    "logos:postgresql",
    "logos:mysql",
  ];

  return (
    <section class="my-16">
      <h1 class="text-3xl font-bold text-primary text-center mb-4">
        Technologies
      </h1>
      <div class="p-4 flex justify-center items-center flex-wrap gap-4">
        {technologies.map((technology) => (
          <Icon
            class="w-8 h-8"
            icon={technology}
            width="none"
            height="none"
          />
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <Values />
      <Projects />
      <Experience />
      <Technologies />
    </>
  );
}
