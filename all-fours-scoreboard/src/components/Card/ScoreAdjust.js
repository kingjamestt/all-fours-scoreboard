import PlayerOneBtn from "./PlayerOneBtn";
import PlayerTwoBtn from "./PlayerTwoBtn";
import ResetBtn from "./ResetBtn";
import "./index.css";

const ScoreAdjust = () => {
    return (
        <div className="Row">
            <PlayerOneBtn />
            <PlayerTwoBtn />
            <ResetBtn />
        </div>
    )
};

export default ScoreAdjust;
