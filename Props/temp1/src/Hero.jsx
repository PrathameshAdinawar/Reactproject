
const Home = (props) => {
    const hommee = props.homi;

    return (
        <div>
            {
                hommee.map(function (x) {
                    return (
                        <>
                            <div>
                                <div className="homesec ">

                                    <div className="herosec"></div>
                                    <p className="fonthero text-center">Rent Your</p>
                                    <p className="fonthero red text-center">Dream Car</p>
                                    <div id="carouselExampleSlidesOnly" class="carousel slide slider " data-bs-ride="carousel" style={{height:"150px"}}>
                                        <div class="carousel-inner ">

                                            <div class="carousel-item active" >
                                                <img src={x.i1} alt="" className="car" />
                                            </div>
                                            <div class="carousel-item">
                                                <img src={x.i2} alt="" className="car" />
                                            </div>

                                        </div>
                                    </div>

                                    <div className="p-md-5"></div>
                                    <div className="p-lg-5"></div>
                                    <div className="p-lg-5"></div>
                                    <div className="d-flex justify-content-center bkg pb-5 pt-md-5 ">
                                        <div className="selectcatery p-3 pt-5 col-md-5 col-lg-4">
                                            <div className="fontcrd w-100">
                                                <p>SELECT CATEGORY</p>
                                                <div class="custom-select align-self-center">
                                                    <select>
                                                        <option>{x.o1}</option>
                                                        <option>{x.o2}</option>
                                                        <option>{x.o3}</option>
                                                        <option>{x.o4}</option>
                                                        <option>{x.o5}</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="fontcrd w-100 pt-4">
                                                <p>SELECT CATEGORY</p>
                                                <div class="custom-select align-self-center">
                                                    <select>
                                                        <option>{x.o6}</option>
                                                        <option>{x.o7}</option>
                                                        <option>{x.o8}</option>
                                                        <option>{x.o9}</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="fontcrd w-100 pt-4">
                                                <p>DATE</p>
                                                <input type="date" className="align-self-center p-2 w-100" />
                                            </div>

                                            <div className=" pt-4  d-flex justify-content-center">
                                            <button type="button" className=" col-md-10 fmc_btn text-light d-flex justify-content-between">
                                           <span className=" arrow align-self-start"><img src={x.i3} alt="" className="pt-4 pe-3"/> </span> 
                                                    <span className="align-self-center pe-4">FIND MY CAR </span>
                                                </button>
                                            </div>
                                        </div>

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
export default Home;