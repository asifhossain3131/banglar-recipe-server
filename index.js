const express=require('express')
const app=express()

const port=process.env.PORT||5000;

const chefs=require('./data/chefs.json')
const foods=require('./data/foods.json')
const newses=require('./data/latestNews.json')


app.get('/', (req,res)=>{
    res.send('chef server is running')
})

app.get('/chefs', (req, res)=>{
    res.send(chefs)
})

app.get('/chefRecipes/:id', (req, res)=>{
const id=req.params.id
const target=chefs.find(chef=>chef.chefId===id)
res.send(target)
})

app.get('/foods', (req,res)=>{
    res.send(foods)
})

app.get('/food/:id', (req, res)=>{
    const id=req.params.id 
    const target=foods.find(food=>food.categoryId===id)
    res.send(target)
})

app.get('/news', (req, res)=>{
    res.send(newses)
})

app.listen(port)