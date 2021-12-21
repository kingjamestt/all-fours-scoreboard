import React, { useState } from 'react';
import './index.css';
import Title from './Title';
import ScoreDisplay from './ScoreDisplay';
import SetMaxScore from './SetMaxScore';
import ScoreAdjust from './ScoreAdjust';

function Card() {
    const [p1Score, setP1Score] = useState(0);
    const [p2Score, setP2Score] = useState(0);
    const [maxScore, setMaxScore] = useState(14);

    return (
        <div id="score-tracker">
            <Title
                title="Score Keeper"
            />
            <SetMaxScore
                maxScore={maxScore}
                setMaxScore={setMaxScore}
            />
            <ScoreDisplay
                p1Score={p1Score}
                setP1Score={setP1Score}
                p2Score={p2Score}
                setP2Score={setP2Score}
            />
            <ScoreAdjust
                p1Score={p1Score}
                setP1Score={setP1Score}
                p2Score={p2Score}
                setP2Score={setP2Score}
            />
        </div>
    )
}

export default Card;
