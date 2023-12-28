import React from 'react';
import { useParams } from 'react-router-dom';

const About = () => {
  // get organization value from url parameter
  // write your code here
  const { organization } = useParams();

  return <div>
    <h1>About {organization}</h1>
    <p>{organization} for Universities and Colleges. 
    Here at {organization} Learning, we're reimagining how learners enable career change or launch new careers in tech</p>
    </div>;
};

export default About;
