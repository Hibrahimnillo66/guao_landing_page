import React, {useState} from 'react';
import {
  makeStyles,
} from '@material-ui/core/styles';
import NearMeIcon from '@material-ui/icons/NearMe';

const useStyles = makeStyles((theme) => ({
    newsLetterContainer: {
        backgroundColor: '#F5F6FA',
        margin: '100px 0 0 0',
        display: 'flex',
        flex: 1,
    },
    newsLetterRow: {
        display: 'flex',
        flexDirection: 'row',
        padding: '20px 100px',
        alignItems: 'center',
        flex: 1,
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            padding: '30px 100px',
        },
    },
    newsLetterTitle: {
        textTransform: 'uppercase',
        color: '#06255F',
        fontWeight: 'bold',
        fontSize: '30px',
        '& p': {
            margin: '0'
        }
    },
    newsLetterText: {
        color: '#06255F',
        fontSize: '15px',
    },
    newsLetterParag: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
    },
    newsLetterInputContainer: {
        display: 'flex',
        flex: 2,
        height: '30px',
        justifyContent: 'flex-end',
    },
    newsLetterInput: {
        width: '60%',
        padding: '0 20px',
    },
}));

const Newsletter = () => {

    const classes = useStyles();

    return (
        <div className={classes.newsLetterContainer}>
            <div className={classes.newsLetterRow}>
                <div className={classes.newsLetterParag}>
                    <div className={classes.newsLetterTitle}>
                        <p>NEWSLETTER</p>
                    </div>
                    <div className={classes.newsLetterText}>
                        <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy.</p>
                    </div>
                </div>
                <div className={classes.newsLetterInputContainer}>
                    <input className={classes.newsLetterInput} type="email" placeholder="Escribe un Email"></input>
                    <button type="submit"><NearMeIcon /></button>
                </div>
            </div>
        </div>
    )
};

export default Newsletter;