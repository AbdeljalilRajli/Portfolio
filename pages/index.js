import dynamic from "next/dynamic";
import Link from "next/link";
import ContactForm from "../src/components/ContactForm";
import TestimonialSlider from "../src/components/TestimonialSlider";
import Layout from "../src/layout/Layout";
import { TfiBriefcase } from "react-icons/Tfi";
import { BsPeople } from "react-icons/Bs";
import { AiOutlineCoffee } from "react-icons/Ai";
import { FaLaptopCode } from "react-icons/Fa";
import { MdOutlineDesignServices } from "react-icons/Md";


const ProjectIsotop = dynamic(() => import("../src/components/ProjectIsotop"), {
  ssr: false,
});
const Index = () => {
  return (
    <Layout>
      <section className="section section-started">
        <div className="container">
          {/* Hero Started */}
          <div className="hero-started">
            <div
              className="slide"
            >
              <img src="assets/images/developer-holding-pc.png" alt="" />
              {/*<span className="circle circle-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="349px"
                  height="350px"
                >
                  <path
                    fillRule="evenodd"
                    fill="#b466fc"
                    d="M749.000,0.000 C749.000,206.786 581.459,374.514 374.608,374.514 C167.758,374.514 -0.000,206.786 -0.000,0.000 "
                  />
                </svg> 
  </span>*/}
              {/*<span className="circle circle-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="416px"
                  height="209px"
                >
                  <path
                    fillRule="evenodd"
                    fill="#3aafc9"
                    d="M-0.000,209.000 C-0.000,94.252 93.051,0.745 207.835,0.745 C322.619,0.745 416.000,94.252 416.000,209.000 "
                  />
                </svg>
              </span>*/}
              {/*<span className="circle circle-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="416px"
                  height="209px"
                >
                  <path
                    fillRule="evenodd"
                    fill="#b9d1e4"
                    d="M-0.000,209.000 C-0.000,94.252 93.051,0.745 207.835,0.745 C322.619,0.745 416.000,94.252 416.000,209.000 "
                  />
                </svg>
              </span>*/}
              {/*<span className="circle circle-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="121px"
                  height="241px"
                >
                  <path
                    fillRule="evenodd"
                    fill="#676cdb"
                    d="M0.000,0.000 C66.624,0.000 120.402,54.096 120.402,120.733 C120.402,187.371 66.624,241.000 0.000,241.000 "
                  />
                </svg>
              </span>*/}
              {/*<span className="circle circle-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="232px"
                  height="117px"
                >
                  <path
                    fillRule="evenodd"
                    fill="rgb(255, 208, 65)"
                    d="M232.000,0.000 C232.000,64.151 180.376,116.580 116.238,116.580 C52.100,116.580 0.000,64.151 0.000,0.000 "
                  />
                </svg>
              </span>*/}
            </div>
            <div className="content">
              <div className="titles">
                <div
                  className="subtitle"
                >
                  FRONT END DEVELOPER
                </div>
                <h2
                  className="title"
                >
                  Abdeljalil Rajli
                </h2>
              </div>
              <div
                className="description"
              >
                <p>
                👋 Hi, Abdeljalil here. Obviously! <br />
                 I am a software engineer who constantly seeks out innovative solutions to everyday problems.<br />
                 For whatever reason it is you are here, welcome. 
                 </p>
                <div className="social-links">
                  <a target="_blank" rel="noreferrer" href="#">
                    <i aria-hidden="true" className="fab fa-linkedin" />
                  </a>
                  <a target="_blank" rel="noreferrer" href="#">
                    <i aria-hidden="true" className="fab fa-github" />
                  </a>
                  <a target="_blank" rel="noreferrer" href="#">
                    <i aria-hidden="true" className="fab fa-twitter" />
                  </a>
                </div>
              </div>
            </div>
            <div className="info-list">
              <ul>
                <li>
                  Born in <strong>Morocco</strong>
                </li>
                <li>
                  Experience <strong>4+ Years</strong>
                </li>
                <li>
                  Date of Birth <strong>13 July 1996</strong>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section
        className="section section-bg section-parallax section-parallax-1"
        id="about-section"
      >
        <div className="container">
          {/* Section Heading */}
          <div className="m-titles">
            <h2
              className="m-title"
            >
              About Me
            </h2>
          </div>
          <div className="row row-custom">
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 align-right">
              {/* Section numbers */}
              <div className="numbers-items">
                <div
                  className="numbers-item"
                >
                  <div className="icon">
                  <TfiBriefcase />
                  </div>
                  <div className="num">15+</div>
                  <div className="title">
                    Completed Project
                  </div>
                </div>
                <div
                  className="numbers-item"
                >
                  <div className="icon">
                    <BsPeople />
                  </div>
                  <div className="num">20+</div>
                  <div className="title">
                    Happy Clients
                  </div>
                </div>
                <div
                  className="numbers-item"
                >
                  <div className="icon">
                  <AiOutlineCoffee />
                  </div>
                  <div className="num">500+</div>
                  <div className="title">
                    Cup of Coffee
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 vertical-line">
              {/* Section Profile */}
              <div className="profile-box">
                <div
                  className="text"
                >
                  <p>
                  I am a professional frontend developer and entrepreneur based in Marrakech, Morocco, who strives to find creative 
                  solutions to real-world challenges. As a developer, I spend a significant amount of my time devising 
                  innovative solutions to technical problems. However, in addition to my professional pursuits, I also 
                  enjoy utilizing my creativity to design engaging and enjoyable experiences on the web.
                  </p>
                  <p>
                  While I initially stumbled upon coding by accident, I have grown to develop a genuine passion for it. 
                  As the saying goes, sometimes the best things in life come to us unexpectedly. In particular, 
                  I find great joy in witnessing how lines of code can come together to create something entirely 
                  new and visually stunning. The process of bringing a project to life through coding truly feels 
                  like a magical experience to me.
                  </p>
                  <a
                    href="#contact-section"
                    className="btn"
                  >
                    <span>Contact Me</span>
                  </a>
                  <div
                    className="signature"
                  >
                    <img src="assets/images/signature.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="section section-parallax section-parallax-2"
        id="resume-section"
      >
        <div className="container">
          {/* Section Heading */}
          <div className="m-titles">
            <h2
              className="m-title"
            >
              My Resume
            </h2>
          </div>
          <div className="row row-custom">
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3"></div>
            <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 vertical-line">
              {/* Description */}
              
              {/* Skills */}
              <div className="skills-items">
                
                <div
                  className="skills-item"
                >
                  <div className="name">ReactJs</div>
                  <div className="dots dots-90">
                    <div className="dots-row">
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                    </div>
                  </div>
                  
                </div>
                <div
                  className="skills-item"
                >
                  <div className="name">JavaScript</div>
                  <div className="dots dots-90">
                    <div className="dots-row">
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                    </div>
                  </div>

                </div>
                <div
                  className="skills-item"
                >
                  <div className="name">HTML</div>
                  <div className="dots dots-100">
                    <div className="dots-row">
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                    </div>
                  </div>

                </div>
                <div
                  className="skills-item"
                >
                  <div className="name">CSS</div>
                  <div className="dots dots-90">
                    <div className="dots-row">
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                    </div>
                  </div>

                </div>
                <div
                  className="skills-item"
                >
                  <div className="name">SCSS</div>
                  <div className="dots dots-90">
                    <div className="dots-row">
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                    </div>
                  </div>

                </div>
                <div
                  className="skills-item"
                >
                  <div className="name">Tailwind CSS</div>
                  <div className="dots dots-90">
                    <div className="dots-row">
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                    </div>
                  </div>

                </div>
                <div
                  className="skills-item"
                >
                  <div className="name">TypeScript</div>
                  <div className="dots dots-80">
                    <div className="dots-row">
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                    </div>
                  </div>

                </div>
                <div
                  className="skills-item"
                >
                  <div className="name">PHP</div>
                  <div className="dots dots-80">
                    <div className="dots-row">
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                    </div>
                  </div>

                </div>
                <div
                  className="skills-item"
                >
                  <div className="name">WordPress</div>
                  <div className="dots dots-100">
                    <div className="dots-row">
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                    </div>
                  </div>

                </div>
                <div
                  className="skills-item"
                >
                  <div className="name">MySQL</div>
                  <div className="dots dots-90">
                    <div className="dots-row">
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                    </div>
                  </div>

                </div>
              </div>
              {/* Services */}
              <div
                className="p-title"
              >
                SERVICES
              </div>
              <div className="services-items">
                <div className="services-col">
                  <div
                    className="services-item"
                  >
                    <div className="icon">
                      <MdOutlineDesignServices />
                    </div>
                    <div className="title">UX/UI</div>
                    <div className="text">
                      <p>
                      Before creating any product, it’s important to have a design. 
                      This is why I work with my clients from scratch and my first 
                      stage is to create a design version of the future product.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="services-col">
                  <div
                    className="services-item"
                  >
                    <div className="icon">
                      <FaLaptopCode />
                    </div>
                    <div className="title">Development</div>
                    <div className="text">
                      <p>
                      My programming skills come in handy once the design is ready, 
                      and I can transform any design into a high-quality end product 
                      with pixel-perfect precision.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* History 
              <div className="history-left">
                <div className="history-items">
                  <div
                    className="p-title"
                  >
                    EDUCATION
                  </div>
                  <div
                    className="history-item"
                  >
                    <div className="date">2010 - 2012</div>
                    <div className="name">Master in Graphic</div>
                    <div className="subname">New York University</div>
                  </div>
                  <div
                    className="history-item"
                  >
                    <div className="date">2006 - 2009</div>
                    <div className="name">Bachelors of FineArt</div>
                    <div className="subname">New York University</div>
                  </div>
                </div>
                <div className="history-items">
                  <div
                    className="p-title"
                  >
                    AWARDS
                  </div>
                  <div
                    className="history-item"
                  >
                    <div className="date">2016 - awwwards</div>
                    <div className="name">Site of the Day</div>
                    <div className="text">
                      <p>
                        Euismod vel bibendum ultrices, fringilla vel eros, donec
                        euismod leo lectus.
                      </p>
                    </div>
                  </div>
                  <div
                    className="history-item"
                  >
                    <div className="date">2015 - designnominees</div>
                    <div className="name">Site of the Week</div>
                    <div className="text">
                      <p>
                        Euismod vel bibendum ultrices, fringilla vel eros, donec
                        euismod leo lectus.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="history-right">
                <div className="history-items">
                  <div
                    className="p-title"
                  >
                    EXPERIENCE
                  </div>
                  <div
                    className="history-item"
                  >
                    <div className="date">2014 - Present</div>
                    <div className="name">Soft Tech Inc.</div>
                    <div className="subname">UI Head &amp; Manager</div>
                    <div className="text">
                      <p>
                        Euismod vel bibendum ultrices, fringilla vel eros, donec
                        euismod leo lectus.
                      </p>
                    </div>
                  </div>
                  <div
                    className="history-item"
                  >
                    <div className="date">2010 - 2014</div>
                    <div className="name">Kana Design Studio</div>
                    <div className="subname">UI / UX Specialist</div>
                    <div className="text">
                      <p>
                        Euismod vel bibendum ultrices, fringilla vel eros, donec
                        euismod leo lectus.
                      </p>
                    </div>
                  </div>
                  <div
                    className="history-item"
                  >
                    <div className="date">2009 - 2010</div>
                    <div className="name">Paperart</div>
                    <div className="subname">Graphic Designer</div>
                    <div className="text">
                      <p>
                        Euismod vel bibendum ultrices, fringilla vel eros, donec
                        euismod leo lectus.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="clear" /> */}
              {/* Button CV */}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://bslthemes.site/ober/wp-content/uploads/2021/12/Jacky-Smith-Resume.pdf"
                className="btn"
              >
                <span>Download CV</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section
        className="section section-bg section-parallax section-parallax-5"
        id="works-section"
      >
        <div className="container">
          {/* Section Heading */}
          <div className="m-titles">
            <h2
              className="m-title"
            >
              My Projects
            </h2>
          </div>
          <div className="row row-custom">
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3"></div>
            <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 vertical-line">
              {/* Description */}
              <div
                className="text"
              >
                <p>
                  A Collection of my favorites project I’ve designed recently.
                  Feeling great while sharing here.
                </p>
              </div>
            </div>
          </div>
          {/* Works */}
          <ProjectIsotop />
        </div>
      </section>
      
      <section className="section " id="blog-section">
        <div className="container">
          {/* Section Heading */}
          <div className="m-titles">
            <h2
              className="m-title"
            >
              My Blog
            </h2>
          </div>
          <div className="row row-custom">
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3"></div>
            <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 vertical-line">
              {/* Description */}
              <div
                className="text"
              >
                <p>
                  Suspendisse potenti. Sed egestas eros eu libero posuere
                  ultrices. Nullam ut aliquet felis, sit amet imperdiet felis.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Blog */}
        <div className="blog-items">
          <div className="archive-item">
            <div className="image">
              <Link href="/blog-single">
                <a>
                  <img
                    src="assets/images/blog4.jpg"
                    alt="Usability Secrets to Create Better User Interfaces"
                  />
                </a>
              </Link>
            </div>
            <div className="desc">
              <div
                className="category"
              >
                UI Design
                <br />
                <span>November 28, 2021</span>
              </div>
              <h3
                className="title"
              >
                <Link href="/blog-single">
                  <a>Usability Secrets to Create Better User Interfaces</a>
                </Link>
              </h3>
              <div
                className="text"
              >
                <p>
                  Vivamus interdum suscipit lacus. Nunc ultrices accumsan
                  mattis. Aliquam vel sem vel velit efficitur malesuada. Donec
                  arcu lacus, ornare eget…{" "}
                </p>
                <div className="readmore">
                  <Link href="/blog-single">
                    <a className="lnk">Read more</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="archive-item">
            <div className="image">
              <Link href="/blog-single">
                <a>
                  <img
                    src="assets/images/blog3.jpg"
                    alt="Three Ways To Level Up Your Photography"
                  />
                </a>
              </Link>
            </div>
            <div className="desc">
              <div
                className="category"
              >
                Branding
                <br />
                <span>November 28, 2021</span>
              </div>
              <h3
                className="title"
              >
                <Link href="/blog-single">
                  <a>Three Ways To Level Up Your Photography</a>
                </Link>
              </h3>
              <div
                className="text"
              >
                <p>
                  Vivamus interdum suscipit lacus. Nunc ultrices accumsan
                  mattis. Aliquam vel sem vel velit efficitur malesuada. Donec
                  arcu lacus, ornare eget…{" "}
                </p>
                <div className="readmore">
                  <Link href="/blog-single">
                    <a className="lnk">Read more</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="archive-item">
            <div className="image">
              <Link href="/blog-single">
                <a>
                  <img
                    src="assets/images/single7.jpg"
                    alt="10 Useful Tips to Improve Your UI Designs"
                  />
                </a>
              </Link>
            </div>
            <div className="desc">
              <div
                className="category"
              >
                Photography
                <br />
                <span>November 28, 2021</span>
              </div>
              <h3
                className="title"
              >
                <Link href="/blog-single">
                  <a>10 Useful Tips to Improve Your UI Designs</a>
                </Link>
              </h3>
              <div
                className="text"
              >
                <p>
                  Vivamus interdum suscipit lacus. Nunc ultrices accumsan
                  mattis. Aliquam vel sem vel velit efficitur malesuada. Donec
                  arcu lacus, ornare eget…
                </p>
                <div className="readmore">
                  <Link href="/blog-single">
                    <a className="lnk">Read more</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="blog-more-link">
          <Link href="/blog">
            <a
              className="btn"
            >
              <span>View Blog</span>
            </a>
          </Link>
        </div>
      </section>
      
      <ContactForm />
    </Layout>
  );
};
export default Index;
