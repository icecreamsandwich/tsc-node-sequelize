import { response } from 'express';
import TestService from '../services/testservice';
export default class TestController extends TestService {

    constructor() {
        super()
    }
    callServiceFn = (req: any, res: any) => {
        return this.testServiceCall()
            .then((data: any) => {
                //res.status(data.code).send(data.message)
                res.json(data)
            })
            .catch(err => {
                res.status(err.code).send(err.message)
            })
    }


    findAllUsers = (req: any, res: any) => {
        return this.fetchAllUsers()
            .then((data: any) => {
                res.json(data)
            })
            .catch(err => {
                res.status(err.code).send(err.message)
            })
    }
}