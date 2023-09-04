const router  = require('express').Router()
var sheet = [
    {
        "year": 2020,
        "month": 12,
        "profitOrLoss": 250000,
        "assetsValue": 1234
    },
    {
        "year": 2020,
        "month": 11,
        "profitOrLoss": 1150,
        "assetsValue": 5789
    },
    {
        "year": 2020,
        "month": 10,
        "profitOrLoss": 2500,
        "assetsValue": 22345
    },
    {
        "year": 2020,
        "month": 9,
        "profitOrLoss": -187000,
        "assetsValue": 223452
    }
]
router.route('/').get((req,res)=>{
    res.json(sheet);
})
router.route('/submit').post((req,res)=>{
    const data = req.body
    const profitorLoss = data.profitorLoss
    const asset = data.asset
    const loan = data.loan
    console.log(data,profitorLoss,asset,loan,'nnnn')

    if(profitorLoss>0){
        res.json({...data,'preAssessment':60})
    }else if(asset>loan){
        res.json({...data,'preAssessment':100})
    }else{
        res.json({...data,'preAssessment':20})

    }
})

module.exports = router
