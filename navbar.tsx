"use client"

import React from "react";
import { animate } from "motion";
import { motion } from "motion/react";

export default function Navbar({children}: {children: React.ReactNode}) {

    var timer = setTimeout(() => {});

    function show(bar: HTMLElement, child: HTMLElement) {
        animate(bar, {scaleX: 1, scaleY: 1, y: 0, opacity: 1}, {duration: 0.3});
        animate(child, {opacity: 1}, {duration: 0.3});  
    }

    function startDisapp(bar: HTMLElement, child: HTMLElement) {
        return setTimeout(() => {
            animate(bar, {scaleX: 0.8, scaleY: 0.1, y: -20, opacity: 0.8}, {duration: 0.3});
            animate(child, {opacity: 0}, {duration: 0.3});
        }, 1500)
    }

    function open() {
        const [bar, child] = [document.getElementById("navbar"), document.getElementById("navbarchild")];

        if(bar == null || child == null) {
            return;
        }

         show(bar, child);

        clearTimeout(timer);
    }

    function close() {
        const [bar, child] = [document.getElementById("navbar"), document.getElementById("navbarchild")];

        if(bar == null || child == null) {
            return;
        }

        timer = startDisapp(bar, child);
    }

    function openClick() {
        const [bar, child] = [document.getElementById("navbar"), document.getElementById("navbarchild")];

        if(bar == null || child == null) {
            return;
        }

        clearTimeout(timer);

        show(bar, child);

        timer = startDisapp(bar, child);
    }

    return(
        <div className = "grid grid-cols-3 fixed left-0 right-0">
            <div/>
            <motion.div className= "bg-sky-500" id = "navbar"
                onMouseOver = {open}
                onMouseLeave = {close}
                onClick = {openClick}
                animate = {{scaleX : 0.8, scaleY: 0.1, y: -20, opacity: 0.8 }}
                initial = {{scale : 1}}
                transition = {{delay: 1, duration: 0.3}}
                >
                <motion.div className = "grid grid-rows-3 justify-center justify-items-center" id = "navbarchild"
                    initial = {{opacity : 1}}
                    animate = {{opacity : 0}}
                    transition = {{delay: 1, duration: 0.3}}
                >
                    {children}
                </motion.div> 
            </motion.div>
            <div/>
        </div>
    )
}

