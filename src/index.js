require('./db/mongoose')
const express = require('express')
const app = express()
const port = process.env.PORT
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
const authMiddlewware = require('./middleware/auth')

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server up at port ' + port)
})




