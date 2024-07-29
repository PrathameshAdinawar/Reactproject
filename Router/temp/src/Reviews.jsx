const Reviews = () => {

  return (
    <div>
      <div>
        <div className="happycus">
          <h1 className="ablgus text-center">Happy Customer</h1>
        </div>
        <div className="mt-5 mt-lg-3">

          <div id="carouselExampleInterval" class="carousel carousel-dark slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active" data-bs-interval="3000">
                <div className="container d-lg-flex">
                  <div className="d-flex justify-content-center col-lg-5 col-xl-4">
                    <img src="./testi01.jpg" alt="" className="testi p-lg-5" />
                  </div>

                  <div className="p-4">
                    <p className="abp1 text-center pt-lg-5 mt-lg-5">Ultricies leo integer malesuada nunc vel risus. Scelerisque eu ultrices vitae auctor. Fermentum leo vel orci porta non pulvinar. Tincidunt vitae semper quis lectus nulla.</p>
                    <p className="abp1 text-center p-4">Jenifer Ferchol-CEO</p>
                  </div>
                </div>
              </div>
              <div class="carousel-item" data-bs-interval="3000">
                <div className="container d-flex">
                  <div className="d-flex justify-content-center col-lg-5 col-xl-4">
                    <img src="./testi02.jpg" alt="" className="testi p-lg-5" />
                  </div>

                  <div className="p-4">
                    <p className="abp1 text-center pt-lg-5 mt-lg-5">Ultricies leo integer malesuada nunc vel risus. Scelerisque eu ultrices vitae auctor. Fermentum leo vel orci porta non pulvinar. Tincidunt vitae semper quis lectus nulla.</p>
                    <p className="abp1 text-center p-4">Hendry-Trainer</p>
                  </div>
                </div>
              </div>
              <div class="carousel-item" data-bs-interval="3000">
                <div className="container d-flex">
                  <div className="d-flex justify-content-center col-lg-5 col-xl-4">
                    <img src="./testi03.jpg" alt="" className="testi p-lg-5" />
                  </div>

                  <div className="p-4">
                    <p className="abp1 text-center pt-lg-5 mt-lg-5">Ultricies leo integer malesuada nunc vel risus. Scelerisque eu ultrices vitae auctor. Fermentum leo vel orci porta non pulvinar. Tincidunt vitae semper quis lectus nulla.</p>
                    <p className="abp1 text-center p-4">Jenifer Leila Peril-Actress</p>
                  </div>
                </div>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>

        </div>

        <div className="nbsec pt-5">

          <div className="pt-4">
            <h1 className="ablgus text-center news">Latest News & Blogs</h1>
          </div>

          <div className="mt-5 col-md-12 d-lg-flex">

            <div className="d-md-flex col-lg-8">
              <div className="p-4">
                <img src="./Background/blog03.jpg" alt="" className="blog w-100" />
                <div className="date">
                  <p className="abp1 p-2 text-light">May 24, 2022</p>
                </div>
                <div className="">
                  <h2 className="ablgus bh2">Pet's Food Pack give them Healthy Growth</h2>
                  <p className="abp1">Yrese aenean ut eros et nisl sagittis vestibulum. Nullam nulla eros, ultricies sit amet, nonummy id, imperdiet feugiat, pede. Sed lectus. Donec mol...</p>
                </div>
                <div>
                  <button className="text-center text-light abp1 blogbtn" type="button">READ MORE</button>
                </div>
              </div>

              <div className="p-4">
                <img src="./Background/blog02.jpg" alt="" className="blog w-100" />
                <div className="date">
                  <p className="abp1 p-2 text-light">May 24, 2022</p>
                </div>
                <div className="">
                  <h2 className="ablgus bh2">The Newest Incredible Pet Animals with Affection</h2>
                  <p className="abp1">Yrese aenean ut eros et nisl sagittis vestibulum. Nullam nulla eros, ultricies sit amet, nonummy id, imperdiet feugiat, pede. Sed lectus. Donec mol...</p>
                </div>
                <div>
                  <button className="text-center text-light abp1 blogbtn" type="button">READ MORE</button>
                </div>
              </div>
            </div>

            <div className="p-4 col-md-6 col-lg-4">
              <img src="./Background/blog01.jpg" alt="" className="blog w-100" />
              <div className="date">
                <p className="abp1 p-2 text-light">May 24, 2022</p>
              </div>
              <div className="">
                <h2 className="ablgus bh2">Full Enjoyment of Healthy Pet Animals with Pleasure</h2>
                <p className="abp1">Yrese aenean ut eros et nisl sagittis vestibulum. Nullam nulla eros, ultricies sit amet, nonummy id, imperdiet feugiat, pede. Sed lectus. Donec mol...</p>
              </div>
              <div>
                <button className="text-center text-light abp1 blogbtn" type="button">READ MORE</button>
              </div>
            </div>

          </div>

          <div className="wave  abblk "></div>
        </div>
      </div>
      <div className="bgblk">
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
    </div>)
}

export default Reviews