import backgroundSprLarge from 'assets/spr-background-large-IMT.jpg';
import backgroundSprPlaceholder from 'assets/spr-background-placeholder.jpg';
import imageSprBackgroundVolcanismLarge from 'assets/spr-background-volcanism-large.jpg';
import imageSprBackgroundVolcanismPlaceholder from 'assets/spr-background-volcanism-placeholder.jpg';
import imageSprBackgroundVolcanism from 'assets/spr-background-volcanism.jpg';
import backgroundSpr from 'assets/spr-background-IMT.jpg';
import Rbackground from 'assets/R-background.jpg';
import RbackgroundLarge from 'assets/R-background-large.jpg';



import React, { useState, useEffect, useRef } from 'react';


import SpeakerOne from 'assets/Speaking-1.jpg';
import SpeakerTwo from 'assets/Speaking-2.jpg';
import SpeakerThree from 'assets/Speaking-3.jpg';
import SpeakerFour from 'assets/Speaking-4.jpg';
import SpeakerFive from 'assets/Speaking-5.jpg';
import SpeakerSix from 'assets/Speaking-6.jpg';
import SpeakerSeven from 'assets/Speaking-7.jpg';
import SpeakerEight from 'assets/Speaking-8.jpg';
import SpeakerNine from 'assets/Speaking-9.jpg';

import THECover from 'assets/THE-cover.jpg';
import PadellaRig from 'assets/PadellaRig.jpg';
import GS_cover from 'assets/GS_Cover.jpg';






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
import imageBookCover from 'assets/CoverandArt.jpg';
import imageBookLaunch01 from 'assets/BookLaunch_01_light.jpg';
import imageBookLaunch02 from 'assets/BookLaunch_02_light.jpg';
import imageCoverPhD from 'assets/CoverPhD.jpg';
import CoverPhDWhite from 'assets/CoverPhD_White.jpg';
import CoverPhDDark from 'assets/CoverPhD_Dark.jpg';


import imageLongTail from 'assets/LongTail.jpg';
import imageLongTailDark from 'assets/LongTail_dark.jpg';


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
import { Carousel } from 'components/Carousel';
import { media } from 'utils/style';
import styles from './SmartSparrow.module.css';

const title1 = 'Gaussian Splatting';
const description1 = 'Gaussian Splatting is a groundbreaking technique for capturing and rendering 3D scenes. After seeing some early results with static Gaussian Splatting (3D), I decided to embark on a journey to push the technique further by leveraging access to a 48-camera volumetric capture setup (using the 4D View HoloSys system, typically used for mesh-based volumetric capture) located just next door.';
const roles1 = [
  'Research',
  'Prototyping',
  'Technical Director',
  
];

const title2 = 'Co-Desiging the Filmmaking process of the future';
const description2 = 'During my PhD research, I investigated the impact of emerging technologies in the audiovisual sector. I collaborated with industry professionals to design solutions and developed prototypes based on these ingishts. The output generated have been evaluated as beneficial by the stakeholders and ready to be further developed into a commercial product.';
const roles2 = [
  'Co-design',
  'Prototyping',
  'Mixed Methods',
  'User Research',
  'Self-discipline',
];

const title3 = 'Narrative Language of Virtual Reality';
const description3 = 'A book investigating XR Design principles for Storytelling';
const roles3 = [
  'Author',
  'UX Design',
  'Public Speaking',
  
];

