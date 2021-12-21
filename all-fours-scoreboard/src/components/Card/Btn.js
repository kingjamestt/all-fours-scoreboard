import "./index.css";

const Btn = (props) => {
    return (
        <button
            type={props.type}
            id={props.id}
            className={props.className}
        >
            {props.buttonText}
        </button>
    )
}

export default Btn
