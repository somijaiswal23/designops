import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const classNames = require('classnames');

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Album = ({ 
  Heading,
  SubContent,
  appBarClasses,
  toolBarClasses,
  cameraIconClasses,
  typographyClasses,
  divClasses,
  containerClasses,
  headingClasses,
  contentClasses,
  gridContainerClasses,
  innerGridClasses,
  gridClasses,
  cardClasses,
  cardMediaClasses,
  cardContentClasses,
  cardActionClasses,
  viewButtonClasses,
  editButtonClasses,
  viewAction,
  editAction,
  }) => {
  const classes = useStyles();

  return (
    <div>
      <CssBaseline />
      <AppBar position="relative" className={appBarClasses}>
        <Toolbar className={toolBarClasses}>
          <CameraIcon className={classNames(classes.icon, cameraIconClasses)} />
          <Typography variant="h6" color="inherit" noWrap className={typographyClasses}>
            Album layout
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classNames(classes.heroContent, divClasses)}>
          <Container maxWidth="sm" className={containerClasses}>
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom className={headingClasses}>
              {Heading}
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph className={contentClasses}>
                {SubContent}
            </Typography>
          </Container>
        </div>
        <Container className={classNames(classes.cardGrid, gridContainerClasses)} maxWidth="md">
          <Grid container spacing={4} className={innerGridClasses}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4} className={gridClasses}>
                <Card className={classNames(classes.card, cardClasses)}>
                  <CardMedia
                    className={classNames(classes.cardMedia, cardMediaClasses)}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classNames(classes.cardContent, cardContentClasses)}>
                    <Typography gutterBottom variant="h5" component="h2" className={headingClasses}>
                      Heading
                    </Typography>
                    <Typography className={contentClasses}>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>
                  <CardActions className={cardActionClasses}>
                    <Button size="small" color="primary" className={viewButtonClasses} onClick={viewAction}>
                      View
                    </Button>
                    <Button size="small" color="primary" className={editButtonClasses} onClick={editAction}>
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </div>
  );
}

export default Album;