const pug = require('pug')
const path = require('path')
const { createTransport } = require('nodemailer')
// pull the configuration data from the env
const { 
    MAIL_HOST,
    MAIL_PORT,
    MAIL_ENCRYPTION,
    MAIL_USERNAME,
    MAIL_PASSWORD,
    MAIL_FROM_ADDRESS, 
    MAIL_FROM_NAME,
 } = process.env

 // setup node mailer pipe.
const Mail = createTransport({
    host: MAIL_HOST,
    port: MAIL_PORT,
    auth: MAIL_ENCRYPTION,
    auth: {
        user: MAIL_USERNAME,
        pass: MAIL_PASSWORD
    }
})

class Mailer {
    /**
     * 
     * @param {string} view view name (relative to view folder)
     * @param {object} option the view template options
     */
    constructor(view, option = {}) {
        this.options = {
            from: `${MAIL_FROM_NAME} <${MAIL_FROM_ADDRESS}>`,
            html: pug.compileFile(path.resolve(__dirname, '../views', `${view}.pug`))(option)
        }
    }

    /**
     * attach the email subject
     * @param {string} subject email subject.
     */
    subject(subject) {
        this.options['subject'] = subject

        return this
    }

    /**
     * send email to user.
     * @param {string} to email address to send mail to.
     */
    send(to) {
        this.options['to'] = to

        return Mail.sendMail(this.options)
    }
}

module.exports = Mailer