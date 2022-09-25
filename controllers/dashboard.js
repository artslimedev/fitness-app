const CardioEntry = require('../models/Cardio')
const StrengthEntry = require('../models/Strength')

module.exports = {
    getEntries: async (req, res) => {
        try {
            const cardioEntries = await CardioEntry.find()
            const strengthEntries = await StrengthEntry.find()
            res.render("dashboard.ejs", {
                cardioEntries: cardioEntries,
                strengthEntries: strengthEntries });
        } catch (err) {
            if (err) return res.status(500).send(err)
        }
    },    
    createCardioEntry: async (req,res) => {
        const cardioEntry = new CardioEntry(
            {
                date: req.body.date,
                location: req.body.location,
                sport: req.body.sport,
                time: req.body.time,
                distance: req.body.distance,
                unit: req.body.unit
            }
        )
        try {
            await cardioEntry.save()
            console.log(cardioEntry)
            res.redirect('/dashboard')
        } catch(err) {
            if (err) return res.status(500).send(err)
            res.redirect('/dashboard')
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



    
    // getStrengthEntries: async (req,res) => {
    //     console.log(req.user)
    //     try {
    //         const entries = await
    //         StrengthEntry.find()
    //         console.log({strengthEntries: entries})
    //         res.render("dashboard.ejs", {
    //             strengthEntries: entries });
    //     } catch (err) {
    //         if (err) return res.status(500).send(err)
    //     }
    // },
    createStrengthEntry: async (req,res)=>{
        try{
            await Strength.create(
                {
                    userId: req.user.id,
                    date: req.body.date,
                    name: req.body.name,
                    equipment: req.body.equipment,
                    muscle: req.body.muscle,
                    weight: req.body.weight,
                    unit: req.body.unit
                }
            )

        await strengthEntry.save()
        
        console.log(strengthEntry)

        res.redirect('/')

            
        } catch(err) {
            if (err) return res.status(500).send(err)
            res.redirect('/')
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
                    userId: req.user.id,
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