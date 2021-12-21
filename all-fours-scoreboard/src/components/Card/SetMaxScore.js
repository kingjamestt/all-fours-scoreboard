import "./index.css";
import Input from "./Input.js";
import Btn from "./Btn.js";

const SetMaxScore = (props) => {
    const submitHandler = (e) => {
        e.preventDefault();

        const data = new FormData(e.currentTarget);
        const values = Object.fromEntries(data.entries());
        console.log(values.userInput);
        values.userInput != "" && props.setMaxScore(values.userInput);
    };

    return (
        <form id="setMaxForm" onSubmit={submitHandler}>
            <Input
                type="text"
                id="maxScoreInput"
                className="input"
                placeholder="Enter Max Score (default 14)"
                name="userInput"
            />
            <Btn
                type="submit"
                id="setScoreButton"
                className="button"
                buttonText="Set Score"
            />
        </form>
    )
}

export default SetMaxScore;