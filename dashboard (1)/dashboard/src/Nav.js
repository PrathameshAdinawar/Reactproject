import React from "react";
import Off1 from "./Off1";



export default function Nav(){
    return(
    <>
    <section className="container-fluide p-3  shadow bg-light">
        <div>
        <nav className="container d-flex justify-content-between">
            <div className="d-lg-none"> <Off1/></div>
            <div className="d-none d-lg-block" >
                <h5 className="fw-bold">Siddhesh.</h5>
            </div>
            <div className="d-flex justify-content-between">
          <div>
          <div class="dropdown">
      
      <button class="btn  dropdown-toggle" type="button" data-bs-toggle="dropdown">
      <a href=""><i class="fa-solid fa-flag-usa text-black"></i></a> <span className="text-black">United State</span>
      </button>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Franch</a></li>
        <li><a class="dropdown-item" href="#">Germany</a></li>
        <li><a class="dropdown-item" href="#">Italy</a></li>
      </ul>
    </div>
          </div>

          <div>
          <div class="dropdown">
            <button class="btn  dropdown-toggle" type="button" data-bs-toggle="dropdown">
      <span className="text-black">USD</span>
      </button>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">USD</a></li>
        <li><a class="dropdown-item" href="#">Euro</a></li>
        <li><a class="dropdown-item" href="#">Jpy</a></li>
        <li><a class="dropdown-item" href="#">AMD</a></li>
      </ul>
    </div>
          </div>
          <div className="pe-3 ps-3 pt-2 d-none d-lg-block">
            <a href=""><i class="fa-solid fa-bell text-dark"></i></a>
          </div>
          <div className="pe-3 pt-2 d-none d-lg-block">
            <a href=""><i class="fa-solid fa-message text-dark"></i></a>
          </div>
          <div className="pe-3 pt-2 d-none d-lg-block">
            <a href=""><i class="fa-solid fa-gear text-dark"></i></a>
          </div>
          <div className="pt-1">
            {/* <a href=""><i class="fa-solid fa-user text-dark fs-3"></i></a> */}
            <img src="./image/capture2.png" />
           </div>
            </div>
            </nav>
        </div>
    </section>
    
    
    </>

    )
}