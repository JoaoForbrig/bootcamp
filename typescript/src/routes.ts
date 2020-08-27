import {Request, Response} from 'express'
import creatUser from './services/CreateUser'

export function helloWolrd(request: Request, response: Response){
    const user = creatUser({
        email: 'diego@rocketseat.com',
        password: '123345',
        techs: [
            'Node.js',
            'ReactJS',
            'React Native',
            {title: 'Javascript', experience: 100},
            
        ]
    
    })
    
    
    return response.json({message: 'Hello Wolrd'})
}