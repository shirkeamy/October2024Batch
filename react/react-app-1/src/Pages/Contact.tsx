import React, { useState } from 'react';

const Contact: React.FC = () => {
    const [userName, setUserName] = useState("");
    const [emailId, setEmailId] = useState<string>("");
    return (
        <>
            <h1>Contact Page</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus nostrum eveniet necessitatibus perspiciatis quisquam debitis culpa similique praesentium consequatur officia nesciunt hic iusto laboriosam excepturi, voluptates et rerum molestias pariatur.
            </p>

            <div className="container">
                <h3>
                    User Name - {userName} <br />
                    Email id - {emailId}
                </h3>
                <div className="row">
                    <div className="col-md-6">
                        <input type="text" name="" id="txtUserName"
                            className='form-control'
                            value={userName}
                            onChange={(event) => {
                                let { value } = event.target
                                setUserName(value);
                            }}
                        />
                    </div>
                    <div className="col-md-6">
                        <input type="text" name="" id="txtEmail" className='form-control'
                            value={emailId}
                            onChange={(event) => {
                                let { value } = event.target
                                setEmailId(value);
                            }}
                        />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Contact;