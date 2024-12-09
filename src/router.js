import Sheet from "./pages/Sheet";


import {BrowserRouter, Routes, Route} from 'react-router-dom'

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Sheet />} />
            </Routes>    
        </BrowserRouter>

    )
}

export default Router;