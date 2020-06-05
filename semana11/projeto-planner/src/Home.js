import React,{ useState, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button'
import './App.css'
import axios from 'axios';

const BootstrapInput = withStyles((theme) => ({
    root: {
      'label + &': {
        marginTop: theme.spacing(3),
      },
    },
    input: {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #ced4da',
      fontSize: 16,
      padding: '10px 26px 10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        borderRadius: 4,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
  }))(InputBase);
  
  const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
  }));


  
  export default function Home() {
    
    const classes = useStyles();
    const [age, setAge] = React.useState('');
    const handleChange = (event) => {
      setAge(event.target.value);
    };

    const [tarefas, setTarefas] = useState({
        texto: "passar roupa",
        day:'segunda'
    })

    useEffect(()=>{
      axios.get('https://us-central1-labenu-apis.cloudfunctions.net/generic/:planner-julian-wellington', {
          headers:{
              Authorization: 'wellington'
          }
      })
      .then(response => {
          setTarefas(response.data)
          console.log(response.data)
      })
    },[])


    return (
        <div >
            <div className='container'>
                <h1>Criar Tarefa</h1>
                <FormControl className={classes.margin}>
                    <InputLabel htmlFor="demo-customized-textbox"></InputLabel>
                    <BootstrapInput id="demo-customized-textbox" />
                </FormControl>

                <FormControl className={classes.margin}>
                    <InputLabel id="demo-customized-select-label"></InputLabel>
                    <Select
                        labelId="demo-customized-select-label"
                        id="demo-customized-select"
                        value={age}
                        onChange={handleChange}
                        input={<BootstrapInput />}
                    >
                        <MenuItem value=""><em>None</em></MenuItem>
                        <MenuItem value={10}>Segunda-feira</MenuItem>
                        <MenuItem value={20}>Terça-feira</MenuItem>
                        <MenuItem value={30}>Quarta-feira</MenuItem>
                    </Select>
                </FormControl>
           <Button variant="contained" color="primary" size='large' className='button'>Criar</Button>
            </div>

            <div className='section'>
                <section className='seg'>
                    <h3>Segunda-feira</h3>
                </section>

                <section>
                    <h3>Terça-feira</h3>
                </section>

                <section>
                    <h3>Quarta-feira</h3>
                </section>

                
                <section>
                    <h3>Quinta-feira</h3>
                </section>

                
                <section>
                    <h3>Sexta-feira</h3>
                </section>

                
                <section>
                    <h3>Sábado</h3>
                </section>

                
                <section>
                    <h3>Domingo</h3>
                </section>
                
            </div>
        </div>
    );
  }
  