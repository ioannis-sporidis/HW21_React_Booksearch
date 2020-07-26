import React from 'react';
import { Typography, Card, CardContent } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: 128,
        background: '#2196f3'
    }
}));

const Jumbotron = props => {

    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography variant='h2' align='center'>
                    Google Book Search
                    </Typography>
                <Typography variant='subtitle1' align='center'>
                    Start by typing a book title.
                    </Typography>
                <Typography variant='subtitle1' align='center'>
                    Sort results by clicking on any of the headers.
                    </Typography>
                {props.searchBox}
            </CardContent>
        </Card>
    );
}

export default Jumbotron