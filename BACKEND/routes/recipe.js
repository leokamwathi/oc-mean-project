 const Express = require('express');
 const Router = Express.Router();
 const Recipe = require('../models/RecipeModel');
 
 
Router.delete('/:id',(req,res,next)=>{
		Recipe.deleteOne(
		{_id:req.params.id}
		).then(
	() => {
		res.status(200).json({message:'Recipe Deleted'});
		console.log('Successfuly deleted recipe with ID',req.params.id);
	}).catch((error)=>{
		res.status(400).json({error:error})
	});
	next();
});

Router.get('/:id',(req,res,next)=>{
		Recipe.findOne(
		{_id:req.params.id}
		).then(
	(recipe) => {
		res.status(200).json(recipe);
		console.log('Successfuly retrived recipe with ID',req.params.id);
	}).catch((error)=>{
		res.status(400).json({error:error})
	});
	next();
});


Router.put('/:id',(req,res,next)=>{
const recipe = new Recipe({
	_id:req.params.id,
	title:req.body.title,
	instructions:req.body.instructions,
	ingredients:req.body.ingredients,
	time:req.body.time,
	difficulty:req.body.difficulty
});

Recipe.updateOne({_id:req.params.id},recipe).then(
		()=>{
			res.status(201).json(
			{message:'Updated recipe Successfuly'});
			console.log('Successfuly updated recipe with ID',req.params.id);
		}
	).catch(
		(error)=>{
			res.status(400).json({error:error});
		}
	);
	next();;
	
});

Router.post('/',(req,res,next) => {
	const recipe = new Recipe({
		title:req.body.title,
		instructions:req.body.instructions,
		ingredients:req.body.ingredients,
		time:req.body.time,
		difficulty:req.body.difficulty
	});
	recipe.save().then(
		()=>{
			res.status(201).json(
			{message:'Recipe Saved'});
			console.log('Successfuly saved new recipe');
		}
	).catch(
		(error)=>{
			res.status(400).json({error:error});
		}
	);
	next();
});


Router.get('/',(req,res,next) => {
	Recipe.find().then(
	(recipe) => {
		res.status(200).json(recipe);
		console.log('Successfuly retrived all recipes');
	}).catch((error)=>{
		res.status(400).json({error:error})
	});
	next();
});
 
 
 module.exports = Router;