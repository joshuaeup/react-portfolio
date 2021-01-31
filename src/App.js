import Portfolio from "./Containers/Portfolio/Portfolio";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

function App() {
    return (
        <BrowserRouter>
            <Portfolio />
        </BrowserRouter>
    );
}

export default App;
