import React,{useState} from 'react'

const Prac5_FSD = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [allEntry,setAllEntry] = useState()
    const submitForm = () => {
        const newEntry = {email:email, password:password};
    }
  return (
    <>
    <form onSubmit={submitForm}>
        <div>
            <label htmlFor='email'>Email</label>
            <input type='text' name='email' id='email' autoComplete='off' value={email} onChange = {(e) => setEmail(e.target.value)}
            />
        </div>
        <div>
            <label htmlFor='password'>Password</label>
            <input type='password' name='password' id='password' autoComplete='off' value={password} onChange = {(e) => setPassword(e.target.value)}/>
        </div>
        <button type='submit'>Login</button>
    </form>
    </>
  )
}

export default Prac5_FSD

