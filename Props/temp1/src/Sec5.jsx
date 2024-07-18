const Sec5 = (props)=>{
    
    const d6=props.d6;
    
    return(
        <div className="container">
            {
                d6.map(function(x){
                    return(
                        <>
                        <div className="pd"></div>
                        <div className="Sec5  ">
                            <div className="Sec5img1 ">
                            </div>
                            <div className="Sec5img2">     
                            </div>
                        </div>
                            
                            <div className="container">
                            <p className="h sec3h">{x.p1}</p>
                            <p className="fonthero sec4font pt-4">Rent Car <span className="green">With A Driver</span> To Transport To Any Destination</p>
                            <p className="sec4p2 pe-4">{x.p2}</p>
                                
                                <div className="d-flex">
                                    <div className="col-2 col-md-1">
                                <img src={x.chk} alt=""/></div>
                                <div>
                                <p className=" sec4p2 ">{x.p3}</p></div>
                                </div>
                                
                                <div className="d-flex">
                                    <div className="col-2 col-md-1">
                                <img src={x.chk} alt=""/></div>
                                <div>
                                <p className=" sec4p2 ">{x.p4}</p></div>
                                </div>
                                
                                <div className="d-flex">
                                    <div className="col-2 col-md-1">
                                <img src={x.chk} alt=""/></div>
                                <div className="pb-4">
                                <p className=" sec4p2">{x.p5}</p></div>
                                </div>
                                
                                <div className="d-flex justify-content-center d-md-block border-top pt-5 col-lg-12 ">
                                <button className="sec4btn sec5btn col-lg-5">
                                    <span><img src={x.rw} alt="" className="sec4arrow sec5arrow  p-2"/></span>
                                    <span className="sec4p2 fw-bold">{x.p6}</span>
                                </button>
                                </div>
                            </div>
                        </>
                    )
                })
            }
        </div>
    )
}

export default Sec5