import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CovidCard from '../components/Card';
import CovidGraph from '../components/Graph';
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
        fontWeight: '100',
        lineHeight: 2
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
    textWrapper: {
        paddingTop: theme.spacing(5),
        marginTop: 20,
        fontWeight: 'bolder'
    },
    textWrapper2: {
        paddingTop: theme.spacing(1),
        marginTop: 20,
        fontWeight: 'bolder'
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
}));

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
                {/* Body */}
                <Container>
                    <Grid container>
                        <Grid item xs={12} md={4}>
                            <Typography variant="h3" align="left" className={classes.textWrapper} gutterBottom>
                                Indonesia
                            </Typography>
                            <Typography variant="subtitle2" align="left" style={{ fontWeight: '100', lineHeight: 2 }}>
                                Latest update on confirmed cases,
                                people recovered & total death in
                                Indonesia.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <CovidCard />
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={12} md={4}>
                            <Typography variant="h3" align="left" className={classes.textWrapper2} gutterBottom>
                                Graphic Statistic
                            </Typography>
                            <Typography variant="subtitle2" align="left" style={{ fontWeight: '100', lineHeight: 2 }}>
                                Latest update in graphic on confirmed
                                cases, people recovered & total death in
                                Indonesia.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <CovidGraph />
                        </Grid>
                    </Grid>
                </Container>
                {/* End Body */}
            </main>
            {/* Footer */}
            <Footer />
        </div>
    );
}