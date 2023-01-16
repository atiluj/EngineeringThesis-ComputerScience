import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import MUIAccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";
import styles from "./Dropdown.module.css";
import "../style.css";

const AccordionDetails = styled(MUIAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(0),
}));

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
          <p className={styles.dropdown_title}>{title}</p>
        </AccordionSummary>
      </div>
      <div className={styles.dropdown_content}>
        <AccordionDetails> {children} </AccordionDetails>
      </div>
    </Accordion>
  );
}
