'use client'
import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

const AddAnimation = () => {
    useEffect(() => {
        // Initialize AOS with settings that prevent scroll interference
        AOS.init({
            once: true,
            disable: false,
            startEvent: 'DOMContentLoaded',
            initClassName: 'aos-init',
            animatedClassName: 'aos-animate',
            useClassNames: false,
            disableMutationObserver: false,
            debounceDelay: 50,
            throttleDelay: 99,
        });

        // Force scroll to top after AOS init
        window.scrollTo(0, 0);
    }, []);
    return null
}

export default AddAnimation