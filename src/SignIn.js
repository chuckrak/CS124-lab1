import { useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useState } from "react";

const SignIn = (props) => {
    const [
        signInWithEmailAndPassword,
        userEP, loadingEP, errorEP
    ] = useSignInWithEmailAndPassword(props.auth);
    const [
        signInWithGoogle,
        userGoogle, loadingGoogle, errorGoogle
    ] = useSignInWithGoogle(props.auth);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    if(userEP || userGoogle){
        return <div>Already signed in, unexpectedly</div>
    }
    else if (loadingEP || loadingGoogle) {
        return <p>Logging in…</p>
    }
    return <div className="margin">
        {errorEP && <p>"Error logging in: " {errorEP.message}</p>}
        {errorGoogle && <p>"Error logging in: " {errorGoogle.message}</p>}
        <div className="row">
            <label htmlFor='email' className='loginLabels'>Email: </label>
            <input type="text" className='loginInput' id='email' value={email}
            onChange={e=>setEmail(e.target.value)}/>
        </div>
        <div className="row">
            <label htmlFor='passwordSignIn' className='loginLabels'>Password: </label>
            <input type="password"  className='loginInput' id='passwordSignIn' value={password}
               onChange={e=>setPassword(e.target.value)}/>
        </div>
        <button className="alert-button alert-ok" onClick={() =>signInWithEmailAndPassword(email, password)}>
            Sign in
        </button>
        <hr/>
        <button className="alert-button alert-ok" onClick={() => signInWithGoogle()}>
            Sign in with Google
        </button>
    </div>
}
export default SignIn;