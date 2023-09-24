import {useState} from 'react';
//components
import Header from './Header';
import TodoContainer from './TodoContainer';

function Container () {
    const [bg, setbg] = useState('darkbg');
    const [dark , setdark] = useState(true);
    function darkToggler() {
        const body = document.querySelector("body");
        if(dark){
            setbg('lightbg');
            setdark(false);
            body.className ='light';  
        }
        else{
            setbg('darkbg');
            setdark(true);
            body.className= 'dark-blue';
        }  
    }
    return ( 
        <>
            <Header 
                Bg={bg} 
                darkToggler={darkToggler} 
                dark={dark}
            /> 
            <TodoContainer theme={dark ? 'dark' :'light'} />
        </>
    );
}

export default Container ; 
