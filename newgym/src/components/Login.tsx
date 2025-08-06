import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { Link } from "react-router-dom"; 

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); 

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();

        if (!email || !password) {
            setError("please enter your email and password");
            return;
        }

        if (email === "test@g.com" && password === "123") {
            navigate("/dashboard"); // Redirect to home page after login
        } else {
            setError("Invalid email or password");
        }
    };

  return (
    <>
    <div className="flex items-center justify-center h-screen">
      <div className=" border-4 border-gray-600 text-white p-10 rounded-lg shadow-lg w-96">
        <h2 className="text-3xl font-bold text-center mb-6">Login</h2>

        {error && <p className="text-violet-500 text-center pb-4">{error}</p>}

        <form onSubmit={handleLogin} className="flex flex-col space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="p-3 rounded bg-[#353535] focus:outline-none focus:ring-2 focus:ring-[#7f22fe]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="p-3 rounded bg-[#353535] focus:outline-none focus:ring-2 focus:ring-[#7f22fe]"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />


          <button type="submit" className="bg-violet-500 hover:bg-violet-600 p-3 rounded-lg opacity-90 hover:opacity-100 transition duration-300 cursor-pointer">
            Log In
          </button>
        </form>

        <p className="text-center text-gray-400 mt-4">
  Need to register?{" "}
  <Link to="/register" className="text-violet-500 hover:underline">Create an account</Link>
</p>
      </div>
    </div>
    </>
  )
}

export default Login