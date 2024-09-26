import Image from "next/image";
import Section from "../../components/structure/section";
import Container from "../../components/structure/container";
import SectionTitle from "../../components/blocks/section.title.block";
import CopyBlock from "../../components/blocks/about.copy.block";
import BadgesBlock from "../../components/blocks/about.badges.block";
import Badges from "../../components/utils/badge.list.util";
import career from "../../styles/sections/index/career.module.scss";
import about from "../../styles/sections/index/about.module.scss";

export default function DetailedIntroduction() {
  return (
    <Section classProp={`${career.section} borderBottom`}>
      <Container spacing={["verticalXXXLrg"]}>
        <SectionTitle
          title="Experience"
          preTitle="Career"
          subTitle="Here's a summary of my professional journey so far."
        />

        {/* Work Experience Section */}
        <section className={career.area}>
          {/* Amrita Mind and Brain Center */}
          <article className={career.company}>
            <div className={career.companyWrapper}>
              <div className={career.companyContent}>
                <span className={career.companyHeader}>
                  <h3>Amrita Mind and Brain Center</h3>
                  <h4>Research Intern</h4>
                  <h4>June 2024 – Present</h4>
                  <h5>Kollam, India</h5>
                </span>
              </div>
              <div className={career.description}>
                <p>
                  Working on research based on the GAIT of humans to build a
                  device for accommodating movement for individuals affected by
                  Parkinson&apos;s disease.
                </p>
              </div>
            </div>
          </article>

          {/* amFOSS Experience */}
          <article className={career.company}>
            <div className={career.companyWrapper}>
              {/* Row containing Name, Date, and Description */}
              <div className={career.companyHeaderWrapper}>
                {/* Left-aligned Name and Date */}
                <div className={career.companyContentLeft}>
                  <h3>amFOSS</h3>
                  <h4>Dec 2021 – May 2024</h4>
                  <h5>Kollam, India</h5>
                </div>

                {/* Right-aligned Description */}
                <div className={career.companyContentRight}>
                  <p>
                    amFOSS is an open-source student organization at Amrita
                    Vishwa Vidyapeetham. I contributed to various open-source
                    projects and mentored juniors in the group.
                  </p>
                </div>
              </div>
            </div>

            {/* Sub-experiences */}
            <div className={career.subExperienceWrapper}>
              <div className={career.subExperience}>
                <div className={career.positionHeader}>
                  <h4>Member</h4>
                  <h5>Dec 2021 – Dec 2022</h5>
                </div>
                <div className={career.description}>
                  <p>
                    Contributed to open-source projects, learned new
                    technologies, and participated in various coding challenges
                    and hackathons.
                  </p>
                </div>
              </div>

              <div className={career.subExperience}>
                <div className={career.positionHeader}>
                  <h4>Mentor & Member</h4>
                  <h5>Dec 2022 – May 2024</h5>
                </div>
                <div className={career.description}>
                  <p>
                    Mentored juniors on multiple projects, guided open-source
                    contributions, and organized workshops on emerging
                    technologies.
                  </p>
                </div>
              </div>
            </div>
          </article>

          {/* Redantio Experience */}
          <article className={career.company}>
            <div className={career.companyWrapper}>
              <div className={career.companyContent}>
                <span className={career.companyHeader}>
                  <h3>Redantio</h3>
                  <h4>Hardware Security Researcher</h4>
                  <h4>July 2023 – Oct 2023</h4>
                  <h5>Remote</h5>
                </span>
              </div>
              <div className={career.description}>
                <p>
                  Worked on fine-tuning machine learning and deep learning
                  models for security software solutions.
                </p>
              </div>
            </div>
          </article>

          {/* Ostello AI */}
          <article className={career.company}>
            <div className={career.companyWrapper}>
              <div className={career.companyContent}>
                <span className={career.companyHeader}>
                  <h3>Ostello AI</h3>
                  <h4>Flutter Developer</h4>
                  <h4>June 2023 – Sept 2023</h4>
                </span>
              </div>
              <div className={career.description}>
                <p>
                  Developed a cross-platform mobile app using Flutter, NodeJS,
                  and Firebase, managing the app&apos;s release on both App
                  Store and Play Store.
                </p>
              </div>
            </div>
          </article>

          {/* CCExtractor */}
          <article className={career.company}>
            <div className={career.companyWrapper}>
              <div className={career.companyContent}>
                <span className={career.companyHeader}>
                  <h3>CCExtractor</h3>
                  <h4>Open Source Contributor</h4>
                  <h4>Feb 2023 – Jun 2023</h4>
                  <h5>Remote</h5>
                </span>
              </div>
              <div className={career.description}>
                <p>
                  Contributed to their open-source Flutter projects like
                  Taskwarrior-flutter, ccextractor-fluttergui,
                  rutorrent-flutter, and Flood Mobile by identifying, reporting,
                  and resolving bugs, as well as resolving community-raised
                  issues and adding a few features to one of their projects.
                </p>
              </div>
            </div>
          </article>
        </section>

        {/* Achievements and Other Contributions */}
        <Section classProp={`${about.section} borderBottom`}>
          <Container spacing={["verticalXXXLrg"]}>
            <SectionTitle
              title="Achievements & Other Contributions"
              preTitle="Recognition & Knowledge Sharing"
              subTitle="My journey has been filled with awards, publications, and opportunities to share knowledge with the tech community."
            />

            <section className={`${about.content} ${about.container}`}>
              <div className={about.flexContainer}>
                {/* Left side - Achievements and Workshops */}
                <div className={about.leftColumn}>
                  <div className={about.mergedBlock}>
                    <CopyBlock
                      title="Achievements & Publications"
                      icon={["fas", "trophy"]}
                      copy="I have been recognized in various global competitions and have contributed to the tech world through published research."
                      iconClass={about.icon}
                      containerClass={about.container}
                    />
                    <BadgesBlock
                      title="Competitions & Publications"
                      copy="Awards and recognitions from international platforms such as NASA Space Apps and published research papers in IEEE."
                      list={achievements}
                      block="achievements"
                      fullContainer="fullContainer"
                      icon="medal"
                      containerClass={about.container}
                      headerIcon={about.icon}
                    />
                  </div>
                </div>

                {/* Right side - Workshops and Contributions */}
                <div className={about.rightColumn}>
                  <div className={about.mergedBlock}>
                    <CopyBlock
                      title="Workshops & Seminars"
                      icon={["fas", "chalkboard-teacher"]}
                      copy="Throughout my journey, I’ve shared my knowledge and expertise by conducting various workshops and seminars."
                      iconClass={about.icon}
                      containerClass={about.container}
                    />
                    <BadgesBlock
                      title="Workshops & Seminars I’ve Conducted"
                      copy="Fostering technical skills and guiding the next generation through hands-on workshops and community-driven events."
                      list={workshops}
                      block="workshops"
                      fullContainer="fullContainer"
                      icon="chalkboard"
                      containerClass={about.container}
                      headerIcon={about.icon}
                    />
                  </div>
                </div>
              </div>
            </section>
          </Container>
        </Section>
      </Container>
    </Section>
  );
}

// Achievements Badges
const achievements = [
  {
    key: "award",
    name: "NASA Space Apps Challenge 2023: Global Nominee",
    type: "fas",
  },
  {
    key: "trophy",
    name: "Galactic Impact Award: NASA Space Apps 2023",
    type: "fas",
  },
  { key: "shield-alt", name: "Kavach 2023: National Finalist", type: "fas" },
  {
    key: "certificate",
    name: "IEEE Publication on LoRa Signal Decoding",
    type: "fas",
  },
];

// Workshops and Seminars Badges
const workshops = [
  {
    key: "chalkboard",
    name: "Workshop on Proteus and Hardware Components",
    type: "fas",
  },
  { key: "book-reader", name: "Hacktoberfest 2023", type: "fas" },
  { key: "gamepad", name: "FOSS-FEUD", type: "fas" },
];
