import bodyParser from 'body-parser'

export const globalMiddleware = (app) => {

    app.use(bodyParser.urlencoded({extended: true}))
    app.use(bodyParser.json())
    app.use(bodyParser.text({ type: "application/x-ndjson" }))

}