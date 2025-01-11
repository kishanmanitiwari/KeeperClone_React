import React, { useState } from 'react';

function Change() {

const [text,setText] = useState('');

function handleChange(event){
    setText(event.target.value)
}

 return (
 <div>
 <input type="text" placeholder='tet' value={text} onChange={handleChange} />
 <p>You typed:{text} </p>
 </div>
 );
}
export default Change;