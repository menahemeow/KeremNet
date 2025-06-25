import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';

const AccordionSX = {
    backgroundColor:'#4a8383',
}

const HeadlineSX = {
    borderTopLeftRadius:'1vh',
    borderTopRightRadius:'1vh',
    "&:hover": {
        backgroundColor:'#396464'
    }
}

const CommentStyle = {
    whiteSpace:'pre-line',
    backgroundColor:'#66c0c0',
    marginBottom:'1%',
    padding:'1%',
    borderRadius:'1vh',
}

interface Props {
    headline: string;
    content: string[];
}


export function CollapseComponent({headline, content}: Props) {

  return (
        <Accordion
        sx={AccordionSX}>
            <AccordionSummary sx={HeadlineSX}
                aria-controls="panel3-content"
                id="panel3-header">
                <Typography component="span">{headline}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <div>
                    {content.map((comment: string, index: number) => (
                        <div className='Comment' style={CommentStyle} 
                        key={index}>{comment}</div>
                    ))}
                </div>
            </AccordionDetails>
        </Accordion>
  );
}