import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"

const pizzaData = [
    {
        name: "Focaccia",
        ingredients: "Bread with italian olive oil and rosemary",
        price: 6,
        photoName: "pizzas/focaccia.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Margherita",
        ingredients: "Tomato and mozarella",
        price: 10,
        photoName: "pizzas/margherita.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Spinaci",
        ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
        price: 12,
        photoName: "pizzas/spinaci.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Funghi",
        ingredients: "Tomato, mozarella, mushrooms, and onion",
        price: 12,
        photoName: "pizzas/funghi.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Salamino",
        ingredients: "Tomato, mozarella, and pepperoni",
        price: 15,
        photoName: "pizzas/salamino.jpg",
        soldOut: true,
    },
    {
        name: "Pizza Prosciutto",
        ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
        price: 18,
        photoName: "pizzas/prosciutto.jpg",
        soldOut: false,
    },
];

function App() {
    return (
        <div className="container">
            <Header />
            <Menu />
            <Footer />
            {/* <StyleCheck /> */}
        </div>
    );
}

function Header() {
    return (
        <header className="header">
            <h1>Fast React Pizza Co.</h1>
        </header>
    )
}

function Menu() {
    return (
        <main className="menu">
            <h2>Our Menu</h2>
            <Pizza
                name="Pizza Salamino"
                ingredients="Tomato, mozarella, and pepperoni"
                price={10}
                photoName="pizzas/salamino.jpg"
            />
            <Pizza
                name="Pizza Funghi"
                ingredients="Tomato, mozarella, mushrooms, and onion"
                price={12}
                photoName="pizzas/funghi.jpg"
            />
        </main>
    )
}

function Pizza(props) {
    return (
        <div className="pizza">
            <img src={props.photoName} alt="Salamino Pizza" />
            <div>
                <h3>{props.name}</h3>
                <p>{props.ingredients}</p>
                <p>{props.price}</p>
            </div>
        </div>
    );
}

function Footer() {
    // return React.createElement("footer", null, "We're open now")

    // const hour = new Date().getHours();
    // const openHr = 11;
    // const closeHr = 23;
    // const isOpen = hour >= openHr && hour < closeHr;
    // console.log(isOpen)

    // if (hour >= openHr && hour < closeHr) alert("We're open now!");
    // else alert("Sorry! We're closed now!")

    return (
        <footer className="footer">
            {new Date().toLocaleTimeString()} We're open now!
        </footer>
    )
}

// function StyleCheck() {
//     const style = {
//         color: "red",
//         fontSize: "48px"
//     }

//     return (
//         <div style={style}>
//             hello!
//         </div>
//     )
// }

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
