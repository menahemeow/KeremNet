import { Accordion, AccordionDetails, AccordionSummary, SxProps, Typography } from '@mui/material';

const AccordionSX: SxProps = {
    backgroundColor:'rgba(255, 255, 255, .2)',
}

const HeadlineSX: SxProps = {
    borderStyle:"hidden",
    borderTopLeftRadius:'.25em',
    borderTopRightRadius:'.25em',
    "&:hover": {
        backgroundColor:'rgba(255, 255, 255, .2)'
    }
}

const CommentStyle: React.CSSProperties = {
    whiteSpace:'pre-line',
    borderStyle:"hidden",
    backgroundColor:'rgba(255, 255, 255, .3)',
    marginBottom:'1%',
    padding:'1%',
    borderRadius:'.25em',
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