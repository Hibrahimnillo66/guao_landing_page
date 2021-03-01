import React, {useState} from 'react';
import {
  fade,
  makeStyles,
} from '@material-ui/core/styles';
import banner from '../images/banner.jpg';
import NavMenu from './NavMenu';
import CreditInfo from './CreditoInfo';
import ContactInfo from './ContactoInfo';
import CardLogoComponent from './CardLogoComponent';
import CardBlogComponent from './CardBlogComponent';
import FooterComponent from './FooterComponent';
import Newsletter from './Newsletter';
import Img1 from '../images/img-03.jpg';
import Img2 from '../images/img-02.jpg';
import Img3 from '../images/img-01.jpg';
import Logo1 from '../images/ara-sinahorro.jpg';
import Logo2 from '../images/ara-rif.jpg';

const useStyles = makeStyles((theme) => ({
    maincontainer: {
        display: 'flex',
        flexDirection: 'column',
    },
    bannerImage: {
        width: '100%',
        margin: '80px 0 0 0',
        position: 'absolute',
        zIndex: '-1',
    },
    creditSection: {
        display: 'flex',
        flexDirection: 'row',
        padding: '100px 100px',
        flex: 1,
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
        },
    },
    logoCardsSection: {
        display: 'flex',
        flexDirection: 'row',
        padding: '100px 100px',
        justifyContent: 'space-between',
        flex: 1,
        flexWrap:'wrap',
    },
    blogCardsSection: {
        display: 'flex',
        flex: 1,
        zIndex: '0',
        margin: '-240px 0 0 0',
        flexDirection: 'column',
        padding: '0 100px',
    },
    blogTitle: {
        color: '#06255F',
        fontWeight: 'bold',
        fontSize: '25px',
    },
    articleText: {
        color: '#DE5833',
        fontWeight: 'bold',
        fontSize: '15px',
        padding: '0 0 40px 0',
        '& p': {
            margin: '0',
        }
    },
    grayBackground: {
        backgroundColor: '#F5F6FA',
        width: '100%',
        height: '250px',
        zIndex: '-1',
    },
    blogCardsRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap:'wrap',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
        },
    }
}));

const MainPage = () => {

    const classes = useStyles();

    return (
        <div className={classes.maincontainer}>
           <NavMenu />
            <img src={banner} className={classes.bannerImage} />
            <div className={classes.creditSection}>
                <CreditInfo />
                <ContactInfo />
            </div>
            <div className={classes.logoCardsSection}>
                <CardLogoComponent
                    image={Img1}
                    logo={Logo1}
                    title={'Nueva Cuenta con ARA'}
                    text={'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took.'}
                />
                <CardLogoComponent
                    image={Img2}
                    logo={Logo2}
                    title={'ARA RIF'}
                    text={'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took.'}
                />
                <CardLogoComponent
                    image={Img3}
                    logo={Logo1}
                    title={'Cuenta con ARA, Cofinanciamiento'}
                    text={'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took.'}
                />
            </div>
            <img src={banner}  className={classes.grayBackground}/>
            <div className={classes.blogCardsSection}>
                <div className={classes.blogTitle}>
                    <p>Nuestro Blog ARA</p>
                </div>
                <div className={classes.articleText}>
                    <p>Ver todos los articulos ></p>
                </div>
                <div className={classes.blogCardsRow}>
                <CardBlogComponent
                    image={Img1}
                    title={'d dummy text ever since the 1500s, when '}
                    date={'11/20/2020'}
                    text={'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took.'}
                />
                    <CardBlogComponent
                    image={Img1}
                    title={'d dummy text ever since the 1500s, when '}
                    date={'11/20/2020'}
                    text={'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took.'}
                />
                    <CardBlogComponent
                    image={Img1}
                    title={'d dummy text ever since the 1500s, when '}
                    date={'11/20/2020'}
                    text={'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took.'}
                />
                </div>
            </div>
            <Newsletter />
            <FooterComponent />
        </div>
    )
};

export default MainPage;