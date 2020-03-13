import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import EventCard from '../../components/event-card/index'

import './event-list.css';
import { connect } from 'react-redux';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing(2),
    },
  }));

function EventList({ events }) {
    const classes = useStyles();
    const [spacing] = React.useState(6);

    const renderEvents = () => {
        return events.map((i, index) => (
            <Grid key={index} item>
                <EventCard />
            </Grid>
        ));
    }

        return (
            <Grid container className={classes.root} spacing={2}>
                <Grid item xs={12}>
                    <Grid container justify="center" spacing={spacing}>
                        { renderEvents() }
                    </Grid>
                </Grid>
            </Grid>
        )
}

const mapStateToProps = state => ({events: state.events.events})

export default connect(mapStateToProps)(EventList)