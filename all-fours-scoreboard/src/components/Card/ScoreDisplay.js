import PlayerDisplay from "./PlayerDisplay";

const ScoreDisplay = (props) => {
    return (
        <h1 id="scores-display">
            <PlayerDisplay id="p1Display" />
            -
            <PlayerDisplay id="p2Display" />
        </h1>
    )
}

export default ScoreDisplay
