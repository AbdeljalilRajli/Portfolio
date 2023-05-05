import Isotope from "isotope-layout";
import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";
const ProjectIsotop = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".works-items", {
        itemSelector: ".works-col",
        //    layoutMode: "fitRows",
        percentPosition: true,
        masonry: {
          columnWidth: ".works-col",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 1000);
    //     return () => isotope.current.destroy();
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "active" : "");
  return (
    <Fragment>
      <div className="works-box">
        <div className="works-items works-list-items row">
          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-branding sorting-photo ">
            <div className="works-item">
              <Link href="/work-single">
                <a>
                  <span
                    className="image"
                  >
                    <span className="img">
                      <img src="assets/images/portfolio-aquilla-website-mockup.jpg" alt="Aquilla" />
                      <span className="overlay" />
                    </span>
                  </span>
                  <span className="desc">
                    <span
                      className="name"
                    >
                      Aquilla
                    </span>
                    <span
                      className="category"
                    >
                      Job Board
                      <br />
                      Specialized in IT
                    </span>
                  </span>
                </a>
              </Link>
            </div>
          </div>
          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-branding sorting-ui-ux-design ">
            <div className="works-item">
              <Link href="/work-single">
                <a>
                  <span
                    className="image"
                  >
                    <span className="img">
                      <img src="assets/images/manal-cherki-image.jpg" alt="Manal-Cherki" />
                      <span className="overlay" />
                    </span>
                  </span>
                  <span className="desc">
                    <span
                      className="name"
                    >
                      Manal Cherki
                    </span>
                    <span
                      className="category"
                    >
                      Artiste Pluridisciplinaire
                    </span>
                  </span>
                </a>
              </Link>
            </div>
          </div>
          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-development sorting-ui-ux-design ">
            <div className="works-item">
              <Link href="/work-single">
                <a>
                  <span
                    className="image"
                  >
                    <span className="img">
                      <img src="assets/images/b-drink-image.jpg" alt="ExplorB-Drinke" />
                      <span className="overlay" />
                    </span>
                  </span>
                  <span className="desc">
                    <span
                      className="name"
                    >
                      B-DRINK
                    </span>
                    <span
                      className="category"
                    >
                      Energy Drink Company
                    </span>
                  </span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default ProjectIsotop;
