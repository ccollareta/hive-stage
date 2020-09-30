import { Link } from 'gatsby';
import React from 'react';


const PostFoot = () => (
    <div className="form-card card-popup lity-hide" id="submit-idea">
    <form className="form">
        <h2 className="text-center">Submit An Idea</h2>
        <div className="form-group">
            <label>What is your name?</label>
            <div className="row">
                <div className="col col-6">
                    <input type="text" className="form-control" name="name" placeholder="First name" />
                </div>
                <div className="col col-6">
                    <input type="text" className="form-control" name="name" placeholder="Last name" />
                </div>
            </div>
        </div>
        <div className="form-group">
            <label>What is your email?</label>
            <input type="email" className="form-control" name="email" placeholder="Enter your email address" />
        </div>
        <div className="form-group">
            <label>What is your submission?</label>
            <textarea className="form-control" rows="5" placeholder="Let us know how we can help"></textarea>
        </div>
        <label className="custom-checkbox">
            I consent to having this website store my submitted information so they can
            respond to my inquiry.*
            <input type="checkbox" defaultChecked />
            <span className="checkmark"></span>
        </label>
        <div className="submit-btn text-center">
            <a href="#" className="btn rounded">Submit</a>
        </div>
        <p className="terms text-center">
            By submitting this form, you accept our <a href="#" className="text-underline">Terms of
                Use</a> and <a href="#" className="text-underline">Privacy Policy.</a>
        </p>
    </form>
</div>
);

export default PostFoot;
