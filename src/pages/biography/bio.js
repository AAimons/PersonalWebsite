import usesBackgroundPlaceholder from 'assets/uses-background-placeholder.jpg';
import usesBackground from 'assets/uses-background.mp4';
import { Footer } from 'components/Footer';
import { Link } from 'components/Link';
import { List, ListItem } from 'components/List';
import { Meta } from 'components/Meta';
import { Table, TableBody, TableCell, TableHeadCell, TableRow } from 'components/Table';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from 'layouts/Project';
import { Fragment } from 'react';
import styles from './Uses.module.css';



export const biography = () => {
  return (
    <Fragment>
      <Meta
        title="biography"
        description="A list of hardware and software I use to do my thing"
      />
      <ProjectContainer className={styles.uses}>
        <ProjectBackground
          src={{ src: usesBackground }}
          placeholder={usesBackgroundPlaceholder}
          opacity={0.7}
        />
        <ProjectHeader
          title="Biography"
          description="A somewhat comprehensive summary of my professional journey so far."
          
        />

<ProjectSection padding="none" className={styles.section}>
                
         ...If you are in a hurry, here’s my <Link href="/onepage_cv.pdf">onepage cv.</Link>
          
        </ProjectSection>

        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Design</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                  I work as a Research and Development Engineer at <Link href="https://www.blender.org/">Target3D</Link> in London. My role involves prototyping and developing custom tracking solutions using cutting-edge media technologies in areas like Motion and Volumetric capture, virtual production, VR & AR, robotics, biomechanics, animation, VFX, gaming, training, and simulation.

                  I earned my PhD in Design from Brunel University London, thanks to funding from StoryFutures. During my doctoral studies, I co-designed, prototyped, and evaluated ways to integrate immersive technologies into filmmakers’ workflows, sharing my findings through scientific publications.

                  I’ve also spent several years in the industry as an XR Specialist, where I gained a mix of technical expertise and business insight. I love sharing this knowledge with students and broader audiences at conferences and events. Additionally, I’m the author of the book Narrative Language of Virtual Reality and had the pleasure of curating the Immersive section of the Milano Film Festival.

                  If you’re interested in my hard and soft skills, the tools I use, and what I’m currently learning, check out this page!.
                  </ListItem>
                 
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>


     



        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow stretch width="m">
              <ProjectSectionHeading>Soft Skills</ProjectSectionHeading>
              
              <Table>
                <TableBody>
                  <TableRow>
                    <TableHeadCell>Problem Solving</TableHeadCell>
                    <TableCell>Critical Thinking, Creativity, Troubleshooting, Resourcefulness</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Interpersonal</TableHeadCell>
                    <TableCell>Teamwork, Networking, Empathy</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Communication</TableHeadCell>
                    <TableCell>Active Listening, Public Speaking, Visual Communication</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Ganbaru <Link href="https://en.wikipedia.org/wiki/Ganbaru">頑張る</Link>    </TableHeadCell>
                    <TableCell>Stress Management, Adaptability, Patience, Persistency, Discipline</TableCell>
                  </TableRow>
                 
                </TableBody>
              </Table>



            </ProjectTextRow>
          </ProjectSectionContent>



          
        </ProjectSection>

        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow stretch width="m">
              <ProjectSectionHeading>Hard Skills</ProjectSectionHeading>
              
              <Table>
                <TableBody>
                  <TableRow>
                    <TableHeadCell>VR AR XR</TableHeadCell>
                    <TableCell>Conception, UX Development, Deployment, Business Model</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Motion Capture</TableHeadCell>
                    <TableCell>Optitrack System, Motive, Captury, Theia Markerless</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Volumetric Capture</TableHeadCell>
                    <TableCell>Holosys 4DViews, Photogrammetry, LiDAR Scanning</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Graphic & Motion Design</TableHeadCell>
                    <TableCell>Photoshop, After Effect, Figma, Miro, Mural</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Research</TableHeadCell>
                    <TableCell>Mixed Methods (<i>Interviews, Workshops, Surveys, Personas, Usability Testing, A/B Testing, Prototyping</i>), <br /> <br /> Technical Writing, Scientific Publishing, Dissemination</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Traditional & Spatial Video</TableHeadCell>
                    <TableCell>
                      Production Design, (<i>Planning, Budgeting, Shooting List, Logistics, Paperworks</i>) <br /> <br />
                      2D Cameras (<i>RED, ARRI, BlackMagic, Sony</i>) <br /> <br />
                      Spatial Video Cameras (<i>Insta360 Pro 2, GoPro Rig, Canon RF 180°</i>) and software (<i>Autopano, Mistika VR</i>) <br /> <br />
                      Lighting (<i>Studio, Indoor, Outdoor</i>) <br /> <br />
                      Editing (<i>Data Management & Conversion, Adobe Premiere, AVID</i>) <br /> <br />
                      VFX (<i>After Effects, Nuke</i>) <br /> <br />
                      CG (<i>Blender, Maya</i>) <br /> <br />
                      Financing (<i>Open Calls, Pitching, Production Markets</i>) </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>-------</TableHeadCell>
                    <TableCell>-------</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Currently Improving</TableHeadCell>
                    <TableCell>Unity, Unreal Engine, HTML, GitHub Development</TableCell>
                  </TableRow>
                </TableBody>
              </Table>



            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>




        
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Development</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    Lorem ipsum dolor
                    <Link href="https://code.visualstudio.com/">Lorem ipsum dolor</Link>{' '}
                    Lorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolor
                  </ListItem>
                  
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

        

      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
