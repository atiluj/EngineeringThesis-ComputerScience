import * as React from 'react';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Button from '@mui/material/Button';
import styles from "./TableQuiz.module.css";

export default function TableQuiz({questions}) {
  const [rowsData, setRowsData] = React.useState(questions);
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState(' ');
  const [submitted, setSubmitted] = React.useState(false);

  const handleRadioChange = (index, value) => {
    if (submitted) return;

    setRowsData((prev) => prev.map((question, i) => {
      const correct = value === question.answer;

      return i === index ? {
        ...question,
        correct,
        checked: value,
        trueClassName: value === 'P' && correct ? styles.correct : styles.incorrect,
        falseClassName: value === 'F' && correct ? styles.correct : styles.incorrect 
      } : question
    }
    ))
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (rowsData.some(({checked}) => !checked)) {
        setHelperText("Zaznacz wszystkie odpowiedzi");
        setError(true);
    } else {
        setSubmitted(true);
        if (rowsData.every(({correct}) => correct)) {
            setHelperText("1 punkt!");
            setError(false);
        } else {
            setHelperText("0 punktów");
            setError(true);
        }
    }
  };

  return (
    <form onSubmit={handleSubmit} className={submitted && styles.filled}>
      <FormControl variant="standard">
        <table border rules="all" frame="box">
            {rowsData.map(({question, checked, trueClassName, falseClassName}, index) => (
                <tr>
                    <td className={styles.question}>{question}</td>
                    <td className={styles.answer}>
                        <label className={styles.label}>
                            <input type="radio" className={styles.input} checked={checked === 'P'} onChange={() => handleRadioChange(index, 'P')}/>
                            <div className={trueClassName}>P</div>
                        </label>
                    </td>
                    <td className={styles.answer}>
                        <label className={styles.label}>
                            <input type="radio" className={styles.input} checked={checked === 'F'} onChange={() => handleRadioChange(index, 'F')}/>
                            <div className={falseClassName}>F</div>
                        </label>
                    </td>
                </tr>
            ))}
        </table>
        <FormHelperText error={error}>{helperText}</FormHelperText>
        <Button type="submit" variant="outlined" disabled={submitted}>
          Sprawdź odpowiedź
        </Button>
      </FormControl>
    </form>
  );
}