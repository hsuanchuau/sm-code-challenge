import express from 'express';
import issues from './routes/issues.js';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3030;

app.use(express.json());
app.use('/issues', issues);
app.use(
  cors({
    origin: ['http://localhost:3000'],
  })
);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