const title4 = 'Practice-Led & Practice-Based Research // Miscellaneous';
const description4 = 'Various genuine experiments';
const roles4 = [
  'Strange Contraptions',
  '? ¿',
  'Explosions 💥',
  
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



  // State and reference for overflow detection Navigation menu bottom
  const [isOverflowing, setIsOverflowing] = useState(false);
  const navRef = useRef(null);

  return (
    <Fragment>

{/* Navigation bar with left and right arrows */}
<div
  ref={navRef}
  style={{
    position: 'fixed',
    bottom: 0, // Aligns to the bottom of the page
    left: 0, // Aligns to the left of the page
    backgroundColor: '#808080',
    zIndex: 1000,
    padding: '10px 20px',
    borderRadius: '5px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    overflowX: 'auto', // Enable scrolling when content overflows
    whiteSpace: 'nowrap', // Prevent wrapping of links
    width: '100%', // Set width to 100% for the full viewport width
    paddingLeft: '20px', // Ensure the first element is visible and not cut off
  }}
>
 

  {/* Navigation Links */}
  <a
    href="#section-GS"
    style={{
      textDecoration: 'none',
      color: '#fff',
      transition: 'color 0.3s ease',
    }}
    onMouseEnter={(e) => e.target.style.color = '#01E0F9'}
    onMouseLeave={(e) => e.target.style.color = '#fff'}
  >
    01.GaussianSplats |
  </a>
  <a
    href="#section-PhD"
    style={{
      textDecoration: 'none',
      color: '#fff',
      transition: 'color 0.3s ease',
    }}
    onMouseEnter={(e) => e.target.style.color = '#01E0F9'}
    onMouseLeave={(e) => e.target.style.color = '#fff'}
  >
    02.PhD |
  </a>
  <a
    href="#section-VR-Book"
    style={{
      textDecoration: 'none',
      color: '#fff',
      transition: 'color 0.3s ease',
    }}
    onMouseEnter={(e) => e.target.style.color = '#01E0F9'}
    onMouseLeave={(e) => e.target.style.color = '#fff'}
  >
    03.VR Book |
  </a>
  <a
    href="#section-Strange-Contraptions"
    style={{
      textDecoration: 'none',
      color: '#fff',
      transition: 'color 0.3s ease',
    }}
    onMouseEnter={(e) => e.target.style.color = '#01E0F9'}
    onMouseLeave={(e) => e.target.style.color = '#fff'}
  >
    04. Experiments |
  </a>
  

</div>
 
<ProjectContainer className="spr">
        <Meta title={title1} prefix="Projects" description={description1} />
        <ProjectBackground
          opacity={isDark ? 0.5 : 0.8}
          src={RbackgroundLarge}
          srcSet={`${Rbackground.src} 1080w, ${RbackgroundLarge.src} 2160w`}
          placeholder={Rbackground}
        />

   

        
        
<br /><br id="section-GS" />




{/* Project 1 --- Header + image + description */}

<ProjectHeader
          title={title1}
          description={description1}
          url="https://www.studiot3d.com/innovation/gaussian-splatting-workflow"
          linkLabel="In-depth Workflow Guide"
          roles={roles1}
        />

          <ProjectSectionContent>
            <ProjectImage
              raised
              key={themeId}
              srcSet={
                isDark
                  ? [GS_cover, GS_cover]
                  : [GS_cover, GS_cover]
              }
              placeholder={
                isDark
                  ? GS_cover
                  : GS_cover
              }
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
              alt="Extract of the Gaussian Splat generated in PostShot and using the Holosys system"
            />

<br />
          </ProjectSectionContent>
    
          
          
          <ProjectTextRow>
            <ProjectSectionHeading>The Journey</ProjectSectionHeading>
            <ProjectSectionText>
            
            
            Through a combination of technical tweaks, creativity, and problem-solving, I successfully reconstructed 4D Gaussian Splats, something quite rare at the time due to both the expertise and the substantial resources required (such as a 48-camera rig).

            <br /> 
This approach enabled the vivid recreation of performances and materials that would have been difficult or impossible to capture using traditional volumetric methods. 
<br /> I also authored an <Link href="https://www.studiot3d.com/innovation/gaussian-splatting-workflow">article</Link> for the Target3D blog detailing this work, which gained significant traction on social media after I shared some of the early experiments.
            
            <br /> 
            <br />

            <div style={{ position: 'relative', paddingBottom: '56.25%', height: '0' }}>
      <video
        src="/static/4DGS_Kenji_video.mp4"
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



            </ProjectSectionText>
          </ProjectTextRow>




{/* Project 2 --- Header + image + description */}

<br /><br id="section-PhD" />

        <ProjectHeader
          title={title2}
          description={description2}
          url="https://scholar.google.com/citations?hl=en&user=o949NnIAAAAJ"
          linkLabel="Scientific Publications"
          roles={roles2}
        />

          <ProjectSectionContent>
            <ProjectImage
              raised
              key={themeId}
              srcSet={
                isDark
                  ? [CoverPhDDark, CoverPhDWhite]
                  : [CoverPhDWhite, CoverPhDWhite]
              }
              placeholder={
                isDark
                  ? CoverPhDDark
                  : CoverPhDDark
              }
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
              alt="A collage of the usability testing phase and some screenshots of the previz immersive tool"
            />
          </ProjectSectionContent>
          <ProjectSection>
          
          
          <ProjectTextRow>
            <ProjectSectionHeading>Knowledge Gap & Market Opportunity</ProjectSectionHeading>
            <ProjectSectionText>
            
            
            Since its inception, cinema has been deeply entangled with the technical mastery and technological advancements of its time.
            <br /> Among the latest innovation in the Audiovisual (AV) field is Virtual Production (VP), which is an alternative to the established process, whose proponents claim that it fosters creativity while saving time and money. 
            <br />While the VP process is used for advancing high-end productions, little consideration has been bestowed upon small and medium productions (SMPs), which, by definition, have limited economic and human resources. 
            <br />However, according to the <Link href="https://www.wired.com/2004/10/tail/">’Long Tail’</Link> concept they are much greater in number, and their market is still very substantial, making it a potential worth to investigate from both an academic and commercial perspective.
            <br /> 
            <br />


            <Image padding="top"
              
              srcSet={
                isDark
                  ? `${imageLongTail} 1280w`
                  : `${imageLongTail} 1280w`
              }
              width={1280}
              height={800}
              placeholder={
                isDark
                  ? imageLongTailDark
                  : imageLongTail
              }
              alt={`Long Tail diagram revisited by me`}
              sizes="100vw"
            />
 <br /><br />

<ProjectSectionHeading>Realistic Intersection</ProjectSectionHeading>
I want to spend more words on the PhD journey rather then the research by copyng and pasting what is already available online.
 <br /><br />This PhD was funded by <Link href="https://bura.brunel.ac.uk/handle/2438/27288">StoryFutures</Link> and therefore the output is <Link href="https://bura.brunel.ac.uk/handle/2438/27288">Open Access</Link>. If you are curious, go for it. 
 <br /><br />
Embarking on a PhD can be very tricky. Sooner or later you are going to encounter a number of obstacles and limitations that cannot be overcame (resources, time, politics, limited skills, personal circumstances).
I started during the outbreak of the COVID-19 pandemic and this historic event profundly changed my research, my approach to it and, moreover, the overall life experience.
<br /><br /> I think that what you develop as a PhD is the art of adapting to ever changing scenarios. If you want to reach the end of the journey and deliver, you have to define a goal based on many forces that are stretching you around. The goal cannot be clear at first and if it doesn’t appear obvious at a certain point, it’s your responsability to make sense out of it. What do I want to research? What my sponsor wants me to research? What my supervisor wants me to research? How can I enrich the scinetific literature?  What can I actually research?
I could mention even more forces but you got the idea. 
<br /><br /> It’s easy to be at the mercy of these powers, like being stranded in the ocean. Therefore I came up with a plan that could satisfy these different, sometimes divergent, interests. Something that could be doable with the time, resources and skills at my disposal and, at the same time, something that could add value to the table.
A PhD, in most cases, is an individual experience and if you need a hand you will find it at the end of your arm. 
          

            </ProjectSectionText>
          </ProjectTextRow>


{/* Project 2 --- Header + image + description */}

<br /><br id="section-VR-Book" />


          <ProjectHeader
          title={title3}
          description={description3}
          url="/static/VR_Book_BodiniAimone.pdf"
          linkLabel="Download Book"
          roles={roles3}
        />





        <ProjectTextRow>

       
          
  
          <Image padding="top"
              
              srcSet={
                isDark
                  ? `${imageBookCover} 1280w`
                  : `${imageBookCover} 1280w`
              }
              width={1280}
              hright={800}
              placeholder={
                isDark
                  ? imageBookCover
                  : imageBookCover
              }
              alt={`Cover of th hard book and illustration representing the discovery journey`}
              sizes="100vw"
            />
    
          
       

            <ProjectSectionHeading style={{ paddingTop: '20px' }}>Groundwork</ProjectSectionHeading>
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
      alt="Press Conference at BASE"
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
      alt="Press Conference at BASE"
      sizes="50vw"
      style={{ display: 'block', maxWidth: '100%', height: 'auto' }} // Ensures image responsiveness
    />


<br /><br />
After many years, the book is no longer available for purchase, but I want it to remain accessible for those who wish to dive into the past. Today, I view it with fondness—a work that, in many ways, is raw, but which I believe holds historiographical value, capturing the state of affairs in 2015-16-17 that may bring some down memory lane.
<br /><br />
<div style={{ textAlign: 'center' }}>
                <Link href="/static/VR_Book_BodiniAimone.pdf">Download Book ‘Narrative Language of Virtual Reality’</Link>  

                </div>
                <br /><br />
                Today, I’m uncertain whether I would write another book on these subjects. There’s an experiential gap that can’t be filled solely through written storytelling or using words. The most effective way to present my critical and educational viewpoint on these matters would involve a multimedia approach, including text, images, videos, and importantly, direct experience with the projects analyzed and the UX XR Design interactions under review. 
                Unexpectedly, I recently retrieved an archaeological find: an old video essay dating back to 2015/2016. I wanted to link it to the text of the book. The essay is a collage of notable projects from that era, mostly available on the DK2 and Google Cardboard. It showcases innovative and clever approaches that demonstrate the creators’ intentions to convey meaning and play with this new medium.                

                <br /><br />
<div style={{ position: 'relative', paddingBottom: '56.25%', height: '0' }}>
  <iframe
    src="https://drive.google.com/file/d/1mL_utA0ml2HGyWyvVMSSqkLlPNNRgcM8/preview"
    title="Basic Vocabulary VR - by Aimone Bodini"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }}
  />
