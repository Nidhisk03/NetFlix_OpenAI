import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidate } from '../utils/validate';
import {  createUserWithEmailAndPassword , signInWithEmailAndPassword,updateProfile  } from "firebase/auth";
import {auth} from '../utils/firebase';
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { USER_AVATAR } from '../utils/constants';


const Login = () => {
  const [signin, setsignin] = useState(true);
  const [errorm, seterrorm] = useState(null);
  const dispatch = useDispatch();


  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  
  
  

  const handleclick = () => {
    const message = checkValidate(email.current.value, password.current.value);
    seterrorm(message);

    if (message) return;

    if (!signin) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              seterrorm(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorm(errorCode + "-" + errorMessage);
        });


    } else {

      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    const user = userCredential.user;
  
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrorm(errorCode+errorMessage);
    
  });

    }

  }

  const toggle = () => {
    setsignin(!signin);
  }


  return (
    <div>
      <Header />
      <div className='absolute bg-gradient-to-b from-black' >

        <img alt='logo' src='https://assets.nflxext.com/ffe/siteui/vlv3/594f8025-139a-4a35-b58d-4ecf8fdc507c/d3c4e455-f0bf-4003-b7cd-511dda6da82a/IN-en-20240108-popsignuptwoweeks-perspective_alpha_website_large.jpg' />
      </div>
      <form onSubmit={(e) => e.preventDefault()}
        className='w-[400px] p-12 absolute bg-black bg-opacity-80 my-36 mx-auto right-0 left-0 text-white'>

        <h1
          className='font-medium text-3xl my-3 mx-3'>
          {signin === true ? "Sign In" : "Sign Up"}
        </h1>

        {!signin &&
          <input type='text' placeholder='Name' ref={name}
            className='my-2 mx-3 w-full p-2 rounded-md text-black' />

        }
        <input type='text' placeholder='Email Address' ref={email}
          className='my-2 mx-3 w-full p-2 rounded-md text-black' />

        <input type='text' placeholder='Password' ref={password}
          className='my-2 mx-3 w-full p-2 rounded-md text-black' />
        <p className='mx-3 text-red-600 font-thin text-xs'>{errorm}</p>
        <button onClick={handleclick}
          className='p-2 text-md font-medium mx-3 rounded-md mt-6 mb-4 bg-red-700 w-full'>
          {signin === true ? "Sign In" : "Sign Up"}</button>

        {signin === false ?
          <p className='flex mx-3 text-gray-500'> Alredy Registered
            <p className=' cursor-pointer mx-1 text-white'
              onClick={toggle}>
              Sign In now
            </p> </p> :
          <p className='flex mx-3 text-gray-500'>
            New to Netflix?

            <p className=' cursor-pointer mx-1 text-white' onClick={toggle}>
              Sign up now
            </p></p>
        }

      </form>


    </div>
  )
}

export default Login
