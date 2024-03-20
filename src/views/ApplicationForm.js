import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import './ApplicationForm.css';
import DimensionComponent from '../components/DimensionComponent';
import { Canvas } from '@react-three/fiber';
import * as LR from '@uploadcare/blocks';
import { Widget } from '@uploadcare/react-widget';
import { useNavigate } from 'react-router-dom'; 

LR.registerBlocks(LR);

const ApplicationForm = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const isAffiliated = watch("affiliation", "no"); // Watching the radio button
    const { innerWidth: width, innerHeight: height } = window;
    const [fileUrl, setFileUrl] = useState('')
    const [showSuccessAnimation, setShowSuccessAnimation] = useState(false); // New state for the animation
    const navigate = useNavigate(); // Initialize navigate function

    const onSubmit = data => {
        console.log(data);
        const formData = {
            fullName: data.fullName,
            email: data.email,
            pronouns: data.pronouns,
            dob: data.dob,
            location: data.location,
            artistBio: data.artistBio,
            fileUrl: fileUrl,
            //upload file request from dropbox or ask for follow up email with 
            projectDesc: data.projectDesc,
            affiliation: data.affiliation,
            affiliationDetails: data.affiliationDetails,
            additionalInfo: data.additionalInfo
        };

        emailjs.send('service_xv9wkqe', 'template_zujncxw', formData, 'slEBWGhWka7S9f55f')
            .then((result) => {
                console.log(result.text);
                setShowSuccessAnimation(true); // Show success animation
                setTimeout(() => {
                    setShowSuccessAnimation(false); // Hide animation after it's done
                    navigate('/'); // Redirect to homepage
                }, 2500); // Adjust the timeout to match your animation duration
            }, (error) => {
                console.log(error.text);
                alert("Failed to submit the application. Please try again.");
            });
    };
    return (
        <div className="Apply">
            <Canvas className="MainSpace" camera={{ position: [0, 0, 1], aspect: width / height, fov: 100 }} gl={{ antialias: false, stencil: false, depth: false }} >
                <ambientLight intensity={0.5} />
                <DimensionComponent />
            </Canvas>
            <div className="form-container">
                <form className="application-form" onSubmit={handleSubmit(onSubmit)}>
                    <h2>Open Call for Artists - Application Form</h2>
                    <h2>Deadline: April 15th 2024</h2>
                    <div className="form-group">
                        <label htmlFor="fullName">Full Name</label>
                        <input type="text" id="fullName" {...register("fullName", { required: true })} />
                        {errors.fullName && <span>This field is required</span>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input type="email" id="email" {...register("email", { required: true })} />
                        {errors.email && <span>This field is required</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="pronouns">Pronouns</label>
                        <input type="text" id="pronouns" {...register("pronouns", { required: true })} />
                        {errors.pronouns && <span>This field is required</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="dob">Date of Birth</label>
                        <input type="date" id="dob" {...register("dob", { required: true })} />
                        {errors.dob && <span>This field is required</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="location">Location</label>
                        <input type="text" id="location" {...register("location", { required: true })} />
                        {errors.pronouns && <span>This field is required</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="artistBio">Artist Bio</label>
                        <textarea id="artistBio" {...register("artistBio", { required: true })} />
                        {errors.artistBio && <span>This field is required</span>}
                    </div>
                    <div className="form-group">
                        
                        <label htmlFor="file">Project Documentation / Proposal *</label>
                        <p className='asterisk'>PDF is prefered. Please include your name in the file name</p>
                        <p className='asterisk'>* For large files/video (≥10 MB), or for multiple submissions, please email composantm@gmail.com with your file(s) as an attachement and your name in the subject</p>
                        <Widget
                            publicKey="cfdb03f9e709e945d733"
                            id="file"
                            onChange={(fileInfo) => setFileUrl(fileInfo.cdnUrl)}
                        />
                        {fileUrl && <p>File uploaded successfully: <a href={fileUrl}>View File</a></p>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="projectDesc">Work Description (incl. size, medium, year, installation needs)</label>
                        <textarea id="projectDesc" {...register("projectDesc")} />
                    </div>

                    <div className="form-group">
                        <label>Are you affiliated with a school or organization?</label>
                        <label><input type="radio" value="yes" {...register("affiliation", { required: true })} /> Yes</label>
                        <label><input type="radio" value="no" {...register("affiliation", { required: true })} /> No</label>
                        {errors.affiliation && <span>This field is required</span>}
                    </div>

                    {isAffiliated === "yes" && (
                        <div className="form-group">
                            <label htmlFor="affiliationDetails">Affiliation Details</label>
                            <input type="text" id="affiliationDetails" {...register("affiliationDetails", { required: true })} />
                            {errors.affiliationDetails && <span>This field is required</span>}
                        </div>
                    )}

                    <div className="form-group">
                        <label htmlFor="additionalInfo">Additional information/questions? (Ex: links to portfolio, artist CV, other works, social media handle, etc.)</label>
                        <textarea id="additionalInfo" {...register("additionalInfo")} />
                    </div>
                    
                    <button type="submit">Submit Application</button>
                </form>
                {showSuccessAnimation && <div className="success-animation">✔</div>}
            </div>
        </div>
    );
};

export default ApplicationForm;