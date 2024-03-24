
function SlideContent(props) {
    return (
        <div className="clientSlide row  m-2 p-3">

            <div className="col-11 d-flex" >

                <div className="avatarCircle mb-3 me-3">
                    <img src={props.img} alt="" className=" " />
                </div>

                <div className="pt-3">

                    <h5>{props.name}</h5>

                    <div className="d-flex stars">

                        {/* rated star */}
                        {[...Array(+props.stars)].map((e, i) => <i key={`star-${i}`} className="fa-solid fa-star"></i>)}

                        {/* not rated star */}
                        {[...Array(5 - +props.stars)].map((e, i) => <i key={`unrated-star-${i}`} className="fa-regular fa-star"></i>)}

                    </div>

                </div>

            </div>

            <div className="col-1">
                <i className="fa-solid fa-quote-right"></i>
            </div>

            <div className="col-12">
                <p>{props.message}</p>
            </div>

        </div>
    );
}

export default SlideContent;