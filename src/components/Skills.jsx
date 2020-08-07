import React from "react";

function Skills() {
  return (
    <section className="section" id="skills" name="skills">
      <div className="container pt-5">
        <h1 className="mb-4 text-center tag-primary">
          My <span className="tag-primary">Skills</span>
        </h1>
        <div className="row mt-4">
          <div className="col-md-6">
            <div className="skill p-3 my-2">
              <label for="html">
                <img
                  alt=""
                  className="m-2"
                  height="25px"
                  width="25px"
                  src="images/html5.svg"
                />
                HTML
              </label>
              <div className="progress">
                <div
                  name="html"
                  className="html progress-bar"
                  role="progressbar"
                  aria-valuenow="20"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <div className="skill p-3 my-2">
              <label for="css">
                <img
                  alt=""
                  className="m-2"
                  height="25px"
                  width="25px"
                  src="images/css.svg"
                />
                CSS
              </label>
              <div className="progress">
                <div
                  name="css"
                  className="css progress-bar"
                  role="progressbar"
                  aria-valuenow="85"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <div className="skill p-3 my-2">
              <label for="js">
                <img
                  alt=""
                  className="m-2"
                  height="25px"
                  width="25px"
                  src="images/javascript.svg"
                />
                Javascript
              </label>
              <div className="progress">
                <div
                  name="js"
                  className="js progress-bar"
                  role="progressbar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <div className="skill p-3 my-2">
              <label for="bootstrap">
                <img
                  alt=""
                  className="m-2"
                  height="25px"
                  width="25px"
                  src="images/bootstrap.svg"
                />
                Bootstrap
              </label>
              <div className="progress">
                <div
                  name="bootstrap"
                  className="bootstrap progress-bar"
                  role="progressbar"
                  aria-valuenow="82"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="skill p-3 my-2">
              <label for="php">
                <img
                  alt=""
                  className="m-2"
                  height="25px"
                  width="25px"
                  src="images/php.svg"
                />
                PHP
              </label>
              <div className="progress">
                <div
                  name="php"
                  className="php progress-bar"
                  role="progressbar"
                  aria-valuenow="73"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <div className="skill p-3 my-2">
              <label for="plsql">
                <img
                  alt=""
                  className="m-2"
                  height="25px"
                  width="25px"
                  src="images/postgresql.svg"
                />
                Postgres SQL
              </label>
              <div className="progress">
                <div
                  name="plsql"
                  className="plsql progress-bar"
                  role="progressbar"
                  aria-valuenow="88"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <div className="skill p-3 my-2">
              <label for="python">
                <img
                  alt=""
                  className="m-2"
                  height="25px"
                  width="25px"
                  src="images/python.svg"
                />
                Python
              </label>
              <div className="progress">
                <div
                  name="python"
                  className="python progress-bar"
                  role="progressbar"
                  aria-valuenow="90"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <div className="skill p-3 my-2">
              <label for="java">
                <img
                  alt=""
                  className="m-2"
                  height="25px"
                  width="25px"
                  src="images/java.svg"
                />
                Java
              </label>
              <div className="progress">
                <div
                  name="java"
                  className="java progress-bar"
                  role="progressbar"
                  aria-valuenow="70"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
