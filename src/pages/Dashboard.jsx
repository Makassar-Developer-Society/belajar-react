import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Footer from '../components/Footer';

const background = require("../assets/img/covid-bg.png");

const useStyles = makeStyles((theme) => ({
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
        background: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'auto',
        height: '490px',
        position: 'relative',
        overflow: 'hidden'
    },
    headerTitle: {
        fontWeight: 'bold',
        color: '#fff'
    },
    headerDesc: {
        color: '#fff',
        fontWeight: '100'
    },
    headerImgWrapper: {
        marginTop: theme.spacing(4),
    },
    headerImg: {
        width: '100%',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto'
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

export default function Dashboard() {
    const classes = useStyles();

    return (
        <div>
            <CssBaseline />
            <main>
                {/* Header */}
                <div className={classes.heroContent}>
                    <Container maxWidth="sm">
                        <Typography variant="h2" align="center" className={classes.headerTitle} gutterBottom>
                            CovLytics
                        </Typography>
                        <Typography variant="subtitle1" align="center" className={classes.headerDesc}>
                            The Coronavirus (COVID-19) was first reported in Wuhan, China, in December 2019,
                            the outbreak was later recognized as a pandemic by the World Health Organization
                            (WHO) on 11 March 2020.
                        </Typography>
                        <div className={classes.headerImgWrapper}>
                            <Grid container spacing={2} justify="center">
                                <Grid item xs={12} md={12}>
                                    <img src={require("../assets/img/person.png")} alt="Logo" className={classes.headerImg} />
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
                {/* End of Header */}
                <Container className={classes.cardGrid} maxWidth="md">
                    <Grid container spacing={4}>
                        {cards.map((card) => (
                            <Grid item key={card} xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.cardMedia}
                                        image="https://source.unsplash.com/random"
                                        title="Image title"
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Heading
                                        </Typography>
                                        <Typography>
                                            This is a media card. You can use this section to describe the content.
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                            View
                                        </Button>
                                        <Button size="small" color="primary">
                                            Edit
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
            {/* Footer */}
            <Footer />
        </div>
    );
}