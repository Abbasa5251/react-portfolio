import React from "react";

function About() {
  return (
    <section className="section" id="about" name="about">
      <div className="container pt-5">
        <div className="row align-items-center">
          <div className="left col-md-6">
            <h1 className="mb-4">About Me</h1>
            <h4 className="mb-2">I'm Abbas Anandwala</h4>
            <p className="mb-1">
              I am a <span className="tag-primary">UX/UI Designer</span> and{" "}
              <span className="tag-primary">Web Developer</span>. I am Studying
              in VPASC College, Baramati and pursuing Bachelor's degree in
              Computer Science. I have knowledge in many Programming and
              Scripting Languages such as <span className="tag-primary">C</span>
              , <span className="tag-primary">C++</span>,{" "}
              <span className="tag-primary">HTML</span>,{" "}
              <span className="tag-primary">CSS</span>,{" "}
              <span className="tag-primary">JavaScript</span>,{" "}
              <span className="tag-primary">PHP</span>,{" "}
              <span className="tag-primary">Python</span>,{" "}
              <span className="tag-primary">Java</span> etc.
            </p>
            <div className="icons my-3 d-inline-flex flex-row">
              <div className="p-2">
                <a
                  href="https://github.com/Abbasa5251"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Github"
                >
                  <img alt="" src="images/github.svg" />
                </a>
              </div>
              <div className="p-2">
                <a
                  href="https://www.linkedin.com/in/abbas-anandwala-11b4871b3/"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="LinkedIn"
                >
                  <img alt="" src="images/linkedin.svg" />
                </a>
              </div>
              <div className="p-2">
                <a
                  href="https://www.instagram.com/abbasanandwala/"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Instagram"
                >
                  <img alt="" src="images/instagram.svg" />
                </a>
              </div>
              <div className="p-2">
                <a
                  href="https://www.facebook.com/abbas.anandwala.7/"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Facebook"
                >
                  <img alt="" src="images/facebook.svg" />
                </a>
              </div>
            </div>
          </div>
          <div className="right col-md-6">
            <div className="align-self-center text-center">
              <img
                alt=""
                className="border rounded-circle my-5"
                src="images/face.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
