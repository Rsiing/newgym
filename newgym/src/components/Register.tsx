import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password || !confirmPassword) {
      setError("All fields are required.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (email !== "test@e.com") {
      navigate("/dashboard"); // Redirect after successful registration
    } else {
      setError("This email is already registered.");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="border-4 border-gray-600 text-white p-10 rounded-lg shadow-lg w-96">
        <h2 className="text-3xl font-bold text-center mb-6">Create an Account</h2>

        {error && <p className="text-violet-500 text-center pb-4">{error}</p>}

        <form onSubmit={handleRegister} className="flex flex-col space-y-4">
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

          <input
            type="password"
            placeholder="Confirm Password"
            className="p-3 rounded bg-[#353535] focus:outline-none focus:ring-2 focus:ring-[#7f22fe]"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <button type="submit" className="bg-violet-500 hover:bg-violet-600 p-3 rounded-lg opacity-90 hover:opacity-100 transition duration-300 cursor-pointer">
            Sign Up
          </button>
        </form>

        <p className="text-center text-gray-400 mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-violet-500 hover:underline">Sign in</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;