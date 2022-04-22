import mongoose from 'mongoose';
const ricettaSchema = mongoose.Schema({
    titolo: {
        type: String,
        require: true,
    },
    image: {
        type: String,
        require: true
    },
    Time:{
        type: String,
        require: true
    },
    category: {
        type: String,
        require: true
    },
    ingredienti: {
        type: Array,
        require: true
    },
    istruzioni: {
        type: Array,
        require: true
    },
    video: {
        type: String,
        require: false
    },
}, {timestamps: true})
export const Ricetta = mongoose.model('Ricetta', ricettaSchema )