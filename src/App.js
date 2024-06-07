import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Post from "./pages/Post";
import NotFound from "./pages/NotFound";
import NavBar from "./components/common/NavBar";

export const App = () => {
    return(
        <>
            <NavBar/>
            <Routes>
                <Route path="/" exact='true' element={<Home/>}></Route>
                <Route path="/posts" exact='true' element={<Post/>}></Route>
                <Route component={NotFound}></Route>
            </Routes>
        </>
    );
}