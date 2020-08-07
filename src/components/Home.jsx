import React from "react";

function Home() {
  return (
    <section className="section" id="home" name="home">
      <div className="container pt-5">
        <div className="row">
          <div className="col-md-6 left">
            <img className="img-fluid" src="images/man.png" alt="Banner Pic" />
          </div>
          <div className="col-md-6 right pt-3 mt-3">
            <h4 className="mt-5 myName">Abbas Anandwala</h4>
            <h1 className="mt-1 title">
              I'm a Web <span className="tag-primary">Developer</span>
            </h1>
            <p className="mt-2 myDescription">
              I'am a Professional Web <span className="tag-pure">Designer</span>{" "}
              and <span className="tag-pure">Developer</span> and{" "}
              <span className="tag-pure">Python Programmer</span>. I work as a
              Freelancer.
            </p>
            <button
              type="button"
              className="p-2 mt-4 btn btn-md"
              data-toggle="tooltip"
              data-placement="bottom"
              title="Download CV"
            >
              Download CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
