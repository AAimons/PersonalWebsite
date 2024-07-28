import backgroundSprLarge from 'assets/spr-background-large-IMT.jpg';
import backgroundSprPlaceholder from 'assets/spr-background-placeholder.jpg';
import imageSprBackgroundVolcanismLarge from 'assets/spr-background-volcanism-large.jpg';
import imageSprBackgroundVolcanismPlaceholder from 'assets/spr-background-volcanism-placeholder.jpg';
import imageSprBackgroundVolcanism from 'assets/spr-background-volcanism.jpg';
import backgroundSpr from 'assets/spr-background-IMT.jpg';
import backgroundTMLarge from 'assets/TM-background-large.jpg'; 
import backgroundTM from 'assets/TM-background.jpg'; 

import imageSprComponentsDarkLarge from 'assets/spr-components-dark-large.png';
import imageSprComponentsDarkPlaceholder from 'assets/spr-components-dark-placeholder.png';
import imageSprComponentsDark from 'assets/spr-components-dark.png';
import imageSprComponentsLightLarge from 'assets/spr-components-light-large.png';
import imageSprComponentsLightPlaceholder from 'assets/spr-components-light-placeholder.png';
import imageSprComponentsLight from 'assets/spr-components-light.png';
import imageSprDesignSystemDarkLarge from 'assets/spr-design-system-dark-large.png';
import imageSprDesignSystemDarkPlaceholder from 'assets/spr-design-system-dark-placeholder.png';
import imageSprDesignSystemDark from 'assets/spr-design-system-dark.png';
import imageSprDesignSystemLightLarge from 'assets/spr-design-system-light-large.png';
import imageSprDesignSystemLightPlaceholder from 'assets/spr-design-system-light-placeholder.png';
import imageSprDesignSystemLight from 'assets/spr-design-system-light.png';
import imageSprLessonBuilderDarkLarge from 'assets/spr-lesson-builder-dark-large.jpg';
import imageSprLessonBuilderDarkPlaceholder from 'assets/spr-lesson-builder-dark-placeholder.jpg';
import imageSprLessonBuilderDark from 'assets/spr-lesson-builder-dark.jpg';
import imageSprLessonBuilderLightLarge from 'assets/spr-lesson-builder-light-large.jpg';
import imageSprLessonBuilderLightPlaceholder from 'assets/spr-lesson-builder-light-placeholder.jpg';
import imageSprLessonBuilderLight from 'assets/spr-lesson-builder-light.jpg';
import imageCartoon from 'assets/pippo.jpeg';
import imageSuperfoodiesHero from 'assets/Superfoodies_hero.jpg';
import imageSuperfoodiesCollectibles from 'assets/Superfoodies_collectibles.jpg';
import imagePDCPoster from 'assets/PDC_poster.jpg';
import imagePDCShootingList from 'assets/PDC_ShootingList.jpg';

import videoSprMotionLarge from 'assets/spr-motion-large.mp4';
import videoSprMotionPlaceholder from 'assets/spr-motion-placeholder.jpg';
import videoSprMotion from 'assets/spr-motion.mp4';
import imageSprSchema1DarkLarge from 'assets/spr-schema-1-dark-large.png';
import imageSprSchema1DarkPlaceholder from 'assets/spr-schema-1-dark-placeholder.png';
import imageSprSchema1Dark from 'assets/spr-schema-1-dark.png';
import imageSprSchema1LightLarge from 'assets/spr-schema-1-light-large.png';
import imageSprSchema1LightPlaceholder from 'assets/spr-schema-1-light-placeholder.png';
import imageSprSchema1Light from 'assets/spr-schema-1-light.png';
import imageSprSchema2DarkLarge from 'assets/spr-schema-2-dark-large.png';
import imageSprSchema2DarkPlaceholder from 'assets/spr-schema-2-dark-placeholder.png';
import imageSprSchema2Dark from 'assets/spr-schema-2-dark.png';
import imageSprSchema2LightLarge from 'assets/spr-schema-2-light-large.png';
import imageSprSchema2LightPlaceholder from 'assets/spr-schema-2-light-placeholder.png';
import imageSprSchema2Light from 'assets/spr-schema-2-light.png';
import imageSprStoryboarderDarkLarge from 'assets/spr-storyboarder-dark-large.png';
import imageSprStoryboarderDarkPlaceholder from 'assets/spr-storyboarder-dark-placeholder.png';
import imageSprStoryboarderDark from 'assets/spr-storyboarder-dark.png';
import imageSprStoryboarderLightLarge from 'assets/spr-storyboarder-light-large.png';
import imageSprStoryboarderLightPlaceholder from 'assets/spr-storyboarder-light-placeholder.png';
import imageSprStoryboarderLight from 'assets/spr-storyboarder-light.png';
import { Footer } from 'components/Footer';
import { Image } from 'components/Image';
import { Link } from 'components/Link';
import { Meta } from 'components/Meta';
import { SegmentedControl, SegmentedControlOption } from 'components/SegmentedControl';
import { ThemeProvider, useTheme } from 'components/ThemeProvider';
import { useAppContext } from 'hooks';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from 'layouts/Project';
import dynamic from 'next/dynamic';
import { Fragment, useMemo } from 'react';
import { media } from 'utils/style';
import styles from './SmartSparrow.module.css';


