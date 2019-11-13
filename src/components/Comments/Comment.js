import React from 'react';
import './Comment.css';

const Comment = (props) => {
     
    return(
    <div className="Comment">
        <p style={{fontSize:"25px"}}><span style={{color:"brown"}}>Comment body</span> - {props.body}</p>
        <div className="Info">
            <div className="Name"><span style={{color:"brown"}}>Name</span> - {props.name}</div>
        </div>
    </div>
    )
};

export default Comment;