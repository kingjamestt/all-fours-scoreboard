import "./index.css";

const Input = (props) => {
    return (
        <input
            type={props.type}
            id={props.id}
            className={props.className}
            placeholder={props.placeholder}
            name={props.name}
        />
    )
};

export default Input;
