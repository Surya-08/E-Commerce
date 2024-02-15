import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import userMock from "../mockData/userdata";
import userDetailsActions, {
  addNewUserAction,
  userAuthAction,
} from "../redux/actions/user-login-actions";

const UserRegistration = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((state) => state.UserLoginReducer);
  const [usersResponse, setUsersResponse] = useState([]);
  const [userPwd, setUserPwd] = useState();
  const [validUser, setValidUser] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const newUserDetails = [];
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const handleChange = (name, value) => {
    setFormData((previousVal) => ({ ...previousVal, [name]: value }));
  };
  //To check the signIn/ Login status based on email
  const existedUserData = usersResponse.find(
    (user) => user.email === formData.email
  );
  //to update UI to Log In page on tab out
  const handleBlur = () => {
    const emailExists = usersResponse.some(
      (user) => user.email === formData.email
    );
    if (emailExists) {
      setValidUser(emailExists);
    } else {
      newUserDetails.push(formData);
      dispatch(userDetailsActions(newUserDetails));
    }
  };
  //handler function for account creation
  const handleSubmit = (e) => {
    e.preventDefault();
    // Reset fields after submission
    setFormData({
      userName: "",
      email: "",
      password: "",
    });
    dispatch(userDetailsActions(formData));
    dispatch(userAuthAction(true));
    navigate("/home");
  };
  const handlePassword = (e) => {
    setUserPwd(e.target.value);
    dispatch(userDetailsActions(formData));
  };
  //handler function for login
  const handleContinue = () => {
    if (userPwd === existedUserData.password) {
      navigate("/home");
    }
    dispatch(userAuthAction(true));
  };
  useEffect(() => {
    fetch(`https://fakestoreapi.com/users`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return setUsersResponse(data);
      })
      .catch(() => {
        return setUsersResponse(userMock);
      });
  }, []);
  //to enable continue button after all fields are filled
  useEffect(() => {
    if (
      formData.email !== "" &&
      formData.name !== "" &&
      formData.password !== ""
    ) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [formData]);

  return (
    <div
      className="catergoryList"
      style={{ padding: "20px 20px 20px 32px" }}
      data-testid="signUpPage"
    >
      <div>
        <button className="signUp-container-btn">Sign Up /</button>
        <button className="signUp-container-btn">Login</button>
      </div>

      {!validUser && (
        <div className="catergoryList">
          <div className="checkout">
            <label htmlFor="userName" className="checkout-label">
              Username:
            </label>
            <input
              id="userName"
              type="text"
              name="userName"
              className="checkout-input"
              value={userData.userName || userMock.username}
              onChange={(e) => handleChange("userName", e.target.value)}
            />

            <label htmlFor="email" className="checkout-label">
              Email:
            </label>
            <input
              id="email"
              type="email"
              className="checkout-input"
              name="email"
              value={userData.email || userMock.email}
              onChange={(e) => handleChange("email", e.target.value)}
              onBlur={handleBlur}
            />

            <label htmlFor="password" className="checkout-label">
              Password:
            </label>
            <input
              id="password"
              type="password"
              name="password"
              className="checkout-input"
              value={userData.password || userMock.password}
              onChange={(e) => handleChange("password", e.target.value)}
            />
            <div style={{ marginTop: "20px" }}>
              By creating an account you agree to our{" "}
              <a href="#terms">Terms & Privacy</a>.
            </div>
            <button
              type="submit"
              className="addtocart-btn"
              onClick={handleSubmit}
              style={{ marginTop: "20px" }}
              disabled={isDisabled}
            >
              Create Account
            </button>
          </div>
        </div>
      )}
      {validUser && (
        <div className="checkout login-content">
          <div>
            <p style={{ color: "Red", marginTop: "10px" }}>
              User already have account
            </p>
          </div>
          <div>
            <label htmlFor="email" className="checkout-label">
              Enter registered email
            </label>
            <input
              type="email"
              className="checkout-input"
              required
              value={existedUserData.email}
            />
            <label htmlFor="password" className="checkout-label">
              Password:
            </label>
            <input
              type="password"
              className="checkout-input"
              required
              value={userPwd}
              onChange={handlePassword}
            />
            <button
              type="submit"
              className="addtocart-btn"
              onClick={handleContinue}
            >
              Continue
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserRegistration;
