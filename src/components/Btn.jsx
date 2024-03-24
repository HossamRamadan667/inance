function Btn(props) {
    return (
        <button className={`btn btn-${props.type || 'primary'} ${props.className}`} onClick={props.onClick}>
            {props.children}
        </button>
    );
}

export default Btn;