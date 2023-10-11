const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const knex = require('knex');
const knexConfig = require('./knexfile');
const { checkData, sendWhatsAppMenssage } = require('./functions');

const cors = require('cors'); // Importe o módulo cors

// Configuração do CORS para permitir o acesso de http://localhost:5173
const corsOptions = {
  origin: 'http://localhost:5173',
};

app.use(cors(corsOptions))

// Use a configuração de desenvolvimento
const db = knex(knexConfig.development);

// Configurar o middleware body-parser para analisar solicitações JSON
app.use(bodyParser.json());



// Rota POST para enviar mensagens no whatsapp
app.post('/sendMsg', async (req, res) => {
    const { number, message } = req.body;

    if (number && message) {
        console.log(`O número é ${number} e a mensagem é ${message}`);
        response = await sendWhatsAppMenssage(number, message);
        if (response) {
            res.json({ message: 'Mensagem enviada com sucesso!' });
        } else {
            res.status(500).json({ error: 'Falha ao enviar a mensagem.' });
        }
    } else {
        res.json({ message: 'Insira um número de telefone e uma mensagem' });
    }
});

// Rota POST para receber os parâmetros
app.post('/salveDataInServer', (req, res) => {
    const { name, phone, email } = req.body;
    resposta = checkData(name, phone, email);

    if (!resposta.check) {
        return res.status(400).json({ error: resposta.message });
    }

    // Você pode fazer o que quiser com os dados aqui, por exemplo, apenas devolvê-los
    db('users')
        .where('email', email)
        .orWhere('phone', phone)
        .first()
        .then((existingUser) => {
            if (existingUser) {
                // Se o usuário já existe, atualize os dados
                return db('users')
                    .where('id', existingUser.id)
                    .update({
                        name,
                        phone,
                        email,
                    })
                    .then(() => {
                        res.json({ message: 'Dados atualizados com sucesso!' });
                    })
                    .catch((error) => {
                        console.error('Erro ao atualizar dados no banco de dados:', error);
                        res.status(500).json({ error: 'Ocorreu um erro ao atualizar os dados.' });
                    });
            } else {
                // Se o usuário não existe, insira um novo registro
                return db('users')
                    .insert({
                        name,
                        phone,
                        email,
                    })
                    .then(() => {
                        res.json({ message: 'Dados inseridos com sucesso!' });
                    })
                    .catch((error) => {
                        console.error('Erro ao inserir dados no banco de dados:', error);
                        res.status(500).json({ error: 'Ocorreu um erro ao salvar os dados.' });
                    });
            }
        })
        .catch((error) => {
            console.error('Erro ao verificar dados no banco de dados:', error);
            res.status(500).json({ error: 'Ocorreu um erro ao verificar os dados.' });
        });
});

const port = process.env.PORT || 3000;

const ip = '0.0.0.0';

app.listen(port, ip, () => {
  console.log(`Servidor Express ouvindo em http://${ip}:${port}`);
});