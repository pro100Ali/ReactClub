import { useEffect, useState } from "react"
import { Paper } from '@material-ui/core';

export const StudentList = () => {
    const[students,setStudents]=useState([])
    const paperStyle={padding:'50px 20px', width:600,margin:"20px auto"}
    console.log("Ali")

    useEffect(()=>{
        fetch("http://localhost:8084/student/getAll")
        .then(res=>res.json())
        .then((result)=>{
            console.log(result)
          setStudents(result);
        }
      )
      },[])
    return (
        <div>
            <h1>Students</h1>

        <Paper elevation={3} style={paperStyle}>

        {students.map(student=>(
            <Paper elevation={6} style={{margin:"10px",padding:"15px", textAlign:"left"}} key={student.id}>
            Id:{student.id}<br/>
            Name:{student.name}<br/>
            Address:{student.address}

            </Paper>
        ))
        }


        </Paper>


        </div>
    )
}