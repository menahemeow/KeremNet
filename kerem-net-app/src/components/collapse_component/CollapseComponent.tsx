import { Accordion, AccordionDetails, AccordionSummary, Icon, Typography } from '@mui/material';
import React, { useState } from 'react';

interface Props {
    content: string[]
}


export function CollapseComponent(props: Props) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
        <Accordion>
            <AccordionSummary
                expandIcon={<Icon/>}
                aria-controls="panel3-content"
                id="panel3-header"
                >
                <Typography component="span">Comments</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <div>
                    {props.content.map((comment: string, index: number) => (
                        <li key={index}>{comment}</li>
                    ))}
                </div>
            </AccordionDetails>
        </Accordion>
  );
}