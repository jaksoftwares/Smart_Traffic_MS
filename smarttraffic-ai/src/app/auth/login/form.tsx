// /app/auth/login/form.tsx
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { useRouter } from "next/navigation";

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export default function LoginForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: any) => {
    setLoading(true);
    setError("");

    try {
      // TODO: Replace with API call
      console.log("Logging in with:", data);
      await new Promise((res) => setTimeout(res, 2000));

      // Redirect after login
      router.push("/admin");
    } catch (err) {
      setError("Invalid credentials. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {error && <p className="text-red-500 text-center">{error}</p>}

      {/* Email Field */}
      <div>
        <label className="block text-gray-700">Email</label>
        <input
          type="email"
          {...register("email")}
          className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring focus:border-blue-400"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>

      {/* Password Field */}
      <div>
        <label className="block text-gray-700">Password</label>
        <input
          type="password"
          {...register("password")}
          className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring focus:border-blue-400"
        />
        {errors.password && <p className="text-red-500">{errors.password.message}</p>}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
        disabled={loading}
      >
        {loading ? "Logging in..." : "Login"}
      </button>
    </form>
  );
}
