import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header";

export default function Store(){
    var navigate = useNavigate()

    return(
        <div>
            <Header />

    <section id="music" class="container">
        <h2>MUSIC</h2>
        <div id ="music-content">
            <div id='album1'>
                <h3>Colors</h3>
                <div class="image-container">
                    <img class="prod-images" src="https://prasadyash2411.github.io/ecom-website/img/Album%201.png" alt=""/>
                </div>
                <div class="prod-details">
                    <span>100/-- rs</span>
                    <button class="shop-item-button" type='button'>ADD TO CART</button>
                </div>
            </div>
            <div id='album2'>
                <h3>Black and white Colors</h3>
                <div class="image-container">
                    <img class="prod-images" src="https://prasadyash2411.github.io/ecom-website/img/Album%202.png" alt=""/>
                </div>
                <div class="prod-details">
                    <span>50/-- rs</span>
                    <button class="shop-item-button" type='button'>ADD TO CART</button>
                </div>
            </div>
            <div id='album3'>
                <h3>Yellow and Black Colors</h3>
                <div class="image-container">
                    <img class="prod-images" src="https://prasadyash2411.github.io/ecom-website/img/Album%203.png" alt=""/>
                </div>
                <div class="prod-details">
                    <span>70/-- rs</span>
                    <button class="shop-item-button" type='button'>ADD TO CART</button>
                </div>
            </div>
            <div id='album4'>
                <h3>Blue Color</h3>
                <div class="image-container">
                    <img class="prod-images" src="https://prasadyash2411.github.io/ecom-website/img/Album%204.png" alt=""/>
                </div>
                <div class="prod-details">
                    <span>100/-- rs</span>
                    <button class="shop-item-button" type='button'>ADD TO CART</button>
                </div>
            </div>
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