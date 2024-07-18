import Offcanvas from './Offcanvas';
import Nav from './Nav';
// import  Comp  from './Comp';

import './App.css';
import { Comp } from './Comp';
import { CompA } from './CompA';
import { CompB } from './CompB';
import Data1 from './Data1';
import Off1 from './Off1';
import Data2 from './Data2';
import Data3 from './Data3';
import Data4 from './Data4';
import Comp6 from './Comp6';
import { Comp7 } from './Comp7';
import CompD from './CompD'


function App() {
  return (
    <>

    <section className='main'>
    <div className='row'>
      <div className='col-lg-2 pg px-0'>

        <div className='d-none d-lg-block'><Offcanvas/></div>

      </div>
      <div className='col-lg-10 px-0 wrap'>
         <div>
          <Nav/>
         </div>
         <div className='container'>
         <div className='row'>

                 <div className='col-12 col-md-6 col-lg-3 px-0'><div className='container mb-2'><Data1/> </div></div>
                  <div className='col-12 col-md-6 col-lg-3 px-0'><div className='container mb-2'><Data2/></div></div>
                  <div className='col-12 col-md-6 col-lg-3 px-0'><div className='container mb-2'><Data3/></div></div>
                  <div className='col-12  col-md-6 col-lg-3 px-0'><div className='container mb-4'><Data4/></div></div>

          
             <div className='row'>
              <div className='col-12 col-lg-8'>
              <div className='container mb-4 app1'><Comp/></div>
              </div>
              <div className='col-12 col-lg-4'>
              <div className='container mb-4 app2'> <CompA/></div>
              </div>
             </div>
             <div className='row'>
              <div className='col-12 col-lg-7'>
              <div className='container mb-4 app3 '><CompB/></div>
              </div>
              <div className='col-12 col-lg-5'>
              <div className='container app1 '><CompD/></div>
              </div>
             </div>
             </div>
             </div>
             </div>
             </div>
            
           
      <div className='row'>
        <div className='col-12  col-md-7'>
        <div className='container mt-5 mb-4 app1'><Comp6/></div>
        </div>
        <div className='col-12 col-md-5'>
           <div className='container mt-2 mt-md-5 mb-4'>
           <Comp7/>
           </div>
        </div>
      </div>

    </section>
    
    </>
  );
}

export default App;
