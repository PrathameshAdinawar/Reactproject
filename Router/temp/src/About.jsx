const About = (props) => {
    const d1 = props.da1;
    return (
        <div>

        <div className="w-100">
            <div className="aboutus  w-100 col-md-12">
                <div className="position-absolute about container">
                    <h1 className="ablgus ps-5"># ABOUT US</h1>
                </div>
            </div>
            <div className="abgrids container d-md-flex  w-100 gap-md-3">
                <div className="abgrid1 col-md-6">
                </div>

                <div className="col-md-6">
                    <div className="abgrid1 abg2 ">
                    </div>

                    <div className="abgrid1 abg3">
                    </div>
                </div>
            </div>

            <div className="container mt-5 w-100">
                <h1 className="homeh2 text-center">Food Features</h1>
                <div className="d-lg-flex justify-content-around col-lg-12">
                <div className="abgrid1 abgrid4 col-lg-6">
                </div>
                <div className="mt-4 col-lg-6 mt-lg-5">
                    <div className="">
                        <div className="d-flex justify-content-around w-100 container">
                            <div className="col-2 col-md-1 col-lg-1">
                                <img src="./paw.png" alt="" />
                            </div>
                            <div className="col-md-11 col-lg-11">
                                <h2 className="abpaw homeh2">Human-Grade Ingredients</h2>
                            </div>
                        </div>
                        <div className="ps-5">
                            <p className="abp1">Aliquam sit amet cursus mauris. Sed vitae mattis ipsum. Vestibulum enim nulla, sollicitudin ac hendrerit nec, tempor quis nisl. Sed vestibulum nulla elementum auctor tincidunt.</p>
                        </div>
                    </div>

                    <div className="w-100">
                        <div className="d-flex justify-content-around w-100 container">
                            <div className="col-2 col-md-1">
                                <img src="./cutter.png" alt="" />
                            </div>
                            <div className="col-10 col-md-11">
                                <h2 className="abpaw homeh2 text">Easy To Digest</h2>
                            </div>
                        </div>
                        <div className=" ps-5 ">
                            <p className="abp1">Aliquam sit amet cursus mauris. Sed vitae mattis ipsum. Vestibulum enim nulla, sollicitudin ac hendrerit nec, tempor quis nisl. Sed vestibulum nulla elementum auctor tincidunt.</p>
                        </div>
                    </div>

                    <div className="w-100">
                        <div className="d-flex justify-content-around w-100 container">
                            <div className="col-2 col-md-1">
                                <img src="./cube.png" alt="" />
                            </div>
                            <div className="col-10 col-md-11">
                                <h2 className="abpaw homeh2">Delicious Taste</h2>
                            </div>
                        </div>
                        <div className=" ps-5 ">
                            <p className="abp1">Aliquam sit amet cursus mauris. Sed vitae mattis ipsum. Vestibulum enim nulla, sollicitudin ac hendrerit nec, tempor quis nisl. Sed vestibulum nulla elementum auctor tincidunt.</p>
                        </div>
                    </div>

                </div>
                </div>

                <div className="mt-5 w-100 container">
                    <h2 className="homeh2 text-center mb-4">Our Team</h2>
                    <div className="d-md-flex justify-content-around"> {
                        d1.map((x) => {
                            return (
                                <>
                                    <div className="w-100 container">
                                        <div>
                                            <img src={x.img} alt="" className="w-100 namimg " />
                                        </div>
                                        <div className="mt-3">
                                            <h2 className="homeh2 name text-center">{x.name}</h2>
                                            <p className="abp1 text-center fw-medium">{x.stat}</p>
                                        </div>
                                    </div>

                                </>)
                        })
                    }</div>

                </div>


            </div>
            <div className="ftbg">
                <h2 className="homeh2 pt-5 text-center mb-4 abpaw">Popular Brands</h2>
                <div className="d-flex justify-content-center justify-content-md-around p-3 p-xl-5">
                    <img src="./brlog01.png" alt="" className="brlog1 col-md-3 col-8" />
                    <img src="./brlog02.png" alt="" className="brlog1 col-md-3 d-none d-md-block" />
                    <img src="./brlog03.png" alt="" className="brlog1 col-md-3 d-none d-md-block" />
                    <img src="./brlog04.png" alt="" className="brlog1 col-md-3 d-none d-md-block" />
                    
                </div>
                
                <div className="wave  abblk "></div>
            </div>
            <div className="bgblk mt-5 pt-4">
                <div>
                    <div className="container d-md-flex justify-content-around">
                        <div col-2>
                            <img src="./footerlogo.png" alt="" />
                        </div>
                        <div className="ms-2 mt-4">
                            <input type="text" placeholder="Your Mail Here" className="ftp1 homeinpt" />
                            <button type="button" className="homebtn2 ms-2 ">Send</button>
                            <div className="my-auto mt-3">
                                <p className="ftp1 ">Join our list and get 15% off your first purchase!</p>
                            </div> </div>
                    </div>
                    <div className="  mt-5 d-md-flex justify-content-around mb-5 container">
                        <div className="d-flex justify-content-around  col-md-2  my-auto">
                            <div><img src="./twitter.png" alt="" /></div>
                            <div> <img src="./facebook.png" alt="" /></div>
                            <div><img src="./insta.png" alt="" /></div>
                            <div><img src="./youtube.png" alt="" /></div>
                        </div>
                        <div className="my-auto text-center mt-4 col-md-3 ">
                            <p className="ftp1">No: 58 A, East Madison Street,
                                Baltimore, MD, USA 4508</p></div>
                        <div className="my-auto text-center col-md-3">
                            <p className="ftp1">+000 123 456789</p>
                        </div>
                        <div className="my-auto text-center col-md-3" >
                            <p className="ftp1">info@example.com</p>
                        </div>


                    </div>
                    <div className=" d-flex justify-content-center my-auto p-3 border-top text-center">
                        <p className="ftp1 mx-auto my-auto">© 2024 dt Petty (password: buddha) Design Themes</p>
                    </div>
                </div>
            </div>
        </div>
        </div> )
}

export default About