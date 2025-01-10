import dotenv from 'dotenv'

dotenv.config()

const envConfig = {
  port: process.env.PORT || 3000,
  uri: process.env.MONGODB_URI as string,
  dbName: process.env.DB_NAME as string
}

export default envConfig
