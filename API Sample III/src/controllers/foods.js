import {v4 as uuidv4} from 'uuid';
let foods = [
    {
        id: uuidv4(),
        name: "Nasi Goreng",
        price: 15000
    },
    {
        id: uuidv4(),
        name: "Mie Ayam",
        price: 12000
    },
    {
        id: uuidv4(),
        name: "Bakso",
        price: 17000
    },
    {
        id: uuidv4(),
        name: "Sate Ayam",
        price: 20000
    }
];

export const getFoods = (req, res) => {
    res.send(foods);
};

export const getFoodById = (req, res) => {
    const {id} = req.params;
    const food = foods.find(f => f.id === id);

    if(!food) {
        return res.status(404).send('Food not found.');
    }

    res.send(food);
};

export const createFood = (req, res) => {
    const food = {id: uuidv4(), ...req.body};
    foods.push(food);
    res.send(`Food with the name ${food.name} added to database`);
};

export const deleteFood = (req, res) => {
    const {id} = req.params;
    const Index = foods.findIndex(f => f.id === id);

    if (Index === -1) {
        return res.status(404).send('Food not found.');
    }

    foods.splice(Index, 1);
    res.send(`Food with id ${id} deleted from database`);
};

export const updateFood = (req, res) => {
    const {id} = req.params;
    const {name, price} = req.body;
    const food = foods.find(f => f.id === id);

    if (!food) {
        return res.status(404).send('Food not found.');
    }

    if (name) food.name = name;
    if (price) food.price = price;
    res.send(`Food with id ${id} updated in database`);
}