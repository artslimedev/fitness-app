const CardioEntry = require('../models/Cardio')

module.exports = {
    getCardioEntries: async (req, res) => {
        try {
            const entries = await
            CardioEntry.find()
            res.render("dashboard.ejs", {
                cardioEntries: entries });
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
    }
}