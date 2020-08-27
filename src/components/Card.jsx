import React, { useEffect, useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import AddIcon from '@material-ui/icons/Add';
import CheckIcon from '@material-ui/icons/Check';
import RemoveIcon from '@material-ui/icons/Remove';
import axios from 'axios';

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
    icon: {
        fontSize: 30,
        color: 'red'
    },
    textTitle: {
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

function BaseCard({ ...props }) {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
                <Typography variant="h6" align="left" className={classes.textTitle} gutterBottom>
                    <div className={classes.icon}>
                        {props.icon}
                    </div>
                    {props.title}
                </Typography>
                <Typography variant="h3" align="left" className={classes.textAmount}>
                    {props.amount}
                </Typography>
                <Typography variant="subtitle2" align="left" className={classes.textDescription}>
                    {props.description}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default function FixedCard() {
    const classes = useStyles();
    // Data yang akan digunakan - Set awal dengan array kosong
    const [data, setData] = useState([])

    // useEffect - merupakan lifecyle react hook yang jalan pertama kali disaat page dikunjungi / direfresh
    useEffect(() => {
        // Variable baru
        let fetchData;
        axios.get('https://api.coronatracker.com/v3/stats/worldometer/country?countryCode=ID')
            .then(res => {
                // ternary (if else) - Jika berhasil mendapatkan data dari api maka data diset dengan fetchData yang merupakan data dari api(res.data[0]).
                fetchData = res ? res.data[0] : []
                setData(fetchData)
            })
            .catch(err => {
                // Jika gagal mendapatkan data dari api maka data akan diset menjadi array kosong
                setData([])
            })
    }, [])

    const cardData = [
        {
            id: 1,
            icon: <AddIcon />,
            title: "Case Confirmed",
            // data totalConfirmed
            amount: data.totalConfirmed ? data.totalConfirmed.toLocaleString() : 0,
            description: "Total of confirmed cases."
        },
        {
            id: 2,
            icon: <CheckIcon style={{ color: 'green' }} />,
            title: "Case Recovered",
            // data totalRecovered
            amount: data.totalRecovered ? data.totalRecovered.toLocaleString() : 0,
            description: "Total of recovered cases."
        },
        {
            id: 3,
            icon: <RemoveIcon style={{ color: 'black' }} />,
            title: "Case Death",
            // data totalDeaths
            amount: data.totalDeaths ? data.totalDeaths.toLocaleString() : 0,
            description: "Total of death cases."
        }
    ]

    return (
        <div>
            <Container className={classes.cardGrid}>
                <Grid container spacing={4}>
                    {cardData.map((data) => (
                        <Grid item key={data.id} xs={12} md={6}>
                            <BaseCard icon={data.icon} title={data.title} amount={data.amount} description={data.description} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    );
}