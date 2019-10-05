var Product = require('../models/product');
var mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect('mongodb://localhost:27017/shopping', { useNewUrlParser: true})

var products = [
    new Product({
        imagePath: "https://images.unsplash.com/photo-1540974195715-681a4872dd65?ixlib=rb-1.2.1&w=1000&q=80",
        title: "Title test",
        description: "With supporting text below as a natural lead-in to additional content. With supporting text below as a natural lead-in to additional content.",
        price: 15
    }),

    new Product({
        imagePath: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        title: "La bécane",
        description: "With supporting text below as a natural lead-in to additional content. With supporting text below as a natural lead-in to additional content.",
        price: 15
    }),

    new Product({
        imagePath: "https://images.unsplash.com/photo-1570215171323-4ec328f3f5fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        title: "Le clavier",
        description: "With supporting text below as a natural lead-in to additional content. With supporting text below as a natural lead-in to additional content.",
        price: 15
    }),

    new Product({
        imagePath: "https://images.unsplash.com/photo-1570194923053-2d983f195b46?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        title: "La mer",
        description: "With supporting text below as a natural lead-in to additional content. With supporting text below as a natural lead-in to additional content.",
        price: 15
    }),

    new Product({
        imagePath: "https://images.unsplash.com/photo-1570167367712-3112615619d1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80",
        title: "Xbox controller",
        description: "With supporting text below as a natural lead-in to additional content. With supporting text below as a natural lead-in to additional content.",
        price: 15
    }),

    new Product({
        imagePath: "https://images.unsplash.com/photo-1569168702113-42df5ac0a5af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80",
        title: "Hole architecture",
        description: "With supporting text below as a natural lead-in to additional content. With supporting text below as a natural lead-in to additional content.",
        price: 15
    }),

];


var done = 0;
for (var i = 0; i < products.length; i++) {
    products[i].save((err, res) => {
        done++;
        if(done === products.length){
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}