const title1 = 'Super Foodies';
const description1 = 'Ideating a new IP for the retail giant Esselunga';
const roles1 = [
  'New Business',
  'Key Account',
  'Strategist',
  'Producer',
];

const title2 = 'Pane dal cielo';
const description2 = 'Working on the set of a feature film';
const roles2 = [
  '1st Assistant Director',
  
];

const title3 = '50+ Filmmaking projects';
const description3 = 'A starting point for honing my skills in audiovisual productions';
const roles3 = [
  'Director',
  'Cinematographer',
  'Editor',
  'Producer',
  'Screenwriter',
  
  
];



{/* Start of the code*/}



export const SmartSparrow = () => {
  const { themeId } = useTheme();
  const { dispatch } = useAppContext();

  const isDark = themeId === 'dark';
  const themes = ['dark', 'light'];

  const handleThemeChange = index => {
    dispatch({ type: 'setTheme', value: themes[index] });
  };

  return (
    <Fragment>
      <ProjectContainer className="spr">
        <Meta title={title1} prefix="Projects" description={description1} />
        <ProjectBackground
          opacity={isDark ? 0.5 : 0.8}
          src={backgroundTM}
          srcSet={`${backgroundTM.src} 1080w, ${backgroundTMLarge.src} 2160w`}
          placeholder={backgroundTM}
        />



{/* Project 1 --- Header + image + description */}



        <ProjectHeader
          title={title1}
          description={description1}
          
          roles={roles1}
        />
        <ProjectSection padding="">
          <ProjectSectionContent>
            <ProjectImage
              raised
              key={themeId}
              srcSet={
                isDark
                  ? [imageSuperfoodiesHero]
                  : [imageSuperfoodiesHero]
              }
              placeholder={
                isDark
                  ? imageSuperfoodiesHero
                  : imageSuperfoodiesHero
              }
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
              alt="A screenshot of the current ui of the app"
            />
          </ProjectSectionContent>
        </ProjectSection>



        <ProjectSection>
        <ProjectTextRow>
            <ProjectSectionHeading>Summary</ProjectSectionHeading>
            <ProjectSectionText>
    
            It was an ambitious project that spanned all of Italy, marking the first of its kind for a retail giant. Esselunga’s SuperFoodies campaign aimed to highlight the importance of a healthy diet rich in fruits and vegetables to its customers. How? By introducing the SuperFoodies, fictional anthropomorphic characters with superhero-like powers. This multiplatform campaign featured collectibles in store and was brought to life through a cinematic 60-second TV commercial and various other contents for their promotion.
<br /><br />
<div style={{ position: 'relative', paddingBottom: '56.25%', height: '0' }}>
  <iframe
    src="https://drive.google.com/file/d/1fJoOTpqksAsFA_4-D906oJ_g5eucmq2o/preview"
    title="Super_Foodies_60s_ComingSoon"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }}
  />
</div>

          

<br />

<ProjectSectionHeading>My Role</ProjectSectionHeading>


Initially, Esselunga was not a client of Proxima Milano. I played a pivotal role as a new business developer, initiating and cultivating opportunities to establish this partnership. My strategic support was instrumental in building trust and laying the groundwork for successful project delivery. As the relationship evolved, I transitioned into a key account management role, focused on maintaining client satisfaction and ensuring ongoing project success.

<div style={{ position: 'relative', paddingBottom: '56.25%', height: '0' }}>
  <iframe
    src="https://drive.google.com/file/d/1Q2oLx8KumtMyVT2EDbCS6a3WH65nU0fX/preview"
    title="Super Foodies - Making Of"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }}
  />
</div>


<br />

It was a lengthy endeavor during which I navigated the complex process of securing approvals from one of Italy’s largest companies. Working closely with the client taught me valuable skills in client interaction and underscored the importance of deeply understanding a brand. Over these 18 months, which involved presentations, speculative proposals, and detailed estimates, I felt deeply aligned to Esselunga’s ethos. I gained a profound understanding of their values, characteristics, and operational dynamics. Clients evolved into colleagues, and together, we pursued a shared objective.              <br />
              <br />

              <div style={{ position: 'relative', paddingBottom: '56.25%', height: '0' }}>
      <video
        src="/static/SuperFoodies_Characters.mp4"
        className={styles.video}
        autoPlay
        loop
        muted
        style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }}
      >
        Your browser does not support the video tag.
      </video>
    </div>
    <br />

    Once the prjects was complete, I earned a large commission I promptly reinvested into my personal and professional development, fulfilling a small dream of mine and flying to <Link href="/articles/CaliDreaming">California</Link> for a new adventure.
            
            </ProjectSectionText>
          </ProjectTextRow>



{/* code for video in with UI and play button */}

{/* 
<video className={styles.video} controls>
            <source src="/static/notfound.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
*/}



