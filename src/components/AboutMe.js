import abme from './AboutMe.module.css'
import { About } from './About';
import aboutImage from '../assets/about_me_image.jpg'
import myCV from '../files/my_cv_ind.pdf';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
export const AboutMe = () => {
    useEffect(()=>{
        window.scrollTo(0,0);
    },[])
    return (
        <div className={abme.main_container}>
            <section className={abme.container}>
                <section className={abme.about_img_container}>
                    <img src={aboutImage} className={abme.about_img} alt='about_img'/>
                    <h3 className={abme.name}>Suman Biswas</h3>
                </section>
                <ul className={abme.about_info}>
                    <li>sumanbiswas842001@gmail.com</li>
                    <li>instagram : sumanbiswas7</li>
                    <li>+91-740 799 2473</li>
                </ul>
            </section>
            <p style={{ textAlign: 'center' }}>
                <Link className={abme.download_btn} to={myCV} target="_blank" download>Download My CV</Link>
            </p>
            <About />
        </div>
    );
};