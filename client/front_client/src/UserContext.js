import {createContext, useEffect, useState} from "react";

export const UserContext = createContext();


export const UserProvider = (props) => {
    const [token, setToken] = useState(localStorage.getItem("userToken"));

    useEffect(() => {
        const fetchUser = async () => {
            const requestOptions = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            }

            const response = await fetch("http://127.0.0.1:8000/login", requestOptions);


            if (!response.ok){
                setToken(null)

            }
            localStorage.setItem("userToken", token)

        }
        fetchUser();
    }, [token]);

    return (<UserContext.Provider value ={[token, setToken]}>
        {props.children}
    </UserContext.Provider>)
}



