import express, { Request, Response, NextFunction } from 'express';
import TestController from '../controllers/testcontroller';

const router = express.Router();

const testController = new TestController();

router.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send("Hello Typescript")
})

router.post('/sample', (req, res) => {
    res.send("sample API")
})
router.post('/controllerFn', (req, res) => {
    testController.callServiceFn(req, res);
})

router.post('/findAllUsers', (req, res) => {
    testController.findAllUsers(req, res);
})


export default router;
