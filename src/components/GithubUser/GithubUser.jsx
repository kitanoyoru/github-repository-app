import React, { useEffect } from "react";

import { fetchUserData } from "../../api/fetchUserData";
import { userDataSelector } from "../../reduxStore/selectors/userDataSelector";

import { ClipLoader } from "react-spinners";

import { useDispatch, useSelector } from "react-redux";

const GithubUser = () => {
  const dispatch = useDispatch();
  const { userData, loading } = useSelector(userDataSelector);

  useEffect(() => dispatch(fetchUserData()), [dispatch]);

  if (!userData && !loading) {
    return <p>Blank page</p>;
  }

  if (loading) {
    return <ClipLoader color="#000000" loading={loading} />;
  }

  return (
    <div className="github-user-profile">
      <img src={userData["user"]["avatar_url"]} />
      <h2>{userData["user"]["login"]}</h2>
      <p>{userData["user"]["name"]}</p>
      <p>{userData["user"]["location"]}</p>
    </div>
  );
};

export default GithubUser;