</div>
<br /><br />


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

In 2016, I gave a talk at Voxxed Days Belgrade (the first of many in the following couple of years) to an audience of 200 people. It was like being thrown into the deep end. I vividly remember considering leaving the stage a few times due to anxiety, especially given my very basic English skills at the time. I made it to the end, though, and handled the most difficult part of every talk: the Q&A

            </ProjectSectionText>
          </ProjectTextRow>

          <ProjectSection> {/* Wrapper component */}
      <ProjectSectionContent> {/* Content wrapper */}
        <Carousel
          images={[ // Images array
            {
              src: SpeakerOne, // Source of the image
            },
            {
              src: SpeakerTwo,
            },
            {
              src: SpeakerThree,
            },
            {
              src: SpeakerFour,
            },
            {
              src: SpeakerFive,
            },
            {
              src: SpeakerSix,
            },
            {
              src: SpeakerSeven,
            },
            
            
           
          ]}
          width={1920} // Width of the carousel
          height={1080} // Height of the carousel
        />
      </ProjectSectionContent>
    </ProjectSection>

    <ProjectTextRow>
            <ProjectSectionText>
            I discovered that sharing my insights and interesting content could grant me access to often pricey or exclusive events. Getting a free pass and sometimes even having my travel and accommodation expenses covered was the perfect plan. However, it wasn’t just about promoting myself. The most important aspect was interacting with others, meeting people, and gaining insights into what they were doing and what was coming next. It became a virtuous circle that further accelerated my professional growth and understanding of the field. It was a fertile ground for a curious individual like me.            
            </ProjectSectionText>
          </ProjectTextRow>



