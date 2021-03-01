import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import logo from '../images/logo.png'
import MoreIcon from '@material-ui/icons/MoreVert'
import {
  IconButton,
  MenuItem,
  Menu
} from '@material-ui/core'
import PhoneIcon from '@material-ui/icons/Phone'

const useStyles = makeStyles((theme) => ({

  navMenu: {
    boxShadow: '0 2px 5px #7F7F7F',
    position: 'fixed',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    zIndex: 1
  },
  logoContainer: {
    padding: '10px 50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  navLogo: {
    backgroundColor: 'black',
    width: '35%'
  },
  navItems: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: '0 20px',
    display: 'none',
    [theme.breakpoints.up('lg')]: {
      display: 'flex'
    }
  },
  navItem: {
    color: '#06255F',
    fontWeight: 'bold',
    padding: '0 10px',
    fontSize: '14px',
    textTransform: 'uppercase',
    '&:hover': {
      cursor: 'pointer',
      color: '#DE5833'
    }
  },
  button1Style: {
    borderRadius: '20px',
    border: '2px solid #06255F',
    backgroundColor: 'white',
    color: '#06255F',
    fontSize: '12px',
    fontWeight: 'bold',
    padding: '8px 15px',
    // letterSpacing: '1px',
    // textTransform: 'uppercase',
    cursor: 'pointer',
    outline: 'none',
    margin: '15px auto 15px auto',
    display: 'flex',
    flexDirection: 'row',
    //wordBreak: 'break-all',
    alignItems: 'center',
    '&:hover': {
      backgroundColor: '#06255F',
      color: 'white',
      border: '2px solid #06255F'
    }
  },
  button2Style: {
    borderRadius: '20px',
    border: '2px solid #DE5833',
    backgroundColor: '#DE5833',
    color: 'white',
    fontSize: '12px',
    fontWeight: 'bold',
    padding: '8px 15px',
    // letterSpacing: '1px',
    // textTransform: 'uppercase',
    cursor: 'pointer',
    outline: 'none',
    margin: '15px auto 15px auto',
    '&:hover': {
      backgroundColor: '#06255F',
      color: 'white',
      border: '2px solid #06255F'
    }
  },
  sectionMobile: {
    display: 'none',
    [theme.breakpoints.down('md')]: {
      display: 'flex'
    }
  }
}))

const NavMenu = () => {
  const classes = useStyles()
  // const [selectedItem, setSelectedItem] = useState()
  // const [anchorEl, setAnchorEl] = useState(null)
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null)

  // const isMenuOpen = Boolean(anchorEl)
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null)
  }

  // const handleMenuClose = () => {
  //   setAnchorEl(null)
  //   handleMobileMenuClose()
  // }

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget)
  }

  const mobileMenuId = 'primary-search-account-menu-mobile'
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      // data-html2canvas-ignore="true"
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}>
      <MenuItem>
      </MenuItem>
      <MenuItem>
        <div className={classes.navItem}>
          <p>DESARROLLOS</p>
        </div>
      </MenuItem>
      <MenuItem>
        <div className={classes.navItem}>
          <p>CONCEPTOS</p>
        </div>
      </MenuItem>
      <MenuItem>
        <div className={classes.navItem}>
          <p>PROMOCIONES</p>
        </div>
      </MenuItem>
      <MenuItem>
        <div className={classes.navItem}>
          <p>CREDITOS</p>
        </div>
      </MenuItem>
      <MenuItem>
        <div className={classes.navItem}>
          <p>BUROS</p>
        </div>
      </MenuItem>
      <MenuItem>
        <div className={classes.navItem}>
          <p>CONVENIOS</p>
        </div>
      </MenuItem>
      <MenuItem>
        <div className={classes.navItem}>
          <p>CONTACTO</p>
        </div>
      </MenuItem>
      <MenuItem>
        <div className={classes.navItem}>
          <button className={classes.button1Style}><PhoneIcon fontSizeSmall />800-000-0000</button>
        </div>
      </MenuItem>
      <MenuItem>
        <div className={classes.navItem}>
          <button className={classes.button2Style}>¿Podemos Ayudarte?</button>
        </div>
      </MenuItem>
    </Menu>
  )

  return (
      <nav className={classes.navMenu}>
        <div className={classes.logoContainer}>
          <img src={logo} className={classes.navLogo} />
        </div>
        <div className={classes.navItems}>
          <div className={classes.navItem}>
            <p>DESARROLLOS</p>
          </div>
          <div className={classes.navItem}>
            <p>CONCEPTOS</p>
          </div>
          <div className={classes.navItem}>
            <p>PROMOCIONES</p>
          </div>
          <div className={classes.navItem}>
            <p>CREDITOS</p>
          </div>
          <div className={classes.navItem}>
            <p>BUROS</p>
          </div>
          <div className={classes.navItem}>
            <p>CONVENIOS</p>
          </div>
          <div className={classes.navItem}>
            <p>CONTACTO</p>
          </div>
          <div className={classes.navItem}>
            <button className={classes.button1Style}><PhoneIcon />800-000-0000</button>
          </div>
          <div className={classes.navItem}>
            <button className={classes.button2Style}>¿Podemos Ayudarte?</button>
          </div>
        </div>
        <div className={classes.sectionMobile} data-html2canvas-ignore="true">
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit">
              <MoreIcon />
            </IconButton>
        </div>
        {renderMobileMenu}
      </nav>
  )
}

export default NavMenu
