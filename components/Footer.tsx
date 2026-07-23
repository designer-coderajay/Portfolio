export default function Footer() {
  return (
    <footer className="py-8">
      <div className="mx-auto flex max-w-page flex-col items-center justify-between gap-4 px-6 sm:flex-row sm:px-10">
        <p className="font-mono text-[12px] text-faint">&copy; {new Date().getFullYear()} Ajay Pravin Mahale</p>
        <div className="flex flex-wrap items-center justify-center gap-6 font-mono text-[12px] uppercase tracking-wide text-faint">
          <a href="https://github.com/designer-coderajay" target="_blank" rel="noopener" className="transition-colors hover:text-ink">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/ajay-mh" target="_blank" rel="noopener" className="transition-colors hover:text-ink">
            LinkedIn
          </a>
          <a href="/Ajay-Mahale-Resume.pdf" target="_blank" rel="noopener" className="transition-colors hover:text-ink">
            Resume
          </a>
        </div>
      </div>
    </footer>
  );
}
