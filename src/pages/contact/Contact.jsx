import React, { useState } from "react";
import Joi from "joi";
import moment from "moment";

import { toast } from "react-toastify";

import "../contact/Contstyles.css";
import Googlemap from "./Googlemap";

const axios = require("axios").default;

const api = axios.create({
    baseURL: "http://localhost:3000/api",
});

function SignUp() {
    /* Defining a customer state and setCustomer hook*/
    const [customer, setCustomer] = useState({
        firstName: "",
        lastName: "",
        dob: "",
        addressLine1: "",
        addressLine2: "",
        postalCity: "",
        district: "",
        phone: "",
        email: "",
        username: "",
        password: "",
        confirmPassword: "",
    });

    /* Formatting current date to match date picker format */
    let date = moment();
    date = date.subtract(18, "y").format("MM/DD/YYYY");

    /* Validation schema for signup form */
    const validationSchema = Joi.object({
        firstName: Joi.string().min(2).required(),
        lastName: Joi.string().optional().allow("").min(2),
        dob: Joi.date().max(date).required(),
        addressLine1: Joi.string().optional().allow(""),
        addressLine2: Joi.string().optional().allow(""),
        postalCity: Joi.string().optional().allow(""),
        district: Joi.string().optional().allow(""),
        phone: Joi.number().required(),
        email: Joi.string().required(),
        username: Joi.string().required(),
        password: Joi.string().min(8).max(16).required(),
        confirmPassword: Joi.ref("password"),
    });

    /* Manually update input value */
    const handleInputValues = (event) => {
        const target = event.target;

        const name = target.name;
        let value = target.value;

        // formatting if dob field is recieved
        if (name === "dob") {
            value = moment(value).format("YYYY-MM-DD");
            console.log(value);
        }

        setCustomer((prevState) => {
            return { ...prevState, ...{ [name]: value } };
        });
    };

    /* Validates input values with comparison to the Joi validation schema */
    const validateForm = () => {
        const result = validationSchema.validate(customer);

        console.log(result);

        const { error } = result;

        if (error) {
            toast.error(error.toString(), {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

            return false;
        } else {
            return true;
        }
    };

    const registerCustomer = async () => {
        await api
            .post("/customer/register", customer)
            .then((res) => {
                const { status, data } = res;

                if (status === 200) {
                    toast.success(data.message, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }
            })
            .catch((error) => console.log(error));
    };

    /* Function to handle on submit event */
    const onSubmitHandler = (event) => {
        event.preventDefault();

        if (validateForm()) {
            registerCustomer();
        }
    };

    return (
        <div className="page-content my-5">
            <div className="form-v10-content">
                <form
                    className="form-detail"
                    id="registerCustomerForm"
                    onSubmit={onSubmitHandler}>
                    <div className="form-left1 glassy dark">
                        <h2>Our Contact Details</h2>
                        <div className="form-groupped">
                            <div className="form-group">
                                <div className="form-row form-row-1">
                                    Call us :
                                </div>
                                <div className="form-row form-row-2">
                                    <i class="fa fa-phone"></i>
                                    <a href="tel://123456789"> +94 77 1234567</a>
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="form-row form-row-1">
                                    Location :
                                </div>
                                <div className="form-row form-row-1">
                                    <i class="fa a-map-marker"></i>
                                    University Kandy Road Kelaniya, 11600
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="form-row form-row-1">
                                    Send a Email :
                                </div>
                                <div className="form-row form-row-1">
                                    <i class="fa fa-envelope"></i>
                                    laundravillelaundry@gmail.com
                                </div>
                            </div>
                            <div className="form-group">
                                <>
                                    <Googlemap />
                                </>
                            </div>
                        </div>
                    </div>


                    <div className="form-right1 glassy light">
                        <h2 className="text-primary">Your Suggestions</h2>
                        <div className="form-row ">
                            <input
                                type="text"
                                name="firstName"
                                id="firstName"
                                className="input-text"
                                placeholder="Your Name"
                                value={customer.firstName}
                                onChange={handleInputValues}
                            />
                        </div>
                        <div className="form-row ">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className="input-text"
                                placeholder="Your Email"
                                value={customer.email}
                                onChange={handleInputValues} />
                        </div>

                        <div className="form-row">
                            <input
                                type="textarea"
                                name="message"
                                className="message"
                                id="message"
                                placeholder="Your Message"
                                value={customer.phone}
                                onChange={handleInputValues} />
                        </div>

                        <div className="form-row-last">
                            <button
                                type="submit"
                                name="Sendmessage"
                                className="btn btn-primary mb-3">Send Message</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignUp;
