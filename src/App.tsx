import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Softwares from './pages/softwares';
import FavoritePage from './pages/favoritePage';
import Layout from './layout/AppLayout';
import RecordDetails from './pages/recordDetails';
import AppProvider from './context/AppProvider';

function App() {
  return (
    <>
      <AppProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path='/' element={<Softwares />} />
              <Route path='/softwares/:id' element={<RecordDetails />} />
              <Route path='/favorite' element={<FavoritePage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AppProvider>
    </>
  )
}

export default App;
