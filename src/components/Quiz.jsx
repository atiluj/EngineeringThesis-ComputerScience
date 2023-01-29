import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';

export default function Quiz(props) {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState(' ');

  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setHelperText(' ');
    setError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
   
    if (!value) {
      setHelperText('Wybierz odpowiedź.');
      setError(true);
    } else if (value === props.correct) {
      setHelperText('Poprawna odpowiedź!');
      setError(false);
    } else {
      setHelperText('Błędna odpowiedź');
      setError(true);
    }

  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl sx={{ m: 3 }} variant="standard">
        <FormLabel>{props.question}</FormLabel>
        <RadioGroup
          name="quiz"
          value={value}
          onChange={handleRadioChange}
        >
            {props.answers.map((answer) =>
                <FormControlLabel
                    value={answer}
                    control={<Radio/>}
                    label={answer}
                />
            )}
        </RadioGroup>
        <FormHelperText error={error}>{helperText}</FormHelperText>
        <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined">
          Sprawdź odpowiedź
        </Button>
      </FormControl>
    </form>
  );
}