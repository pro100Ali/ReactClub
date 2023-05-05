import { Container ,Paper,Button} from '@material-ui/core';
import { useNavigate } from "react-router-dom"
import {useEffect, useState} from 'react'
import { ClubCard } from '../components/ClubCard';

export const Main = () => {
    const navigate = useNavigate()
    const [clubs, setClubs] = useState({})

    useEffect(()=>{
        fetch("http://localhost:8084/clubs/getAll")
        .then(res=>res.json())
        .then((result)=>{
            console.log(result)
          setClubs(result);
        }
      )
      },[])
    return (
        <div> 
             {clubs?.map((el) =>{
                <ClubCard el={el} />
             })}
        </div>
    )
}