{/* Project 2 --- Header + image + description */}


          <ProjectHeader
          title={title2}
          description={description2}
          url="https://www.imdb.com/title/tt8650344/?ref_=fn_al_tt_1"
          linkLabel="IMDb"
          roles={roles2}
        />

<ProjectSection padding="top">
          <ProjectSectionContent>
          <Image
              
              srcSet={
                isDark
                  ? `${imagePDCPoster} 1280w`
                  : `${imagePDCPoster} 1280w`
              }
              width={1280}
              hright={800}
              placeholder={
                isDark
                  ? imagePDCPoster
                  : imagePDCPoster
              }
              alt={`A set of themed components for the aero design system`}
              sizes="100vw"
            />
          </ProjectSectionContent>
        </ProjectSection>



        <ProjectTextRow>

          
            <ProjectSectionHeading>Summary</ProjectSectionHeading>
            <ProjectSectionText>
            “Truth is stranger than fiction”, a famous quote attributed to Mark Twain.
            <br /><br />
            
            Working on the making of a movie is a movie of its own. François Truffaut knew it well when portraing the life of people working behind the camera in <Link href="https://www.imdb.com/title/tt0070460/?ref_=nm_knf_t_1">“Day for Night”</Link>. <br /><br />
            “Pane dal Cielo” was a memorable work and life experience where I had to deal with long hours, little comfort, and a rigid hierarchy. Time is money, and this is even more true when you are shooting something and involving dozens or hundreds of people. A little delay can compound quickly, affecting the budget of the project and increasing the stress among people on set. That’s why the need for rigid roles and quick problem solving is essential; working on set really pushes you to make decisions...fast. Luckily, everything was managed professionally and successfully by each member of the Directing and Production departments. We didn’t end up like in <Link href="https://www.imdb.com/title/tt0308514/">“Lost in La Mancha”</Link>, instead, we formed strong bonds and went on to collaborate on some more projects together.      
            <br /><br />
            
            <ProjectSectionHeading>My Role</ProjectSectionHeading>

            Based on the shooting list provided, together with the Assistant Director, I organized daily schedules for the entire crew using industry standard software <Link href="https://www.ep.com/movie-magic-scheduling/">Movie Magic</Link>. This involved handling delicate matters such as estimating the time required for actors’ makeup and for shots involving cumbersome equipment like dollies and cranes (Yes, there was a chase scene, and I was in the camera car, communicating with the rest of the crew over the radio.). This required considerable experience and attention to detail.            
            <br /><br />
            <ProjectSectionContent>
          <Image
              
              srcSet={
                isDark
                  ? `${imagePDCShootingList} 1280w`
                  : `${imagePDCShootingList} 1280w`
              }
              width={1280}
              hright={800}
              placeholder={
                isDark
                  ? imagePDCShootingList
                  : imagePDCShootingList
              }
              alt={`A set of themed components for the aero design system`}
              sizes="100vw"
            />
          </ProjectSectionContent>

          <br /><br />

            I was also in charge of coordinating and managing background actors on the movie set, as well as recruiting them. Interestingly, for this project, we involved homeless individuals to participate in the movie thanks to the help of the charity <Link href="https://www.progettoarca.org/">Progetto Arca</Link>. This gave me the opportunity to recruit volunteers and interact with them frequently, listening to the stories they were eager to share. Their stories remain vivid in my mind. I keep wondering if truth truly is stranger than fiction.        
            
             </ProjectSectionText>
          </ProjectTextRow>



{/* Project 3 --- Header + image + description */}



          <ProjectHeader
          title={title3}
          description={description3}
          roles={roles3}
        />

<ProjectSection padding="top">
  <ProjectSectionContent>
    <div style={{ position: 'relative', paddingBottom: '56.25%', height: '0' }}>
      <video
        src="/static/PortoflioTraditionalMedia.mp4"
        className={styles.video}
        autoPlay
        loop
        muted
        style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }}
      >
        Your browser does not support the video tag.
      </video>
    </div>

    
  </ProjectSectionContent>
</ProjectSection>


        <ProjectTextRow>
            <ProjectSectionHeading>Summary</ProjectSectionHeading>
            <ProjectSectionText>
            During the early phase of my career, I took on nearly every role. Sometimes it was due to curiosity, other times because of my personality, and occasionally out of necessity. Handling projects from various perspectives greatly helped me empathize with others and better understand their needs, allowing me to support them more effectively in their roles. I’d recommend that everyone occasionally swap roles within their companies and organizations as a valuable exercise.
            <br /><br /> Sometimes LOW budget, some other time NO budget, in some cases OUR budget. 
            <br /><br /> What mattered was completing the projects we cared about. 
            <br /><br /> All-nighters and constant obstacles paid back by creating memorable experiences, built trust and credibility within the team, and fueled a relentless pursuit of growth to keep making better an better AV products.
            <br /><br /> What I liked most about my filmmaking era was the constantly evolving environment it offered. The frequent changes in scenery, locations, and project objectives led to a range of thrilling and diverse experiences. Each project placed you in a completely new context.
            </ProjectSectionText>
          </ProjectTextRow>





          </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};



