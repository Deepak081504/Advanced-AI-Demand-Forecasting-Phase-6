export default function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 px-4">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl p-12">
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold text-slate-800">
            Create Account
          </h1>
          <p className="text-gray-500 mt-4 text-lg">
            Create your AI forecasting workspace account
          </p>
        </div>

        <form className="space-y-5">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border border-gray-300 rounded-xl px-5 py-4"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full border border-gray-300 rounded-xl px-5 py-4"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border border-gray-300 rounded-xl px-5 py-4"
          />

          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full border border-gray-300 rounded-xl px-5 py-4"
          />

          <button
            type="submit"
            className="w-full py-4 rounded-xl text-white font-semibold text-lg bg-gradient-to-r from-purple-600 to-pink-600"
          >
            Create Account →
          </button>
        </form>

        <div className="text-center mt-8">
          <span className="text-gray-500">
            Already have an account?
          </span>
          <a
            href="/login"
            className="ml-2 text-purple-600 font-semibold"
          >
            Login
          </a>
        </div>
      </div>
    </div>
  );
}