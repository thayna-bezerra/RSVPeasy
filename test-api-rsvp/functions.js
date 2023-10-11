

function checkData(name, phone, email) {
    function validarEmail(email) {
        // Expressão regular para validar um endereço de e-mail
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        // Testar o e-mail com a expressão regular
        return regex.test(email);
    }

    if (!name || !phone || !email) {
        return { check: false, message: 'Todos os campos são obrigatórios' };
    }

    if (!validarEmail(email)) {
        return { check: false, message: 'Insira um email válido' }
    }

    if (name.length < 5) {
        return { check: false, message: 'Digite o seu nome completo' }
    }

    if (phone.length < 8) {
        return { check: false, message: 'Digite um número de telefone válido' }
    }

    return { check: true, message: '' }
}

// functions.js
require('dotenv').config();

async function sendWhatsAppMenssage(number, menssage) {
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;

    const client = require('twilio')(accountSid, authToken);

    return await client.messages
        .create({
            body: 'Este foi um teste de SMS, se tiver dúvidas para rodar as migrations me fala.',
            from: process.env.TWILIO_PHONE_NUMBER,
            to: process.env.TO_PHONE_NUMBER
        })
        .then((message) => {
            console.log('Mensagem enviada com sucesso!', message.sid);
            return true;
        })
        .catch((error) => {
            console.error('Erro ao enviar mensagem: ', error);
            return false;
        });
}


module.exports = {
    checkData,
    sendWhatsAppMenssage,
};
