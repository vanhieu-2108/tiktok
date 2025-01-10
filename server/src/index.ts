import express from 'express'
import cors from 'cors'
import databaseService from '~/service/database.services.js'
const app = express()
const port = 3000

app.use(
  cors({
    origin: '*'
  })
)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

databaseService.connect().catch(console.log)
