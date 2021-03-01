import React, {useState} from 'react';
import {
  makeStyles,
} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    cardcontainer: {
        width: '400px',
        [theme.breakpoints.down('md')]: {
            margin: '0 0 30px 0'
        },
    },
    logoCard: {
        boxShadow: '0 2px 5px #7F7F7F',
    },
    cardContent: {
        display: 'flex',
        flexDirection: 'column',
    },
    cardImage: {
        display: 'flex',
        flex: 1,
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
    logoCircle: {
        position: 'relative',
        width: '20%',
        borderRadius: '150px',
        marginTop: '35%',
        left: '78%',
    },
    nuevaAra: {
        color: '#DE5833',
        fontWeight: 'bold',
        fontSize: '20px',
    },
    araText: {
        color: '#06255F',
        fontWeight: 'bold',
        fontSize: '15px',
    },
    masInfo: {
        color: '#DE5833',
        fontWeight: 'bold',
        fontSize: '17px',
    }
    
}));

const CardLogoComponent = ({image, logo, title, text}) => {

    const classes = useStyles();

    return (
        <div className={classes.cardcontainer}>
            <div className={classes.logoCard}>
                <div className={classes.cardContent}>
                    <div className={classes.cardImage}>
                        <img src={image} className={classes.logoImage} />
                        <img src={logo} className={classes.logoCircle} />
                    </div>
                    <div className={classes.cardText}>
                        <div className={classes.nuevaAra}>
                            <p>{title}</p>
                        </div>
                        <div className={classes.araText}>
                            <p>{text}</p>
                        </div>
                        <div className={classes.masInfo}>
                            <p>Mas Información ></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default CardLogoComponent;