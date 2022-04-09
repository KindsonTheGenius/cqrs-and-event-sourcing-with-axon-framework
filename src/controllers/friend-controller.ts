import express, {Request, Response} from "express"
import * as friendService from '../services/friend-service'

const router = express.Router();

const bodyParser = require("body-parser");
router.use(bodyParser.json());

router.get('/friends', (req: Request, res: Response) => {
    friendService.getFriends().then(
        (friends) => {
            res.status(200).json({
                friends
            })
        }
    )
});

router.get('/friends/:id', (req: Request, res: Response) => {
    friendService.getFriendById(parseInt(req.params.id)).then(
        (friend) => {
            res.send(friend);
        }
    );
});

router.post('/friends', (req: Request, res: Response) => {
    console.log(req.body);
    friendService.saveFriend(req.body).then(
        () => {
            res.status(200).json({
                message: "Friend was Inserted"
            });
        }
    ).catch((error)=>{
        res.status(303).json({
            message: "Error occured" + error.message
        })
    });
});

router.put('/friends/:id', (req: Request, res: Response) => {
    friendService.updateFriend(parseInt(req.params.id), req.body).then(
        () => {
            res.status(200).json({
                message: "Friend was successfully updated!"
            });
        }
    ).catch((error)=>{
        res.status(303).json({
            message: "Error occured" + error.message
        })
    });
});

router.delete('/friends/:id', (req: Request, res: Response) => {
    friendService.deleteFriend(parseInt(req.params.id)).then(
        (friend) => {
            res.send(friend);
        }).catch((error) => res.send(error.message))
    ;
});


export  default router
