import backgroundIMTLarge from 'assets/IMT-background-large.jpg';
import backgroundSprPlaceholder from 'assets/spr-background-placeholder.jpg';
import imageSprBackgroundVolcanismLarge from 'assets/spr-background-volcanism-large.jpg';
import imageSprBackgroundVolcanismPlaceholder from 'assets/spr-background-volcanism-placeholder.jpg';
import imageSprBackgroundVolcanism from 'assets/spr-background-volcanism.jpg';
import backgroundIMT from 'assets/IMT-background.jpg';
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
import PaneraiIntro from 'assets/Panerai-intro.png';

import PaneraiStoryOne from 'assets/StoryPanerai-1.jpg';
import PaneraiStoryTwo from 'assets/StoryPanerai-2.jpg';
import PaneraiStoryThree from 'assets/StoryPanerai-3.jpg';
import PaneraiStoryFour from 'assets/StoryPanerai-4.jpg';
import PaneraiStoryFive from 'assets/StoryPanerai-5.jpg';
import PaneraiStorySix from 'assets/StoryPanerai-6.jpg';
import PaneraiStorySeven from 'assets/StoryPanerai-7.jpg';


import React from 'react';


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
import { Carousel } from 'components/Carousel';
import styles from './SmartSparrow.module.css';


const title1 = 'Sub-project 1';
const description1 = 'Description sub-project 1';
const roles1 = [
  'Project Management',
  'Accounting',
  'Marketing',
  'Consultancy',
];

const title2 = 'Panerai';
const description2 = 'Immersive branded experience presented at Watches and Wonders, the most important luxury watchmaking event of the world';
const roles2 = [
  'New Business',
  'Key Account',
  'Strategist',
  'Producer',
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
          src={backgroundIMTLarge}
          srcSet={`${backgroundIMT.src} 1080w, ${backgroundIMTLarge.src} 2160w`}
          placeholder={backgroundIMT}
        />

{/* Project 1 --- Header + image + description */}

        <ProjectHeader
          title={title1}
          description={description1}
          url="https://"
          roles={roles1}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              raised
              key={themeId}
              srcSet={
                isDark
                  ? [imageSprLessonBuilderDark, imageSprLessonBuilderDarkLarge]
                  : [imageSprLessonBuilderLight, imageSprLessonBuilderLightLarge]
              }
              placeholder={
                isDark
                  ? imageSprLessonBuilderDarkPlaceholder
                  : imageSprLessonBuilderLightPlaceholder
              }
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
              alt="A screenshot of the current ui of the app"
            />
          </ProjectSectionContent>
        </ProjectSection>



        <ProjectSection>
        <ProjectTextRow>
            <ProjectSectionHeading>The problem</ProjectSectionHeading>
            <ProjectSectionText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </ProjectSectionText>
          </ProjectTextRow>


{/* Project 2 --- Header + image + description */}


          <ProjectHeader
          title={title2}
          description={description2}
          url="https://"
          roles={roles2}
        />

<ProjectSection padding="top">
          <ProjectSectionContent>
          <Image
              
              srcSet={
                isDark
                  ? `${PaneraiIntro} 1280w, ${PaneraiIntro} 2560w`
                  : `${PaneraiIntro} 1280w, ${PaneraiIntro} 2560w`
              }
              width={1280}
              hright={800}
              placeholder={
                isDark
                  ? PaneraiIntro
                  : PaneraiIntro
              }
              alt={`Beginning of the VR experience`}
              sizes="100vw"
            />
          </ProjectSectionContent>
        </ProjectSection>



        <ProjectTextRow>
            <ProjectSectionHeading>Client Brief</ProjectSectionHeading>
            <ProjectSectionText>
            As every year, Panerai, a luxury watch brand, prepares for the most important event of the year. To surprise and engage their high-profile clients, they were looking for a way to convey a sense of innovation while staying true to their rich heritage. The goal was to position the brand as both rooted in tradition and boldly looking towards the future. 
            <br /><br />
            </ProjectSectionText>
          </ProjectTextRow>

          <ProjectTextRow>
            <ProjectSectionHeading>Our Solution</ProjectSectionHeading>
            <ProjectSectionText>
            Our innovative proposal involved creating an immersive virtual reality experience that would transport users into the iconography of two standout pieces featured at the exhibition: L'Astronomo and Lo Scienziato. We aimed to evoke imagery related to space, the solar system, and Galileo Galilei, drawing connections between historical scientific achievements and modern technological innovation. 
            <br /><br />
            </ProjectSectionText>
          </ProjectTextRow>





          <ProjectSection> {/* Wrapper component */}
      <ProjectSectionContent> {/* Content wrapper */}
        <Carousel
          images={[ // Images array
            {
              src: PaneraiStoryOne, // Source of the image
            },
            {
              src: PaneraiStoryTwo,
            },
            {
              src: PaneraiStoryThree,
            },
            {
              src: PaneraiStoryFour,
            },
            {
              src: PaneraiStoryFive,
            },
            {
              src: PaneraiStorySix,
            
            },
            {
              src: PaneraiStorySeven,
              
            },
          ]}
          width={1920} // Width of the carousel
          height={1278} // Height of the carousel
        />
      </ProjectSectionContent>
    </ProjectSection>
  


    <ProjectTextRow>
            <ProjectSectionHeading>My Role</ProjectSectionHeading>
            <ProjectSectionText>
            Our innovative proposal involved creating an immersive virtual reality experience that would transport users into the iconography of two standout pieces featured at the exhibition: L'Astronomo and Lo Scienziato. We aimed to evoke imagery related to space, the solar system, and Galileo Galilei, drawing connections between historical scientific achievements and modern technological innovation. 
            <br /><br />
            </ProjectSectionText>
          </ProjectTextRow>






{/* Project 3 --- Header + image + description */}



          <ProjectHeader
          title={title2}
          description={description2}
          url="https://"
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
            <ProjectSectionHeading>The problem</ProjectSectionHeading>
            <ProjectSectionText>
              In 2017, Smart Sparrow began a project to build an entirely new platform to
              from the ground up to serve as the most powerful tool for educators to
              create online learning experiences. The old platform was built in Flash, and
              there were a number of user experience problems to solve in the process of
              moving the platform to Javascript. The primary goals for the project were
              reducing barriers to collaboration, and making the platform both easier for
              new users, but with plenty of room to scale for advanced users.
            </ProjectSectionText>
          </ProjectTextRow>





          </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};



