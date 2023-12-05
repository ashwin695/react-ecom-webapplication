import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

export default function Header() {
    var navigate = useNavigate()

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
                            <div onClick={()=>navigate(`/`)} style={{ cursor:'pointer', margin:'0px 60px 0px 60px' }}>HOME</div>
                            <div onClick={()=>navigate(`/about`)} style={{ cursor:'pointer', margin:'0px 60px 0px 60px' }}>ABOUT</div>
                            <div onClick={()=>navigate(`/store`)} style={{ cursor:'pointer', margin:'0px 60px 0px 60px' }}>STORE</div>
                            <div onClick={()=>navigate(`/contactus`)} style={{ cursor:'pointer', margin:'0px 60px 0px 60px' }}>CONTACT US</div>
                            <div onClick={()=>navigate(`/login`)} style={{ cursor:'pointer', margin:'0px 60px 0px 60px' }}>LOGIN</div>
                        </div>
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
