import React, { useState } from 'react'
import './projects.css'

export const Project = () => {
  const [selectedProject, setSelectedProject] = useState('E-commerce App')

  const handleProjectClick = (projectName) => {
    setSelectedProject(projectName)
  };

  return (
    <>
      <h2>My Projects</h2>
      <div className="projects-container">
        <div className='project-name-container'>
          <button 
            className='project-button'
            onClick={() => 
              handleProjectClick('E-commerce App')}
            >
              E-commerce App
          </button>

          <button 
            className='project-button'
            onClick={() => 
              handleProjectClick('E-Library')}
            >
              E-Library
          </button>


          <button 
            className='project-button'
            onClick={() => 
              handleProjectClick('Chat App')}
            >
              Real Time Chat App
          </button>

          <button 
            className='project-button'
            onClick={() => 
              handleProjectClick('Blogging Platform')}
            >
              Blogging Platform
          </button>

          <button 
            className='project-button'
            onClick={() => 
              handleProjectClick('Todo App')}
            >
              To Do List App
          </button>

          <button 
            className='project-button'
            onClick={() => 
              handleProjectClick('Quote Generator')}
            >
              Quote Generator
          </button>
        </div>
        <div className='project-img-container'>
          {selectedProject === 'E-commerce App' && (
            <>
              <img 
                className='project-img' 
                src="/e-commerce.png"
                alt="E-commerce App"
              />
              <h3 className='project-name'>E-commerce App</h3>
              <p>An application that is created using MERN Stack</p>
              <a href='https://johnlino-ecommerce-app-frontend-v1.onrender.com/' target='_blank'>View Website &gt;</a>
            </>
          )}
           {selectedProject === 'E-Library' && (
            <>
              <img 
                className='project-img' 
                src="/puelibrary.png"
                alt="E-Library"
              />
              <h3 className='project-name'>E-Library</h3>
              <p>A requirement project during my internship at Panpacific University, made using MERN Stack.</p>
              <a href='https://secretlibrary.website' target='_blank'>View Website &gt;</a>
            </>
          )}
           {selectedProject === 'Chat App' && (
            <>
              <img 
                className='project-img' 
                src=""
                alt="Real Time Chat App"
              />
              <h3 className='project-name'>Real Time Chat App</h3>
              <p>Project is not finished yet</p>
              <a>Full Details &gt;</a>
            </>
          )}
          {selectedProject === 'Blogging Platform' && (
            <>
              <img 
                className='project-img' 
                src=""
                alt="Blogging Platform"
              />
              <h3 className='project-name'>Blogging Platform</h3>
              <p>Project is not finished yet</p>
              <a>Full Details &gt;</a>
            </>
          )}
          {selectedProject === 'Todo App' && (
            <>
              <img 
                className='project-img' 
                src="/todo-list.png"
                alt="Todo App"
              />
              <h3 className='project-name'>Todo List App</h3>
              <p>An application that is created using React.js</p>
              <a href='https://todo-listv2byjohnlino.netlify.app/' target='_blank'>View Website &gt;</a>
            </>
          )}
          {selectedProject === 'Quote Generator' && (
            <>
              <img 
                className='project-img' 
                src="/quote-generator.png"
                alt="Quote Generator"
              />
              <h3 className='project-name'>Random Quote Generator</h3>
              <p>An application that is created using React.js</p>
              <a href='https://randomquotegeneratorbyjohnlino.netlify.app/' target='_blank'>View Website &gt;</a>
            </>
          )}
        </div>
      </div>
      <div className='socials'>
          <div className='social-icons'>
            <a href="https://www.facebook.com" target="_blank" class="social-link">
              <i class="fab fa-facebook-square"></i>
            </a>
            <a href="https://www.github.com" target="_blank" class="social-link">
              <i class="fab fa-github-square"></i>
            </a>
            <a href="mailto:youremail@example.com" class="social-link">
              <i class="far fa-envelope"></i>
            </a>
            <a href="https://www.linkedin.com" target="_blank" class="social-link">
              <i class="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
    </>
  );
};
