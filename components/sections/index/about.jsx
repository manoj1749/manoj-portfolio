// Core packages
import Image from "next/image";
import Link from "next/link";

// Section structure
import Section from "../../structure/section";
import Container from "../../structure/container";

// Section general blocks
import SectionTitle from "../../blocks/section.title.block";
import SectionGridBg from "../../blocks/section.grid.block";

// Section specific blocks
import BadgesBlock from "../../blocks/about.badges.block";
import CopyBlock from "../../blocks/about.copy.block";
import button from "../../../styles/blocks/button.module.scss";

// Section scss
import about from "../../../styles/sections/index/about.module.scss";

/**
 * Section: About
 * An overview of yourself.
 * Highlight your top level attributes and disciplines.
 *
 * @returns {jsx} <About />
 */
export default function About() {
  return (
    <Section classProp={about.section}>
      <Container spacing={["verticalXXXLrg"]}>
        <SectionTitle
          title="About Me, Yes MEEE!!!"
          preTitle="Bite-Sized Rundown"
          subTitle="Skilled in diverse domains of ML🧠, Mobile Development📲, Web Development👨🏻‍💻, and had worked on bringing innovative ideas💡 in to practical tech solutions🛠️"
        />
        <section className={about.content}>
          <div className={about.image}>
            <Image src="/img/manoj.JPG" width={600} height={800} />
          </div>
          <div className={about.copy}>
            <CopyBlock
              title="Tech Skills That Power Innovation"
              containerClass={about.container}
              iconClass={about.icon}
              icon={["fad", "microchip"]}
              copy="In addition to my expertise in machine learning and app development, I excel in problem-solving, quick adaptation, and a passion for tackling real-world challenges. With a history of balancing research and practical application, I drive meaningful solutions that make an impact."
            />
            <BadgesBlock
              title="Strategic Development & Research"
              containerClass={about.container}
              list={methods}
              fullContainer="fullContainer"
              block="methods"
              icon="lightbulb"
              copy="I thrive on building systems from the ground up—whether it's designing product strategies, creating development architectures, or diving deep into user research. My strategic approach is grounded in data and guided by experience."
              invertedColor="invertedColor"
              headerIcon={`${about.icon}`}
            />
            <BadgesBlock
              title="Achievements & Recognition"
              containerClass={about.container}
              list={achievements}
              fullContainer="fullContainer"
              block="achievements"
              icon="trophy"
              copy="Recognized for my innovative work and dedication, here are some highlights of my journey."
              invertedColor="invertedColor"
              headerIcon={`${about.icon}`}
            />
          </div>
        </section>
        {/* <section>
          <button className={`button ${button.primary}`}>Dig In</button>
        </section> */}
        <section
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* <button
            className={`button ${button.primary}`}
            style={{
              padding: "12px 50px",
              borderRadius: "50px",
              backgroundColor: "var(--secondary)",
              color: "var(--background)",
              textAlign: "center",
            }}
          >
            Dig In
          </button> */}
          <Link
            href="/detailed-introduction"
            className={`button ${button.primary}`}
            style={{
              padding: "12px 50px",
              borderRadius: "50px",
              backgroundColor: "var(--secondary)",
              color: "var(--background)",
              textAlign: "center",
            }}
          >
            Dig In
          </Link>
        </section>
      </Container>
    </Section>
  );
}

const methods = [
  { key: "puzzle-piece", name: "Problem-Solving", type: "fad" },
  { key: "database", name: "Data-Driven Strategies", type: "fad" },
  { key: "network-wired", name: "System Architecture", type: "fad" },
  { key: "user-tie", name: "Project Leadership", type: "far" },
  { key: "hands-helping", name: "Collaborative Innovation", type: "fad" },
  { key: "book-open", name: "Continuous Learning", type: "fad" },
];

const achievements = [
  {
    key: "award",
    name: "NASA Space Apps Challenge 2023: Global Nominee",
    type: "fad",
  },
  {
    key: "trophy",
    name: "Galactic Impact Award: NASA Space Apps Challenge 2023",
    type: "fad",
  },
  { key: "shield-alt", name: "Kavach 2023: National Finalist", type: "fad" },
  {
    key: "trophy",
    name: "Local Impact Award: NASA Space Apps Challenge 2022",
    type: "fad",
  },
  // { key: 'certificate', name: 'IEEE Conference Publication: Detecting, Demodulating & Decoding LoRa', type: 'fad' },
];
