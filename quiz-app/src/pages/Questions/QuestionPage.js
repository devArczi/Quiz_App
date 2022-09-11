import React, { useState,useEffect } from 'react';
import Header from '../../components/Header';
// import Spinner from '../../components/Loader';
import SimpleQ from '../../components/Quiz-app/SimpleQ';
import SlowSuspence from '../../components/SlowSuspence';
import {Blocks} from 'react-loader-spinner';



const fetchData = (url) => {
    return fetch(url)
    .then(Response => Response.json())
};

const QuestionPage = () =>{  
    const [data, setData] = useState('');
    useEffect(()=>{
        fetchData('./SimpleQ.json').then(result =>{
            setData(result)    

        })
    },[]);

const Spinner = <Blocks
visible={true}
height="80"
width="80"
ariaLabel="blocks-loading"
wrapperStyle={{}}
wrapperClass="blocks-wrapper"
/>;
    return(
            <div className="app__wrapper">
                <Header/>
                <SlowSuspence fallback={Spinner}>
                <SimpleQ data ={data}/>
                </SlowSuspence>
            </div>
        

    )
}

export default QuestionPage;