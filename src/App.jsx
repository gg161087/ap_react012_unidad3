import { BrowserRouter, Routes, Route} from 'react-router-dom';

import { Show } from './pages/Show.jsx'
import { About } from './pages/About.jsx'
import { ProductDetail } from './pages/ProductDetail.jsx'

export const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/ap_react012_unidad3/' element={<Show></Show>}></Route>
                <Route path='/ap_react012_unidad3/about' element={<About></About>}></Route>
                <Route path='/ap_react012_unidad3/:id' element={<ProductDetail></ProductDetail>}></Route>
            </Routes>
        </BrowserRouter>
    );
}