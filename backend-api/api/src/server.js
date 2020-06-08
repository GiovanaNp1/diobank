import express from 'express';
import { Kafka } from 'kafkajs';
import routes from './routes/routes';

/**
 * Instância o express
*/
const app = express();

/** 
 * Instância e conecta o kafka
*/
const kafka = new Kafka({
    clientId: 'diobank-api',
    brokers: ['localhost:9092'],
    retry: {
        initialRetryTime: 300,
        retries: 10,
    }
})

/** 
 * Instância o kafka producer
*/ 
const producer = kafka.producer();

/** 
 * Disponibiliza o kafka producer para todas as rotas 
*/
app.use((req, res, next) => {
    req.producer = producer;

    return next();
})


/*
 * Cadastro das rotas 
*/
app.use(routes);

/**
 * Configura a porta da aplicação 
*/
app.set('port',3000);

/** 
 * Função assincrona para executar o server 
*/
async function run() {
    await producer.connect();
    // TODO: Precisa criar um consumer?
    app.listen(app.get('port'), () => {
        console.info(`🚀 Server running on port ${app.get('port')}`);
    })
}

/** 
 * Executa a função para levantar o server
*/ 
run().catch(console.error);