import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: '#1C3E93',
        padding: theme.spacing(4),
    },
}));


export default function Footer() {
    const classes = useStyles();

    return (
        <div className={classes.footer}>
            <Typography variant="body2" align="center" style={{ color: '#fff' }}>
                {'Copyright © '}
                <Link color="inherit" style={{ fontWeight: 'bold' }} href="https://material-ui.com/">
                    Belajar React
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        </div>
    );
}