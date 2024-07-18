import React from "react";





export default function Off1(){

    return(
        <>
        <div className="">
        <button class="btn btn-outline-dark" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"><span><i class="fa-solid fa-bars text-dark"></i></span></button>

<div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
  <div class="offcanvas-header">
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
  <div className="">
  <img src="./image/capture.png" />
         </div>
         <hr/>
                  
     <div class="dropdown mt-5">
      
  <button class="btn  dropdown-toggle" type="button" data-bs-toggle="dropdown">
  <a href=""><i class="fa-brands fa-microsoft text-info"></i></a> <span className="text-info">Dashboard</span>
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Dashboard Sells</a></li>
    <li><a class="dropdown-item" href="#">Dashboard Analytics</a></li>
    <li><a class="dropdown-item" href="#">Dashboard Sass</a></li>
  </ul>
</div>

<div className="ps-3">
  <p>Staticstic</p>
</div>
<div className="d-flex ps-3">
<a href=""><i class="fa-regular fa-comment text-dark"></i></a>
  <p className="ps-2">Inbox</p>
</div>

<div class="dropdown">
      
  <button class="btn  dropdown-toggle" type="button" data-bs-toggle="dropdown">
  <a href=""><i class="fa-solid fa-mobile-screen-button text-dark"></i></a> <span className="text-dark">Apps</span>
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Email</a></li>
    <li><a class="dropdown-item" href="#">To do-list</a></li>
    <li><a class="dropdown-item" href="#">Integrations</a></li>
  </ul>
</div>

<div class="dropdown">
      
  <button class="btn  dropdown-toggle" type="button" data-bs-toggle="dropdown">
  <a href=""><i class="fa-solid fa-file-lines text-dark"></i></a> <span className="text-dark">Pages</span>
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Pricing</a></li>
    <li><a class="dropdown-item" href="#">Teams</a></li>
    <li><a class="dropdown-item" href="#">Gallery</a></li>
    <li><a class="dropdown-item" href="#">Faq</a></li>
    <li><a class="dropdown-item" href="#">Calendar</a></li>
    <li><a class="dropdown-item" href="#">Error Page</a></li>
  </ul>
</div>

<div className="">
<div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
        Authur Pages
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
       <p>Sign in</p>
       <p>Sign up</p>
       <p>Forget Password</p>
       <p>Confirm Password</p>
       <p>OTP Verificaiton</p>
      </div>
    </div>
  </div>
  
</div>
</div>

<div className="d-flex pt-4">
<a href=""><i class="fa-regular fa-comment text-dark"></i></a>
  <p className="ps-2">Transaction</p>
</div>

<div className="d-flex">
<a href=""><i class="fa-solid fa-bell text-dark"></i></a>
  <p className="ps-2">Notification</p>
</div>

<div className="d-flex">
<a href=""><i class="fa-solid fa-user text-dark"></i></a>
  <p className="ps-2">User</p>
</div>

<div className="d-flex">
<a href=""><i class="fa-solid fa-stopwatch text-dark"></i></a>
  <p className="ps-2">History</p>
</div>
 
  <hr/>
  <div className="d-flex">
<a href=""><i class="fa-solid fa-user text-dark"></i></a>
  <p className="ps-2">Profile</p>
</div>

<div className="d-flex">
<a href=""><i class="fa-solid fa-gear text-dark"></i></a>
  <p className="ps-2">Settings</p>
</div>

  </div>
</div>
        </div>
        
        
        </>
    )
}