import React from "react";

function Services() {
	return (
		<section className="section" id="services" name="services">
			<div className="container pt-5">
				<h1 className="text-center mb-4">Services</h1>
				<div className="row row-cols-1 row-cols-md-3">
					<div className="col my-5">
						<div className="card text-center border-0">
							<img
								src="images/graphics_design.svg"
								className="my-4 card-img-top align-self-center"
								alt="Graphics Design"
							/>
							<div className="card-body">
								<h5 className="card-title">Graphics Design</h5>
								<p className="card-text">
									Designing Logos, Typographs, Fonts, Motion
									graphics
								</p>
							</div>
						</div>
					</div>
					<div className="col my-5">
						<div className="card text-center border-0">
							<img
								src="images/web_design.svg"
								className="my-4 card-img-top align-self-center"
								alt="Web Design"
							/>
							<div className="card-body">
								<h5 className="card-title">Web Design</h5>
								<p className="card-text">
									Designing Responsive Web Pages, Styling and
									adding animations
								</p>
							</div>
						</div>
					</div>
					<div className="col my-5">
						<div className="card text-center border-0">
							<img
								src="images/web_development.svg"
								className="my-4 card-img-top align-self-center"
								alt="Web Development"
							/>
							<div className="card-body">
								<h5 className="card-title">Web Development</h5>
								<p className="card-text">
									Adding Dynamic contents to Website,
									Deploying on Server and Maintaining it
								</p>
							</div>
						</div>
					</div>
					<div className="col my-5">
						<div className="card text-center border-0">
							<img
								src="images/software_dev.svg"
								className="my-4 card-img-top align-self-center"
								alt="Software Application"
							/>
							<div className="card-body">
								<h5 className="card-title">
									Software Development
								</h5>
								<p className="card-text">
									Building Software, Developing and
									Maintaining
								</p>
							</div>
						</div>
					</div>
					<div className="col my-5">
						<div className="card text-center border-0">
							<img
								src="images/web_application.svg"
								className="my-4 card-img-top align-self-center"
								alt="Web Application"
							/>
							<div className="card-body">
								<h5 className="card-title">Web Application</h5>
								<p className="card-text">
									Building Web Applications and connecting it
									to Database
								</p>
							</div>
						</div>
					</div>
					<div className="col my-5">
						<div className="card text-center border-0">
							<img
								src="images/ful_stack.svg"
								className="my-4 card-img-top align-self-center"
								alt="Full Stack Development"
							/>
							<div className="card-body">
								<h5 className="card-title">
									Full Stack Development
								</h5>
								<p className="card-text">
									Designing UX/UI of Website as well as
									Back-end Development
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Services;
