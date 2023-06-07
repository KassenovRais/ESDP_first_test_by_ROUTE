import express , {Express} from 'express'
import UserController from './Controllers/UserController'
import mongoose from 'mongoose'
import cors from 'cors'
import test from './Controllers/TEST'
const PORT  = 9000

const app: Express = express()

const run  = async() => {
  await mongoose.connect(`mongodb://localhost/ESDP_test`)

  

  app.listen(PORT ,() => console.log(`PORT start on ${PORT}`))

  process.on('exit' , () => {
    console.log('disconnect');
    
    mongoose.disconnect()

  })

}

app.use(express.json())

app.use(cors())

app.use('/users' , UserController)

app.use('/test' , test)


run().catch((e) => console.log(e))