{/* Project 3 --- Header + image + description */}

<br /><br id="section-Strange-Contraptions" />


          <ProjectHeader
          title={title4}
          description={description4}
          roles={roles4}

        />


          <ProjectSectionContent>
          <Image
              
              srcSet={
                isDark
                  ? `${THECover} 1280w, ${THECover} 2560w`
                  : `${THECover} 1280w, ${THECover} 2560w`
              }
              width={1280}
              hright={800}
              placeholder={
                isDark
                  ? THECover
                  : THECover
              }
              alt={`A set of themed components for the aero design system`}
              sizes="100vw"
            />
          </ProjectSectionContent>

          <br /><br />



        <ProjectTextRow>
            <ProjectSectionHeading>Intro</ProjectSectionHeading>
            <ProjectSectionText>
            Sometimes projects are halted before they come to fruition, either because the client loses interest, the budget is insufficient, or there are feasibility issues. However, all these inquiries or experimental ideas are very valuable for learning new things and discovering unknown aspects. Even if they remain incomplete and don’t reach the stage of an MVP (Minimum Viable Product) or POC (Proof of Concept), they are part of the journey and it would be a shame to overlook them.              </ProjectSectionText>
          </ProjectTextRow>

          <br /><br />


          <ProjectTextRow>
            <ProjectSectionHeading>Pot GoPro Rig</ProjectSectionHeading>
            <ProjectSectionText>
            What do you do when you are waiting for a proper alluminium GoPro Rig you purchased is being delivered? You don’t waste time and get the best out of what you got. How? Grab a pot, a bunch of GoPros some sticky gum and see if you can create a 360° video with such rudimental setup.
            The result? It worked! Sort of, the concept was there but with some issues of course. Still, success. 
            </ProjectSectionText>
          </ProjectTextRow>

          <br /><br />
          <ProjectTextRow>

          <Image
      src={PadellaRig}
      width={640} // Adjusted width
      height={400} // Adjusted height (fixed the typo)
      placeholder={PadellaRig}
      alt="Padella Rig"
      sizes="50vw"
      style={{ display: 'block', maxWidth: '100%', height: 'auto' }} // Ensures image responsiveness
    />
          </ProjectTextRow>

