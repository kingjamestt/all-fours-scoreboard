import React from 'react';
import './index.css';
import Title from './Title';
import ScoreDisplay from './ScoreDisplay';
import SetMaxScore from './SetMaxScore';
import ScoreAdjust from './ScoreAdjust';

function index() {
    return (
        <div id="score-tracker">
            <Title title="Score Keeper" />
            <SetMaxScore />
            <ScoreDisplay />
            <ScoreAdjust />
        </div>
    )
}

export default index;
