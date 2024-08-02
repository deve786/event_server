const json_server=require('json-server')
const cors=require('cors')


const server=json_server.create()
const middleware=json_server.defaults()
const db=json_server.router('db.json')

server.use(cors())
server.use(middleware)
server.use(db)

const PORT=5000

server.listen(PORT,()=>{
    console.log(`Server is running in ${PORT} port`);
})
