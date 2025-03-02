import React, { useState } from "react";
import { onContactSubmit } from "../Utils/Functions";

const Contact: React.FC = () => {
    const [emailId, setEmailId] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [isChecked, setIsChecked] = useState<boolean>(false);

    return (
        <>
            <div className="container">
                <h1>Contact page</h1>
            </div>
            <div className="row mt-5">
                <div className="col-5">

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, omnis repellendus. Aut molestias accusantium sit accusamus at fuga perspiciatis expedita quidem, repudiandae distinctio ullam et dolorum quam sint fugit dolorem?
                    </p>
                    <h3>Lorem, ipsum.</h3>
                    <h4>Entered Email address is &nbsp;
                        <span className="text-warning">{emailId}</span>
                        &nbsp; and password is &nbsp;
                        <span className="text-info">{password}</span> </h4>
                    <p>
                        you have {
                            isChecked ?
                                <strong className="text-success">check the checkbox!</strong> :
                                <strong className="text-danger">not check the checkbox yet!!!</strong>
                        }
                    </p>
                </div>
                <div className="col-5">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                onChange={(e) => {
                                    const { value } = e.target;
                                    setEmailId(value);
                                }}
                            />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="exampleInputPassword1"
                                onBlur={(e) => {
                                    const { value } = e.target;
                                    setPassword(value);
                                }}
                            />
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1"
                                onChange={(e) => {
                                    const { checked } = e.target;
                                    setIsChecked(checked)
                                }}
                            />
                            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                        </div>
                        <button type="button" className="btn btn-primary"
                            onClick={() => { onContactSubmit(emailId, password) }}
                        >Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact;