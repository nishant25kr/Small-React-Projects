import express from 'express'
import cors from "cors";
const app = express()
const port = 3000

app.use(cors({
    origin: "http://localhost:5173"
}));

app.get("/api/products", (req, res) => {
    const products = [
        {
            id: 1,
            name: "PremiumLaundry",
            description: "High-quality laundry service with fabric-friendly detergents.",
            price: 200,
        },
        {
            id: 2,
            name: "DryCleaning",
            description: "Special care for delicate fabrics and formal wear.",
            price: 350,
        },
        {
            id: 3,
            name: "RapidDGExpress",
            description: "Get your clothes washed and delivered in 6 hours.",
            price: 500,
        },
    ];

    if (req.query.search) {
        const fillterproducts = products.filter(products => products.name.includes(req.query.search));
        res.send(fillterproducts);
        return;
    }

    setTimeout(() => {
        res.json(products);
    }, 3000)

});

app.listen(port, () => {
    console.log(`Server is running in ${port}`)
})


