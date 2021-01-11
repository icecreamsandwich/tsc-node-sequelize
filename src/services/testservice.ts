//import models
const { User } = require('../models')

export default class TestService {

    testServiceCall = () => {
        console.log("test Service called");
        return new Promise((resolve, reject) => {
            const data = {
                status: "success",
                code: 200,
                message: "Promise called success fully"
            }
            resolve(data)
        })
    }

    fetchAllUsers = () => {
        return new Promise((resolve, reject) => {
            try {
                User.findAll({}).then((result: any) => {
                    const data = {
                        status: "success",
                        code: 200,
                        message: "user data retrived",
                        data: result
                    }
                    resolve(data)
                }).catch((err: any) => {
                    console.log(err)
                    const data = {
                        status: "failure",
                        code: 400,
                        message: err
                    }
                    reject(data)
                })
            } catch (error) {
                throw Error(error)
            }
        })
    }
}