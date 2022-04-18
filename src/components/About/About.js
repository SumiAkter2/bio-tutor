import React from 'react';
import RequireAuth from '../LogIn/RequireAuth/RequireAuth';

const About = () => {
    return (
        <div className='container w-50'>
            <h1>My Self</h1>
            <p>This is Sumi Akter,a student of programming hero web development course.My goal is to be a skilled full stack web developer and being joined in a renowned IT company as a web developer.I want to build up myself more skilled in this sector day by day.To achieve my goal , I am trying my heart and soul.I hope  I will succeed In shaa Allah and my Allah give me the best.  </p>
      <RequireAuth></RequireAuth>
        </div>

    );
};

export default About;