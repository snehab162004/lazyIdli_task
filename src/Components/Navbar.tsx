import "./styles/navbar.css"
import btn from "../assets/btn.svg"

const Navbar = () => {
    return <>
    <div className="container">
        <nav className="navbar">
           <h4 className="logo">GILLY'S </h4>
             <span>Kormangala</span>
             <div className="btn-container">
             <img src={btn} alt="toggle-btn" className="btn"/>

             </div>
            </nav>
            
    </div>
    </>
}

export default Navbar;