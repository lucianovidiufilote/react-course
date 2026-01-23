export default function Form({parameters, onParamChange}) {
    return (
        <form id="user-input">
            <div className="input-group">
                <label htmlFor="initialInvestment">INITIAL INVESTMENT</label>
                <input name="initialInvestment" id="initialInvestment" type="text" value={parameters.initialInvestment}
                       onChange={onParamChange}/>
            </div>
            <div className="input-group">
                <label htmlFor="annualInvestment">ANNUAL INVESTMENT</label>
                <input name="annualInvestment" id="annualInvestment" type="text" value={parameters.annualInvestment}
                       onChange={onParamChange}/>
            </div>
            <div className="input-group">
                <label htmlFor="expectedReturn">EXPECTED RETURN</label>
                <input name="expectedReturn" id="expectedReturn" type="text" value={parameters.expectedReturn} onChange={onParamChange}/>
            </div>
            <div className="input-group">
                <label htmlFor="duration">DURATION</label>
                <input name="duration" id="duration" type="text" value={parameters.duration} onChange={onParamChange}/>
            </div>
        </form>
    )
}