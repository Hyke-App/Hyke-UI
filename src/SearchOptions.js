import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel'


const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 300,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export const SearchOptions = (props) => {
    const classes = useStyles();
    const [label, setLabel] = React.useState('');

    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);

    React.useEffect(() => { 
        setLabelWidth(inputLabel.current.offsetWidth); 
    }, []);

    const handleChange = (event) => {
        setLabel(event.target.value);
    }

    return (
        <div>
            <FormControl className={classes.FormControl}>
                <InputLabel id="demo-simple-select-label"> {props.title} </InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={label}
                    onChange={handleChange}
                    autoWidth>
                    {props.options.map((option) => { return <MenuItem value={option.value}>{option.text}</MenuItem> })}
                </Select>
            </FormControl>
        </div> 
    )
}