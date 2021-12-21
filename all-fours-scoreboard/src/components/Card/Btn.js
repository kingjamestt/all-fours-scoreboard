import "./index.css";

const Btn = (props) => {
    return (
        <button
            type={props.type ? props.type : ""}
            id={props.id ? props.id : ""}
            className={props.className ? props.className : ""}
            onClick={props.onClick ? props.onClick : ""}
        >
            {props.buttonText}
        </button>
    )
};

export default Btn;
