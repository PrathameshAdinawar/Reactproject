import Navbar from "./Navbar"
import Hero from "./Hero"
import Sec2 from "./Sec2"
import Sec3 from "./Sec3"
import Sec4 from"./Sec4"
import Sec5 from "./Sec5"
import Sec6 from "./Sec6"
import Footr from "./Footr"
function App() {
  const nav = [
    '../public/logo.jpg', 'Home', 'About', 'Courses', 'Placements', 'Contact'
  ]

  const hom = [{

    i1: "../car1.png",
    i2: "../public/car2.png",
    o1: "All Category",
    o2: "Sedan",
    o3: "Luxury Cars",
    o4: "Sports",
    o5: "Vans & Trucks",
    o6: "All",
    o7: "Electric",
    o8: "Gasoline",
    o9: "Hybrid",
    i3: "../public/right-arrow.png"
  }
  ]

  const s2d1 = [
    {
      h: "Easy Rental Services",
      para1: "Our Featured ",
      para2: "Vehicles",
      car1: "../public/peugeot.jpg",
      hh: "Sedans",
      para3: "PEUGEOT E-2018",
      p1: "Fuel Type",
      p2: "Gasoline",
      p3: "Wheels",
      p4: "18",
      p5: "Year",
      p6: "2017",
      p7: "Controls",
      p8: "Manual",
      img1: "../public/gas-station.png",
      img2: "../public/wheel.png",
      img3: "../public/steering-wheel.png",
      img4: "../public/gear.png",
      price: "$230",
      star: "../public/star.png",
      rating: "2.5"
    }
  ]

  const card = [
    {
      cars: "../public/dodge.jpg",
      hh: "Luxary Cars",
      para3: "Dodge Charget",
      p1: "Fuel Type",
      p2: "Hybrid",
      p3: "Wheels",
      p4: "18",
      p5: "Year",
      p6: "2014",
      p7: "Controls",
      p8: "Manual",
      img1: "../public/gas-station.png",
      img2: "../public/wheel.png",
      img3: "../public/steering-wheel.png",
      img4: "../public/gear.png",
      star: "../public/star.png",
      price: "$220",
      rating: "3"
    },
    {
      cars: "../public/volkswagen.jpg",
      hh: "Sports",
      para3: "Volkswagen ID.4",
      p1: "Fuel Type",
      p2: "Hybrid",
      p3: "Wheels",
      p4: "16",
      p5: "Year",
      p6: "2012",
      p7: "Controls",
      p8: "Automated",
      img1: "../public/gas-station.png",
      img2: "../public/wheel.png",
      img3: "../public/steering-wheel.png",
      img4: "../public/gear.png",
      star: "../public/star.png",
      price: "$170",
      rating: "4"
    },
    {
      cars: "../public/chevrolet.jpg",
      hh: "Sports",
      para3: "Chevrolet corvette Z06",
      p1: "Fuel Type",
      p2: "Electric",
      p3: "Wheels",
      p4: "20",
      p5: "Year",
      p6: "2022",
      p7: "Controls",
      p8: "Manual",
      img1: "../public/gas-station.png",
      img2: "../public/wheel.png",
      img3: "../public/steering-wheel.png",
      img4: "../public/gear.png",
      star: "../public/star.png",
      price: "$170",
      rating: "1"
    },
    {
      cars: "../public/ferrari.jpg",
      hh: "Sedans",
      para3: "2023 Ferrari Purosangue",
      p1: "Fuel Type",
      p2: "Electric",
      p3: "Wheels",
      p4: "20",
      p5: "Year",
      p6: "2022",
      p7: "Controls",
      p8: "Manual",
      img1: "../public/gas-station.png",
      img2: "../public/wheel.png",
      img3: "../public/steering-wheel.png",
      img4: "../public/gear.png",
      star: "../public/star.png",
      price: "$170",
      rating: "1"
    }
  ]

  const logos = [
    {
      img: "../public/b1.jpg",
      h2: "HONDA"
    },
    {
      img: "../public/lexus.jpg",
      h2: "LEXUS"
    },
    {
      img: "../public/toyota.jpg",
      h2: "TOYOTA"
    },
    {
      img: "../public/porshe.jpg",
      h2: "PORSHE"
    },
    {
      img: "../public/BMW.jpg",
      h2: "BMW"
    },
    {
      img: "../public/MERCEDES.jpg",
      h2: "MERCEDES"
    }
  ]

  const gq=[
    {
    img1:"../public/group1.jpg",
    img2:"../public/group2.jpg",
    p1:"Easy Car Rental Services",
    p2:"Cursus ullamcorper ultricies amet imperdiet amet risus volutpat autms. Nibh iaculis ut nam libero tellus sem interdum. Aed donec diam suspendisse. Sit vitae non tellus aliquam.",
    chk:"../public/checkmark.png",
    p3:"Malesuada enim sed mauris faucibus",
    p4:"Fermentum justo eros magnis turpis integer",
    p5:"Neque urna mattis ipsum consequat maecenas",
    p6:"VIEW ALL LISTINGS",
    rw:"../public/right-arrow.png"
  }
  ]
  
  const rent=[
    {
      bgimg:"../public/featured.jpg",
      p1:"Easy Car Rental Services",
      p2:"Cursus ullamcorper ultricies amet imperdiet amet risus volutpat autms. Nibh iaculis ut nam libero tellus sem interdum. Aed donec diam suspendisse. Sit vitae non tellus aliquam.",
      p3:"Malesuada enim sed mauris faucibus",
      p4:"Fermentum justo eros magnis turpis integer",
      p5:"Neque urna mattis ipsum consequat maecenas",
      p6:"VIEW ALL LISTINGS",
      rw:"../public/right-arrow.png",
      chk:"../public/checkgrn.png"
    }
  ]
  
  const cont=[
    {
      h:"Contact Us",
      p1:"11935 Fairview St, El Monte, CA 91732",
      p2:"+1 (300) 490 5008",
      p3:"support@domain.com",
      map:"../public/map.png",
      call:"../public/call.png",
      mail:"../public/mail.png"
    }
  ]

  const ft=[
    {
      p:"© 2024 Renity Rental. All Rights Reserved. Terms & Conditions",
      fb:"./public/facebook.png",
      gle:"../public/gogle.png",
      tt:"../public/twitter.png",
      insta:"../public/insta.png"
    }
  ]

  return (
    <>
      <Navbar navi={nav} />
      <Hero homi={hom} />
      <Sec2 d1={s2d1} d2={card} />
      <Sec3 d3={logos} />
      <Sec4 d5={gq}/>
      <Sec5 d6={rent}/>
      <Sec6 d7={cont}/>
      <Footr d8={ft}/>
    </>
  )
}

export default App
