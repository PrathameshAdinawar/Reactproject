import { Link } from "react-router-dom"

const Navigation = () => {

    return (
        <div>
            <nav className="navbar w-100 " style={{ height: "100px" }}>
                <div className="d-flex justify-content-start h-100 container ">
                    <div className="col-3 col-md-6 col-lg-2 d-flex justify-content-center my-auto mx-auto ">
                        <img src="./logo.png" alt="" className="" />
                    </div>
                    <ul className="d-lg-flex d-none justify-content-around col-md-8 col-lg-7 fs-4 list-style-none text-decoration-none my-auto" style={{ listStyle: "none" }}>
                        <li><Link className="text-decoration-none text-dark" to={'/'}> Home</Link></li>
                        <li><Link className="text-decoration-none text-dark" to={'./About'}>About</Link></li>
                        <li><Link className="text-decoration-none text-dark" to={'./Shop'}>Shop</Link></li>
                        <li><Link className="text-decoration-none text-dark" to={'./Reviews'}>Reviews</Link></li>
                        <li><Link className="text-decoration-none text-dark" to={'./Contact'}>Contact</Link></li>
                    </ul>
                    <div className="d-flex justify-content-evenly col-9 col-md-6 my-auto col-lg-3">
                        <div className="ps-5">
                            <img src="./search.png" alt="" />
                        </div>
                        <div>
                            <img src="./heart.png" alt="" />
                        </div>
                        <div>
                            <img src="./cart.png" alt="" />
                        </div>
                    
                        <div className="d-lg-none ps-2">
                            <button type="button" className="navhb ">
                                <img src="./hamburger.png" alt="" />
                            </button>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Navigation