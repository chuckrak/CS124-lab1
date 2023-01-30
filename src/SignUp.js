import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useState } from "react";
const SignUp = (props) => {
    const [
        createUserWithEmailAndPassword,
        userCredential, loading, error
    ] = useCreateUserWithEmailAndPassword(props.auth);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    if (userCredential) {
        return <div>Signed up, unexpectedly</div>
    } else if (loading) {
        return <p>Signing up…</p>
    }
    return <div className="margin">
        {error && <p>Error signing up: {error.message}</p>}
        <div className="row">
            <label htmlFor='email' className='loginLabels'>Email: </label>
            <input type="text" className='loginInput' id='email' value={email}
                    onChange={e=>setEmail(e.target.value)}/>
        </div>
        
        <div className="row">
            <label htmlFor='passwordSignIn' className='loginLabels'>Password: </label>
            <input type="password" className='loginInput' id='passwordSignIn' value={password}
                onChange={e=>setPassword(e.target.value)}/>
        </div>

        <div className="row">
            <label htmlFor='confirmPasswordSignIn' className='loginLabels'> Confirm password: </label>
            <input 
                type="password" 
                className='loginInput'
                id="confirmPasswordSignIn" 
                value={confirmPassword}
                placeholder
                onChange={e=>setConfirmPassword(e.target.value)}/>
        </div>
        <button 
            className="alert-button alert-ok"
            onClick={() =>{
            if(confirmPassword !== password){
                alert("Passwords do not match");
                return;
            }
            createUserWithEmailAndPassword(email, password)}}>
            Create User
        </button>

    </div>;
}
export default SignUp;