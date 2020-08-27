import React, { useState, useEffect } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import axios from 'axios';
import Format from '../helpers/DateFormat';

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
    graph: {
        paddingTop: theme.spacing(2),
        paddingRight: theme.spacing(4)
    }
}));

function BaseChart() {
    const classes = useStyles();
    // Data yang akan digunakan - Set awal dengan array kosong
    const [data, setData] = useState([])

    // useEffect - merupakan lifecyle react hook yang jalan pertama kali disaat page dikunjungi / direfresh
    useEffect(() => {
        // Variable baru
        let fetchData, formatData;
        axios.get('http://api.coronatracker.com/v3/analytics/trend/country?startDate=2020-03-01&endDate=2020-03-31&countryCode=ID')
            .then(res => {
                // ternary (if else) - Jika berhasil mendapatkan data dari api maka data diset dengan fetchData yang merupakan data dari api(res.data).
                fetchData = res ? res.data : []
                // ternary (if else) - Jika berhasil mendapatkan data dari fetchData maka data tersebut akan dimapping dan diubah isian dalam objectnya dan data last_updated diformat menjadi tanggal yang mudah dipahami.
                formatData = fetchData ? fetchData.map((x, i) => ({ date: Format.DateOnly(x.last_updated), total_confirmed: x.total_confirmed, total_deaths: x.total_deaths })) : []
                setData(formatData)
            })
            .catch(err => {
                // Jika gagal mendapatkan data dari api maka data akan diset menjadi array kosong
                setData([])
            })
    }, [])

    return (
        <div className={classes.graph}>
            <ResponsiveContainer height={400}>
                <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5, right: 30, left: 20, bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    {/* Line chart untuk total kasus terkonfirmasi */}
                    <Line type="monotone" dataKey="total_confirmed" stroke="#8884d8" activeDot={{ r: 8 }} />
                    {/* Line chart untuk total kasus kematian */}
                    <Line type="monotone" dataKey="total_deaths" stroke="#FF0000" activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

export default function ReCharts() {
    const classes = useStyles();

    return (
        <Container className={classes.cardGrid}>
            <Grid container>
                <Card className={classes.card}>
                    <CardContent className={classes.cardContent}>
                        <BaseChart />
                    </CardContent>
                </Card>
            </Grid>
        </Container>
    )
}