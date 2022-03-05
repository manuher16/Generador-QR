const mongoose = require('mongoose')


try {
    const uri = `mongodb+srv://${process.env.USERNAME_DATABASE}:${process.env.PASSWORD_DATABASE}@cluster0.bdi5y.mongodb.net/${process.env.NAME_DATABASE}?retryWrites=true&w=majority`
    mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    console.log('Database connected'.success)
} catch (error) {
    console.log(error)
}


