import React, { useContext, useEffect } from "react";
import Header from "../Components/Header";
import { useNavigate } from "react-router-dom";
import AuthContext from "./auth-context";

export default function Home(){
    const navigate = useNavigate()
    const authCtx = useContext(AuthContext)

    const isLoggedIn = authCtx.isLoggedIn

    useEffect(function(){
        isLoggedIn
        ?
        showPage()
        : 
        navigate('/')
    },[])

    function showPage(){
        return(
            <div>
                <Header />

                <div style={{backgroundColor: 'grey', color:'#fff', fontFamily:'fantasy', display:'flex', justifyContent:'center', fontSize:40, padding:15, }}>
                    The Generics
                </div>

                <div style={{ display:'flex', justifyContent:'center', alignItems:'center', fontFamily:'cursive', fontSize:30, fontWeight:600, padding:20, margin:20}}>TOURS</div>
                <section id="tours" class='container' style={{ fontFamily:'serif'}}>
                    {/* <h2>TOURS</h2> */}
                    <div>
                        <div class="tour-item">
                            <span class="tour-date">JUL16</span>
                            <span class="tour-place">DETROIT, MI</span>
                            <span class="tour-spec-place">DTE ENERGY MUSIC THEATRE</span>
                            <button class="buy-btn">BUY TICKETS</button>
                        </div>
                        <div class="tour-item">
                            <span class="tour-date">JUL19</span>
                            <span class="tour-place">TORONTO,ON</span>
                            <span class="tour-spec-place">BUDWEISER STAGE</span>
                            <button class="buy-btn">BUY TICKETS</button>
                        </div>
                        <div class="tour-item">
                            <span class="tour-date">JUL 22</span>
                            <span class="tour-place"> BRISTOW, VA</span>
                            <span class="tour-spec-place">JIGGY LUBE LIVE</span>
                            <button class="buy-btn">BUY TICKETS</button>
                        </div>
                        <div class="tour-item">
                            <span class="tour-date">JUL 29</span>
                            <span class="tour-place">PHOENIX, AZ</span>
                            <span class="tour-spec-place"> AK-CHIN PAVILION</span>
                            <button class="buy-btn">BUY TICKETS</button>
                        </div>
                        <div class="tour-item">
                            <span class="tour-date">AUG 2</span>
                            <span class="tour-place">LAS VEGAS, NV</span>
                            <span class="tour-spec-place">T-MOBILE ARENA</span>
                            <button class="buy-btn">BUY TICKETS</button>
                        </div>
                        <div class="tour-item">
                            <span class="tour-date">AUG 7</span>
                            <span class="tour-place">CONCORD, CA</span>
                            <span class="tour-spec-place"> CONCORD PAVILION</span>
                            <button class="buy-btn">BUY TICKETS</button>
                        </div>
                    </div>
                </section>
                <footer>
                    <div class="footer-title">
                        The Generics
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