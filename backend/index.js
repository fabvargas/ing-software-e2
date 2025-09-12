import express from 'express';
import userRouter from './routers/user-router.js';
import roomRouter from './routers/room-router.js';

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Binvenidos al Hotel Management API');
});
app.use('/users', userRouter);
app.use('/rooms', roomRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});