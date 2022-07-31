import * as React from 'react';
import { Card, Box } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button} from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import useMediaQuery from "@mui/material/useMediaQuery";

const ProjectCard = (props) => {
  const { title, imageUrl, writer, dates, content } = props;
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <Card
      sx={{
        maxWidth: '100%',
        width: '100%',
        borderRadius: '0px',
        boxShadow: '0px 4px 25px rgba(0, 0, 0, 0.15);',
      }}>
      <Box sx={isMobile ? { display: 'flex' } : null}>
        <CardMedia
          component="img"
          sx={isMobile ? { width: 168, height: 'auto'} : { height: '175px', width:'100%' }}
          image={imageUrl}
          alt="no image"
        />
        <Box sx={isMobile ? {margin: '20px'} : { margin: '30px' }}>
          <Box>
            <Typography textAlign={'left'} gutterBottom variant="h5" component="div"
              sx={{
                margin: 0,
                fontSize: '18px',
                fontWeight: 700,
              }}>
              {title}
            </Typography>
            <Typography textAlign={'left'} variant="h5"
              sx={{
                mb: 1.5,
                fontSize: '14px', 
                fontWeight: 500,
              }}>
              {writer}
            </Typography>
            {isMobile ? null :
              <Typography textAlign={'left'} variant="body2" color="text.primary"
                sx={{
                  marginTop: '24px',
                  fontSize: '14px',
                  fontWeight: 400,
                }}>
                {content}
              </Typography>
            }
          </Box>
          <Box>
            <Box sx={isMobile ? {display:'flex', justifyContent:'flex-start', flexDirection: 'column', alignItems: 'flex-start'} : { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '24px' }}>
              <Typography textAlign={'left'} variant="body2" color="text.primary" 
              sx={isMobile ? {fontSize: '12px'} : null}>
                {isMobile ? null : <CalendarTodayOutlinedIcon fontSize='small' />} {dates}
              </Typography>
              <Button sx={{ minInlineSize: 'fit-content', margin:0, padding:0 }} size="small" color="primary">
                <ArrowRightAltIcon color='error' fontSize='large' />
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Card>
  );
}

export default ProjectCard;
