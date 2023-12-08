import React, { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import AuthContext from "../Page/auth-context";
import { Badge, Nav } from "react-bootstrap";

export default function Header({setIsCartOpen, cartElements}) {
    const navigate = useNavigate()
    const authCtx = useContext(AuthContext)

    const isLoggedIn = authCtx.isLoggedIn
    const logout = authCtx.logout

    const logoutHandler = ()=> {
        navigate('/')
        logout()
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: "whitesmoke" }}>
                <Toolbar>
                    <div style={{ color:'#000', marginLeft:40, fontSize:'3vw', fontFamily:'cursive' }}>
                        The Generics
                    </div>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
                    >
                        <div style={{ display:'flex', justifyContent:'center', alignItems:'center', fontSize:18, color:'#000', fontFamily:'serif'}}>
                            {
                                isLoggedIn && (
                                <span style={{ display:'flex', justifyContent:'center', alignItems:'center',}}>
                                    <div onClick={()=>navigate(`/home`)} style={{ cursor:'pointer', margin:'0px 30px 0px 30px' }}>HOME</div>
                                    <div onClick={()=>navigate(`/about`)} style={{ cursor:'pointer', margin:'0px 30px 0px 30px' }}>ABOUT</div>
                                    <div onClick={()=>navigate(`/store`)} style={{ cursor:'pointer', margin:'0px 30px 0px 30px' }}>STORE</div>
                                    <div onClick={()=>navigate(`/contactus`)} style={{ cursor:'pointer', margin:'0px 30px 0px 30px' }}>CONTACT US</div>
                                    <div onClick={logoutHandler} style={{ cursor:'pointer', margin:'0px 30px 0px 30px' }}>LOGOUT</div>
                                    <Nav>
                                        <Nav.Link
                                        href="#cart"
                                        style={{ fontSize: '30px', marginLeft: '40vh' }}
                                        className="ml-auto"
                                        onClick={() => setIsCartOpen(true)}
                                        >
                                        Cart{' '}
                                        <Badge variant="secondary">{cartElements.length}</Badge>
                                        </Nav.Link>
                                    </Nav>
                                </span>
                            )}
                            {
                                !isLoggedIn && (
                                    <div onClick={()=>navigate(`/`)} style={{ cursor:'pointer', margin:'0px 60px 0px 60px' }}>LOGIN</div>
                            )}
                        </div>
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
