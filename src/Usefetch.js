import { useState, useEffect } from "react";

const Usefetch = (url) => {

    const [data, setData] = useState(null); 
    const [isloading, setIsloading] = useState(true);
    const [error, setError] = useState(null);

    useEffect( () =>{
          const abortCont = new AbortController();

        setTimeout( () =>{
          fetch(url, {signal: abortCont.signal})
            .then((reponse) =>{
              if(!reponse.ok){
                 throw Error('Desole une erreur est survenu....')
              }
              return reponse.json();
            })
            .then( (data) =>{
              setData(data);
              setIsloading(false);
              setError(null)
            })
            .catch(err => {
                if( err.mame === "AbortError"){
                    console.log('fetch a ete stopper');
                }
               setError(err.message);
               setIsloading(false);
            })
            
        }, 1000);
        
        return () => abortCont.abort();
 }, [url]) 

    return {data, isloading, error};

};

export default Usefetch;