import Navbar from "./Navbar.js";
import Navbar2 from "./Navbar2.js";

// import Section1 from "./Section1.js";
// import Section2 from "./Section2.js";
import Footer from "./Footer.js";
import OptionMenu from "./OptionMenu.js";
import OptionLike from "./OptionLike.js"; 
import { useState } from "react";
// import Modal from "./Modal.js";

export default function Layout({children, index, setInput, input}) {
    const [option, setOption] = useState(false);
    const [optionlike, setLikeOption] = useState(false);

    return (
        <div className='layout'>
            <OptionLike active2={optionlike} closeFunction2={()=>setLikeOption(false)} />
            <OptionMenu active={option} setOption={setOption} />

            {index?<Navbar optionFonction={()=>{setOption(true)}} optionFonction2={()=>{setLikeOption(true)}} input={input} setInput={setInput} />:
            <Navbar2 optionFonction={()=>{setOption(true)}} optionFonction2={()=>{setLikeOption(true) }} />}
            
  
            {children}
            <Footer/>
        </div>
    )
}

