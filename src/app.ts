import express, { Application, NextFunction, Request, Response } from 'express';
import router from './routes/index'
const app = express();
const port = 5555;

app.listen(port, () => {
    console.log(`app is running on port ${port}`)
})

app.use('/', router)

module.exports = router;