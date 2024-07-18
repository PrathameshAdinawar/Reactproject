const Sec6 =(props)=>{
    
    const d7=props.d7
    
    return(
        <section>
            {
                d7.map((x)=>{
                    return(
                        <>
                        <div className="p-5"></div>
                        <div className=" d-flex justify-content-center">
                        <div className="">
                            <div className="col-md-12 ">
                                <h5 className="sec3h fonthero text-center">{x.h}</h5>
                               <div className="d-flex container col-12 ">
                                <div className="col-2 col-md-1 container"><img src={x.map} alt="" /></div>
                                <div className="col-10 container text-center"><p>{x.p1}</p></div>
                               </div>
                               
                               <div className="d-flex container col-12 ">
                                <div className="col-2 col-md-1 container"><img src={x.call} alt="" /></div>
                                <div className="col-10 container text-center"><p>{x.p2}</p></div>
                               </div>
                               
                               <div className="d-flex container col-12 pt-2">
                                <div className="col-2 col-md-1 container"><img src={x.mail} alt="" /></div>
                                <div className="col-10  container text-center"><p>{x.p3}</p></div>
                               </div>
                            </div>
                        </div></div>
                        </>
                    )
                })
            }
        </section>
    )
}

export default Sec6