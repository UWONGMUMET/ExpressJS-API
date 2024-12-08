import express from 'express';
import {getFoods, getFoodById, createFood, deleteFood} from '../controllers/foods.js';

const router = express.Router();
router.get('/', getFoods);
router.get('/:id', getFoodById);
router.post('/', createFood);
router.delete('/:id', deleteFood);
router.put('/:id', createFood);


export default router;