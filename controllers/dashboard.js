const CardioEntry = require('../models/Cardio')
const StrengthEntry = require('../models/Strength')

module.exports = {
    getEntries: async (req, res) => {
        try {
            const cardioEntries = await CardioEntry.find({ user: req.user.id }).sort({ createdAt: "desc" }).lean()
            const strengthEntries = await StrengthEntry.find({ user: req.user.id }).sort({ createdAt: "desc" }).lean()
            res.render("dashboard.ejs", {
                cardioEntries: cardioEntries,
                strengthEntries: strengthEntries });
        } catch (err) {
            if (err) return res.status(500).send(err)
        }
    },    
    createCardioEntry: async (req,res) => {
        try {
            await CardioEntry.create(
                {
                    user: req.user.id,
                    date: req.body.date,
                    location: req.body.location,
                    sport: req.body.sport,
                    time: req.body.time,
                    distance: req.body.distance,
                    unit: req.body.unit
                })
            console.log(CardioEntry)
            console.log('Cardio has been added!')
            res.redirect('/dashboard')
        }catch(err){
            console.log(err)
        }

    },
    editCardioEntry: async (req,res)=>{

        const id = req.params.id
        try{   
            await CardioEntry.find({}, (err,entries) => {
                res.render('edit.ejs', {
                    cardioEntries: entries, idEntry: id})
            })
            await CardioEntry.findByIdAndUpdate(
                id,
                {
                    date: req.body.date,
                    location: req.body.location,
                    sport: req.body.sport,
                    time: req.body.time,
                    distance: req.body.distance,
                    unit: req.body.unit
                })
        }catch(err) {
            if (err) return res.status(500).send(err)
                    res.redirect('/dashboard')
        }
    },
    deleteCardioEntry: async (req,res) =>{
        const id = req.params.id
        try{
            CardioEntry.findByIdAndUpdate(id)
        }catch(err){
            if (err) return res.status(500).send(err)
        }
        res.redirect('/dashboard')
    },

// -----------------------------------------------------


// STRENGTH METHODS 


// -----------------------------------------------------


    createStrengthEntry: async (req,res) => {
        try {
            await StrengthEntry.create(
                {
                    user: req.user.id,
                    date: req.body.date,
                    name: req.body.name,
                    equipment: req.body.equipment,
                    muscle: req.body.muscle,
                    weight: req.body.weight,
                    unit: req.body.unit
                })

            console.log(StrengthEntry)
            console.log('Strength Entry has been added!')
            res.redirect('/dashboard')
        }catch(err){
            console.log(err)
        }
    },
    editStrengthEntry: async (req,res)=>{

        const id = req.params.id
        try{   
            const entries = await StrengthEntry.find({}, (err,entries) => {
                res.render('edit.ejs', {
                    strengthEntries: entries, idEntry: id})
            })
            await StrengthEntry.findByIdAndUpdate(
                id,
                {
                    date: req.body.date,
                    name: req.body.name,
                    equipment: req.body.equipment,
                    muscle: req.body.muscle,
                    weight: req.body.weight,
                    unit: req.body.unit
                })
        }catch(err) {
            if (err) return res.status(500).send(err)
                    res.redirect('/')
        }
    },
    deleteStrengthEntry: async (req,res) =>{
        const id = req.params.id
        try{
            StrengthEntry.findByIdAndUpdate(id)
        }catch(err){
            if (err) return res.status(500).send(err)
        }
        res.redirect('/')
    }
}