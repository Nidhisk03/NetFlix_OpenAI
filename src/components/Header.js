import React, { useEffect } from 'react'
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from '../utils/constants';
import { toggleGptSearch } from "../utils/gptSlice"
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
  const user = useSelector(store => store.user);
  const gptSearch = useSelector(store => store.gpt.showgptsearch)

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handlegpt = () => {
    dispatch(toggleGptSearch());
  }

  const handleSignout = () => {
    signOut(auth).then(() => {

    }).catch((error) => {
      navigate('error');
    });

  }

  const handlelangchnage = (e) => {
    dispatch(changeLanguage(e.target.value))
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // Unsiubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <div className='absolute px-8 w-full py-2 bg-gradient-to-b from-black z-50 flex justify-between flex-col md:flex-row'>
      <img className='w-48 mx-auto md:mx-0' alt='logo' src={LOGO} />

      {user && <div className='flex'>

{ gptSearch && 
        <select onChange={handlelangchnage}
          className='h-10 mt-5 mr-3 rounded-lg bg-black text-white bg-opacity-25 hover:bg-white hover:bg-opacity-25'>

          <option value="en" className='p-2 bg-white text-black'>English</option>
          <option value="hindi" className='pl-4 bg-white text-black '>Hindi</option>
          <option value="spanish" className='p-2 bg-white text-black'>Spanish</option>
        </select>}


        <button onClick={handlegpt} className='h-10 w-32 mt-5 mr-3 text-lg text-white bg-black rounded-lg bg-opacity-25 hover:bg-white hover:bg-opacity-25    '>
           {  gptSearch?"HomePage":"Netflix GPT"}
        </button>
        {/* <button className= 'bg-white h-12'>Netflix GPT</button> */}
        <img
          className="m-1 my-5 w-10 h-10"
          alt="usericon"
          src={user?.photoURL}
        />
        <button onClick={handleSignout} className='my-3 mr-3 text-white'>Sign Out</button>
      </div>
      }

    </div>
  )
}

export default Header
