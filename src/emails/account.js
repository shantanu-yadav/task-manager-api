const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to : email,
        from : 'shantanu12.yadav@gmail.com',
        subject : 'Thanks for joining in!',
        text : `Welcome to the app, ${name}.Let us know how you get along with the app.`
    })
}

const sendAccountDeletionEmail = (email, name) => {
    sgMail.send({
        to : email,
        from : 'shantanu12.yadav@gmail.com',
        subject : `Goodbye ${name}`,
        text : `Goodbye ${name}. Your opinion matters. Is there anything we could have done to keep you onboard?`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendAccountDeletionEmail
}