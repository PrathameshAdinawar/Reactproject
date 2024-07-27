const Home = () => {
    return (<div>
        <div className="home">
            <div id="carouselExampleDark" class="carousel carousel-dark slide">
                <div class="carousel-indicators d-none">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="10000">

                        <div className="homesmbg1  d-md-none d-flex justify-content-center">
                            <div className="posism d-flex justify-content-center">
                                <div className="wid ">
                                    <h2 className="homeh2 smhh2 text-center ">Premiun Pet Foods</h2>
                                    <p className="homep1 text-center w-100">Sed elementum tempus egestas sed sed risus pretium</p>
                                    <div className="w-100  d-flex  justify-content-center mt-5">
                                        <button className="homebtn " type="button">Shop Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="Homebg1 d-none d-md-block">
                            <div className=" container posi">
                                <h2 className="homeh2 w-100 text-end ">Premiun Pet Foods</h2>
                                <p className="homep1 text-end w-100">Sed elementum tempus egestas sed sed risus pretium</p>
                                <div className="w-100  d-flex  justify-content-end mt-5">
                                    <button className="homebtn " type="button">Shop Now</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="carousel-item" data-bs-interval="2000">

                    <div className="homesmbg1 smbg2 d-md-none d-flex justify-content-center">
                            <div className="posism d-flex justify-content-center">
                                <div className="wid ">
                                    <h2 className="homeh2 smhh2 text-center ">Natural Pet Foods</h2>
                                    <p className="homep1 text-center w-100">Sed elementum tempus egestas sed sed risus pretium</p>
                                    <div className="w-100  d-flex  justify-content-center mt-5">
                                        <button className="homebtn " type="button">Shop Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="Homebg2 d-none d-md-block">
                            <div className="posi1">
                                <h2 className="homeh2  ">Natural Pet Foods</h2>
                                <p className="homep1 w-100">Sed elementum tempus egestas sed sed risus pretium</p>
                                <div className="w-100 mt-5">
                                    <button className="homebtn" type="button">Shop Now</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="carousel-item">

                    <div className="homesmbg1 smbg3 d-md-none d-flex justify-content-center">
                            <div className="posism d-flex justify-content-center">
                                <div className="wid ">
                                    <h2 className="homeh2 smhh2 text-center ">Natural Pet Foods</h2>
                                    <p className="homep1 text-center w-100">Sed elementum tempus egestas sed sed risus pretium</p>
                                    <div className="w-100  d-flex  justify-content-center mt-5">
                                        <button className="homebtn " type="button">Shop Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="Homebg3 d-none d-md-block">
                            <div className="posi1">
                                <h2 className="homeh2  ">Fresh Pet Foods</h2>
                                <p className="homep1 w-100">Sed elementum tempus egestas sed sed risus pretium</p>
                                <div className="w-100 mt-5">
                                    <button className="homebtn" type="button">Shop Now</button>
                                </div>
                            </div>
                        </div>
                    </div></div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

            <div className="homebg4 ">
                <div className="homebg5"></div>
                
                <div className="d-lg-flex  justify-content-around gap-5 container-md">

                    <div className="grid1 ">
                        <div className="ingrid position-absolute">
                            <h2 className="grid1h text-center">Nutritious Dog Food</h2>
                            <div className="w-100 mt-3 mx-auto d-flex justify-content-center">
                                <button className="homebtn" type="button">Shop Now</button>
                            </div></div>
                    </div>
                    <div className="grid2 grid1">
                        <div className="ingrid1 position-absolute">
                            <p className="ingrid1p text-center">Save Upto 30%</p>
                            <h2 className="grid1h text-center">Healthy Cat Food</h2>
                            <div className="w-100 mt-2 mx-auto d-flex justify-content-center">
                                <button className="homebtn" type="button">Shop Now</button>
                            </div></div>
                    </div>
                </div>
            </div>
        </div>

        <div className="wave homewave">
        </div>
        <div className="bgblk pt-4">
                <div>
                    <div className="container d-md-flex justify-content-around">
                        <div col-2>
                            <img src="./public/footerlogo.png" alt="" />
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
                            <div><img src="../public/twitter.png" alt="" /></div>
                            <div> <img src="../public/facebook.png" alt="" /></div>
                            <div><img src="../public/insta.png" alt="" /></div>
                            <div><img src="../public/youtube.png" alt="" /></div>
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
    )
}

export default Home