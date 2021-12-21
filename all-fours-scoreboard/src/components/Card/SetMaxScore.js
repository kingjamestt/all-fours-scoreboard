import "./index.css";
import Input from "./Input.js";
import Btn from "./Btn.js";

const SetMaxScore = () => {
    return (
        <form id="setMaxForm">
            <Input
                type="text"
                id="maxScoreInput"
                className="input"
                placeholder="Enter Max Score (default 14)"
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