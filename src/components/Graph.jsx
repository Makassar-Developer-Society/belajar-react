import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    cardGrid: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        boxShadow: '-9px 9px 20px rgb(51 51 51 / 17%), -10px 8px 40px rgb(232 232 232 / 23%)',
        borderRadius: 10
    },
    cardContent: {
        paddingLeft: theme.spacing(5),
        flexGrow: 1,
    },
    textTitle: {
        marginTop: 20,
        fontWeight: 'bold'
    },
    textAmount: {
        marginTop: 20,
        fontWeight: 'bolder'
    },
    textDescription: {
        fontWeight: '100'
    }
}));

export default function BaseCard() {
    const classes = useStyles();

    return (
        <Container className={classes.cardGrid}>
            <Grid container>
                <Card className={classes.card}>
                    <CardContent className={classes.cardContent}>
                        <Typography variant="h6" align="left" className={classes.textTitle} gutterBottom>
                            {/*  */}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Container>
    )
}