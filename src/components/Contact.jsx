import React from "react";

function Contact() {
	return (
		<section className="section" id="contact" name="contact">
			<div className="container pt-5">
				<h1 className="text-center mb-4">
					Contact <span className="tag-primary">Me</span>
				</h1>
				<div className="py-5 card-deck text-center">
					<div className="card border-0">
						<img
							src="images/email.svg"
							className="mt-3 align-self-center"
							alt="Email"
							width="25px"
							height="25px"
						/>
						<div className="card-body">
							<h5 className="card-title">Email me on</h5>
							<p className="card-text">abbasa5251@hotmail.com</p>
							<div className="card-footer">
								<a
									href="mailto:abbasa5251@hotmail.com"
									className="button btn btn-sm"
								>
									Email Now
								</a>
							</div>
						</div>
					</div>
					<div className="card border-0">
						<img
							src="images/phone.svg"
							className="mt-3 align-self-center"
							alt="Contact"
							width="25px"
							height="25px"
						/>
						<div className="card-body">
							<h5 className="card-title">Call me on</h5>
							<p className="card-text">+91 777 694 6904</p>
							<div className="card-footer">
								<a
									href="tel:+91 777 694 6904"
									className="button btn btn-sm"
								>
									Call Now
								</a>
							</div>
						</div>
					</div>
					<div className="card border-0">
						<img
							src="images/pin.svg"
							className="mt-3 align-self-center"
							alt="Location"
							width="25px"
							height="25px"
						/>
						<div className="card-body">
							<h5 className="card-title">Visit Me</h5>
							<p className="card-text">
								Avaduth Nagar, Baraamti-413102.
							</p>
							<div className="card-footer">
								<a
									href="https://goo.gl/maps/cmRNFmU9eFYhUqww7"
									className="button btn btn-sm"
								>
									Open in Maps
								</a>
							</div>
						</div>
					</div>
				</div>
				<form className="py-5" action="">
					<div className="form-row">
						<div className="form-group col-md-6">
							<input
								type="text"
								className="form-control"
								placeholder="Enter Your Name"
							/>
						</div>
						<div className="form-group col-md-6">
							<input
								type="email"
								className="form-control"
								placeholder="Enter Your Email"
							/>
						</div>
					</div>
					<div className="form-group">
						<input
							type="text"
							className="form-control"
							placeholder="Enter Subject"
						/>
					</div>
					<div className="form-group">
						<textarea
							name="message"
							className="form-control"
							rows="5"
							placeholder="Enter Message"
						></textarea>
					</div>
					<div className="text-center">
						<button className="button btn mt-3 mb-5" type="submit">
							Send Message
						</button>
					</div>
				</form>
			</div>
		</section>
	);
}

export default Contact;
