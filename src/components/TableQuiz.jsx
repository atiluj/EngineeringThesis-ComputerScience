import * as React from 'react';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Button from '@mui/material/Button';
import styles from "./TableQuiz.module.css";
import "../style.css";

export default function TableQuiz(props) {
  const [values, setValues] = React.useState(new Array(props.questions.length).fill(null));
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState(' ');

    const getSiblingElement = (currentNode) => {
        const tdParent = currentNode.parentElement.parentElement;
        let sibling;
        if (currentNode.value === "0") {
            sibling = tdParent.previousElementSibling;
        } else {
            sibling = tdParent.nextElementSibling;
        }
        return sibling.firstElementChild.lastElementChild;
    }

  const handleRadioChange = (event) => {
    const input = event.target; 
    const index = input.name;
    const value = parseInt(input.value);
    values[index] = value;

    const siblingSpan = getSiblingElement(input);

    if (props.answers[index] === value) {
        input.nextElementSibling.classList.add(styles.correct);
        siblingSpan.classList = [];
    } else {
        input.nextElementSibling.classList.add(styles.incorrect);
        siblingSpan.classList = [];
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (values.includes(null)) {
        setHelperText("Zaznacz wszystkie odpowiedzi");
        setError(true);
    } else {
        event.target.className=styles.filled;
        if (props.answers.toString() === values.toString()) {
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
            {props.questions.map((question, index) =>
                <tr>
                    <td className={styles.question}>{question}</td>
                    <td className={styles.answer}>
                        <label className={styles.label}>
                            <input type="radio" name={index} className={styles.input} value={1} onChange={handleRadioChange}/>
                            <div>P</div>
                        </label>
                    </td>
                    <td className={styles.answer}>
                        <label className={styles.label}>
                            <input type="radio" name={index} className={styles.input} value={0} onChange={handleRadioChange}/>
                            <div>F</div>
                        </label>
                    </td>
                </tr>
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