import React from 'react';

const Blog = () => {
    return (
        <div className='text-start container'>
          
            <h1>Q:Difference between authorization and authentication?</h1>
            <p>Ans: 1.Authorization determines whether one is authorized to access the resources. Authentication confirms one identity to grant access to the system.
                2.Authorization is the process of verifying users. Authentication is the process of validating users.
                3.Factor required for authorization may vary depending on security level but Authentication usually requires a username and a password.
                4.Authorization is done after successful authentication but Authentication is the first step of authorization.
            </p>

            <h1>Q:Why are you using firebase? What other options do you have to implement authentication?</h1>
            <p>Ans:Firebase manages all data real-time in the database. So, the exchange of data to and fro from the database is easy and quick. Hence, if you are looking to develop mobile apps such as live streaming, chat messaging, etc., you can use Firebase.Firebase allow syncing the real-time data across all the devices- Android, iOS, and the web without refreshing the screen.
                <br />Usually, authentication is done of a server by   using of a user name and password. Other ways to authenticate can be through:
                1.cards,
                2.retina scans,
                3.voice recognition,
                4.fingerprints.
            </p>


            <h1>Q:What other services does firebase provide other than authentication?</h1>


            <p>Ans:The other services provide by firebase other than authentication are:
                1.Cloud Firestore
                2.Cloud Functions
                3.Remote Config34568
                4.Hosting
                5.Cloud Storage
                6.Google Analytics
                8.Predictions
                9.Cloud Messaging
                10.Dynamic Links



            </p>

        </div>
    );
};

export default Blog;