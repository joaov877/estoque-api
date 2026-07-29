const express = require('express');
const app = express();
app.use(express.json());
app.listen(3000, () => console.log('API rodando na porta 3000'));
 // NOVA LINHA
const app = express();
app.use(express.json());
app.use('/api/usuarios', userRoutes); // NOVA LINHA
app.listen(3000, () => console.log('API rodando na porta 3000'));