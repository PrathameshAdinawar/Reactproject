
// import '../node_modules/bootstrap-icons/icons/list'
// import './style.css'
export default function Navbar(props) {

    const items = props.navi;

    return (
        <div className="header position-fixed w-100">
            <nav className="navbar navbar-expand-lg p-3 w-100">
                <div className="w-100 ">
                    <div className="d-flex justify-content-between w-100">
                        <div className="align-self-center">
                    <button className="navbar-toggler ms-3 " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="text-center mx-auto">
                           
                            <img src="../public/hamburger.png" alt="" style={{height:"35px"}} />
                        </span>
                    </button>
                    </div>
                    <div className=" logosm d-lg-none">
                    <img src="../public/logo.jpg" alt="" style={{height:"60%"}}/></div>
                    </div>
                    <div className="collapse navbar-collapse r" id="navbarNav">
                        
                        <ul className="navbar-nav mx-auto w-100" style={{ listStyle: "none" }}>
                            <li className="nav-item w-50 d-none d-lg-block"><a href="" className="nav-link"><img src={items[0]} alt="" style={{ width: '30%' }} className="logo"/></a></li>
                            
                            <li className="nav-item align-self-center">
                                <a href="#" className="nav-link text-decoration-none fw-bold ms-3">{items[1]}</a>
                            </li>
                            <li className="nav-item align-self-center">
                                <a href="#" className="nav-link fw-bold ms-3">{items[2]}</a>
                            </li>
                            <li className="nav-item align-self-center">
                                <a href="#" className="nav-link fw-bold ms-3">{items[3]}</a>
                            </li>
                            <li className="nav-item align-self-center">
                                <a href="#" className="nav-link fw-bold ms-3">{items[4]}</a>
                            </li>
                            <li className="nav-item align-self-center">
                                <a href="#" className="nav-link fw-bold ms-3">{items[5]}</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}