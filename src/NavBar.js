import React from "react";
import logo from '../src/logo/PlugmoodLOGO.png'

const Navbar = () => {
    return(
        <React.Fragment>
            <section>
                <div style={{display:'flex' ,backgroundColor: "#3C096C"}}>
                    <div>
                        <img src={logo}  style={{padding:20,height:80,width:80}}/>
                    </div>
                    <div>
                        <p style={{color:'white',padding:25,fontSize:20}}>Plug Mood</p>
                    </div>
                </div>
            </section>
        </React.Fragment>
        
    );
}

export default Navbar