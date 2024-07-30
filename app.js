const express = require('express');
const blogRouter = require('./routes/blog');
const healthRouter = require('./routes/health');

const PORT = 8080;
const app = express();

app.use(express.json());

app.use('/blog',blogRouter);
app.use('/health',healthRouter);

app.listen(PORT, () => {  
  console.log(`Server is running on port ${PORT}`);
});
