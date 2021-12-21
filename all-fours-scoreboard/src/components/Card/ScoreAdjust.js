import "./index.css";
import Btn from "./Btn";

const ScoreAdjust = (props) => {
    const reset = (setP1Score, setP2Score) => {
        setP1Score(0);
        setP2Score(0);
    };

    const addOne = (score, setScore) => {
        setScore(score + 1);
    };

    return (
        <div className="Row">
            <Btn
                id="setScoreButton"
                className="button"
                buttonText="+1"
                onClick={() => addOne(props.p1Score, props.setP1Score)}
            />
            <Btn
                id="setScoreButton"
                className="button"
                buttonText="+1"
                onClick={() => addOne(props.p2Score, props.setP2Score)}
            />
            <Btn
                id="setScoreButton"
                className="button"
                buttonText="Reset"
                onClick={() => reset(props.setP1Score, props.setP2Score)}
            />
        </div>
    )
};

export default ScoreAdjust;
