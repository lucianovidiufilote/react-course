import logo from '../assets/investment-calculator-logo.png'

export default function Header() {
    return (
        <header>
            <img src={logo} alt="Logo" height="150"/>
            <h1>React Investment Calculator</h1>
        </header>
    )
}