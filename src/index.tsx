import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import { App } from './App';

createServer({

  models: {
    transaction: Model,
  },

  seeds(server){
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Web development',
          price: 12000,
          category: 'dev',
          type: 'I',
          createdAt: '07/01/2020 09:00:00'
        },
        {
          id: 2,
          title: 'Rent',
          price: 1000,
          category: 'living',
          type: 'O',
          createdAt: '07/02/2020 12:21:00'
        }
      ]
    })
  },

  routes(){
    this.namespace = 'api'

    this.get('/transactions', () => {
      return this.schema.all('transaction');
    });

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create('transaction', data);
    });
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);