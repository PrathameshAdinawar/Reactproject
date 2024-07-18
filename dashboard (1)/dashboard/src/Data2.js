import React from "react";




export default function Data2(){
    return(

        <>
        <section className="shadow mt-5 data-sec">
            <div className="container">
               <div className="row p-2">
                <div className="col-8">
                 <h2>$5,245.00</h2>
                 <div className="d-flex">
                    <div className="pe-2">
                        <h5 className="data2">+</h5>
                        <p className="data2"> 3.5%</p>
                    </div>
                    <div>
                        <p className="text-secondary">Total Visit</p>
                    </div>
                 </div>
                </div>
                <div className="col-4 ">
                  <div className="pt-5 pe-2">
                  {/* <h3 className="data2">34.4%</h3> */}
                  <div class="chart2" data-percent="34.4">
                           <div class="wrapper2">
                              <span className='data2'>34.4%</span>
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