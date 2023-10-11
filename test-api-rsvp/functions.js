

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

async function sendWhatsAppMenssage(number, menssage) {

    const accountSid = 'ACb1aef0acee26d54ee38bc83232e1e350';
    const authToken = '2c79a935fad89b21d2cbd0438045696d';

    const client = require('twilio')(accountSid, authToken);

    return await client.messages
        .create({
            body: 'Este foi um teste de SMS, se tiver dúvidas para rodar as migrations me fala.',
            from: '+12314032536',
            to: '+5599984816915'
        })
        .then((message) => {
            console.log('Mensagem enviada com sucesso!', message.sid);
            return true;
        })
        .catch((error) => {
            console.error('Erro ao enviar mensagem: ', error);
            return false;
        });;
}

module.exports = {
    checkData,
    sendWhatsAppMenssage,
};
