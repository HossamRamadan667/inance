function Feature(props) {
    return (
        <div className="col-12 col-md-4 col-lg-3 px-3"> 
            <div className="feature p-5 d-flex flex-column align-items-center ratio-1x1">
                {props.children}
            </div>
        </div>
    );
}

export default Feature;