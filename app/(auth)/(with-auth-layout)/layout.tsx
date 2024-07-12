"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

//renommer template.tsx etat composant reset a chaque fois

const navLinks = [
    {name: "Register", href:"/register"},
    {name: "Login", href:"/login"},
    {name: "forgot Password", href:"/forgot-password"},
]

export default function AuthLayout({children}: {
    children : React.ReactNode
}) {

    const pathname = usePathname();
    const [state, setState] = useState('');

    const handleChange = (e : any) => {
        const val = e.target.value;
        setState(val);
    }

    return (
        <>
        <div>
            <input value={state} onChange={handleChange} type="text" className="border border-teal-900" />
        </div>

        <nav>
            <ul>
                {navLinks.map((link) => {
                    const isActive = pathname.startsWith(link.href);
                    return (
                        <li key={link.name}><Link className={isActive ? "text-red-500 font-bold" : "text-slate-900"} href={link.href}>{link.name}</Link></li>
                    )
                })}
            </ul>
        </nav>
        <h2>Group Auth</h2>
        {children}
        </>
    )

}