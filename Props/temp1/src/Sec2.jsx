const Sec2 = (props) => {
    const d1 = props.d1;
    const d2 = props.d2;
    return (
        <section>
            {
                d1.map(function (x) {
                    return (
                        <>
                            <div>
                                <h3 className="h text-center pt-4">{x.h}</h3>
                            </div>
                            <div className="pt-2">
                                <p className="para1 text-center">{x.para1}
                                    <strong className="red1">{x.para2}</strong>
                                </p>
                            </div>
                            <div className="col-md-12 d-flex justify-content-center ">
                                <div id="carouselExampleCaptions" class="carousel slide col-md-8">
                                    <div class="carousel-indicators">
                                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 4"></button>
                                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 5"></button>

                                    </div>
                                    <div class="carousel-inner">

                                        <div class="carousel-item active ">
                                            <div className="container">
                                                <div className="carousel1">
                                                    <div>
                                                        <img src={x.car1} alt="" className="w-100" />
                                                    </div>
                                                    <div class="carousel1con mt-3 w-100">
                                                        <div className="m-3 pt-3 pb-3 border-bottom">
                                                            <h3 className="h ">{x.hh}</h3>
                                                            <h3 className="para1 para3">{x.para3}</h3>
                                                        </div>
                                                        <div className="border-bottom m-3 pt-3 w-100 d-md-flex justify-content-center">
                                                            <div className="d-flex ">
                                                                <div className="d-flex ps-2">
                                                                    <div><img src={x.img1} alt="" /></div>
                                                                    <div className="h-75 ps-3">
                                                                        <p className="p1">{x.p1}</p>
                                                                        <p className="p2">{x.p2}</p>
                                                                    </div>
                                                                </div>
                                                                <div className="d-flex ps-4">
                                                                    <div><img src={x.img2} alt="" /></div>
                                                                    <div className="h-75 ps-3">
                                                                        <p className="p1">{x.p3}</p>
                                                                        <p className="p2">{x.p4}</p>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                            <div className="d-flex">
                                                                <div className="d-flex ps-2">
                                                                    <div><img src={x.img3} alt="" /></div>
                                                                    <div className="h-75 ps-3">
                                                                        <p className="p1">{x.p5}</p>
                                                                        <p className="p2">{x.p6}</p>
                                                                    </div>
                                                                </div>
                                                                <div className="d-flex ps-5">
                                                                    <div><img src={x.img4} alt="" /></div>
                                                                    <div className="h-75 ps-3">
                                                                        <p className="p1">{x.p7}</p>
                                                                        <p className="p2">{x.p8}</p>
                                                                    </div>
                                                                </div>

                                                            </div></div>
                                                        <div>
                                                            <div className="d-flex justify-content-between ">
                                                                <div className="">
                                                                    <p className="red2 p-3">{x.price}</p></div>
                                                                <div className="d-flex justify-content-evenly pe-4" style={{ height: "40px", width: "60px" }}>
                                                                    <div className="w-100 pt-2 pe-1 backg ps-1">
                                                                        <img src={x.star} alt="" /></div>
                                                                    <div className="backg pe-1">
                                                                        <p className="pt-2">{x.rating}</p></div></div>
                                                            </div>
                                                        </div>
                                                    </div></div></div>
                                        </div>
                                        
                                            {
                                                d2.map((x2)=>{
                                                    return(<>
                                                     <div class="carousel-item">
                                                                <div className="container">
                                                                    <div className="carousel1">
                                                                        <div>
                                                                            <img src={x2.cars} alt="" className="w-100" />
                                                                        </div>
                                                                        <div class="carousel1con mt-3 ">
                                                                            <div className="m-3 pt-3 pb-3 border-bottom">
                                                                                <h3 className="h ">{x2.hh}</h3>
                                                                                <h3 className="para1 para3">{x2.para3}</h3>
                                                                            </div>
                                                                            <div className="border-bottom m-3 pt-3">
                                                                                <div className="d-flex ">
                                                                                    <div className="d-flex ps-2">
                                                                                        <div><img src={x2.img1} alt="" /></div>
                                                                                        <div className="h-75 ps-3">
                                                                                            <p className="p1">{x2.p1}</p>
                                                                                            <p className="p2">{x2.p2}</p>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="d-flex ps-4">
                                                                                        <div><img src={x2.img2} alt="" /></div>
                                                                                        <div className="h-75 ps-3">
                                                                                            <p className="p1">{x2.p3}</p>
                                                                                            <p className="p2">{x2.p4}</p>
                                                                                        </div>
                                                                                    </div>

                                                                                </div>
                                                                                <div className="d-flex">
                                                                                    <div className="d-flex ps-2">
                                                                                        <div><img src={x2.img3} alt="" /></div>
                                                                                        <div className="h-75 ps-3">
                                                                                            <p className="p1">{x2.p5}</p>
                                                                                            <p className="p2">{x2.p6}</p>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="d-flex ps-5">
                                                                                        <div><img src={x2.img4} alt="" /></div>
                                                                                        <div className="h-75 ps-3">
                                                                                            <p className="p1">{x2.p7}</p>
                                                                                            <p className="p2">{x2.p8}</p>
                                                                                        </div>
                                                                                    </div>

                                                                                </div></div>
                                                                            <div>
                                                                                <div className="d-flex justify-content-between ">
                                                                                    <div className="">
                                                                                        <p className="red2 p-3">{x2.price}</p></div>
                                                                                    <div className="d-flex justify-content-evenly pe-4" style={{ height: "40px", width: "60px" }}>
                                                                                        <div className="w-100 pt-2 pe-1 backg ps-1">
                                                                                            <img src={x2.star} alt="" /></div>
                                                                                        <div className="backg pe-1">
                                                                                            <p className="pt-2">{x2.rating}</p></div></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                    </>)
                                                })
                                            }
                                    </div>
                                    <button class="carousel-control-prev pt-5" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon bg-dark " aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next pt-5" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                        <span class="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>
                        </>
                    )
                })
            }
        </section>
    )
}

export default Sec2;