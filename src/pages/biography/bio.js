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
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Summary</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                  I work as a Research and Development Engineer at <Link href="https://www.target3d.co.uk/">Target3D</Link> in London. My role involves prototyping and developing custom tracking solutions using cutting-edge media technologies in areas like Motion and Volumetric capture, virtual production, VR & AR, robotics, biomechanics, animation, VFX, gaming, training, and simulation.
            
       

                  </ListItem> 
                  <ListItem>
                  I earned my PhD in Design from Brunel University London, thanks to funding from <Link href="https://www.target3d.co.uk/">StoryFutures</Link>. During my doctoral studies, I co-designed, prototyped, and evaluated ways to integrate immersive technologies into filmmakers’ workflows, sharing my findings through <Link href="https://scholar.google.com/citations?hl=en&user=o949NnIAAAAJ">scientific pubblications</Link>.
                  </ListItem>

                  <ListItem>
                  I’ve accumulated years of experience in the industry as Creative Producer and XR Specialist, acquiring a blend of technical proficiency and business acumen. During my tenure at <Link href="https://proximamilano.com/">Proxima Milano</Link>  I was responsible for initiating new projects and proactively building business relationships with new clients, proposing innovative advertising approaches through immersive media.
                  </ListItem>

                  <ListItem>
                  I love sharing the knowledge I’ve acquired over the years in the immersive domain. My passion for public speaking was ignited by my BA thesis, which eventually became a book. This trailblazing work attracted interest from academics and industry professionals, leading to opportunities for me to travel and present my research around the world for a couple of years. <br />
                  </ListItem>

                  <ListItem>
                  Since immersive media and technologies are inherently experiential, words alone cannot fully convey their essence. This is why, so far, I believe the pinnacle of my dissemination efforts over the years was my role as Curator of the <Link href="/articles/MFF">Milano Film Festival</Link>. I have always felt a deep connection to this movement and a strong urgency to ensure the success of this medium. <br /> This commitment drives my dedication to properly introducing it to people and contributing to its development.
                  </ListItem>
                 


                </List>
                <br />
                <br />

                <div style={{ textAlign: 'center' }}>
                <Link href="/onepage_cv.pdf">Onepage CV</Link>

                </div>



              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>





        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Skills</ProjectSectionHeading>
              <ProjectSectionText as="div">
              
              <br />
              Every profession and role evolves due to technological advancements, socio-economic changes, and personal circumstances. 
              <br /> Change is inevitable, and with change comes transformation, necessitating ongoing learning. 
              <br /> Since completing high school and embarking on an unconventional path, I have been driven to acquire new knowledge and skills.
              <br />
              <br />
              <List>
              

              <ListItem>
              I had zero clues about filmmaking
              </ListItem>
              
              <ListItem>
              I had zero clues about VR, AR and real-time game engines
              </ListItem>

              <ListItem>
              I had zero clues about Sales, Accouting and Business Development
              </ListItem>

              <ListItem>
              I had zero clues about academia or what a PhD entailed
              </ListItem>

              <ListItem>
              I had zero clues about Motion Capture
              </ListItem>

              <ListItem>
              I had zero clues on how to build a website
              </ListItem>
            

              </List>
              
              <br />
              
              My constant curiosity and passion for new experiences have fueled this process, regardless of the outcome. As I explore new subjects, methods, and technologies, my career journey has demanded rapid adaptation and the acquisition of new competencies within short periods that have been measured and evaluated. 
                
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
                    <TableCell> <Link href="https://github.com/AAimons/VR_Puzzle_Game_POC">Unity</Link> , Unreal Engine, Python, <Link href="https://github.com/AAimons/Vertical-Video-Slider-Comparison-HTML">HTML</Link>, GitHub Development</TableCell>
                  </TableRow>
                </TableBody>
              </Table>



            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>




        
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Extra</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                  After playing competitively throughout my teenage years (Junior Europe Best Ranking #187), I became a certified 🎾 tennis coach (F.I.T) and taught to kids while I was enrolled in my BA.              
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
