import React from "react";




export default function Data4(){
    return(

        <>
        <section className="shadow mt-5 data-sec">
            <div className="container">
               <div className="row p-2">
                <div className="col-8">
                 <h2>$80,245.00</h2>
                 <div className="d-flex">
                    <div className="pe-2">
                        <h5 className="data4">+</h5>
                        <p className="data4"> 3.5%</p>
                    </div>
                    <div>
                        <p className="text-secondary">Insprations</p>
                    </div>
                 </div>
                </div>
                <div className="col-4 ">
                  <div className="pt-5 pe-2">
                  {/* <h3 className="data4">77.5%</h3> */}
                  <div class="chart4" data-percent="77.5">
                           <div class="wrapper4">
                              <span className='data4'>77.5%</span>
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