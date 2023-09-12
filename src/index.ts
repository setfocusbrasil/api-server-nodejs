import 'dotenv/config';
console.log(process.env); // Para visualizar todas as variáveis de ambiente
console.log(process.env.PORT); // Para visualizar apenas a porta


import http from 'http';

import server from './server';

const { PORT } = process.env;

http.createServer({
}, server)
  .listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
