import React from "react";




export default function Data3(){
    return(

        <>
        <section className="shadow mt-5 data-sec">
            <div className="container">
               <div className="row p-2">
                <div className="col-8">
                 <h2>$10,245.00</h2>
                 <div className="d-flex">
                    <div className="pe-2">
                        <h5 className="text-success">+</h5>
                        <p className="text-success"> 3.5%</p>
                    </div>
                    <div>
                        <p className="text-secondary">Total Click</p>
                    </div>
                 </div>
                </div>
                <div className="col-4 ">
                  <div className="pt-5 pe-2">
                  {/* <h3 className="text-success">54.2%</h3> */}
                  <div class="chart3" data-percent="54.2">
                           <div class="wrapper3">
                              <span className='text-success'>54.2%</span>
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