import {http, HttpHandler, HttpResponse} from 'msw'
import Posts from './data/posts.json'

export const handlers: HttpHandler[] = [
    http.get('/api/posts', (resolver) => {
        return HttpResponse.json(Posts)
    })
]