<br /><br />


          <ProjectTextRow>
            <ProjectSectionHeading>Tilt Brush</ProjectSectionHeading>
            <ProjectSectionText>
            In 2018, we received an intriguing inquiry to support a renowned Italian painter, already adept with technology, in creating a VR painting using Tilt Brush—one of the most revolutionary immersive art tools available at the time. The concept was to merge the VR painting process with the real world, producing a unique mixed reality video to be streamed in Piazza Duomo.

At the time, no out-of-the-box solutions existed to achieve this type of hybrid output. This challenge prompted us to develop a custom workflow to realize the vision. The resulting prototype, showcased in the video hre below (featuring my creation of virtual mushrooms), demonstrated the exciting potential of blending real and virtual artistic spaces.

Unfortunately, the project did not receive final approval. Nonetheless, it proved to be a fun, creative experiment, highlighting the innovative possibilities of immersive art and mixed reality.           

</ProjectSectionText>
          </ProjectTextRow>

          <br /><br />
          <ProjectSectionContent>

          <br /><br />
<div style={{ position: 'relative', paddingBottom: '56.25%', height: '0' }}>
      <video
        className={styles.video}
        controls
        style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }}
      >
        <source src="/static/TiltBrush.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
<br /><br />
</ProjectSectionContent>


         
<ProjectTextRow>
            <ProjectSectionHeading>VR Mocap Integration</ProjectSectionHeading>
            <ProjectSectionText>
            Lorem ipsum dolor
            </ProjectSectionText>
          </ProjectTextRow>

        




          </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};