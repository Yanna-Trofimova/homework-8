import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const NonExistentPage = () => {

const [redirect, setRedirect] = useState(false);
    
    
useEffect(() => {
        
    setTimeout(() => {
        setRedirect(true);
        
    }, 3000);
}, []);



    return redirect ? (
        <Navigate to="/" replace={true} />):
        
       ( <div >
       <h2>This page does not exist</h2>
    </div>
    )
}

export default NonExistentPage;