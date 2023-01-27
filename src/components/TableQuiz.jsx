import * as React from 'react';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Button from '@mui/material/Button';
import styles from "./TableQuiz.module.css";
import "../style.css";

export default function TableQuiz({questions}) {
  const [values, setValues] = React.useState(questions);
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState(' ');
  const [submitted, setSubmitted] = React.useState(false);
  console.log('q')
  console.log(values)

  const handleRadioChange = (index, value) => {
    if (submitted) return;
    setValues((prev) => prev.map((question, i) => 
      i === index 
        ? { ...question, checked: value, correct: value === question.answer }
        : question
    ))
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (values.some(({checked}) => !checked)) {
        setHelperText("Zaznacz wszystkie odpowiedzi");
        setError(true);
    } else {
        event.target.className=styles.filled;
        setSubmitted(true);
        if (values.every(({correct}) => correct)) {
            setHelperText("1 punkt!");
            setError(false);
        } else {
            setHelperText("0 punktów");
            setError(true);
        }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl sx={{ m: 3 }} variant="standard">
        <table border rules="all" frame="box">
            {values.map(({question, checked, correct}, index) => {
              console.log(checked)
              return (
                <tr>
                    <td className={styles.question}>{question}</td>
                    <td className={styles.answer}>
                        <label className={styles.label}>
                            <input type="radio" value='P' className={styles.input} checked={checked === 'P'} onChange={() => handleRadioChange(index, 'P')}/>
                            <div className={checked === 'P' && correct ? styles.correct : styles.incorrect}>P</div>
                        </label>
                    </td>
                    <td className={styles.answer}>
                        <label className={styles.label}>
                            <input type="radio" value='F' className={styles.input} checked={checked === 'F'} onChange={() => handleRadioChange(index, 'F')}/>
                            <div className={checked === 'F' && correct ? styles.correct : styles.incorrect}>F</div>
                        </label>
                    </td>
                </tr>
            )}
            )}
        </table>
        <FormHelperText error={error}>{helperText}</FormHelperText>
        <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined">
          Sprawdź odpowiedź
        </Button>
      </FormControl>
    </form>
  );
}