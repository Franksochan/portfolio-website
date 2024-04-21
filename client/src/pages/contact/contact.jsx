import { useState, useEffect } from "react";
import axios from 'axios'
import './contact.css';

export const Contact = () => {
  const [profession, setProfession] = useState('');
   const [ email, setEmail ] = useState('')
   const [ text, setText ] = useState('')
   const [ subject, setSubject ] = useState('')

  useEffect(() => {
    const targetText = 'Aspiring Web Developer';
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      setProfession(targetText.slice(0, currentIndex + 1));

      currentIndex += 1;

      if (currentIndex === targetText.length) {
        clearInterval(intervalId);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  const sendMessage = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('http://localhost:5000/send-email', { subject,email, text })

      if (response.status === 200) {
        alert(response.data.message)
      }
    } catch (err) {
      alert('An error occured')
    }
  }

  return (
    <>
      <h1 className="contact-me">Contact Me!</h1>
      <div className="contact-container">
        <div className='left-side'>
          <div className='avatar-img'></div>
          <h1>John Lino Demonteverde</h1>
          <h3>{profession}</h3>

          <ul>
            <li><i className="fab fa-java"></i></li>
            <li><i className="fab fa-python"></i></li>
            <li><i className="fab fa-html5"></i></li>
            <li><i className="fab fa-css3"></i></li>
            <li><i className="fab fa-js"></i></li>
            <li><i className="fab fa-react"></i></li>
            <li><i className="fab fa-node-js"></i></li>
            <li><i className="fas fa-database"></i> </li>
          </ul>
        </div>
        <div className="right-side">
          <div>
            <p><i className="fas fa-map-marker-alt"></i> Villasis, Pangasinan</p>
            <p><i className="fas fa-envelope"></i> jjaviendemonteverde@gmail.com</p>
            <p><i className="fas fa-phone"></i> +639064535648</p>
          </div>
          <form>
          <label htmlFor="subject">Subject:</label>
            <input type="text" id="subject" name="subject" onChange={(e) => setSubject(e.target.value)}/>

            <label htmlFor="email">Email:</label>
            <input type="text" id="email" name="email" onChange={(e) => setEmail(e.target.value)}/>

            <label htmlFor="message" onChange={(e) => setText(e.target.value)}>Message:</label>
            <textarea id="message" name="message" onChange={(e) => setText(e.target.value)}></textarea>

            <button type="submit" onClick={(e) => sendMessage(e)}>Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};
