import React from 'react';
import coverImage from "../../assets/large/0.jpeg";

function About() {
  return (
    <section className="my-5">
      <h1 id="about">Dante's World</h1>
      <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
      <div className="my-2">
        <p>
          Hello! My name is Dante Rodriguez and I am currently a coding bootcamp student. I graduated from Buffalo State College and I obtained my bachelors in Mechanical Engineering.
          I love playing basketball and playing video games. As a young kid, I always had an interest in animals. My dream job was to become a Vet and help animals across the globe. Now, I 
          have found a new interest in coding.
        </p>
        <div>
          <h2>Project 3</h2>
          <img src="https://youseph-codes.github.io/Anime-Watchify/" alt='project 3' />
        </div>
      </div>
    </section>
  );
}

export default About;