import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';

const ProjectCard = (props) => {
  const { title, imageUrl, writer, dates, content } = props;

  let croppedContent = content.substring(0, 250) + "...";

  return (
    <Card sx={{
      maxWidth: '100%',
      width: '100%',
      margin: '20px',
      marginLeft: 0,
    }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={imageUrl}
          alt="green iguana"
        />
        <CardContent>
          <Typography textAlign={'left'} gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography textAlign={'left'} sx={{ mb: 1.5 }}>
            {writer}
          </Typography>
          <Typography textAlign={'left'} variant="body2" color="text.primary">
            {croppedContent}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography textAlign={'left'} variant="body2" color="text.primary">
          <CalendarTodayOutlinedIcon fontSize='small' /> {dates}
        </Typography>
        <Button size="small" color="primary">
          <ArrowRightAltIcon color='error' fontSize='large' />
        </Button>
      </CardActions>
    </Card>
  );
}

export default ProjectCard;
