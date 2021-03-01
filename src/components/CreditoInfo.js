import React, {useState} from 'react';
import {
  fade,
  makeStyles,
} from '@material-ui/core/styles';
import img4 from '../images/img-04.jpg';

const useStyles = makeStyles((theme) => ({
    creditcontainer: {
        //padding: '120px 0 0 100px',
        display: 'flex',
        flexDirection: 'column',
        flex: 2,

    },
    firstImage: {
        width: '100%',
    },
    regCredit: {
        color: '#06255F',
        fontWeight: 'bold',
    },
    opcCredit: {
        color: '#06255F',
        fontWeight: 'bold',
        fontSize: '25px',
        '& p': {
            margin: '10px 0'
        }
    },
    mejorInv: {
        color: '#DE5833',
        fontWeight: 'bold',
        fontSize: '14px',
        '& p': {
            margin: '0 0 60px 0'
        }
    },
    cuentaAra: {
        color: '#DE5833',
        fontWeight: 'bold',
        fontSize: '25px',
    },
    cuentaAraText: {
        color: '#06255F',
        fontWeight: 'bold',
        fontSize: '14px',
    },
    buttonStyle: {
        borderRadius: '20px',
        border: '2px solid #DE5833',
        backgroundColor: 'white',
        color: '#DE5833',
        fontSize: '12px',
        fontWeight: 'bold',
        padding: '12px 20px',
        // letterSpacing: '1px',
        textTransform: 'uppercase',
        cursor: 'pointer',
        outline: 'none',
        margin: '20px auto 20px auto',
        '&:hover': {
          backgroundColor: '#06255F',
          color: 'white',
          border: '2px solid #06255F',
        },
    }
}));

const CreditInfo = () => {

    const classes = useStyles();

    return (
        <div className={classes.creditcontainer}>
            <div className={classes.regCredit}>
                <p>Regresar a Creditos</p>
            </div>
            <div className={classes.opcCredit}>
                <p>Opciones de Crédito</p>
            </div>
            <div className={classes.mejorInv}>
                <p>Tu mejor inversión es casas ARA</p>
            </div>
            <div>
                <img src={img4} className={classes.firstImage} />
            </div>
           <div className={classes.cuentaAra}>
                <p>Cuenta con ARA</p>
           </div>
            <div className={classes.cuentaAraText}>
                <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>
            <div>
                <button className={classes.buttonStyle}>SOLICITAR INFORMACION</button>
            </div>
        </div>
    )
};

export default CreditInfo;