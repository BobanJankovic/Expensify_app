import React from 'react';

export const Edit = (props) => {
    console.log(props);
    return (
    <div>
     This is edit od {props.match.params.id}
    </div>

    );
     

};
   
 