import React from 'react';
import Search from './Search';
import Sort from './Sort';

export default class TaskControl extends React.Component {
    
    render()
    {
        return (
            <div className="row mt-5">
                <Search/>
                <Sort />
            </div>
        )
    }
}
