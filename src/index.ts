import { app } from "./app";
import { userRouter } from './routes/userRouter';
import { postRouter } from './routes/postRouter';

app.use('/users', userRouter)
// app.get('/users', userRouter)

app.use('/post', postRouter)
// app.get('/posts/:id')
