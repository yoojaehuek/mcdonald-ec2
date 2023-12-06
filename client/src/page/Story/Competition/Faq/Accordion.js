import React, { useState } from "react";
import { Accordion, AccordionSummary, AccordionDetails, Typography, styled } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import './Accordion.scss'

const AccordionContainer = styled(Accordion)({

});

const AccordionItem = ({ category, item }) => {
  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <AccordionContainer className="AccordionContainer" onChange={toggleDescription}>
      <AccordionSummary className="AccordionContainer2" expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content">
        <Typography className="category" sx={{ marginRight: "3vw" }}>{category.category}</Typography>
        <Typography className="title">{item.name}</Typography>
      </AccordionSummary>
      <AccordionDetails className="dectption">
        {showDescription && (
          <Typography className="description">
            {item.description}
          </Typography>
        )}
      </AccordionDetails>
    </AccordionContainer>
  );
};

export default AccordionItem;