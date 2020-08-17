import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        maxWidth: '380px',
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

const cards = [1, 2, 3];

export default function Dashboard() {
    const classes = useStyles();

    return (
        <div>
            <Container className={classes.cardGrid}>
                <Grid container spacing={4}>
                    {cards.map((card) => (
                        <Grid item key={card} xs={12} md={6}>
                            <Card className={classes.card}>
                                <CardContent className={classes.cardContent}>
                                    <Typography variant="h6" align="left" className={classes.textTitle} gutterBottom>
                                        <div>
                                            <AddIcon style={{ fontSize: 30 }} />
                                        </div>
                                        Case Confirmed
                                    </Typography>
                                    <Typography variant="h3" align="left" className={classes.textAmount}>
                                        139,560
                                    </Typography>
                                    <Typography variant="subtitle2" align="left" className={classes.textDescription}>
                                        Total of confirmed cases.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    );
}