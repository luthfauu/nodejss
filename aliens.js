const express=require('express');
const router=express.Router();

const Alien=require('../module/alien');

router.get('/',async(req,res)=>{
    try{
                const aliens= await Alien.find()
                res.json(aliens)
    }catch(err){
        res.send('error'+err)
    }
    });


    router.get('/:id',async(req,res)=>{
        try{
                    const alien= await Alien.findById(req.params.id)

                    res.json(alien)
        }catch(err){
            res.send('error'+err)
        }
        });
    router.post('/',async(req,res)=>{
        const alien= new Alien({
            name: req.body.name,
            sub:req.body.sub
        })
        try{
             const a1= await alien.save()
             res.json(a1)
        }catch(err){
            res.send('error')
        }
    })


    router.patch('/:id', async(req,res)=>{
        try{
            const alien= await Alien.findById(req.params.id)
            alien.sub=req.body.sub
            const a1= await alien.save()
            res.json(a1)

        } catch(err){
            res.send('error')
        }
    })


    router.delete('/:id', async(req,res)=>{
        try{
            const alien= await Alien.findById(req.params.id)
            alien.sub=req.body.sub
            const a1= await alien.remove()
            res.json(a1)

        } catch(err){
            res.send('error')
        }
    })
module.exports=router;