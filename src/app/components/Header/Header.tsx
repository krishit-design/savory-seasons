"use client";
import React, { useEffect, useState } from 'react';
import "./Header.css"
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import router from 'next/navigation';


function Header() {
    const router = useRouter();
    const pathname = usePathname()
    const [username, setUsername] = useState('');
    
    return (
        <>
            <Link href={'/'} className="logo">
                <img src="assets/images/logo-ss.svg" alt="" />
            </Link>
            <nav>
                <div className="navigation">
                    <li>
                        <Link type='button' className={`link ${pathname === '/' ? 'active' : ''}`} href={'/'}>
                            <span className="hovered-image">
                                <img src="assets/images/home-dark.png" alt="" />
                                <p className='nav-text'> HOME</p>
                            </span>
                            <img className="image-unhovered" src="assets/images/home.png" alt="" />

                        </Link>
                    </li>
                    <li>
                        <Link type="button" className={`link ${pathname === '/menu' ? 'active' : ''}`} href={'/menu'}>
                            <img className="image-unhovered" src="assets/images/menu.png" alt="" />
                            <span className="hovered-image">
                                <img src="assets/images/menu-dark.png" alt="" /><p className='nav-text'>MENU</p></span>
                        </Link>
                    </li>
                    <li>
                        <Link type="button" className={`link ${pathname === '/service' ? 'active' : ''}`} href={'/service'}>
                            <img className="image-unhovered" src="assets/images/food-delivery.png" alt="" />
                            <span className="hovered-image"><img src="assets/images/food-delivery-dark.png"
                                alt="" /><p className='nav-text'>SERVICES</p></span>

                        </Link>
                    </li>
                    {/* <li>
                        <Link type="button" className={`link ${pathname === '/customize' ? 'active' : ''}`} href={'/customize'}>
                            <img className="image-unhovered" src="assets/images/blog.png" alt="" />
                            <span className="hovered-image"><img src="assets/images/blog-dark.png" alt="" />CUSTOMIZATION</span>
                        </Link>
                    </li> */}
                    <li>
                        <Link type="button" className={`link ${pathname === '/contact' ? 'active' : ''}`} href={'/contact'}>
                            <img className=" image-unhovered" src="assets/images/phone.png" alt="" />
                            <span className="hovered-image"><img className="" src="assets/images/phone-dark.png"
                                alt="" /><p className='nav-text'>CONTACT</p></span>
                        </Link>
                    </li>
                </div>
            </nav>
        </>
    )
}

export default Header