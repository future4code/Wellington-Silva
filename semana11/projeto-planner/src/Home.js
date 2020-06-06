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
    const [inputValue, setInputValue] = useState('')
    const [selectValue, setSelectValue] = React.useState('segunda');
    const [tarefas, setTarefas] = useState([])



    const request = () =>{
      axios.get('https://us-central1-labenu-apis.cloudfunctions.net/generic/:planner-julian-wellington')
      .then(response => {
          setTarefas(response.data)
          console.log(response.data)
      })
    }

    useEffect(()=>{
      request()
    },[])

    
    const onChangeSelect = (event) => {
      setSelectValue(event.target.value);
    };

    const textoInput = (e) =>{
      setInputValue(e.target.value)
      console.log(inputValue)
    }
   
    const enviarRequest = () => {
      console.log("clicou")
      const body = {
        text: inputValue,
        day: selectValue
      }

      axios.post('https://us-central1-labenu-apis.cloudfunctions.net/generic/:planner-julian-wellington', body)

      request()
    }

    const segunda = tarefas.filter((tarefa)=>{
      return tarefa.day = 'segunda'
    })


    return (
        <div >
            <div className='container'>
                <h1>Criar Tarefa</h1>
                <FormControl className={classes.margin}>
                    <InputLabel htmlFor="demo-customized-textbox" onChange={textoInput} value={inputValue} required></InputLabel>
                    <BootstrapInput id="demo-customized-textbox" />
                </FormControl>

                <FormControl className={classes.margin}>
                    <InputLabel id="demo-customized-select-label"></InputLabel>
                    <Select
                        labelId="demo-customized-select-label"
                        id="demo-customized-select"
                        value={selectValue}
                        onChange={onChangeSelect}
                        input={<BootstrapInput />}
                      
                    >
  
                        <MenuItem value= 'segunda'>Segunda-feira</MenuItem>
                        <MenuItem value= 'terça'>Terça-feira</MenuItem>
                        <MenuItem value= 'quarta'>Quarta-feira</MenuItem>
                    </Select>
                </FormControl>
           <button onClick={enviarRequest }>Criar</button>

            </div>

            <div className='section'>

                <section className='seg'>
                    <h3>Segunda-feira</h3>
                    {segunda.map(tarefa => {
                      return <p>{tarefa.text}</p>
                    })}
                    
                </section>

                <section>
                  
                </section>

                <section>
              
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
  