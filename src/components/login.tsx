import {
    createSignal
  } from "solid-js";

  import { signInWithEmailAndPassword, getAuth, signInWithCredential, EmailAuthProvider } from "firebase/auth";
  import firebase from "../config/firebaseConfig";

  const LoginModal = async () => {
    const [showModal, setShowModal] = createSignal(false);
    const [email, setEmail] = createSignal("");
    const [username, setUsername] = createSignal("");
    const [password, setPassword] = createSignal("");


    const auth = getAuth(firebase);
  
    const handleLoginWithEmail = async () => {
      try {
        await signInWithEmailAndPassword(auth, email(), password());
        setShowModal(false);
      } catch (error) {
        console.log(error);
      }
    };
  
    const handleLoginWithUsername = async () => {
      try {
        const credential = EmailAuthProvider.credential(username(), password());
        await signInWithCredential(auth, credential);
        setShowModal(false);
      } catch (error) {
        console.log(error);
      }
    };

    const handleShowModal = () => {
      setShowModal(true);
    };
  
    return (
      <div>
      {showModal() && (
        <div>
          <h2>Login</h2>
          <form>
            {email() && (
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={email()}
                onChange={(event) => setEmail(event.target.value)}
              />
            )}
            {!email() && (
              <input
                type="username"
                name="username"
                placeholder="Username"
                value={username()}
                onChange={(event) => setUsername(event.target.value)}
              />
            )}
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password()}
              onChange={(event) => setPassword(event.target.value)}
            />
            {email() ? (
              <button type="submit" onClick={handleLoginWithEmail}>
                Login with Email
              </button>
            ) : (
              <button type="submit" onClick={handleLoginWithUsername}>
                Login with Username
              </button>
            )}
            <button onClick={handleShowModal}>Cancel</button>
          </form>
        </div>
      )}
    </div>
    );
  };
  
  export default LoginModal;
  
