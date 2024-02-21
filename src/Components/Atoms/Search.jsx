import React from 'react';
import img from '../../assets/img/lupa.png';
import './Search.css';

function Search() {
    return ( 
        <div className='container-search'> 
            <div className='container'>
                <div className='search-container'>
                    <img src={img} alt="" className='img'/>
                    <input type="text" name="" id="" className='input'/>
                </div>
            </div>
        </div>
     );
}

export default Search;
