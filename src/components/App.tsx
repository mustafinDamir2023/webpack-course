import React, { useState } from "react";
import classes from './App.module.scss'
import { Link, Outlet } from "react-router-dom";
import About from "@/pages/about/About";
import avatarPng from '@/assets/avatar.png'
import avatarJpg from '@/assets/80866.jpg'
import Gitar from '@/assets/avatar.svg'
// import '@sberbusiness/triplex/styles/styles.css'
// import { EButtonSize, EButtonTheme } from "@sberbusiness/triplex/components/Button/enums";
// import { Button } from "@sberbusiness/triplex/components/Button/Button";
// import { AccordionForm } from "@sberbusiness/triplex/components/AccordionForm/AccordionForm";
// import { TripTabs } from "./Tabs";
// import { TablePag } from "./TablePag";

// TREE SHAKING
function TODO(a: number) {
    console.log('TODOFUNCTION')
}
export const App = () => {
    const [count, setCount] = useState<number>(0)

    const increment = () => setCount(prev => prev+1)
    // TODO('43545'))
    // if(__PLATFORM__ === 'desktop') {
    //     return <div>ISDESKTOPPLATFORM</div>
    // }

    // if(__PLATFORM__ === 'mobile') {
    //     return <div>ISMOBILEPLATFORM</div>
    // }
    
    // if (__ENV__ ==="development") {
    //     //addDevtools()
    // }
    
    // const title = <AccordionForm.Item.Title>Заголовок аккордеона</AccordionForm.Item.Title>;
    return (
        <>
        <div>
            <h1>PLATFORM={__PLATFORM__}</h1>
            <img width={50} height={50}src={avatarPng} alt="/" />
            {avatarPng}
            <img width={50} height={50}src={avatarJpg} alt="/" />
            {avatarJpg}
        </div>
        <div>
            <div>sadsd</div>
            <div>sadsdddxx  </div>
            <div>sadsdcssaadcd</div>
            <Gitar width={200} height={200} />
        </div>
        <Link to={'/about'}>About</Link>
        <br />
        <Link to={'/shop'}>Shop</Link>
        <h1>Hello World!!!23432</h1>
        <h3 className={classes.value}>{count}</h3>
        <button className={classes.button} onClick={increment}><span>Click me</span></button>


        <About />




        {/* <Button theme={EButtonTheme.GENERAL} size={EButtonSize.MD}>
        Button Name
       </Button>
       <AccordionForm>
    <AccordionForm.Item title={title}>
        <AccordionForm.Item.Content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </AccordionForm.Item.Content>
        <AccordionForm.Item.Footer>
            <Button theme={EButtonTheme.SECONDARY} size={EButtonSize.SM}>
                Button Name
            </Button>
            <Button theme={EButtonTheme.GENERAL} size={EButtonSize.SM}>
                Button Name
            </Button>
        </AccordionForm.Item.Footer>
    </AccordionForm.Item>
</AccordionForm>

<TripTabs />

<TablePag /> */}
        </>
    )
}