import {calculateInvestmentResults, formatter} from "../util/investment.js";

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

export default function Table({parameters}) {

    const investmentResults = calculateInvestmentResults(parameters);
    const results = deriveResults(parameters, investmentResults)

    return (
        <table id="result">
            <thead>
            <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interest ( Year )</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </tr>
            </thead>
            <tbody>
            {results.map(row => {
                return (
                    <tr key={`${row.year}`}>
                        <td>{row.year}</td>
                        <td>{formatter.format(row.valueEndOfYear)}</td>
                        <td>{formatter.format(row.interest)}</td>
                        <td>{formatter.format(row.totalInterest)}</td>
                        <td>{formatter.format(row.investedCapital)}</td>
                    </tr>
                )
            })}

            </tbody>
        </table>
    )
}