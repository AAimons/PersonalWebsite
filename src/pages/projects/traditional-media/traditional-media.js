import backgroundSprLarge from 'assets/spr-background-large-IMT.jpg';
import backgroundSprPlaceholder from 'assets/spr-background-placeholder.jpg';
import imageSprBackgroundVolcanismLarge from 'assets/spr-background-volcanism-large.jpg';
import imageSprBackgroundVolcanismPlaceholder from 'assets/spr-background-volcanism-placeholder.jpg';
import imageSprBackgroundVolcanism from 'assets/spr-background-volcanism.jpg';
import backgroundSpr from 'assets/spr-background-IMT.jpg';
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
          src={backgroundSpr}
          srcSet={`${backgroundSpr.src} 1080w, ${backgroundSprLarge.src} 2160w`}
          placeholder={backgroundSprPlaceholder}
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

As part of this project, we developed a 60-second TV commercial and adapted it for social media and other platforms, created short character showcases, designed and developed the Super Foodies website, and planned numerous future initiatives, including a 2.5D comic book and real-life school programs. It was a lengthy endeavor during which I navigated the complex process of securing approvals from one of Italy’s largest companies. Working closely with the client taught me valuable skills in client interaction and underscored the importance of deeply understanding a brand. Over these 18 months, which involved presentations, speculative proposals, and detailed estimates, I felt integrated into Esselunga’s ethos. I gained a profound understanding of their values, characteristics, and operational dynamics. Clients evolved into colleagues, and together, we pursued a shared objective.              <br />
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
            “Truth is stranger than fiction” Mark Twain said once.
            <br /><br />
     
            Working on the making of a movie is a movie of its own. François Truffaut knew it well when portraing the life of people working behind the camera in <Link href="https://www.imdb.com/title/tt0070460/?ref_=nm_knf_t_1">’Day for Night’</Link>. <br /><br />
            ’Pane dal Cielo’ was a memorable work and life experience where I had to deal with long hours, little comfort and a rigid hyerarchy. Time is money, and this is even more true when you are shooting something and involving dozens or hundreds of people. A little delay can compounds pretty quickly affecting the budget of the projct and incresing the stress among people on set. That’s why the need of rigid roles and quick problem solving, working on set really pushes you to make decisions...fast. Luckly everything has been managed professionaly and succesfully by each member od the Directig and Production dpt. We didn’t end up like in <Link href="https://www.imdb.com/title/tt0308514/">’Lost in La Mancha’</Link>.
            <br /><br />
             Based on the shooting list provided, together with the Assistant Director, I organized daily schedules for the entire crew. This involved handling delicate matters such as estimating the time required for actors’ makeup and for shots involving cumbersome equipment like dollies and cranes. This required considerable experience and attention to detail.            
            <br /><br />
            I was also responsible for coordinating and managing background actors on the movie set as well as recruiting them. The peculiar thing about this projct was that we asked homeless people to figure in the movie and therefore I interacted a lot with them, most of the time listening to their stories they really wanted to tell to someone. They still stick to my mind. Truth is stranger than fiction. Is it?
            </ProjectSectionText>
          </ProjectTextRow>



{/* Project 3 --- Header + image + description */}



          <ProjectHeader
          title={title2}
          description={description2}
          url="https://www.imdb.com/title/tt8650344/?ref_=tt_mv_close"
          roles={roles2}
        />

        <ProjectSection padding="top">
          <ProjectSectionContent>
          <Image
              
              srcSet={
                isDark
                  ? `${imageSprLessonBuilderDark} 1280w, ${imageSprLessonBuilderDarkLarge} 2560w`
                  : `${imageSprLessonBuilderLight} 1280w, ${imageSprLessonBuilderLightLarge} 2560w`
              }
              width={1280}
              hright={800}
              placeholder={
                isDark
                  ? imageSprLessonBuilderDark
                  : imageSprLessonBuilderLight
              }
              alt={`A set of themed components for the aero design system`}
              sizes="100vw"
            />
          </ProjectSectionContent>
        </ProjectSection>



        <ProjectTextRow>
            <ProjectSectionHeading>Summary</ProjectSectionHeading>
            <ProjectSectionText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </ProjectSectionText>
          </ProjectTextRow>





          </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};



