const mongoose = require('mongoose')

if (process.argv.length<3){
    console.log('Agrega el password como argumento');
    process.exit(1)
}
const password = process.argv[2]

const url = `mongodb+srv://rikigallegos:oracle123456789@cluster0.6vmqk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

mongoose.set('strictQuery', false)

mongoose.connect(url)

const noteSchema = new mongoose.Schema({
    content: String,
    important: Boolean
})
const Note = mongoose.model('Note',noteSchema)

const note = new Note({
    content: 'HTML is easy',
    important: true
})

note.save().then(result => {
    console.log('Note saved in MongoDB');
    mongoose.connection.close()
})