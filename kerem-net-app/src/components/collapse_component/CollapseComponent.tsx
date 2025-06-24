import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';

interface Props {
    headline: string;
    content: string[];
}


export function CollapseComponent(props: Props) {

  return (
        <Accordion 
        sx={{ 
            backgroundColor:'#4a8383', 
            borderRadius:''
        }}>
            <AccordionSummary sx={{borderRadius:'10%'}}
                aria-controls="panel3-content"
                id="panel3-header"
                >
                <Typography sx={{borderRadius:'10%'}} component="span">{props.headline}</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{borderRadius:'10%'}}>
                <div style={{borderRadius:'10%'}}>
                    {props.content.map((comment: string, index: number) => (
                        <div key={index}>{comment}</div>
                    ))}
                </div>
            </AccordionDetails>
        </Accordion>
  );
}