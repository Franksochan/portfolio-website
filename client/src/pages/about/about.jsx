import './about.css'

export const About = () => {
  return (
    <>
      <h2 className='about'>ABOUT</h2>
      <div className='about-container'>
        <div className='left-container'>
          <img className='image' src='/johnlino.jpg' alt='johnlino'/>
        </div>
        <div className='right-container'>
          <h3 className='web-dev-aspirant'>IT Student | Aspiring Web Developer</h3>
          <p>
            Hi there! I'm John Lino, a passionate 19-year-old aspiring software engineer and web developer. My journey in the world of technology began with a curiosity that quickly turned into a deep-seated interest in crafting digital solutions.
          </p>
          <div className='my-infos'>
            <p>&gt; Phone: +63-906-453-5648</p>
            <p>&gt; Address: Villasis, Pangasinan</p>
            <p>&gt; Education Level: 2nd Year College</p>
            <p>&gt; Academic Records: Consistent Honor Student (Kindergarten-Grade 12)</p>
            <p>&gt; Email: jjaviendemonteverde@gmail.com</p>
            <p>&gt; Skills: HTML, CSS, Javascript, Java and Python</p>
            <p>&gt; Frameworks: React and Node.js</p>
          </div>
          <p>
            Whether it's designing user interfaces, building robust backends, or troubleshooting bugs, I love the challenge that comes with creating seamless and efficient digital experiences. My goal is to contribute meaningfully to the ever-evolving world of technology and make a positive impact through innovative solutions.
          </p>
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