import React from 'react'
import Navigation from './Navigation'
import Option from './Option'
import '../CSS/Contact.css'
function Contact(props) {
    return (
        <div className='parentContact'>
        <Option prId={"Contact Us"}/>
        <div className="containerContact">
        <Navigation/>
        <div className="formContact">
            <ul>
                <li>Contact:</li>
                <li>
                    <button className='btnContact'><i class="fab fa-whatsapp"></i> Whatsapp</button>
                    <button className='btnContact' id="google"><i class="fab fa-google"></i>Gmail</button>
                </li>
                <hr />
                <li>Give you details:</li>
                <li><input type="email" name="" className="emailContact" placeholder="Email" /></li>
                <li><input type="number" name="" className="emailContact" placeholder="Ph No." /></li>
                <li><textarea name="" id="" cols="30" rows="10"className="emailContact" placeholder="Why are you writing"></textarea></li>
               <li> <button className='btnContact submitContact'>Submit</button></li>
                

            </ul>
             <i className="fab fa-ethereum ethContact"></i>
             <i className="fab fa-bitcoin bitContact"></i>
             <i className="fab fa-bitcoin bit1Contact"></i>
        </div>
        </div>
        </div>
    )
}

export default Contact
