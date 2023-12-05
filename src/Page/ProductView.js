import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Header from "../Components/Header"
import Button from '@mui/material/Button';
import { ButtonBase } from "@mui/material"

const cartElements = [
    {
        id: 'album-1',
        title: 'Colors',      
        price: 100,    
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        quantity: 2,
    },
    {
        id: 'album-2',
        title: 'Black and white Colors',
        price: 50,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        quantity: 3,
    },
    {
        id: 'album-3',
        title: 'Yellow and Black Colors',
        price: 70,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        quantity: 1,
    },
    {
        id: 'album-4',
        title: 'Blue Color',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
        quantity: 1,
    }
]

export default function ProductView(){
    const [data, setData] = useState([])
    var params = useParams()

    useEffect(function(){
        fetchData()
    },[])
    
    const fetchData = async() => {
        var result = cartElements.find(t => t.id === params.id)
        setData(result)
    }
    

    return(
        <div>
            <div>
                <Header />
            </div>
            <div style={{ display:'flex', marginTop:20 }}>
                <div class="image-container" style={{ padding:20, width:500, height:500 }}>
                    <img class="prod-images" src={data.imageUrl} alt="" width="400px"/>
                </div>

                <div id={data.id} style={{ margin:30, padding:20 }}>
                    <h1>{data.title}</h1>
                    <div style={{ marginTop:30}}>
                        <span style={{ fontWeight:700 }}>Special Price</span>
                        <div style={{ color:'green', fontSize:28, marginTop:10, fontWeight:600 }}>{data.price}/-- rs</div>
                    </div>
                    <div class="prod-details" style={{ marginTop:30}}>
                        <span style={{ fontSize:14, fontWeight:600 }}>Stock: </span>
                        <span style={{ color:'red', fontWeight:600}}> {data.quantity} item left </span>
                    </div>
                    <div class="prod-details" style={{ marginTop: 30 }}>
                        <Button variant="contained" fullWidth sx={{ backgroundColor:'#000', }}>Add to cart</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}