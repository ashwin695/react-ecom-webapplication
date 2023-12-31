import React, { useContext, useEffect } from 'react';
import Header from '../Components/Header';
import { useNavigate } from 'react-router-dom';
import AuthContext from './auth-context';

export default function About({addToCart, setIsCartOpen, cartElements}){
    const navigate = useNavigate()
    const authCtx = useContext(AuthContext)

    const isLoggedIn = authCtx.isLoggedIn

    useEffect(function(){
        isLoggedIn
        ?
        showPage()
        : 
        navigate('/')
    })

    function showPage(){
        return(
            <div>
            <Header addToCart={addToCart} setIsCartOpen={setIsCartOpen} cartElements={cartElements} />
    
    <section id="about">
        <h2 style={{ margin:'20px 0px 0px 0px'}}>About</h2>
        <div>
            <img src="./img/Band Members.png" alt=""/>
            <p>Lorem ipsum carrots enhanced rebates. Excellent sayings of a man of sorrows, hates no prosecutors will unfold in the enduring of which were born in it? Often leads smallest mistake some pain main responsibilities are to stand for the right builder of pleasure, accepted explain up to now. , The things we are accusing of these in the explication of the truth receives from the flattery of her will never be the trouble and they are refused to the pleasures and the pleasures of the pain, explain the treatment of excepturi of the blessed sufferings. I never said will unfold in him receives at another time he may please the one that those works, we are less than they, this refused to the pleasures of deleniti? Those are! Will unfold in times of pleasure, this pain will be a right enjoyed by corrupt, are accusing him of all pleasures, and seek his own, or, to the needs of the agony of the choice. We hate the fellow.<br/>

                Lorem ipsum dolor, sit amet consectetur rebates. The distinction, that arise from or to. The greater, therefore, an obstacle to the duties of the debts receives the very great importance to us that these are consequent to that question is answered, which was selected for the fault, it is often one of us, however, have any! Moreover, this is often not at once take the hardships of the life of harsh condemn, we are accusing him? Him whom something large cisterns.</p>
        </div>
    </section>
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

    return(
        <div>
            {showPage()}
        </div>
    )
}