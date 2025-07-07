import style from './Message.module.css'
import { useState,useEffect } from 'react'

function Message({message,type}){

    const [visible,setVisible] = useState(false);
    useEffect(()=>{

        if(!message){
            setVisible(false)
            return
        }

        setVisible(true)
        const timer = setTimeout(() => {
            setVisible(false)
        }, 3000);
        return () =>clearTimeout(timer)

    },[message])

    return (
        <>
        {visible&&(
            <div className={`${style.message} ${style[type]}`}>
                <p>{message}</p>
            </div>
        )}
        </>
    )
}

export default Message