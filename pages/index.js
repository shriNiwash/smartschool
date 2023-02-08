import Head from "next/head";
import { useState } from "react";
import { useRouter } from "next/router";
const Index = () => {
  const router = useRouter();

  const data = [{username:"prashant",password:"kumar1212"}];

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  function onTextFiled(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    if(user.username == data[0].username)
    {
      if(user.password == data[0].password)
      {
        router.push("/home");
      }
      else{
        alert("please enter the valid password")
      }
    }

    else{
      alert("please enter the valid username");
    }

    }
  return(<>
      <Head>
      <title>Smart School </title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" />
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" />

    </Head>
    
    <div className="shri_login" id="shri_login">
        <div className="wrapper">
          <div className="tittle">
            <span>Login Form</span>
          </div>
          <form action="/login" method="post" onSubmit={(e) => onSubmit(e)}>
            <div className="row">
              <i className="fa fa-user"></i>
              <input
                type="text"
                placeholder="Email or UserName"
                required
                onChange={(e) => onTextFiled(e)}
                name="username"
                id="username"
                autoComplete="off"
              />
            </div>
            <div className="row">
              <i className="fa fa-lock"></i>
              <input
                type="password"
                placeholder="password"
                name="password"
                id="password"
                required
                onChange={(e) => onTextFiled(e)}
              />
            </div>
            <div className="pass">
              <a href="#">Forgot Password?</a>
            </div>
            <div className="row button">
              <input type="submit" value="Login" />
            </div>
          </form>
        </div>
      </div>
  </>)
}

export default Index;