import http from 'http'
import express, {Express} from 'express'
import * as friendController from './controllers/friend-controller'
import * as homeController from './controllers/home-controller'

const router: Express = express();

router.use('',
    homeController.default,
    friendController.default)

const httpServer = http.createServer(router)

httpServer.listen(6600, ()=>{
    console.log("Server is listening at port 6600");
})
