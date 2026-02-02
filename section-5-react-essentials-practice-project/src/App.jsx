import Header from "./components/Header.jsx";
import Form from "./components/Form.jsx";
import Table from "./components/Table.jsx";
import {useState} from "react";


function App() {
    const [parameters, setParameters] = useState({
        initialInvestment: '',
        annualInvestment: '',
        expectedReturn: '',
        duration: '',
    })

    const parametersAreValid = parameters.duration !== '' && +parameters.duration > 0;

    function handleParameterChange(e) {
        setParameters((prevParameters) => ({...prevParameters, [e.target.name]: e.target.value}))
    }

    return (
        <main>
            <Header/>
            <Form
                parameters={parameters}
                onParamChange={handleParameterChange}
            />
            {!parametersAreValid && <p className="center">Please use valid data</p>}
            {parametersAreValid &&
                <Table
                    parameters={parameters}/>}
        </main>
    )
}

export default App
