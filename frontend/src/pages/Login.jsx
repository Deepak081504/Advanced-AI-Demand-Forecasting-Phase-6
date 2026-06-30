import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Temporary login
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 px-4">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl p-12">
        <div className="text-center mb-10">
          <h1 className="text-6xl font-bold text-slate-800">
            Welcome Back
          </h1>
          <p className="text-gray-500 mt-4 text-lg">
            Login to your AI forecasting workspace
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter email"
              className="w-full border border-gray-300 rounded-xl px-5 py-4"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full border border-gray-300 rounded-xl px-5 py-4"
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 rounded-xl text-white font-semibold text-lg bg-gradient-to-r from-purple-600 to-pink-600"
          >
            Login →
          </button>
        </form>
      </div>
    </div>
  );
}