export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-4 text-sm text-gray-500 sm:flex-row">
        <p>© {new Date().getFullYear()} Sehar. All rights reserved.</p>

        <p>
          Built with React + Tailwind
        </p>
      </div>
    </footer>
  );
}
