import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    await mongoose.connect(
        'mongodb+srv://yoshidashinichi:bjKOiv43NDqi9v57@cluster0.zpzgbmr.mongodb.net/appDataBase?retryWrites=true&w=majority')
    console.log('Success: Connected to MongoDB')

  } catch (err) {
    console.log('Failure: Unconnected to MongoDB')
  }
}
export default connectDB