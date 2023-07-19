import {  createSignal } from "solid-js";

// import {
//   signInWithEmailAndPassword,
//   getAuth,
//   signInWithCredential,
//   EmailAuthProvider,
//   createUserWithEmailAndPassword,
//   GoogleAuthProvider,
//   signInWithPopup,
// } from "firebase/auth";
import { AuthContextProvider, useAuth } from '../context/authContext';


const LoginModal = ({ onClose }: { onClose: () => void }) => {

  const [showModal, setShowModal] = createSignal(true);
  const [email, setEmail] = createSignal("");
  const [username, setUsername] = createSignal("");
  const [password, setPassword] = createSignal("");
  const [isSignup, setIsSignup] = createSignal(false);

  const { emailSignUp }= useAuth();

  const handleSignupWithEmail = async (e: any) => {
    e.preventDefault()
    try {
      await emailSignUp(email(),password());
      setShowModal(false);
    } catch (error) {
      console.log(error);
    }
  }
  // const handleLoginWithEmail = async () => {
  //   try {
      // await signInWithEmailAndPassword(auth, email(), password());
  //     setShowModal(false);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // const handleLoginWithGoogle = async () => {
  //   const provider = new GoogleAuthProvider();
  //   try {
  //     await signInWithPopup(auth, provider);
  //     setShowModal(false);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const handleSignupWithEmail = async (e: any) => {
  //   try {
  //     e.preventDefault()
  //     await createUserWithEmailAndPassword(auth, email(), password());
  //     setShowModal(false);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const handleSignUpWithUsername = async () => {
  //   try {
  //     const credential = EmailAuthProvider.credential(username(), password());
  //     await signInWithCredential(auth, credential);
  //     setShowModal(false);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const handleLoginWithUsername = async () => {
  //   try {
  //     const credential = EmailAuthProvider.credential(username(), password());
  //     await signInWithCredential(auth, credential);
  //     setShowModal(false);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleToggleSignUp = () => {
    setIsSignup(!isSignup());
  };

  return (
    <div class="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50 h-full z-20">
      {showModal() && (
        <div>
          <h2>{isSignup() == false ? "Login" : "SignUp"}</h2>
          <form>
            {isSignup() && (
              <>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={email()}
                  onChange={(event) => setEmail(event.target.value)}
                  />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={password()}
                  onChange={(event) => setPassword(event.target.value)}
                  />
                <button type="submit" onClick={handleSignupWithEmail}>
                  Sign Up with Email
                </button>
              </>
            )}

            {!isSignup() && (
              <>
                {email() ? (
                  <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={email()}
                  onChange={(event) => setEmail(event.target.value)}
                  />
                  ) : (
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
                {/* {email() ? (
                  <button type="submit" onClick={handleLoginWithEmail}>
                  Login with Email
                  </button>
                  ) : (
                    <button type="submit" onClick={handleLoginWithUsername}>
                    Login with Username
                    </button>
                  )} */}
              </>
            )}
            <button type="button" onClick={handleToggleSignUp}>
              {isSignup() ? "Switch to Login" : "Switch to Sign Up"}
            </button>
            <button class="px-2" onClick={onClose}>Close</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default LoginModal;
