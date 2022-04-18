import React from 'react';

const Blogs = () => {
    return (
        <div className='container mt-5'>
        <h1>Answer:</h1>
            <p>1. Difference between Authentication and Authorization: Authentication is the act of validating that users are whom they claim to be. This is the first step in any security process. But authorization in system security is the process of giving the user permission to access a specific resource or function. This term is often used interchangeably with access control or client privilege.Authentication is usually done by a username and password, and sometimes in conjunction with factors of authentication, which refers to the various ways to be authenticated.On the other hands, authorization determines their ability to access the system and up to what extent. Once their identity is verified by the system after successful authentication, they are then authorized to access the resources of the system.</p>
            <p>2. Firebase is a less technical and time-saving alternative to writing full-fledged backend code for dynamic apps. Being serverless, it removes the need to worry about the technicalities of cloud server configuration. It offers several functions. The Firebase platform is multifaceted, offering build tools and APIs around database management, authentication, push notifications, cloud hosting, and more. With Firebase, it's pretty simple to connect and use built-in third-party authentication providers, including Google, Facebook, Twitter, among others.<br /> Multi-Factor Authentication (MFA) is an authentication method that requires two or more independent ways to identify a user. Examples include codes generated from the user's smartphone, Captcha tests, fingerprints, voice biometrics or facial recognition. MFA authentication methods and technologies increase the confidence of users by adding multiple layers of security. MFA may be a good defense against most account hacks, but it has its own pitfalls. People may lose their phones or SIM cards and not be able to generate an authentication code.</p>
            <p>3. Firebase continues to innovate and dominate the backend as a service (BaaS) market. It has grown so much that it has become a key component of Google's mobile strategy. I am also a Firebase enthusiastic user, but my concerns about its complexity and cost led me to explore other cloud alternatives.Here they are:
                <li>Parse - Open Source Backend Platform;</li>
                <li>Back4app - Parse Hosting Platform;</li>
                <li>Kinvey - Mobile Backend as a Service (mBaaS) for the Enterprise;</li>
                <li>Backendless - Mobile Backend and API Services Platform;</li>
                <li>Kuzzle - Backend for web, hybrid, or native mobile apps and IoT projects;</li>
                <li>Pubnub - Real-time APIs and Global Messaging;</li>
                <li> Kumulos - App Performance Management;</li>
                <li>Game Sparks - Game Backend Platform;</li>
                <li>Hoodie - Generic backend with a client API for Offline First applications;</li>
                <li>Appwrite - Open-Source backend for Flutter developers</li>
                <li>Deployd - Simple core library, with a modular API for your application;</li>
                <li>NHost - Accelerates development and provides full control;</li>
                <li>Amplify JS - Open-source Javascript framework;</li>
                <li> Heroku - Platform as a service backed by Salesforce.</li>
            </p>
        </div>
    );
};

export default Blogs;