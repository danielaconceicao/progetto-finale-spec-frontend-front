import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout';
import Software from './pages/Software';
import AppProvider from './context/AppProvider';
import SoftwareDetails from './pages/SoftwareDetails';
import PreferredSoftware from './pages/PreferredSoftware';

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Software />} />
            <Route path='/software/:id' element={<SoftwareDetails />} />
            <Route path='/preferiti' element={<PreferredSoftware />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  )
}

export default App
