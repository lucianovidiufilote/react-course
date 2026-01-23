import Header from "./components/Header.jsx";
import Form from "./components/Form.jsx";
import Table from "./components/Table.jsx";
import {useState} from "react";
import {calculateInvestmentResults} from "./util/investment.js";


function deriveResults(parameters, investmentResults) {
    const output = [];
    let runningTotalInterest = 0;
    let runningInvestedCapital = Number(parameters.initialInvestment);

    for (const investmentResult of investmentResults) {
        runningTotalInterest += investmentResult.interest;
        runningInvestedCapital += investmentResult.annualInvestment;
        output.push({
            year: investmentResult.year,
            valueEndOfYear: investmentResult.valueEndOfYear,
            interest: investmentResult.interest,
            totalInterest: runningTotalInterest,
            investedCapital: runningInvestedCapital
        })
    }

    return output;
}


function App() {
    const [parameters, setParameters] = useState({
        initialInvestment: '',
        annualInvestment: '',
        expectedReturn: '',
        duration: '',
    })

    const [results, setResults] = useState([])

    function handleParameterChange(e) {
        setParameters((prevParameters) => ({...prevParameters, [e.target.name]: e.target.value}))

        let newParameters = {}
        Object.keys(parameters).forEach(key => {
            newParameters[key] = Number(parameters[key])
        });
        newParameters = {
            ...newParameters,
            [e.target.name]: Number(e.target.value)
        }

        console.log(newParameters);

        const investmentResults = calculateInvestmentResults(newParameters);

        setResults(
            deriveResults(parameters, investmentResults)
        )
    }

    return (
        <main className="center">
            <Header/>
            <Form
                parameters={parameters}
                onParamChange={handleParameterChange}
            />
            <Table
                results={results}/>
        </main>
    )
}

export default App
