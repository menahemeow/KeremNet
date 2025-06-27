import express, {Express, Request, Response} from 'express';

const app: Express = express()

app.get("/api/posts", (req: Request, res: Response) => {
    res.json(JSON.stringify('./data/posts.json/'))
})

app.listen(5000, () => {console.log("server started on port 5000")})