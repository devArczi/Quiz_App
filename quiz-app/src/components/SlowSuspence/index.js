import React, { Suspense, useEffect, useState } from "react";

export const SlowSuspense = ({children, fallback = null}) =>{
    const [show, setShow] = useState(true);
    useEffect(()=>{
        setTimeout(()=> setShow(false), 1000);
    },[])

    return(
        <div>
            {show ? fallback : 
            <Suspense fallback={fallback}>
                {children}
            </Suspense>}
        </div>

    );
};

export default SlowSuspense;