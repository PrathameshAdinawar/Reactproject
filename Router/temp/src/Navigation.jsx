import { Link } from "react-router-dom"

const Navigation=()=>{
    
    return(
        <div>
            <nav className="navbar w-100 navbar-expand-lg" style={{height:"100px"}}>
                <div className="d-flex justify-content-around h-100 container ">
                <div className="col-2 col-sm-2 d-flex justify-content-center my-auto mx-auto ">
                    <img src="../public/logo.png" alt="" className="" />
                </div>
                <ul className="d-lg-flex d-none justify-content-around col-8 fs-4 list-style-none text-decoration-none my-auto" style={{listStyle:"none"}}>
                    <li><Link className="text-decoration-none text-dark" to={'/'}> Home</Link></li>
                    <li><Link className="text-decoration-none text-dark" to={'./About'}>About</Link></li>
                    <li><Link className="text-decoration-none text-dark" to={'./Shop'}>Shop</Link></li>
                    <li><Link className="text-decoration-none text-dark" to={'./Reviews'}>Reviews</Link></li>
                    <li><Link className="text-decoration-none text-dark" to={'./Contact'}>Contact</Link></li>
                </ul>
                <div className="d-flex justify-content-around col-2 col-sm-4 my-auto ">
                    <div className="ps-5">
                        <img src="../public/search.png" alt="" />
                    </div>
                    <div>
                        <img src="../public/heart.png" alt="" />
                    </div>
                    <div>
                        <img src="../public/cart.png" alt="" />
                    </div>
                </div>
                <div className="col-sm-4">
                   <button type="button" className="navhb">
                    <img src="../public/hamburger.png" alt="" />
                    </button>
                    </div>
                <div>
                    
                </div>
                </div>
            </nav>
        </div>
    )
}
export default Navigation