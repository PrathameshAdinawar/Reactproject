const Footr = (props) => {

    const d8 = props.d8

    return (
        <section>
            {
                d8.map((x) => {

                    return (
                        <>
                            <div className="p-4"></div>
                            <div className="container col-md-8 pb-5">
                                <div>
                                    <p className="text-center">{x.p}</p>
                                </div>
                                <div className="d-flex justify-content-evenly container ">
                                    <div><img src={x.fb} alt="" /></div>
                                    <div> <img src={x.gle} alt="" /></div>
                                    <div> <img src={x.tt} alt="" /></div>
                                    <div> <img src={x.insta} alt="" /></div>
                                </div>
                            </div>

                        </>
                    )
                })
            }
        </section>
    )
}

export default Footr