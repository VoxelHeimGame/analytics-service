import { Elysia } from 'elysia'

const app = new Elysia().get('/', () => 'Analytics Service is running').listen(3007)

console.log(`📊 Analytics Service is running at ${app.server?.hostname}:${app.server?.port}`)
