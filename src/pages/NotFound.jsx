import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center px-6 text-center">
      <div>
        <p className="text-8xl font-bold text-violet-500">
          404
        </p>

        <h1 className="mt-4 text-3xl font-bold text-white">
          Page not found
        </h1>

        <p className="mt-3 text-gray-400">
          The page you're looking for doesn't exist.
        </p>

        <Link
          to="/"
          className="mt-8 inline-block rounded-xl bg-violet-600 px-6 py-3 font-medium text-white transition hover:bg-violet-500"
        >
          Back Home
        </Link>
      </div>
    </div>
  );
}