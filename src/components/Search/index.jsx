import React from 'react';
import {SearchContext} from '../../App'
import style from './search.module.scss';

function Search() {
    const {searchValue, setSearchValue} = React.useContext(SearchContext);


    return ( <div className={style.root}>
        <svg className={style.searchIcon} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><title/><g data-name="Layer 2" id="Layer_2"><path d="M28.35,25.73l-9.6-9.6A.47.47,0,0,0,18.4,16h0a.47.47,0,0,0-.35.15l-.61.61-1.28-1.29a7.21,7.21,0,1,0-5.44,2.49,7.13,7.13,0,0,0,4.73-1.78l1.29,1.28-.6.61a.5.5,0,0,0,0,.7l9.59,9.6a.48.48,0,0,0,.7,0l1.92-1.92A.48.48,0,0,0,28.35,25.73Zm-22-10.61a6.23,6.23,0,1,1,4.4,1.82A6.24,6.24,0,0,1,6.32,15.12ZM26.08,27.29,17.2,18.4l1.2-1.21,8.89,8.89Z"/><path d="M11.24,6.56a.5.5,0,0,0-.5.5.51.51,0,0,0,.5.5,3.22,3.22,0,0,1,2.7,1.81.49.49,0,0,0,.44.28.59.59,0,0,0,.23-.05.49.49,0,0,0,.22-.67A4.18,4.18,0,0,0,11.24,6.56Z"/></g></svg>
        <input className={style.input} placeholder="Пошук" value={searchValue} onChange={(e) => setSearchValue(e.target.value)}></input>
        {searchValue && <svg className={style.deleteIcon} onClick={() => setSearchValue('')} enable-background="new 0 0 512 512" height="512px" id="Layer_1" version="1.1" viewBox="0 0 512 512" width="512px" xmlns="http://www.w3.org/2000/svg"><path d="M256,7C118.467,7,7,118.468,7,256.002C7,393.533,118.467,505,256,505s249-111.467,249-248.998  C505,118.468,393.533,7,256,7z M256,485.08c-126.31,0-229.08-102.771-229.08-229.078C26.92,129.692,129.69,26.92,256,26.92  c126.309,0,229.08,102.771,229.08,229.082C485.08,382.309,382.309,485.08,256,485.08z" fill="#425661"/><polygon fill="#425661" points="368.545,157.073 354.461,142.988 255.863,241.587 157.733,143.456 143.648,157.54 241.78,255.672   143.648,353.809 157.733,367.893 255.863,269.75 354.461,368.361 368.545,354.275 269.947,255.672 "/></svg>}
    </div> );
}

export default Search;