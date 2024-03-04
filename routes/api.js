import express from 'express';
const router = express.Router();


router.get('/', (req, res) => {
    console.log(req.body);
    res.json({
        title: `hello ${req.query.nama}, umur ${req.body.umur}`
    })
})

router.post('/', (req, res) => {
    console.log(req.body);
    res.json({
        title: `hello ${req.query.nama}, umur ${req.body.umur}`
    })
})

export default router;