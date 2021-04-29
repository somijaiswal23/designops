import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CustomCard from '../CustomCard';

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

const Album = (props) => {
  const { 
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
    cardHeading,
    cardSubHeading,
    img,
    numberOfCards,
    } = props
  const classes = useStyles();
  const cardArray = numberOfCards ? numberOfCards : cards;
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
            {cardArray.map((card, index) => (
              <Grid item key={card} xs={12} sm={6} md={4} className={gridClasses}>
                <CustomCard headingClasses={headingClasses}
                      contentClasses={contentClasses}
                      cardClasses={cardClasses}
                      cardMediaClasses={cardMediaClasses}
                      cardContentClasses={cardContentClasses}
                      cardActionClasses={cardActionClasses}
                      viewButtonClasses={viewButtonClasses}
                      editButtonClasses={editButtonClasses}
                      viewAction={viewAction}
                      editAction={editAction}
                      cardHeading={cardHeading}
                      cardSubHeading={cardSubHeading}
                      id={index}
                      img={img}/>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </div>
  );
}

export default Album;