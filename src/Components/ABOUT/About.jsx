import React from 'react';
import { motion } from 'framer-motion';
import './About.css';
import teamImage from '../../assets/images/gn1.jpg'; // Ensure correct image path
import missionImage from '../../assets/images/bl1.jpg'; // Ensure correct image path

const About = () => {
    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className="about_page" id='about'>
            {/* Introduction Section */}
            <motion.div
                className="section introduction"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.8 }}
            >
                <div className="section_content">
                    <img src={teamImage} alt="Our Team" className="section_image" />
                    <div>
                        <h1>About Us</h1>
                        <p>Welcome to our company...</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.</p>
                    </div>
                </div>
            </motion.div>

            {/* Values/Mission Section */}
            <motion.div
                className="section values"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 1 }}
            >
                <div className="section_content">
                    <img src={missionImage} alt="Our Mission" className="section_image" />

                    <div>
                        <h2>Our Values</h2>
                        <p>We believe in...</p>
                        <p>Curabitur sit amet mauris. Morbi in dui quis est pulvinar ullamcorper. Nulla facilisi. Integer lacinia sollicitudin massa. Cras metus. Sed luctus, lectus sit amet luctus vulputate, nisi erat iaculis nibh.</p>
                    </div>
                </div>
            </motion.div>

            {/* More sections as needed... */}
        </div>
    );
}

export default About;
