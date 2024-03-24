function Service(props) {
    return (
        <div className="col-12 col-md-4  ">

            <div className="service p-4 d-flex align-items-center flex-column">
                {
                    props.icon && <div className="icon mb-3"><img src={props.icon} alt="" /></div>
                }
                {
                    props.title && <h4>{props.title}</h4>
                }
                <p className="text-center">
                    {props.children}
                </p>
            </div>
        </div>
    );
}

export default Service;