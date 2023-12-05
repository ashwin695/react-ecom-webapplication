import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header";

const cartElements = [
    {
        id: 'album-1',
        title: 'Colors',      
        price: 100,    
        imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
        quantity: 2,
    },
    {
        id: 'album-2',
        title: 'Black and white Colors',
        price: 50,
        imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
        quantity: 3,
    },
    {
        id: 'album-3',
        title: 'Yellow and Black Colors',
        price: 70,
        imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
        quantity: 1,
    },
    {
        id: 'album-4',
        title: 'Blue Color',
        price: 100,
        imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
        quantity: 1,
    }
]

export default function Store(){
    var navigate = useNavigate()

    const handleProductView = (item) => {
        navigate(`/productview/${item.id}/${item.title}`)
        //console.log(item)
    }

    return(
        <div>
            <Header />

    <section id="music" class="container">
        <h2>MUSIC</h2>
        <div id ="music-content">
            {
                cartElements.map((item)=>{
                    return(
                        <div id={item.id} onClick={()=>handleProductView(item)}>
                            <h3>{item.title}</h3>
                            <div class="image-container">
                                <img class="prod-images" src={item.imageUrl} alt=""/>
                            </div>
                            <div class="prod-details">
                                <span>Stock: {item.quantity} item left</span>
                            </div>
                            <div class="prod-details">
                                <span>{item.price}/-- rs</span>
                                <button class="shop-item-button" type='button'>ADD TO CART</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
         



        

    </section>
    <section id="cart" class="container">
        <h2>CART</h2>
        <button class="cancel">X</button>
        <div class="cart-row cart-header">
            <span class='cart-item cart-column'>ITEM</span>
            <span class='cart-price cart-column'>PRICE</span>
            <span class='cart-quantity cart-column'>QUANTITY</span>
        </div>
        <div class='cart-items'>
            <div class="cart-row">
                <span class='cart-item cart-column'>
                    <img class='cart-img' src="img/Shirt.png" alt=""/>
                    <span>T-Shirt</span>
                </span>
                <span class='cart-price cart-column'>$19.99</span>
                <span class='cart-quantity cart-column'>
                    <input type="text"/>
                    <button>REMOVE</button>
                </span>
            </div>
            <div class="cart-row">
                <span class='cart-item cart-column'>
                    <img class='cart-img' src="/img/Album 3.png" alt=""/>
                    <span>Album 3</span>
                </span>
                <span class='cart-price cart-column'>$9.99</span>
                <span class='cart-quantity cart-column'>
                    <input type="text"/>
                    <button>REMOVE</button>
                </span>
            </div>
        </div>
        <div class="cart-total">
            <span>
                <span class='total-title'> <strong>Total</strong>
                    </span>
                $<span id='total-value'>0</span>
            </span>
        </div>
        <button class='purchase-btn' type='button'>PURCHASE</button>
    </section>

        <button class="cart-btn-bottom"> <a href="#cart" class="cart-bottom">See the cart</a></button>


    <div id="container"></div>
    <footer>
        <div class="footer-title">
            The Generics
        </div>
        <div class="footer-icons">
            <ul>
                <li><a href="https://www.youtube.com">
                    <img src="./img/6260efc8fc9a9002669d2f4ad9956cc0.jpg" alt=""/>
                </a></li>
                <li><a href="https://spotify.com">
                    <img src="./img/Spotify Logo.png" alt=""/>
                </a></li>
                <li><a href="https://facebook.com">
                    <img src="./img/Facebook Logo.png" alt=""/>
                </a></li>
            </ul>
        </div>
    </footer>
        </div>
    )
}