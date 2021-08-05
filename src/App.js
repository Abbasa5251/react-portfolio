import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
	return (
		<div>
			<Navbar />
			<main className="main" name="main">
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/about">
						<About />
					</Route>
					<Route exact path="/skills">
						<Skills />
					</Route>
					<Route exact path="/services">
						<Services />
					</Route>
					<Route exact path="/contact">
						<Contact />
					</Route>
				</Switch>
			</main>
			<Footer />
		</div>
	);
}

export default App;
