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
import imageBookCover from 'assets/Cover_book_light.jpg';
import imageBookLaunch01 from 'assets/BookLaunch_01_light.jpg';
import imageBookLaunch02 from 'assets/BookLaunch_02_light.jpg';


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


const title1 = 'Sub-project 1';
const description1 = 'Researchect 1';
const roles1 = [
  'Project Management',
  'Accounting',
  'Marketing',
  'Consultancy',
];

const title2 = 'Narrative Language of Virtual Reality';
const description2 = 'A book investigating XR Design principles for Storytelling';
const roles2 = [
  'Author',
  
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





        <ProjectTextRow>

        <ProjectSection padding="top">
  <ProjectSectionContent>
    <Image
      src={imageBookCover}
      width={640} // Adjusted width
      height={400} // Adjusted height (fixed the typo)
      placeholder={imageBookCover}
      alt="A set of themed components for the aero design system"
      sizes="50vw"
      style={{ display: 'block', maxWidth: '100%', height: 'auto' }} // Ensures image responsiveness
    />
  </ProjectSectionContent>
</ProjectSection>

            <ProjectSectionHeading>The problem</ProjectSectionHeading>
            <ProjectSectionText>


            This small book was written with great passion for exploration during a pioneering moment when I believed there could be significant democratization in discovering this new medium. There was much practical experimentation, but few were asking critical questions about why and how to use VR as a means of communication.
            <br /><br />
I initially had five questions when I began this research. By the time I finished writing the book, I had a hundred more in mind. I believe that to find answers, one must first ask the right questions. This book aimed to move in that direction.
<br /><br />
Just as I am fascinated by the semiotics of cinematic language, I wondered if there might be an equivalent approach for VR. Semiotics helps convey certain emotions to the viewer and constructs the narrative more effectively. Therefore, to create impactful VR projects, understanding how to reach viewers was crucial. Today, this falls under the label of UX XR Design, where certain principles are analyzed based on case studies created by artists worldwide who have interpreted this medium in their own ways.
<br /><br />

<Image
      src={imageBookLaunch02}
      width={640} // Adjusted width
      height={400} // Adjusted height (fixed the typo)
      placeholder={imageBookLaunch02}
      alt="A set of themed components for the aero design system"
      sizes="50vw"
      style={{ display: 'block', maxWidth: '100%', height: 'auto' }} // Ensures image responsiveness
    />
<br /><br />
This work was notably recognized by the World VR Forum, which helped turn it into a proper book and included a press conference for its launch. The event, held in collaboration with the wonderful space BASE and supported by my company at the time, Proxima Milano, was a memorable moment—an opportunity for dissemination and to infect others with the same passion for discovery and this new medium.
<br /><br />

<Image
      src={imageBookLaunch01}
      width={640} // Adjusted width
      height={400} // Adjusted height (fixed the typo)
      placeholder={imageBookLaunch01}
      alt="A set of themed components for the aero design system"
      sizes="50vw"
      style={{ display: 'block', maxWidth: '100%', height: 'auto' }} // Ensures image responsiveness
    />


<br /><br />
After many years, the book is no longer available for purchase, but I want it to remain accessible for those who wish to take a trip into the past. Today, I view it with fondness—a work that, in many ways, is raw, but which I believe holds historiographical value, capturing the state of affairs in 2015-16-17 that may bring some down memory lane.
<br /><br />
<div style={{ textAlign: 'center' }}>
                <Link href="/static/VR_Book_BodiniAimone.pdf">Download Book "Narrative Language of Virtual Reality"</Link>  

                </div>
                <br /><br />
                Today, I'm uncertain whether I would write another book on these subjects. There’s an experiential gap that can’t be filled solely through written storytelling or using words. The most effective way to present my critical and educational viewpoint on these matters would involve a multimedia approach, including text, images, videos, and importantly, direct experience with the projects analyzed and the UX XR Design interactions under review.

An evolution in how I convey my research and critical thoughts on the topic began when I started speaking at public events and conferences. This platform allowed me to enhance my narrative by incorporating images, diagrams, and animated gifs, which better illustrated my analyses.
<br /><br />
<div style={{ position: 'relative', paddingBottom: '56.25%', height: '0' }}>
  <iframe
    src="https://drive.google.com/file/d/1NXZQr6JBFFGxyHFOvg03CNLDk65NoGZr/preview"
    title="VDB16 - Narrative Language of Virtual Reality - Aimone Bodini"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }}
  />
</div>
<br /><br />

In 2016, I delivered the first of many talks at Voxxed Days Belgrade to an audience of 200 people. There were two specific moments when I felt like leaving the stage because the anxiety was overwhelming, especially given my very basic English skills at the time. I made it to the end, though. It was a leap into the unknown.
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </ProjectSectionText>
          </ProjectTextRow>






          </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};



