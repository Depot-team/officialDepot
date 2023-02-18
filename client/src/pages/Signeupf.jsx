import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const Signeupf = () => {
const[name,setname]=useState("")
const [manger,setmanger]=useState("")
const [email,setemail]=useState("")
const [password,setpassword]=useState("")
const [adresse,setadresse]=useState("")
const[image,setimage]=useState("")
const [redirect , setRedirect]=useState(false)
const navigate=useNavigate()


const handeladd=()=>{
  axios.post("http://localhost:3000/api/fournisseur/signup",{
    CompanyName: name,
    manager:manger,
    email:email,
    password:password,
    image:image,
    adress: adresse,
  })
  .then((result)=>{console.log(result)
  navigate("/loginf")})
  .catch((err)=>{console.log(err)})
  setRedirect(true)
}



  return (
    <div>
        <form id='signeF'>
        <input type="file" 
        name='image'
        placeholder='image'
        onChange={(e)=>{setimage(e.target.value)}}/><br/>
                    <input type="text" 
                     name='companyName'
                     placeholder='companyName'
                 onChange={(e)=>{setname(e.target.value),console.log(e.target.value)}}/><br />
                 <input type="text" 
                   name='manger'
                 placeholder='manger'
                 onChange={(e)=>{setmanger(e.target.value)}}/><br />
                 <input type="email" 
                name='email'
                 placeholder='email'
                 onChange={(e)=>{setemail(e.target.value)}}/><br />
                 <input type="password" 
                 name='password'
                 placeholder='password'
                 onChange={(e)=>{setpassword(e.target.value)}}/><br/>
                 <input type="adresse"
                 name='adresse' 
                 placeholder='adresse'
                 onChange={(e)=>{setadresse(e.target.value)}}/><br/>
                 
        </form>
          <button  id='butF' onClick={handeladd}>add here </button>
    </div>
  )
}

export default Signeupf