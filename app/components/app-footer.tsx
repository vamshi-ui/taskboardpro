export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-auto border-t bg-white px-8 py-6">
      <div className="flex flex-col items-center justify-between gap-4 text-sm text-gray-500 md:flex-row">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-yellow-100 p-2">
            <div className="h-full w-full rounded bg-yellow-500" />
          </div>
          <span>TaskBoard Pro </span>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6 md:justify-end">
          <a href="#" className="hover:text-gray-900">
            Terms
          </a>
          <a href="#" className="hover:text-gray-900">
            Privacy
          </a>
          <a href="#" className="hover:text-gray-900">
            Help
          </a>
          <span>&copy; {year} TaskBoard Pro . All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
