import {http, HttpHandler, HttpRequestHandler, HttpResponse} from 'msw'

export const handlers: HttpHandler[] = [
    http.get('/api/posts', (resolver) => {
        return HttpResponse.json([{ }])
    })
]