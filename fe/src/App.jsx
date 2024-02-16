import Login from "./page/login/Login.jsx";
import {
    BrowserRouter,
    Route,
    Routes,
} from "react-router-dom";
import Register from "./page/register/Register.jsx";
import {Public} from "./page/decentralization/publics/public/Public.jsx";
import {Home} from "./page/decentralization/publics/home/Home.jsx";


function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="" element={<Public/>}>
                    <Route path="" element={<Home/>}/>
                </Route>
                <Route path="login" element={<Login/>}/>
                <Route path="register" element={<Register/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
