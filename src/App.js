import logo from "./logo.svg";
import "./App.css";
import { TextField } from "@mui/material";
import { useState } from "react";
import CustomizedHook from "./Select";

// const terminals = new Array(26).fill(0).map((_, index) => ({
//     title: String.fromCharCode(65 + index),
// }));

function App() {
    const [terminals, setTerminals] = useState([]);
    const [nonTerminals, setNotTerminals] = useState([]);
    const [productions, setProductions] = useState([]);

    const handleSumit = (e) => {
        e.preventDefault();
    };

    const handleTerminalChange = (e, value) => {
        console.log(value);
    };

    const handleNonTerminalChange = (e, value) => {
        console.log(value);
    };

    const nonTerminalsArray = new Array(26).fill(0).map((_, index) => ({
        title: String.fromCharCode(65 + index),
    }));

    const terminalsArray = new Array(26).fill(0).map((_, index) => ({
        title: String.fromCharCode(97 + index),
    }));

    return (
        <>
            <form onSubmit={handleSumit}>
                <h2>Enter non terminals</h2>
                <CustomizedHook
                    optionsArray={nonTerminalsArray}
                    label={"Non Terminals"}
                    currentDefaultValue={18}
                    handleChange={handleNonTerminalChange}
                />
                <h2>Enter terminals</h2>
                <CustomizedHook
                    optionsArray={terminalsArray}
                    label={"Terminals"}
                    currentDefaultValue={null}
                    handleChange={handleTerminalChange}
                />
                <TextField />
            </form>
        </>
    );
}

export default App;
