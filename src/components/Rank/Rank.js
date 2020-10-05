import React from 'react';
import './Rank.css';

const Rank = ({name, entries}) => {
    return(
        <div className='rank'>
            <div className='white f3'>
                {`${name}, Your current entry count... `}
            </div>
            <div className='rank-number'>
                { entries }
            </div>
        </div>
    );
}

export default Rank;