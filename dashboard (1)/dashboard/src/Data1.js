import React from "react";




export default function Data1(){
    return(

        <>
        <section className="shadow mt-5 data-sec">
            <div className="container">
               <div className="row p-2">
                <div className="col-8">
                 <h2>$7,245.00</h2>
                 <div className="d-flex">
                    <div className="pe-2">
                        <h5 className="text-info">+</h5>
                        <p className="text-info"> 3.5%</p>
                    </div>
                    <div>
                        <p className="text-secondary">Total Sells</p>
                    </div>
                 </div>
                </div>
                <div className="col-4 ">
                  <div className="pt-5 pe-2">
                  {/* <h3 className="text-info">11.5%</h3> */}
                  <div class="chart" data-percent="11.5">
                           <div class="wrapper">
                              <span className='text-info'>11.5%</span>
                        </div>
                           </div>
                  </div>
                </div>
                </div>  
                </div>
        </section>
        
        
        </>
    )
}