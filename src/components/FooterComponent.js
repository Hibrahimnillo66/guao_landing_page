import React, {useState} from 'react';
import {
  makeStyles,
} from '@material-ui/core/styles';
import logo from '../images/logo.png';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';

const useStyles = makeStyles((theme) => ({
    footerContainer: {
        backgroundColor: '#313131',
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
    },
    footerRow: {
        display: 'flex',
        flexDirection: 'row',
        color: 'white',
        justifyContent: 'space-between',
        flex: 1,
        borderBottom: '1px solid #939393',
        padding: '50px 100px',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
        }
    },
    footerLogo: {
        width: '100%'
    },
    logoContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'left',
        width: '15%'
    },
    bottomFooter: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        padding: '40px 0',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        },
        '& p': {
            padding: '10px 0'
        }
    },
    socialMediaIcons: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        padding: '30px 0 0 0',
        width: '40%',
    },
    textType1: {
        color: '#939393',
        margin: '0',
    },
    textType2: {
        color: '#C43A0E',
        margin: '0',
    },
    button2Style: {
        borderRadius: '20px',
        border: '2px solid #C43A0E',
        backgroundColor: '#C43A0E',
        color: 'white',
        fontSize: '17px',
        fontWeight: 'bold',
        padding: '10px 15px',
        // letterSpacing: '1px',
        textTransform: 'uppercase',
        cursor: 'pointer',
        outline: 'none',
        margin: '35px auto 0 auto',
        '&:hover': {
        backgroundColor: '#06255F',
        color: 'white',
        border: '2px solid #06255F'
        }
    }
}));

const FooterComponent = () => {

    const classes = useStyles();

    return (
        <div className={classes.footerContainer}>
            <div className={classes.footerRow}>
                <div className={classes.logoContainer}>
                    <img src={logo} className={classes.footerLogo} />
                    <div className={classes.socialMediaIcons}>
                        <FacebookIcon />
                        <YouTubeIcon />
                        <TwitterIcon />
                    </div>
                </div>
                <div>
                    <h2>Consorcio ARA</h2>
                    <p className={classes.textType1}>Acerca de ARA</p>
                    <p className={classes.textType1}>Relación con Inversionistas</p>
                    <p className={classes.textType1}>Bolsa de trabajo</p>
                    <h2>Horario de Atención</h2>
                    <p className={classes.textType1}>Lunes a viernes 9:00 - 21:00</p>
                    <p className={classes.textType1}>Fin de semana 10:00 - 18:00</p>
                </div>
                <div>
                    <h2>Tipo de Casas</h2>
                    <p className={classes.textType1}>Social</p>
                    <p className={classes.textType1}>Medio</p>
                    <p className={classes.textType1}>Dream Lagoons</p>
                    <p className={classes.textType1}>Residencial</p>
                    <p className={classes.textType1}>Residencial Plus</p>
                </div>
                <div>
                    <h2>Contacto</h2>
                    <p className={classes.textType1}>Llámanos gratis:</p>
                    <p className={classes.textType2}>800 022 0581</p>
                    <p className={classes.textType1}>Desde el extranjero</p>
                    <p className={classes.textType2}>+1 866 257 0025</p>
                    <p className={classes.textType1}>Correo electronico</p>
                    <p className={classes.textType2}>contacto@ara.com.mx</p>
                </div>
                <div>
                    <h2>Servicios Postventa</h2>
                    <p className={classes.textType1}>En México:</p>
                    <p className={classes.textType2}>800 546 3272</p>
                    <p className={classes.textType1}>Correo electrónico</p>
                    <p className={classes.textType2}>lineara@ara.com.mx</p>
                    <div className={classes.navItem}>
                        <button className={classes.button2Style}>PAGAR EN LINEA</button>
                    </div>
                </div>
            </div>
            <div className={classes.bottomFooter}>
                <div>
                    <p className={classes.textType1}>Términos y condiciones</p>
                </div>
                <div>
                    <p className={classes.textType1}>Políticas de privacidad</p>
                </div>
                <div>
                    <p className={classes.textType1}>CONSORCIO ARA S.A. DE C.V.</p>
                </div>
            </div>
        </div>
    )
};

export default FooterComponent;