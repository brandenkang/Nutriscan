import React from 'react';

class AboutPage extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
          <main className = "primary">
	          <section className = "main">
	          	<article>
	          		<header>
	          			<span className = "heading">About NutriScan</span>
	          		</header>

	          		<div className = "content">
	          			<p>NutriScan is a web application that gives you the nutritional information you need with just the snap of a picture.</p>
	          			<p>Nowadays, we live in a very health-conscious society. It's important to be aware of the nutrients in your food, 
	          			but it's not always easy... That's why we created NutriScan, a simple, intuitive web application that gives you 
	          			the nutritional breakdown of what you are eating. With only a picture from your smartphone, NutriScan can tell
	          			you the amount of calories, carbohydrates, proteins, and more in what you consume. Not only that, but NutriScan
	          			can also keep track of your health and nutritional intake. Regardless of what your nutritional goals are, 
	          			NutriScan can help you live a healthy and happy life.</p>
	          		</div>

	          		<footer>
	          			<p>Made by Abdullah Zameek, Jeremy Chen, Branden Kang, and Michael Lu.</p>
	          		</footer>
	          	</article>
          	</section>
          </main>
		);
	}
}

export default AboutPage;