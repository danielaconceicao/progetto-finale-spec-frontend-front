import { Outlet } from 'react-router-dom';
import Header from '../components/Header';


export default function Layout() {
    return (
        <div className='d-flex flex-column min-vh-100'>
            <header>
                <Header/>
            </header>
            <main className='flex-grow-1'><Outlet /></main>
            <footer>
                <p className='text-center p-3 m-0'>
                    &copy; {new Date().getFullYear()} Created by Daniela Conceição
                </p>
            </footer>
        </div>
    )
}