import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import araIcon from '../images/ara-icon.png'
import PhoneIcon from '@material-ui/icons/Phone'

const useStyles = makeStyles((theme) => ({
  contactcontainer: {
    // padding: '250px 0 0 130px',
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    [theme.breakpoints.down('md')]: {
      margin: '80px 0 0 0',
      alignItems: 'center'
    }
  },
  firstImage: {
    width: '100%'
  },
  contactCard: {
    backgroundColor: '#F5F6FA',
    width: '75%',
    height: '75%',
    boxShadow: '0 2px 5px #7F7F7F'
  },
  logoImage: {
    width: '50%'
  },
  cardTitle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    padding: '0 20px'
  },
  infoContacto: {
    textTransform: 'uppercase',
    color: '#06255F',
    fontWeight: 'bold',
    fontSize: '20px'
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  dudaText: {
    color: '#06255F',
    fontWeight: 'bold',
    fontSize: '14px'
  },
  dudaContact: {
    textTransform: 'uppercase',
    color: '#DE5833',
    fontWeight: 'bold',
    fontSize: '15px'
  },
  llamanosText: {
    color: '#06255F',
    fontWeight: 'bold',
    fontSize: '17px'
  },
  extranText: {
    color: '#06255F',
    fontWeight: 'bold',
    fontSize: '14px'
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '25px 0 0 0'
  },
  buttonStyle: {
    borderRadius: '20px',
    border: '2px solid #06255F',
    backgroundColor: 'white',
    color: '#06255F',
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
      border: '2px solid #06255F'
    }
  },
  telGratis: {
    backgroundColor: '#06255F',
    color: 'white',
    '& p': {
      margin: '0 5px 0 5px',
        padding: '10px 15px',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
    }
  },
  horLunes: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DEDEDE',
    color: '#06255F',
    margin: '10px 0 0 0',
    '& p': {
      margin: '0',
      padding: '10px 15px'
    }
  },
  horFin: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DEDEDE',
    color: '#06255F',
    margin: '10px 0 0 0',
    '& p': {
      margin: '0',
      padding: '10px 15px'
    }
  },
  telExtr: {
    backgroundColor: '#DEDEDE',
    color: '#06255F',
    '& p': {
      margin: '0',
        padding: '10px 15px',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
    }
    },
    phoneIcon: {
        padding: '0 5px'
    },

}))

const ContactInfo = () => {
  const classes = useStyles()

  return (
        <div className={classes.contactcontainer}>
            <div className={classes.contactCard}>
                <div className={classes.cardContent}>
                    <div className={classes.cardTitle}>
                        <div className={classes.infoContacto}>
                            <p>INFORMACION DE CONTACTO</p>
                        </div>
                        <div className={classes.logoContainer}>
                            <img src={araIcon} className={classes.logoImage} />
                        </div>
                    </div>
                    <div className={classes.dudaText}>
                        <p>like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                    <div className={classes.dudaContact}>
                        <p>like Aldus PageMaker</p>
                    </div>
                    <div className={classes.llamanosText}>
                        <p>Llamanos Gratis!</p>
                    </div>
                    <div className={classes.telGratis}>
                        <p><PhoneIcon className={classes.phoneIcon}/>800-000-0000</p>
                    </div>
                    <div className={classes.horLunes}>
                        <p>Lunes a Viernes 9:00 - 21:00</p>
                    </div>
                    <div className={classes.horFin}>
                        <p>Fin de Semana 9:00 - 18:00</p>
                    </div>
                    <div className={classes.extranText}>
                        <p>En el Extranjero</p>
                    </div>
                    <div className={classes.telExtr}>
                        <p><PhoneIcon className={classes.phoneIcon} />800-000-0000</p>
                    </div>
                    <div className={classes.buttonContainer}>
                        <button className={classes.buttonStyle}>SOLICITAR INFORMACION</button>
                    </div>
                </div>

            </div>
        </div>
  )
}

export default ContactInfo
