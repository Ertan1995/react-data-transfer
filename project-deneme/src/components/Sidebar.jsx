import React from 'react'
import "../style/sidebar.scss"


function Sidebar({categories}) {
    return (

        <div className='side-bar'>
           <ul id='sidebar-ul'>
            <h1>Categories</h1>
            {categories.map(categorie => 
            
            <li id='sidebar-li' key={categorie.id} >{categorie.categoryName}</li>
            
            ) }
           </ul>
        </div>
    );
}

export default Sidebar;



// const meyveler= [
//     {
// id : 1,
// adi : "elma",
// renk : "kırmızı"

// },
// {
// id : 2,
// adi : "erik",
// renk : "yeşil"

// },
// {
//     id : 3,
//     adi : "üzüm",
//     renk : "beyaz"
    
//     },
// ];

// console.log(meyveler.map( (meyve) => {

//     return meyve.adi;

// } ));