import { app } from './app';
import { friendshipRouter } from './routes/FriendshipRouter';
import { postRouter } from './routes/postRouter';
import { userRouter } from './routes/userRouter';

app.use("/user", userRouter)

app.use("/post", postRouter)

app.use("/friend", friendshipRouter)