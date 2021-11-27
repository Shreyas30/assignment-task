import React,{useState} from "react";
import Header from "./components/Header/header";
import Main from "./components/Main/main";

const App = () => {

    const [data,setData] = useState([]);
    const [isloading,setIsLoading] = useState(false);
    return (
        <div>
            <Header setData={setData} setIsLoading={setIsLoading} />
            <Main data={data} isloading={isloading} />
        </div>
    );
}

export default App;