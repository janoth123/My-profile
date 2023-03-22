import "../styles/about.scss";
import {
  FaDownload,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaNode,
  FaReact,
  FaSass,
  FaGithub,
} from "react-icons/fa";
import {
  SiJquery,
  SiMongodb,
  SiMysql,
  SiGithub,
  SiExpress,
} from "react-icons/si";
import { MdWork } from "react-icons/md";
import { useContext } from "react";
import { contextManager } from "../context/PortfolioContext";
export default function About() {
  const { initial } = useContext(contextManager);
  return (
    <div
      className={
        initial.light_mode ? "about-container a-light-mode" : "about-container"
      }
    >
      <div className="about">
        <div className="header">
          ABOUT <span className="green">ME</span>
        </div>

        <div className="summaries">
          <div className="about-me-text">
            <h1>INFORMATION ABOUT ME</h1>
            <div className="about-text-width">
              <p>
                My guiding principles for transforming a story into a valuable
                problem-solving tool are focused on speed, efficiency,
                user-friendliness, and aesthetics. These principles inform my
                approach to every step of the process.
              </p>

              <p>
                I firmly believe that the strength of a team lies in the
                strength of its individual members. To ensure that I contribute
                to both personal and organizational success, I am committed to
                continuously developing my skills in leadership, performance
                excellence, and professionalism.
              </p>
              <a className="button" href="../images/resume.pdf" download>
                Download CV
                <div className="green-icon">
                  <FaDownload />
                </div>
              </a>
            </div>
          </div>

          <div className="stats-section">
            <div className="stat">
              <div className="number green">30+ </div>
              <div className="text">PROJECTS COMPLETED</div>
            </div>
            <div className="stat">
              <div className="number green">5+ </div>
              <div className="text">YEARS OF EXPEREIENCE</div>
            </div>
            <div className="stat">
              <div className="number green">10+ </div>
              <div className="text">LIBRARIES & FRAMEWORKS</div>
            </div>
            <div className="stat">
              <div className="number green">A+ </div>
              <div className="text">AT EXCELLENCE</div>
            </div>
          </div>
        </div>

        <div className="divider">
          <div className="new-section">
            <h2>MY SKILLS</h2>
          </div>
        </div>

        <div className="my-skills-section">
          <div className="skill html">
            <h3>HTML5</h3>
            <div className="skill-icon-section">
              <FaHtml5 className="icon" />{" "}
              <div className="full-width">
                <div className="progress-bar"></div>
              </div>
            </div>
          </div>

          <div className="skill css">
            <h3>CSS3</h3>
            <div className="skill-icon-section">
              <FaCss3Alt className="icon" />{" "}
              <div className="full-width">
                <div className="progress-bar"></div>
              </div>
            </div>
          </div>

          <div className="skill js">
            <h3>JAVASCRIPT</h3>
            <div className="skill-icon-section">
              <FaJsSquare className="icon" />{" "}
              <div className="full-width">
                <div className="progress-bar"></div>
              </div>
            </div>
          </div>

          <div className="skill react">
            <h3>REACT JS</h3>
            <div className="skill-icon-section">
              <FaReact className="icon" />{" "}
              <div className="full-width">
                <div className="progress-bar"></div>
              </div>
            </div>
          </div>

          <div className="skill node">
            <h3>NODE JS</h3>
            <div className="skill-icon-section">
              <FaNode className="icon" />{" "}
              <div className="full-width">
                <div className="progress-bar"></div>
              </div>
            </div>
          </div>

          <div className="skill node">
            <h3>EXPRESS JS</h3>
            <div className="skill-icon-section">
              <SiExpress className="icon" />{" "}
              <div className="full-width">
                <div className="progress-bar"></div>
              </div>
            </div>
          </div>

          <div className="skill jquery">
            <h3>JQUERY</h3>
            <div className="skill-icon-section">
              <SiJquery className="icon" />{" "}
              <div className="full-width">
                <div className="progress-bar"></div>
              </div>
            </div>
          </div>

          <div className="skill mongodb">
            <h3>MONGODB</h3>
            <div className="skill-icon-section">
              <SiMongodb className="icon" />{" "}
              <div className="full-width">
                <div className="progress-bar"></div>
              </div>
            </div>
          </div>

          <div className="skill mysql">
            <h3>MYSQL</h3>
            <div className="skill-icon-section">
              <SiMysql className="icon" />{" "}
              <div className="full-width">
                <div className="progress-bar"></div>
              </div>
            </div>
          </div>

          <div className="skill sass">
            <h3>SASS</h3>
            <div className="skill-icon-section">
              <FaSass className="icon" />{" "}
              <div className="full-width">
                <div className="progress-bar"></div>
              </div>
            </div>
          </div>

          <div className="skill git">
            <h3>GIT & GITHUB</h3>
            <div className="skill-icon-section">
              <SiGithub className="icon" />{" "}
              <div className="full-width">
                <div className="progress-bar"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider">
          <div className="new-section">
            <h2>MY TIMELINE</h2>
          </div>
        </div>

        <div className="timeline-section">
          <div className="timeline-container">
            <div className="timeline-icon">
              <MdWork className="icon" />
            </div>

            <div className="timeline">
              <div className="date">Oct 2022 - PRESENT</div>
              <div className="body">
                <div className="role">
                  FRONT-END DEVELOPER - <span className="company">STAPLES</span>
                </div>
                <p>
                  • Developing and implementing a highly responsive user
                  interface to provide a good user experience with 95% accuracy.{" "}
                  <br />
                  • Meeting with the development team twice weekly to discuss
                  user stories, and building solutions to meet those
                  requirements. <br />
                  • increased number of visitors with 200+ purchases as result
                  of new UI improvement. <br />• 300+ visitors who stay at least
                  30 sec+ on a daily basis. <br /> • Rebuilding the codebase
                  from using CSS file styling to using customized Staples UI
                  library . <br />• Constantly reviewing software bugs, and
                  reports, highlighting problem areas, identifying quality
                  issues, and creating test reports and solution designs which
                  resulted in 98% smooth DevOps process. <br />• increased
                  number of visitors with 200+ purchases as result of new UI
                  improvement. <br />• Documenting application changes and
                  developing updates, monitoring and improving frontend
                  performance.
                </p>
              </div>
            </div>
          </div>

          <div className="timeline-container">
            <div className="timeline-icon">
              <MdWork className="icon" />
            </div>

            <div className="timeline">
              <div className="date">Sept 2022 - PRESENT</div>
              <div className="body">
                <div className="role">
                  MENTOR(Volunter) - <span className="company">MICROVERSE</span>
                </div>
                <p>
                  • Built over 10+ responsive and fully functional frontend
                  applications with React JS.
                  <br />
                  Mentoring 10+ junior web developers, and providing technical
                  support through code reviews with positive feedback from
                  junior developers.
                  <br />
                  • Propose over 70% improvements to code organization to
                  improve code quality and overall performance.
                  <br />
                  • Provide advice and tips on maintaining motivation to
                  maintain longevity in the program.
                  <br />
                </p>
              </div>
            </div>
          </div>

          <div className="timeline-container">
            <div className="timeline-icon">
              <MdWork className="icon" />
            </div>

            <div className="timeline">
              <div className="date">JUN 2021 - JAN 2023</div>
              <div className="body">
                <div className="role">
                  FRONT-END DEVELOPER -{" "}
                  <span className="company">REWORK ACADEMY</span>
                </div>
                <p>
                  • Built over 10+ responsive and fully functional frontend
                  applications with React JS.
                  <br />
                  • spent 1300+ hours in building and executing the app.
                  <br />• Worked as a team to deploy applications to production
                  using various tools and automate processes.
                </p>
              </div>
            </div>
          </div>

          <div className="timeline-container">
            <div className="timeline-icon">
              <MdWork className="icon" />
            </div>

            <div className="timeline">
              <div className="date">MAR 2021 - JUN 2022</div>
              <div className="body">
                <div className="role">
                  JAVASCRIPT -{" "}
                  <span className="company">REWORKS ACCADEMY</span>
                </div>
                <p>
                  • Spent 1500+ hours mastering algorithms, data
                  structures,Backend and front-end development while
                  simultaneously developing projects with JavaScript, React, and
                  Node Js. <br />
                  • Developed proficiency in constantly reviewing software bugs,
                  and reports, highlighting problem areas, identifying quality
                  issues, and creating test reports and solution designs. <br />
                </p>
              </div>
            </div>
          </div>

          <div className="timeline-container">
            <div className="timeline-icon">
              <MdWork className="icon" />
            </div>

            <div className="timeline">
              <div className="date">JAN 2013 - FEB 2017</div>
              <div className="body">
                <div className="role">
                  BACHELOR'S DEGREE IN BANKING AND FINANCE -{" "}
                  <span className="company">KOGI STATE UNIVERSITY</span>
                </div>
                <p>
                  • Management sciences interdisciplinary discipline requiring
                  critical thinking, teamwork, tenacity, and problem-solving
                  through research.
                  <br />
                  • Spent 4 years understanding the financial system and it’s
                  important to a nation's economy.
                  <br />
                  • I gained a better understanding of the crucial role that
                  banks play in a country’s economy and the significance it
                  holds for investors.
                  <br />
                  • Examined the Significance of Financial Inclusion for Banks:
                  A Case Study of Access Bank Nigeria Limited From 2013- 2017.
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
