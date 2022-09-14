import {useState, useEffect} from "react";

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [ispending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

        useEffect(() => {
            const abortCont = new AbortController();
            setTimeout(() => {
                fetch(url, {signal: abortCont.signal})
                .then((result) => {
                    if(!result.ok){
                        throw Error("could not fetch the data from that resource!");}
                    return result.json();
                    })
                .then(data => {
                    setError(null);
                    setData(data);
                    setIsPending(false);
                })
                .catch(e => {
                    setIsPending(false);
                    setError(e.message)
                })
            }, 1000);
            return () => abortCont.abort();
        }, [url]);
        
    return {data, ispending, error};
}
 
export default useFetch;