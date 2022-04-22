
import {
    Ricetta
} from '../models/ricetta.js';
import mongoose from 'mongoose';
let ricette = []

export const getAllRicette = async (req, res) => {

    try {
        const ricette = await Ricetta.find()
        res.status(200).json(ricette)
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
}

export const getRicetteById = async (req, res) => {

    const {
        id
    } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({
        message: "id non trovato"
    })

    try {
        const ricette = await Ricetta.findById(id)
        res.status(200).json(ricette)
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
}

export const insertRicetta = async (req, res) => {
    const ricetta = req.body

    const newRicetta = new Ricetta(ricetta)

    try {
        await newRicetta.save()
        res.status(210).json(newRicetta)
    } catch (error) {
        res.status(409).json({
            message: error.message
        })
    }

}

export const DeleteRicettaById = async (req, res) => {
    const {
        id
    } = req.params
 
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({
        message: "id non trovato"
    })

    try {
        await Ricetta.findByIdAndDelete(id)
        res.status(200).json({
            message: `Utente con id ${id} è stato eliminato con successo`
        })
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
}

export const UpdateRicettaById = async (req, res) => {
    const { id  } = req.params
    const data = {...req.body}
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({
        message: "id non trovato"
    })

    try {
        const ricetta = await Ricetta.findByIdAndUpdate(id, data, {new:true})
 
        res.status(200).json(ricetta)
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
    
}