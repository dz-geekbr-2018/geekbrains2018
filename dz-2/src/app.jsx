import React from 'react';
import ReactDOM from 'react-dom';


const app = document.getElementById('app');

ReactDOM.render(
    <div onClick={()=>{alert('1');}}>
        Второе приложение на React
    </div>,
app);