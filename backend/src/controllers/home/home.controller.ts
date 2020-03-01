import * as express from 'express'
import { Request, Response } from 'express'
import IControllerBase from '../../interfaces/IControllerBase.interface'


class HomeController implements IControllerBase {
    public path = '/'
    public router = express.Router()
    
    constructor() {
        this.initRoutes()
    }

    public initRoutes() {
        this.router.get('/api/', this.index)
    }

    index = (req: Request, res: Response) => {
        
        res.json('Hello World')
    }
}

export default HomeController