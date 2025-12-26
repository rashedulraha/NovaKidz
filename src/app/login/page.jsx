import LoginForm from "@/components/auth/Login";

export default function Login() {
  return (
    <div className="max-w-sm mx-auto mt-10 p-6 border rounded-lg shadow">
      <h2 className="text-xl font-bold mb-5 text-center">Login</h2>
      <LoginForm />
    </div>
  );
}
