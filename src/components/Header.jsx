
import Navbar from "./Navbar";
function Header() {
    return (
        <header>
            <div className="header-top container-fluid d-flex justify-content-between">
                
                <div className="d-flex align-item-center" >
                    <i class="fa-solid fa-phone fa-lg"></i>
                    <p>
                        Call: 0123456789
                    </p>
                </div>

                <div className="d-flex align-item-center">
                    <i class="fa-solid fa-envelope fa-lg"></i>
                    <p>
                        Email: email@email.com
                    </p>
                </div>
            
            </div>

            <Navbar></Navbar>
            
        </header>
    );
}

export default Header;