import React from 'react';
import Typography from '@material-ui/core/Typography';
import './Subtitle.css';

export default function Subtitle (){
    return (
        <div>
            <Typography className="Subtitle" variant="h5" component="h1">오늘의 추천</Typography>
            <div className="Seperator">
                <div className="ColorSeperator"></div>
            </div>
        </div>
    );  
}