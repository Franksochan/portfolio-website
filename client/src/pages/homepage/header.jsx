import { useEffect, useState } from 'react'
import './header.css'

export const Header = () => {
  const [profession, setProfession] = useState('')

  useEffect(() => {
    const targetText = 'Aspiring Web Developer'
    let currentIndex = 0

    const intervalId = setInterval(() => {
      setProfession(targetText.slice(0, currentIndex + 1))

      currentIndex += 1;

      if (currentIndex === targetText.length) {
        clearInterval(intervalId);
      }
    }, 100)

    return () => clearInterval(intervalId)
  }, [])
  return (
    <>
      <div className='header-container'>
        <div className='left-side'>
          <div className='avatar-img'></div>
          <h1>John Lino Demonteverde</h1>
          <h3>{profession}</h3>

          <ul>
            <li><i class="fab fa-java"></i></li>
            <li><i class="fab fa-python"></i></li>
            <li><i class="fab fa-html5"></i></li>
            <li><i class="fab fa-css3"></i></li>
            <li><i class="fab fa-js"></i></li>
            <li><i class="fab fa-react"></i></li>
            <li><i class="fab fa-node-js"></i></li>
            <li><i class="fas fa-database"></i> </li>
          </ul>
        </div>

        <div className='right-side'>
          <div className='message-container'>
            <h2 className='welcome-msg'>Welcome to My Portfolio!</h2>

            <p className='intro-message indent-2'>
              Hi, I'm a BSIT student at Panpacific University 
              aspiring to be a skilled web developer. Passionate about coding, 
              I'm dedicated to staying at the forefront of technological advancements, 
              constantly exploring new technologies to bring innovation to the field.
            </p>
          </div>
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
  )
}