import React, {useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import EventCard from '../../components/event-card/index';
import Filter from '../../components/filter-paper/index';

import { getEventList } from '../../actions/events.actions';

import './event-list.css';
import { connect } from 'react-redux';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
    },
    control: {
      padding: theme.spacing(2),
    },
  }));

function EventList({ events, categories, getEvents }) {
    useEffect(() => {
        getEvents()
      }, [])

    const classes = useStyles();
    const [spacing] = React.useState(6);

        return (
            <div className={classes.root}>
                <Filter />
                <Grid container spacing={spacing}>
                    { renderEvents(events) }
                </Grid>
            </div>
        )
}

const renderEvents = (events) => {
    return events.map((i, index) => (
        <Grid key={index} item>
            <EventCard name='Oleksii' posted_data='16-03-20' description='' details='' 
             categories={i.categories} 
             adress='' data='22-04-20'/>
        </Grid>
    ));
}

const mapStateToProps = state => ({
    events: state.events.filteredEvents,
    categories: state.categories
})
const mapDsipatchToProps = dispatch => ({
    getEvents: () => {dispatch(getEventList)}
});

export default connect(mapStateToProps, mapDsipatchToProps)(EventList)