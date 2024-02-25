import React from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import './ApplicationForm.css';
import DimensionComponent from '../components/DimensionComponent';
import { Canvas } from '@react-three/fiber';

const ApplicationForm = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const isAffiliated = watch("affiliation", "no"); // Watching the radio button
    const { innerWidth: width, innerHeight: height } = window;

    const onSubmit = data => {
        console.log(data);
        const formData = {
            fullName: data.fullName,
            email: data.email,
            pronouns: data.pronouns,
            dob: data.dob,
            location: data.location,
            artistBio: data.artistBio,
            //upload file request from dropbox or ask for follow up email with 
            affiliation: data.affiliation,
            affiliationDetails: data.affiliationDetails,
            additionalInfo: data.additionalInfo
        };

        emailjs.send('service_xv9wkqe', 'template_zujncxw', formData, 'slEBWGhWka7S9f55f')
            .then((result) => {
                console.log(result.text);
                alert("Application submitted successfully!");
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
                        <label htmlFor="file">Portfolio File (optional)</label>
                        <input type="file" id="file" {...register("file")} />
                        {/* No validation error for optional file */}
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
                        <label htmlFor="additionalInfo">Any additional information/questions? (Ex: social media handle, links to portfolio, video, proposal, etc.)</label>
                        <textarea id="additionalInfo" {...register("additionalInfo")} />
                    </div>
                    
                    <button type="submit">Submit Application</button>
                </form>
            </div>
        </div>
    );
};

export default ApplicationForm;