import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';

const AccordionSX = {
    backgroundColor:'#4a8383',
}

const HeadlineSX = {
    borderTopLeftRadius:'.3vh',
    borderTopRightRadius:'.3vh',
    "&:hover": {
        backgroundColor:'#396464'
    }
}

const CommentStyle = {
    whiteSpace:'pre-line',
    backgroundColor:'#66c0c0',
    marginBottom:'1%',
    padding:'1%',
    borderRadius:'.3vh',
}

interface Props {
    headline: string;
    content: string[];
}


export function CollapseComponent(props: Props) {

  return (
        <Accordion
        sx={AccordionSX}>
            <AccordionSummary sx={HeadlineSX}
                aria-controls="panel3-content"
                id="panel3-header"
                >
                <Typography component="span">{props.headline}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <div>
                    {props.content.map((comment: string, index: number) => (
                        <div className='Comment' style={CommentStyle} 
                        key={index}>{comment}</div>
                    ))}
                </div>
            </AccordionDetails>
        </Accordion>
  );
}