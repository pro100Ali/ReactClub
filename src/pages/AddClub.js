import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Container , Paper, Button} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
     
    },
  },
}));

export default function Student() {
    const paperStyle={padding:'50px 20px', width:600,margin:"20px auto"}
    const[description,setDescription]=useState('')
    const[name,setName]=useState('')
    const classes = useStyles();

  const handleClick=(e)=>{
    
    e.preventDefault()
    console.log("clicked")
    const club={description,name}
    console.log(club)
    fetch("http://localhost:8084/club/add",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(club)

  }).then(()=>{
    console.log("New Club added")
  })
  setDescription("")
  setName("")
}

    function onFormsSubmit() {
        console.log("hiii")
        setDescription("")
        console.log(description)
        setName("")
    }

  return (
    <Container>
        <Paper elevation={3} style={paperStyle}>
            <h1 style={{color:"blue"}}><u>Add Club</u></h1>

    <form className={classes.root} noValidate autoComplete="off" >
    
      <TextField id="outlined-basic" label="Club Description" variant="outlined" fullWidth 
      value={description}
      onChange={(e)=>setDescription(e.target.value)}
      />
      <TextField id="outlined-basic" label="Club Name" variant="outlined" fullWidth
      value={name}
      onChange={(e)=>setName(e.target.value)}
      />
      <Button variant="contained" color="secondary" onClick={handleClick}>
  Add club
</Button>
    </form>
    
    </Paper>

    </Container>
  );
}
