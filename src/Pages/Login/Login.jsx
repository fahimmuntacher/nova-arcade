import { useContext, useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase/firebase_init";
import { toast } from "react-toastify";
import { googleLogin } from "../../Utilities/googleLogin";
import { AuthContext } from "../../Context/AuthProvider";

const Login = () => {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const { setUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/my-profile";
  //  Handle Email/Password Login
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    setLoading(true);

    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        const user = res.user;
        if (!user.emailVerified) {
          toast.warning("Please verify your email before logging in!");
         return; 
        }
        setUser(user);
        toast.success("Login successful!");
        e.target.reset();
        navigate(from, { replace: true });
      })
      .catch((err) => {
        if (err.code === "auth/invalid-email") {
          toast.error("Invalid email address!");
        } else if (err.code === "auth/user-disabled") {
          toast.error("This account has been disabled!");
        } else if (err.code === "auth/user-not-found") {
          toast.error("No account found with this email!");
        } else if (err.code === "auth/wrong-password") {
          toast.error("Incorrect password!");
        } else if (err.code === "auth/invalid-credential") {
          toast.error("Invalid email or password!");
        } else if (err.code === "auth/network-request-failed") {
          toast.error("Network error! Please check your internet connection.");
        } else {
          toast.error("Something went wrong! Try again later.");
        }
      })
      .finally(() => setLoading(false));
  };

  return (
    <section className="min-h-screen bg-[#101010] flex items-center justify-center px-6 sm:px-10">
      <title>Login | NovaArcade</title>
      <motion.div
        className="bg-[#1f1f1f] p-10 sm:p-16 rounded-3xl shadow-2xl w-full max-w-md"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-8">
          Login Now
        </h1>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="flex flex-col gap-5">
          {/* Email Input */}
          <div className="flex flex-col gap-2.5">
            <label className="block text-gray-300 mb-1">Email</label>
            <input
              type="email"
              placeholder="Email"
              name="email"
              required
              className="px-5 py-3 rounded-full border border-gray-600 bg-[#101010] text-white focus:outline-none focus:ring-2 focus:ring-[#00ff80] transition-all duration-300"
            />
          </div>

          {/* Password Input */}
          <div className="relative w-full">
            <label className="block text-gray-300 mb-1">Password</label>
            <input
              type={show ? "text" : "password"}
              name="password"
              placeholder="Password"
              required
              className="w-full px-5 py-3 rounded-full border border-gray-600 bg-[#101010] text-white focus:outline-none focus:ring-2 focus:ring-[#00ff80] transition-all duration-300 pr-12"
            />
            <button
              type="button"
              onClick={() => setShow(!show)}
              className="absolute right-4 top-13 transform -translate-y-1/2 text-gray-300 transition-colors duration-300 cursor-pointer"
            >
              {show ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
            </button>
          </div>
          {/* password reset */}
          <div className="text-left text-sm">
            <Link
              to={`/forget-password?email=${encodeURIComponent(
                document.querySelector('input[name="email"]')?.value || ""
              )}`}
              className="text-[#00ff80] hover:underline transition-all"
            >
              Forgot password?
            </Link>
          </div>


          {/* Login Button */}
          <motion.button
            whileHover={{
              scale: 1.05,
              backgroundColor: "#00ff80",
              color: "#000",
            }}
            disabled={loading}
            type="submit"
            className="px-6 py-3 bg-[#00ff80] text-black font-semibold rounded-full shadow-lg transition-all duration-300 text-lg disabled:opacity-70 cursor-pointer"
          >
            {loading ? "Logging in..." : "Login"}
          </motion.button>
        </form>

        {/* Divider */}
        <div className="flex items-center justify-center gap-3 my-6">
          <span className="bg-gray-500 h-px flex-1"></span>
          <span className="text-gray-400 uppercase text-sm">or</span>
          <span className="bg-gray-500 h-px flex-1"></span>
        </div>

        {/* Google Login Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={() => googleLogin(navigate, setUser, from)}
          className="flex items-center justify-center gap-3 px-6 py-3 border border-gray-600 rounded-full text-white bg-[#101010] w-full font-semibold transition-all duration-300 cursor-pointer disabled:opacity-70"
        >
          <FcGoogle className="text-2xl" />
          Login with Google
        </motion.button>

        {/* Register Link */}
        <p className="text-gray-400 text-center mt-6">
          Don’t have an account?{" "}
          <Link to="/register" className="text-[#00ff80] hover:underline">
            Register
          </Link>
        </p>
      </motion.div>
    </section>
  );
};

export default Login;
