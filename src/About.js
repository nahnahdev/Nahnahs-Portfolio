import React from 'react';

const About = () => (
  <section id="about" className="bg-gray-100 py-12">
    <div className="container mx-auto text-center">
      <h2 className="text-4xl font-bold mb-8">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          About Me
        </span>
      </h2>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
        <div className="bg-white rounded-lg shadow-lg p-8  flex flex-col justify-between">
          <img
            src="https://res.cloudinary.com/db3ckadxp/image/upload/v1679225460/photoAJ_akdjuo.jpg"
            alt="programmer"
            className="mx-auto w-1/2 mb-4 rounded-full border-4 border-500"
          />
          <h3 className="text-lg font-bold mb-2">About Me</h3>
          <p className="text-gray-700 text-base mb-4">
            I am a full stack web developer with a background in business and
            finance. I have a passion for creating beautiful and functional
            websites and applications. I am a self-taught developer who is
            always looking to learn new technologies and improve my skills. I
            am currently looking for a full-time position as a web developer.
          </p>
          <div className="flex justify-center">
            <a
              href="https://www.linkedin.com/in/felicia-awuah-gyedua/"
              className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-lg font-bold mb-2">Skills</h3>
          <img
            src="https://res.cloudinary.com/db3ckadxp/image/upload/v1679231206/Skills_fekfmg.svg"
            alt="programmer"
            className="mx-auto w-1/2 mb-4 rounded-full border-4"
          />
          <p className="text-gray-700 text-base mb-4">
            I have experience with the following technologies:
          </p>
          <ul className="text-left flex flex-wrap">
            <li className="px-2 py-1 bg-gray-200 text-gray-800 rounded-md m-1">
              HTML
            </li>
            <li className="px-2 py-1 bg-gray-200 text-gray-800 rounded-md m-1">
              CSS
            </li>
            <li className="px-2 py-1 bg-gray-200 text-gray-800 rounded-md m-1">
              JavaScript
            </li>
            <li className="px-2 py-1 bg-gray-200 text-gray-800 rounded-md m-1">
              React
            </li>
            <li className="px-2 py-1 bg-gray-200 text-gray-800 rounded-md m-1">
              React Native
            </li>
            <li className="px-2 py-1 bg-gray-200 text-gray-800 rounded-md m-1">
              Ruby
            </li>
            <li className="px-2 py-1 bg-gray-200 text-gray-800 rounded-md m-1">
              Ruby On Rails
            </li>
            <li className="px-2 py-1 bg-gray-200 text-gray-800 rounded-md m-1">
              Node.js
            </li>
            <li className="px-2 py-1 bg-gray-200 text-gray-800 rounded-md m-1">
              Next.js
            </li>
            <li className="px-2 py-1 bg-gray-200 text-gray-800 rounded-md m-1">
              Tailwind CSS
            </li>
            <li className="px-2 py-1 bg-gray-200 text-gray-800 rounded-md m-1">
              Replit
            </li>
            <li className="px-2 py-1 bg-gray-200 text-gray-800 rounded-md m-1">
              Webpack
            </li>
            <li className="px-2 py-1 bg-gray-200 text-gray-800 rounded-md m-1">
              PostgreSQL
            </li>
            <li className="px-2 py-1 bg-gray-200 text-gray-800 rounded-md m-1">
              Git
            </li>
            <li className="px-2 py-1 bg-gray-200 text-gray-800 rounded-md m-1">
              GitHub
            </li>
            <li className="px-2 py-1 bg-gray-200 text-gray-800 rounded-md m-1">
              Netlify
            </li>
            <li className="px-2 py-1 bg-gray-200 text-gray-800 rounded-md m-1">
              Cloudinary
            </li>
          </ul>
          <div className="flex justify-center pt-6">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/NahnahAJ"
              className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            >
              View Skills
            </a>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-8 justify-between flex flex-col">
          <h3 className="text-lg font-bold mb-2">Education</h3>
          <img
            src="https://res.cloudinary.com/db3ckadxp/image/upload/v1679227745/Education-bro_iydhgg.svg"
            alt="programmer"
            className="mx-auto w-1/2 mb-4 rounded-full border-4"
          />
          <p className="text-gray-700 text-base mb-4">
            {' '}
            I have a Bachelor of Science in Consumer Sciences with a
            concentration in Foods from the University of Ghana, Accra,
            Ghana. I also have a certificate in Full Stack Web Development from
            Microverse Inc, San Francisco California.
          </p>
          {/* Download CV */}
          <div className="flex justify-center">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://drive.google.com/file/d/1wteKIIbqVAh1ifpAs-_CVzv8JnPLsWWx/view?usp=sharing"
              className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
