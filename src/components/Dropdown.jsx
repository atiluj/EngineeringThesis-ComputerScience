import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styles from "./Dropdown.module.css";
import "../style.css";

export default function Dropdown({ title, children }) {
  return (
    <Accordion>
      <div className={styles.collapsible}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={styles.dropdown_icon} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className={styles.collapsible}
        >
          <p className={styles.dropdown_content}>{title}</p>
        </AccordionSummary>
      </div>

      <AccordionDetails> {children} </AccordionDetails>
    </Accordion>
  );
}
