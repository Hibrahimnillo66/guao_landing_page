import React, {useState} from 'react';
import {
  makeStyles,
} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    cardcontainer: {
        width: '400px',
    },
    cardContent: {
        display: 'flex',
        flexDirection: 'column',
    },
    cardImage: {
        display: 'flex',
        flex: 2,
        position: 'relative',
    },
    cardText: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        //margin: '100px 0 0 0',
        padding: '15px',
        '& p': {
            margin: '0 0 15px 0'
        }
    },
    logoImage: {
        width: '100%',
        position: 'absolute',
    },
    titleText: {
        color: '#06255F',
        fontWeight: 'bold',
        fontSize: '15px',
    },
    bloText: {
        color: '#06255F',
        //fontWeight: 'bold',
        fontSize: '15px',
    },
    dateSection: {
        backgroundColor: '#DE5833',
        position: 'relative',
        borderRadius: '0 150px 150px 0',
        marginTop: '40%',
        marginBottom: '5%',
        padding: '10px 20px',
        color: 'white',
    },
}));

const CardBlogComponent = ({image, date, title, text}) => {

    const classes = useStyles();

    return (
        <div className={classes.cardcontainer}>
                <div className={classes.cardContent}>
                    <div className={classes.cardImage}>
                    <img src={image} className={classes.logoImage} />
                    <div className={classes.dateSection}>{date}</div>
                    </div>
                    <div className={classes.cardText}>
                        <div className={classes.titleText}>
                            <p>{title}</p>
                        </div>
                        <div className={classes.bloText}>
                            <p>{text}</p>
                        </div>
                    </div>
                </div>
        </div>
    )
};

export default CardBlogComponent;