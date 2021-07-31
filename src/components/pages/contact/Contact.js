import './Contact.css';
import React from "react";
import Footer from "../../shared/footer/Footer";
import Header from "../../shared/header/Header";

import image1 from './Contacts.jpg';

function Contact() {
    return ( <
        div class = "App" >
        <
        div class = "contact-head" >
        <
        div class = "h-title" >
        <
        h1 class = "c-color" > | < /h1> <
        h1 class = "c-title" > Contacts < /h1> <
        p > Home / Contacts < /p> < /
        div > <
        /div> <
        div class = "grid-block2" >
        <
        div class = "block" >
        <
        h1 > Be In Touch < /h1 > <
        p > Send your requirements
        for a website, we will research your specification and competitors, create a prototype of the website
        for free and sed a result to you!It will be something amazing!
        <
        /p> <
        div class = "insidebox" >
        <
        div >
        <
        h4 > Address < /h4> <
        p > 27 Division St, New York, NY 10002, USA < /p> < /
        div > <
        div >
        <
        h4 > Email < /h4> <
        p > 27 Division St, New York, NY 10002, USA < /p> < /
        div > <
        /div> <
        div class = "insidebox" >
        <
        div >
        <
        h4 > Phone Number < /h4> <
        p > 27 Division St, New York, NY 10002, USA < /p> < /
        div > <
        div >
        <
        h4 > Working hour < /h4> <
        p > 27 Division St, New York, NY 10002, USA < /p> < /
        div >

        <
        /div> < /
        div > <
        img src = { image1 }
        width = "100%"
        height = "780px"
        alt = "" / >
        <
        /div>

        <
        div class = "contact" >
        <
        div class = "title" >
        <
        div class = "title-d" >
        <
        h1 > Get a Free Prototype of Your Future Website! < /h1> <
        p > Send your requirements
        for a website, < /p><p>we will research your specification and competitors, create a prototype of the website
        for free and sed a result to you! < /p> < /
        div > < /
        div > <
        div class = "contact-input" >
        <
        div class = "first" >
        <
        input class = "first-input"
        type = "text"
        placeholder = "Full Name" / >
        <
        input class = "first-input"
        type = "tel"
        placeholder = "Phone Number" / >
        <
        /div> <textarea rows="4" cols="46"></textarea >
        <
        div class = "btn-class" >
        <
        button class = "btn" > Submit < /button>  < /
        div > < /
        div > < /
        div > < /
        div >
    );
}

export default Contact;