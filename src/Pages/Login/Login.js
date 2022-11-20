import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const [loginError, setLoginError] = useState("");

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [data, setData] = useState("");
  const onSubmit = (values) => {
    setLoginError("");
    // console.log(values.email, values.password);
    signIn(values.email, values.password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.log(err);
        setLoginError(err.message);
      });
  };

  return (
    <div className="flex justify-center items-center">
      <div>
        <h2 className="texl-4xl text-center">Log In</h2>
        <form className="form-control w-full" onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          <label className="label">
            <span className="label-text">Your email</span>
          </label>
          <input
            className="input input-bordered w-full"
            defaultValue="email"
            {...register("email", { required: "email is required" })}
          />
          {errors.mail && <p role="alert">{errors.email?.message}</p>}

          <label className="label">
            <span className="label-text">Your Password</span>
          </label>
          <input
            className="input input-bordered w-full"
            type="password"
            defaultValue=""
            {...register("password", {
              required: true,
              minLength: {
                value: 6,
                message: "password should be at least 6 character",
              },
            })}
          />
          {errors.password && <p role="alert">{errors.password?.message}</p>}
          <label className="label">
            <span className="label-text">Forget Password?</span>
          </label>

          {/* include validation with required or other standard HTML validation rules */}

          {/* errors will return when field validation fails  */}
          {errors.exampleRequired && <span>This field is required</span>}

          <input className="btn btn-accent mt-4" type="submit" />
        </form>
        {loginError && <p>{loginError}</p>}
        <div className="divider">OR</div>
        <button className="btn btn-outline btn-wide">Login with Google</button>
        <p>
          New to Doctors Portal? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
