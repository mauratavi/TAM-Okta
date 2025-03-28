import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const AuthProfile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        <article className='column'>
            <ul>
            {Object.keys(user).map((objKey, i) => (
                <li key={i}>{objKey}: {user[objKey]}</li>
            ))}
        </ul>
        </article>
      </div>
    )
  );
};

export default AuthProfile;