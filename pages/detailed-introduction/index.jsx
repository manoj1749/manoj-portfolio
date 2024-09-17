import Image from 'next/image';
import Section from '../../components/structure/section';
import Container from '../../components/structure/container';
import SectionTitle from '../../components/blocks/section.title.block';
import CopyBlock from '../../components/blocks/about.copy.block';
import BadgesBlock from '../../components/blocks/about.badges.block';
import about from '../../styles/sections/index/about.module.scss';

export default function DetailedIntroduction() {
  return (
    <Section classProp={`${about.section} borderBottom`}>  
      <Container spacing={['verticalXXXLrg']}>
        <SectionTitle
          title="About Me"
          preTitle="Who Am I?"
          subTitle="From research to real-world applications, here's a glimpse into my journey."
        />
        
        {/* Work Experience */}
        <section className={about.content}>
          <div className={about.copy}>
            <CopyBlock 
              title="Internships & Work Experience"
              icon={[ 'fad', 'briefcase' ]}
              copy="My hands-on internships and work experience have shaped me into a researcher and developer capable of solving complex problems with creative solutions."
              iconClass={about.icon}
              containerClass={about.container}
            />

            {/* Research Intern Experience */}
            <BadgesBlock 
              title="Research Intern - Amrita Mind and Brain Center"
              copy="Worked on research based on GAIT of humans for building a device to accommodate movement for individuals affected by Parkinson's disease."
              list={researchInternExperience}
              block="researchIntern"
              fullContainer="fullContainer"
              icon="brain"
              containerClass={about.container}
              headerIcon={about.icon} 
            />

            {/* Flutter Developer Experience */}
            <BadgesBlock 
              title="Flutter Developer - Ostello AI"
              copy="Developed and managed a cross-platform mobile app with Flutter, NodeJS, and Firebase integration, and managed them on App Store/Play Store."
              list={flutterDeveloperExperience}
              block="flutterDeveloper"
              fullContainer="fullContainer"
              icon="mobile-alt"
              containerClass={about.container}
              headerIcon={about.icon} 
            />

            {/* Hardware Security Researcher Experience */}
            <BadgesBlock 
              title="Hardware Security Researcher - Redantio"
              copy="Developed and fine-tuned Deep Learning and Machine Learning models for their network security software."
              list={securityResearchExperience}
              block="securityResearcher"
              fullContainer="fullContainer"
              icon="shield-alt"
              containerClass={about.container}
              headerIcon={about.icon} 
            />

            {/* amFOSS Member Experience */}
            <BadgesBlock 
              title="Member & Mentor - amFOSS"
              copy="Worked on open-source projects, mentored juniors, and contributed to innovative development in this open-source club."
              list={amFossExperience}
              block="amFoss"
              fullContainer="fullContainer"
              icon="users"
              containerClass={about.container}
              headerIcon={about.icon} 
            />
          </div>
        </section> 

        {/* Achievements and Other Contributions */}
        <section className={about.content}>
          <div className={about.copy}>
            <BadgesBlock 
              title="Achievements & Publications"
              copy="From international competitions to published work, these are the milestones that mark my career."
              list={achievements}
              block="achievements"
              fullContainer="fullContainer"
              icon="trophy"
              containerClass={about.container}
              headerIcon={about.icon} 
            />

            <BadgesBlock 
              title="Workshops & Seminars"
              copy="I love sharing my knowledge through workshops and seminars, helping others learn and explore new technologies."
              list={workshops}
              block="workshops"
              fullContainer="fullContainer"
              icon="chalkboard-teacher"
              containerClass={about.container}
              headerIcon={about.icon} 
            />

            <BadgesBlock 
              title="Community Outreach Programs"
              copy="Participated in student-driven initiatives aimed at enriching the community with hands-on experience in electronics and simulations."
              list={outreachPrograms}
              block="outreachPrograms"
              fullContainer="fullContainer"
              icon="hands-helping"
              containerClass={about.container}
              headerIcon={about.icon} 
            />
          </div>

          {/* Illustration */}
          <div className={`${about.image}`}>
            <Image src="/img/manoj.JPG" width={500} height={500} alt="Achievements" />
          </div>
        </section>  
      </Container>
    </Section>
  );
}

// Experience Details with Dates
const researchInternExperience = [
  { key: 'calendar', name: 'June 2024 – Present', type: 'fas' },
  { key: 'brain', name: 'Research on Human Gait for Parkinson’s Disease', type: 'fas' },
  { key: 'tools', name: 'Device Prototyping and Movement Assistance', type: 'fas' }
];

const flutterDeveloperExperience = [
  { key: 'calendar', name: 'June 2023 – September 2023', type: 'fas' },
  { key: 'mobile-alt', name: 'Flutter Development', type: 'fas' },
  { key: 'cloud', name: 'Firebase Integration', type: 'fas' }
];

const securityResearchExperience = [
  { key: 'calendar', name: 'July 2023 – October 2023', type: 'fas' },
  { key: 'shield-alt', name: 'Deep Learning Models for Security', type: 'fas' },
  { key: 'laptop-code', name: 'Machine Learning Fine-Tuning', type: 'fas' }
];

const amFossExperience = [
  { key: 'calendar', name: 'December 2021 – May 2024', type: 'fas' },
  { key: 'calendar-alt', name: 'Member (Dec 2021 – Dec 2022)', type: 'fas' },
  { key: 'calendar-alt', name: 'Mentor & Member (Dec 2022 – May 2024)', type: 'fas' },
  { key: 'project-diagram', name: 'Contributed to Open-Source Projects', type: 'fas' },
  { key: 'users', name: 'Mentored Juniors', type: 'fas' }
];

// Achievements Badges
const achievements = [
  { key: 'award', name: 'NASA Space Apps Challenge 2023: Global Nominee', type: 'fas' },
  { key: 'trophy', name: 'Galactic Impact Award: NASA Space Apps 2023', type: 'fas' },
  { key: 'shield-alt', name: 'Kavach 2023: National Finalist', type: 'fas' },
  { key: 'certificate', name: 'IEEE Publication on LoRa Signal Decoding', type: 'fas' },
];

// Workshops and Seminars Badges
const workshops = [
  { key: 'chalkboard', name: 'Workshop on Proteus and Hardware Components', type: 'fas' },
  { key: 'book-reader', name: 'Hacktoberfest 2023', type: 'fas' },
  { key: 'users', name: 'Mentorship Program for amFOSS Juniors', type: 'fas' },
];

// Community Outreach Programs Badges
const outreachPrograms = [
  { key: 'community', name: 'Student Social Responsibility: Hands-on Experience with Proteus and Simulations', type: 'fas' }
];
