import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <>
            <header className='py-4'>
                <h1>AllSoftware</h1>
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <p className='text-center p-3 m-0'>
                    &copy; {new Date().getFullYear()} Created by Daniela Conceição
                </p>
            </footer>
        </>
    )
}