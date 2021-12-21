import "./index.css";
import Btn from "./Btn";

const ScoreAdjust = () => {
    return (
        <div className="Row">
            <Btn
                id="setScoreButton"
                className="button"
                buttonText="+1"
            />
            <Btn
                id="setScoreButton"
                className="button"
                buttonText="+1"
            />
            <Btn
                id="setScoreButton"
                className="button"
                buttonText="Reset"
            />
        </div>
    )
};

export default ScoreAdjust;
