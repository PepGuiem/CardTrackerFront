import { useState } from 'react';
import { Link, Outlet } from "react-router-dom"
import { useTranslation } from 'react-i18next'
import Header from '../components/Header.tsx'

export default function Root() {

    return (
        <>
            <Header/>

            <main>
                <Outlet />
            </main>
            <footer>

            </footer>
        </>
    )
}