const Sec3 = (props)=>{
    
    const d3=props.d3;
    const d4=props.d4
    return(
        
        <div className="homesec w-100 p-3 pt-5 d-lg-flex justify-content-around">{
            
        d3.map(function(x){
            
            return(
                <>
                <div className="d-flex justify-content-center pt-3">
                    <div className="">
                        <img src={x.img} alt=""/>
                        <h2 className="text-center h sec3h">{x.h2}</h2>
                    </div>
                </div>
                </>
            )
        })
        }</div>
    )
}

export default Sec3;