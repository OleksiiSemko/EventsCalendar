import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';

import { connect } from 'react-redux';

import { onChange } from '../../actions/filter.actions';
import { filterEvents } from '../../actions/events.actions';
const useStylesPage = makeStyles(theme => ({
    root: {
      width: 300,
      height: theme.spacing(21),
      position: '-webkit-sticky',
      position: 'sticky',
      top: '4rem',
      alignSelf: 'flex-start',
      margin: 20,
    },
}));

const useStylesForm = makeStyles(theme => ({
    root: {
      display: 'flex',
      marginLeft: 20,
    },
    formControl: {
      margin: theme.spacing(3),
    },
    button: {
      justifyContent: 'center'
    },
  }));


function Filter({ categories, events, handleChange, filterEvents }) {
    const classesPage = useStylesPage();
    const classesForm = useStylesForm();
    const { concerts, family, arts } = categories;

    // Filter events
    function handleFilter () {
      let filteredEvents = {};
      let allFalse = true;
      for (let i in categories) {
        if (categories[i] === true) {
          allFalse = false;
          break;
        }
      }
      if (!allFalse) {
        filteredEvents = events.filter(event => 
          event.categories.some(category => categories[category])
        )
      } else {
        filteredEvents = events;
      }
      filterEvents(filteredEvents);
    }

    return (
        <Paper elevation={3} className={classesPage.root}>
          <FormGroup className={classesForm.root}>
            <FormControlLabel
                control={<Checkbox checked={ concerts } onChange={() => handleChange('concerts')} value="concerts" />}
                label="concerts"
            />
            <FormControlLabel
                control={<Checkbox checked={family} onChange={() => handleChange('family')} value="family" />}
                label="family"
            />
            <FormControlLabel
                control={
                <Checkbox checked={arts} onChange={() => handleChange('arts')} value="arts" />
                }
                label="arts"
            />
            <FormControlLabel
              className={classesForm.button}
              control={
                <Button variant="contained" onClick={handleFilter}>Filter</Button>
              }
              />
          </FormGroup>
        </Paper>
    );
  }

  const mapStateToProps = state => ({
    categories: state.categories,
    events: state.events.events
  })
  const mapDispatchToProps = dispatch => ({
    handleChange: name => {dispatch(onChange(name))},
    filterEvents: filteredEvents => {dispatch(filterEvents(filteredEvents))}
  })

  export default connect(mapStateToProps, mapDispatchToProps)(Filter)