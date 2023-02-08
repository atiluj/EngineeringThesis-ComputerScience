import * as React from 'react';
import FormHelperText from '@mui/material/FormHelperText';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


export default function BasicTextFields(props) {
    const [value, setValue] = React.useState(['','','','']);
    const [error, setError] = React.useState([false,false,false,false]);
    const [helperText, setHelperText] = React.useState(' ');
  
    const handleSubmit = (event) => {
      event.preventDefault();
     
      setError([false,false,false,false]);
      setHelperText('Poprawna odpowiedź!');

      for (let i=0; i<props.questions.length; i++){
        if (value[i] != props.correct[i]){
            setHelperText('Błędna odpowiedź');
            setError((v)=>{
                let newValue = [...v];
                newValue[i] = true;
                return newValue;
            })
        }
      }

      for (let i=0; i<props.questions.length; i++){
        if (value[i].length == 0){
            setHelperText('Wypełnij wszystkie pola.');
            setError((v)=>{
                let newValue = [...v];
                newValue[i] = true;
                return newValue;
            })
        }
      }

    };

  return (
    <form onSubmit={handleSubmit}>
        <p>
            <h3>TREŚĆ</h3>
            {props.task}
        </p>
        {props.questions.map((question, i) =>
            <div style={{display: "flex", justifyContent: "space-between", margin: "0.5rem 0", maxWidth: "90%"}}>
                <span style={{margin: "0 1rem"}}>{question}</span>
                <TextField
                    error = {error[i]}
                    value={value[i]}
                    onChange={(e)=>{
                        setValue((v)=>{
                            let newValue = [...v];
                            newValue[i] = e.target.value;
                            return newValue;
                        })}}
                    variant="outlined" 
                    size="small"
                    sx={{border: "1px solid var(--font)", borderRadius: 1}}
                />
            </div>
        )}

        <FormHelperText error={error.some(v => v)}>{helperText}</FormHelperText>
        <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined">
            Sprawdź odpowiedź
        </Button>
    </form>
  );
}