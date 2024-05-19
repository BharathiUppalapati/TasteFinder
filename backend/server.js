//server.js

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://mern123:mern123@cluster0.l4w4kta.mongodb.net/restuarants?retryWrites=true&w=majority&appName=Cluster0", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB')
});
const restaurantSchema = new mongoose.Schema({
	name: String,
	image: String,
	menu: [
		{
			name: String,
			price: Number,
			image: String,
		},
	],
	rating: Number,
	location: String
});

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

const EmployeeSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String
 })

 const EmployeeModel = mongoose.model("employees", EmployeeSchema)
 
 module.exports = EmployeeModel

// Seed initial data
const seedData = [
	{
		name: "	Non- Veg staters",
		image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLyBad9uGbJzCt_z-yuSi2IlF8yIN-3GwfExzSN-ZdlQ&s",
		menu: [
			{
				name: "Chicken 65",
				price: 200,
				image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe5l_BwJtLNUJ78zDc0pFcQfjY4E6lLuN4Nk_eYgVlYw&s",
			},
			{
				name: "Chicken Manchurian",
				price: 200,
				image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhIGrtCo00-q1dgnBLsXuF6i8u2MVR9te4QLEbfaQWWw&s",
			},
			{
				name: " Chicken kabab",
				price: 250,
				image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqHR8jjO3JFvpAPzA-33vWvQXeDoF-brECCxTxbco5Qw&s",
			},
			{
				name: "Chicken Lollipop",
				price: 180,
				image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZc91d29unLE1luI_R8ixcDbN_0qEU6uYUFrvR622CCw&s",
			},
		],
		rating: 4.2,
	},
	{
		name: "Non-Veg Biryani",
		image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvskLCBnS_J0uoOFvDSIiav-2DvxkUJTa9EISoNE_GjQ&s",
		menu: [
			{
				name: "Chicken Dum Biryani",
				price: 300,
				image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToir6OIiCdvuIIBmqALHg_CEKFquGlEXIrqTozf6B8ZQ&s",
			},
			{
				name: "Chicken Fry Biryani",
				price: 350,
				image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj8AQrGVFWpaZCPLYOchyyyLhJzjFWPuRLU9NLI89_eA&s",
			},
			{
				name: "Special Chicken Biryani",
				price: 380,
				image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoS49ktyYMTV6tWEIFdOl8K6EJ3yPxk47rsfMDs7x0_w&s",
			},
			{
				name: "Prawns Biryani",
				price: 400,
				image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGhPjnxMOYXQUKmW_eoZsLhyTZI104W3pysjdX1F-TPQ&s",
			},
		],
		rating:4.5,
	
	},
	{
		name: "Veg Staters",
		image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGil4X9G4m2aBk4-z8i4tl7eV2affR0iI-ot9mlzeUwg&s",
		menu: [
			{
				name: "Baby Corn Fry",
				price: 180,
				image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq6m4QjBtCwVlvabQIBgK5o1qbioqmCQ3Ev2zLWIruiw&s",
			},
			{
				name: "Egg 65",
				price: 200,
				image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9a7Z8KoaHgrihrHs2iSG557AVWVkfXuQn8Ugj_eqYBA&s",
			},
			{
				name: "Mushroom manchurian ",
				price: 220 ,
				image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxKbEsGYFM5HULJ4IVBFKezQQ5BB8gGG2qWTqlsWuY2g&s",
			},
			{
				name: "Grilled Pineapple ",
				price: 230 ,
				image: "https://cdn.loveandlemons.com/wp-content/uploads/2021/06/grilled-pineapple.jpg",
			},
			
		],
		rating: 3.5	
	},
	{
		name: "Veg Biryani",
		image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtOh4RaU5O1EbnZytNpI8zwWFeeRa0ereoFQKBSYl58g&s",
		menu: [
			{
				name: "Mushroom Fried Rice",
				price: 220,
				image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1VQsyPxhlJWlpXJyje3psotlHx38dbDdMGzXxdqoZEg&s",
			},
			{
				name: "Paneer Biryani",
				price: 220,
				image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7GG0APno1duok9zA72OkyKEqdHTPWf7slEHqMUb3Flw&s",
			},
			{
				name: "Mixed Veg Biryani",
				price: 300,
				image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3m_u3YiNPtxfWCrK50Xz8GgbixGpyCeUso2PCK6FRcA&s",
			},
			{
				name: "Veg Fried-Rice",
				price: 180,
				image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz4nM2SCGXVt395JKZH2WcPauujsDRnFAodMQ7CSefwg&s",
			},
		],
		rating: 3.8,
	
	},
	{
		name: "Desserts & Ice-Creams",
		image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9mWgseZ0NnWzp3S2TDASIIJkyAoXJpfIH6lU2Htv1Yg&s",
		menu: [
			{
				name: "Red-Velvet Pastry",
				price: 60,
				image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1_hff9ZIpxSLL4qCmJHqBTVWTisZj4kd4fPbMlTS_Uw&s",
			},
			{
				name: "Black-forest",
				price: 70,
				image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS77-Zb__LQJbr5xQEJ6k_xklHB6Vzgu_RDfZqwBgkZ9Q&s",
			},
			{
				name: "Butterscotch Ice-cream",
				price: 90,
				image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsJqUUudlUhnJx77cAFfyemDJj7mEq1z9rxpstUO9F5Q&s",
			},
			{
				name: "Vannila Ice-cream",
				price: 80,
				image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKx0UyE8tAIy_QFQs4CoVti5jCUAIqRDsraFSrcDJWsw&s",
			}
			
		],
		rating: 4.0,
		
	},
];

const seedDatabase = async () => {
	try {
		await Restaurant.deleteMany(); // Clear existing data
		await Restaurant.insertMany(seedData);
		console.log("Database seeded successfully.");
	} catch (error) {
		console.error("Error seeding the database:", error.message);
	}
};

// Seed data when the server starts
seedDatabase();

app.get("/restaurants", async (req, res) => {
	try {
		// Use the 'find' method of the 'Restaurant' model to retrieve all restaurants
		const restaurants = await Restaurant.find({});

		// Send the retrieved restaurants as a JSON response
		res.json(restaurants);
	} catch (error) {
		// Handle any errors that may occur during the process and send a 500 Internal Server Error response
		res.status(500).json({ error: error.message });
	}
});
app.post("/login", (req, res) => {
    const {email, password} = req.body;
    EmployeeModel.findOne({email : email})
    .then(user => {
        if(user) {
            if(user.password === password){
                res.json("Success")
            }else{
                res.json("The password is incorrect")
            }
        }else{
            res.json("No record existed")
        }
    })
})
app.post("/register", (req, res) => {
    EmployeeModel.create(req.body)
    .then(employees => res.json(employees))
    .catch(err => res.json(err))
})

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});