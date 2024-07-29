const Contact = () => {
    return (
        <div>
            <div>
                <div className="aboutus  w-100 col-md-12">
                    <div className="position-absolute about container">
                        <h1 className="ablgus ps-md-5 text-center text-md-start"># CONTACT US</h1>
                    </div>
                </div>

                <div className="container mt-5 ps-3 pe-3">
                    
                    <div className="d-xl-flex justify-content-evenly">

                    <div className="d-md-flex col-md-12 justify-content-evenly col-xl-8">
                        <div className="cards col-md-5 mt-md-5">
                            <div className="iconbck d-flex justify-content-center">
                                <img src="./call.png" alt="" className="p-3" />
                            </div>
                            <h3 className="ablgus pt-3">Phone</h3>
                            <p className="abp1">0000 - 123 - 456789</p>
                            <p className="abp1">0000 - 123 - 456789</p>
                        </div>

                        <div className="cards mt-5  col-md-5">
                            <div className="iconbck d-flex justify-content-center">
                                <img src="./mail.png" alt="" className="p-3" />
                            </div>
                            <h3 className="ablgus pt-3">Email</h3>
                            <p className="abp1">info@example.com</p>
                            <p className="abp1">support@example.com</p>
                        </div>
                    </div>

                    <div className="d-md-flex justify-content-center col-xl-4">
                        <div className="cards mt-5 col-md-6 col-xl-12">
                            <div className="iconbck d-flex justify-content-center">
                                <img src="./nav.png" alt="" className="p-3" />
                            </div>
                            <h3 className="ablgus pt-3">Address</h3>
                            <p className="abp1">No: 58 A, East Madison Street,
                                Baltimore, MD, USA 4508</p>
                        </div>
                    </div>
                    
                    </div>

                    <div className="d-md-flex justify-content-evenly">
                        <div className="map">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d155455.61262017404!2d-1.8636314999999999!3d52.497349150000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870942d1b417173%3A0xca81fef0aeee7998!2sBirmingham%2C%20UK!5e0!3m2!1sen!2sin!4v1660132205803!5m2!1sen!2sin" frameborder="0"></iframe>
                        </div>
                        <div className="col-md-6">
                            <form action="form" className="form">
                                <h3 className="ablgus fh3">Contact Form</h3>

                                <input type="text" placeholder="Name" className="coname abp1 ps-3 mt-4" />

                                <input type="mail" placeholder="Email" className="coname abp1 ps-3 mt-4" />

                                <input type="text" placeholder="Phone" className="coname abp1 ps-3 mt-4" />

                                <textarea name="Message" id=""
                                    placeholder="Message" className="abp1 coname ps-3 pt-3 mt-4"></textarea>
                            </form>

                            <div className="d-flex justify-content-center mt-3">
                                <button type="button" className="blogbtn text-light">SEND</button>
                            </div>
                        </div>
                    </div>
                </div>
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
    )

}

export default Contact