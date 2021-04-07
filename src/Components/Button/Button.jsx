

import { Component } from 'react';
import style from "../Button/Button.module.css"
class  Button extends Component { 
    
    // window.scrollTo({
    //     top: document.documentElement.scrollHeight,
    //     behavior: 'smooth',
    //   });
    
    render(){
    return(<button
    className={style.button}
    type="button"
    // onclick={onClick}
      >
    {' '}
 LoadMore
  </button>)}
      }
  
  export default Button