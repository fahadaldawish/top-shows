import React from 'react'
import got from './got.jpg'
const Show = () => {
    return (
        <div>

            {/* <img className='got' src={got}></img> */}
            <div className="showPost"></div>
            <div className='showTitle'></div>
            <div className="showDes"></div>
            <div className="showCast"></div>
            <div className="official"></div>
            {/* <h1>Game Of Thrones <br/></h1>
            <p>Seven noble families fight for
                control of the mythical land of
                Westeros. Friction between the 
                houses leads to full-scale war. 
                All while a very ancient evil awakens
                in the farthest north. Amidst the war,
                a neglected military order of misfits, 
                the Night's Watch, is all that stands 
                between the realms of men and icy horrors beyond.</p> */}
        </div>
    )
}
// https://www.themoviedb.org/tv/87108-chernobyl/cast  the show cast
export default Show;
