import React from 'react'

export default function PrintMo(props) {
    
    return (
        <div className='fadeInUpBig'>
               <div className="btnCont">
               <img className="poster" src= {`https://image.tmdb.org/t/p/w200/${props.show['poster_path']}`}> 
               </img>
              {/* <div className='btn'> */}
              <button className='i' onClick ={props.addToFave}>★</button>
              {/* <button className='ii' onClick = {props.funWatch}>L</button>  */}
              </div>
               <p className='title'> { props.show.name } </p>
               {/* </div> */}
     </div>
    )
}
