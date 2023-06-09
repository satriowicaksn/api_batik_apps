import express from 'express';
import authenticateToken from '../middleware/authenticateToken';
import userController from '../controllers/user.controller';

const userRouter = express.Router();

userRouter.get('', authenticateToken, userController.fetchAllUsers);
userRouter.get('/detail', authenticateToken, userController.fetchUserByToken);
userRouter.get('/:id', authenticateToken, userController.fetchUserById);
userRouter.put('/data', authenticateToken, userController.updateUserByToken);
userRouter.put('/password', authenticateToken, userController.updatePasswordByToken);

export default userRouter;
