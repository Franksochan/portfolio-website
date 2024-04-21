const express = require('express')
const cors = require('cors')
const nodemailer = require('nodemailer')
const dotenv = require('dotenv')
dotenv.config()

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(cors())

// Route for sending emails
app.post('/send-email', async (req, res) => {
  const { subject, email, text } = req.body

  console.log(email, text)

  // Create a transporter using your SMTP credentials
  const transporter = nodemailer.createTransport({
    service: 'gmail', // Example service
    auth: {
      user: process.env.USER, // Your email address
      pass: process.env.PASSWORD // Your password
    }
  })

  try {
    // Send mail with defined transport object
    let info = await transporter.sendMail({
      from: email, // Sender address (could be the user's email if provided in the request)
      to: process.env.USER, // Your email address (where you want to receive emails)
      subject: subject,
      text: `
      <div>
        <p>From: ${email}<p>
        <p>${text}</p>
      </div>
      `,
      headers: {
        'Content-Type': 'text/html' // Set the content type to HTML
      }
    })

    console.log('Message sent: %s', info.messageId)
    res.status(200).json({ message: 'Email sent successfully' })
  } catch (error) {
    console.error('Error occurred while sending email:', error)
    res.status(500).json({ error: 'Failed to send email' })
  }
})

// Default route
app.get('/', (req, res) => {
  res.send('<h1>Server</h1>')
})

const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log(`Server is now listening on port ${port}`)
})
