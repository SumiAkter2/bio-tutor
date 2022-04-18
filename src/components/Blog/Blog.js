import React from 'react';

const Blog = () => {
    return (
        <div >
            <h1>Blogs</h1>
            <h1>Q:Difference between authorization and authentication?</h1>
<p>Ans: 1.Authorization determines whether one is authorized to access the resources. Authentication confirms one identity to grant access to the system.
2.Authorization is the process of verifying users. Authentication is the process of validating users.
3.Factor required for authorization may vary depending on security level but Authentication usually requires a username and a password.
4.Authorization is done after successful authentication but Authentication is the first step of authorization.     
</p>

            <h1>Q:Why are you using firebase? What other options do you have to implement authentication?</h1>
<p>Ans:Firebase manages all data real-time in the database. So, the exchange of data to and fro from the database is easy and quick. Hence, if you are looking to develop mobile apps such as live streaming, chat messaging, etc., you can use Firebase.Firebase allow syncing the real-time data across all the devices- Android, iOS, and the web without refreshing the screen.

</p>


            <h1>Q:What other services does firebase provide other than authentication?</h1>


<p>Ans:</p>

        </div>
    );
};

export default Blog;