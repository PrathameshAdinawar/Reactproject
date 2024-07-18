const Sec4 =(props)=>{
    
    const d5=props.d5;
    
    return(
        <div>
            {
                d5.map(function(x){
                    
                    return(
                        <>
                        <div className="w-100 container pt-5 mt-5 p-4 d-md-flex justify-content-center">
                            <div className="sec4bg w-100">    
                                 <img src={x.img1} alt="" className="img2 "/>
                            </div>
                           
                        </div>
                        
                        <div className="container pt-5">
                            <div className="container">
                                <p className="h sec3h pt-5">{x.p1}</p>
                                <p className="fonthero sec4font pt-4">Good Quality And <span className="red3">Affordable</span> Price</p>
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
                                <div className="pb-4 ">
                                <p className=" sec4p2">{x.p5}</p></div>
                                </div>
                                
                                <div className="d-flex justify-content-center d-md-block border-top pt-5 col-lg-12">
                                <button className="sec4btn col-lg-5">
                                    <span><img src={x.rw} alt="" className="sec4arrow p-2"/></span>
                                    <span className="sec4p2 fw-bold">{x.p6}</span>
                                </button>
                                </div>
                            </div>
                        </div>
                        </>
                    )
                })
            }
        </div>
    )
}

export default Sec4