import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import styles from "./TableQuiz.module.css";
import "../style.css";
import { style } from '@mui/system';

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

    event.target.className=styles.filled;
    console.log(event.target);
    
    // if (values == props.answers) {
    //     console.log("git");
    // } else {
    //     console.log("chujowo");
    // }
    // if (!value) {
    //   setHelperText('Wybierz odpowiedź.');
    //   setError(true);
    // } else if (value === props.correct) {
    //   setHelperText('Poprawna odpowiedź!');
    //   setError(false);
    // } else {
    //   setHelperText('Błędna odpowiedź');
    //   setError(true);
    // }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl sx={{ m: 3 }} variant="standard">
        {/* <FormLabel>{props.question}</FormLabel>
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
        <FormHelperText error={error}>{helperText}</FormHelperText> */}
        <table border rules="all" frame="box">
            {props.questions.map((question, index) =>
                <tr>
                    <td>{question}</td>
                        <td>
                            <label className={styles.label}>
                                <input type="radio" name={index} className={styles.input} value={1} onChange={handleRadioChange}/>
                                <span>P</span>
                            </label>
                        </td>
                        <td>
                            <label className={styles.label}>
                                <input type="radio" name={index} className={styles.input} value={0} onChange={handleRadioChange}/>
                                <span>F</span>
                            </label>
                        </td>
                </tr>
            )}
        </table>

        <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined">
          Sprawdź odpowiedź
        </Button>
      </FormControl>
    </form>
  );
}

/* <table className="sql_table"  border rules="all" frame="box">
<tr>
    <td>czy nikola jest fajna</td>
    <td><button className="correct">tak</button></td>
    <td><button className="incorrect">nie</button></td>
</tr>
<tr>
    <td>czy julita jest fajna</td>
    <td><button className="correct">tak</button></td>
    <td><button className="incorrect">nie</button></td>
</tr>
<tr>
    <td>czy pawel karas zle wyglada w marynarce</td>
    <td><button className="incorrect">tak</button></td>
    <td><button className="correct">nie</button></td>
</tr>
</table> */