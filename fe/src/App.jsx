import Login from "./page/login/Login.jsx";
import {
    BrowserRouter,
    Route,
    Routes,
} from "react-router-dom";
import Register from "./page/register/Register.jsx";
import {Home} from "./page/home/Home.jsx";


function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="" element={<Home/>}/>
                <Route path="login" element={<Login/>}/>
                <Route path="register" element={<Register/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
