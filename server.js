const express = require('express');
const userRoutes = require('./src/routes/userRoutes');
const estoqueRoutes = require('./src/routes/estoqueRoutes'); // NOVA LINHA

const app = express();

app.use(express.json());
app.use('/api/usuarios', userRoutes);
app.use('/api/estoque', estoqueRoutes); // NOVA LINHA

app.listen(3000, () => console.log('API rodando na porta 3000'));