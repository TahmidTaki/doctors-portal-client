import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import useToken from "../../hooks/useToken";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [createdUserEmail, setCreatedUserEmail] = useState("");
  const [token] = useToken(createdUserEmail);
  const navigate = useNavigate();

  if (token) {
    navigate("/");
  }

  const { user, createUser, updateUser } = useContext(AuthContext);

  const handleSignUp = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        toast("user created successfully");
        const userInfo = {
          displayName: data.name,
        };
        updateUser(userInfo)
          .then(() => {
            saveUser(data.name, data.email);

            // console.log(user?.displayName);
            console.log(user);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  };

  const saveUser = (name, email) => {
    const user = { name, email };
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        setCreatedUserEmail(email);
      });
  };

  return (
    <div className="flex justify-center items-center">
      <div>
        <h2 className="texl-4xl text-center">Register</h2>
        <form className="form-control w-full" onSubmit={handleSubmit(handleSignUp)}>
          {/* register your input into the hook by invoking the "register" function */}
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <input
            type="text"
            className="input input-bordered w-full"
            defaultValue="Name"
            {...register("name")}
          />

          <label className="label">
            <span className="label-text">Your email</span>
          </label>
          <input
            type="email"
            className="input input-bordered w-full"
            defaultValue="email"
            {...register("email", {
              required: true,
            })}
          />

          <label className="label">
            <span className="label-text">Your Password</span>
          </label>
          <input
            className="input input-bordered w-full"
            type="password"
            defaultValue=""
            {...register("password", {
              required: "Password is Required",
              minLength: { value: 6, message: "Must Be 6 characters at least" },
            })}
          />
          {errors.password && <p className="text-red-500">{errors.password.message}</p>}

          {/* include validation with required or other standard HTML validation rules */}

          {/* errors will return when field validation fails  */}

          <input className="btn btn-accent mt-4" type="submit" value="Register" />
        </form>
        <div className="divider">OR</div>
        <button className="btn btn-outline btn-wide">Login with Google</button>
        <p>
          Already have an account? <Link to="/login">Sign In</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
