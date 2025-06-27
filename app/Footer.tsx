export default function Footer() {
  return (
    <footer className="py-8 bg-gray-900 text-gray-200">
      <div className="max-w-3xl mx-auto text-center space-y-2">
        <p>&copy; {new Date().getFullYear()} Gabriel Arcanjo Garrido</p>
        <p>
          <a href="mailto:noxx.mc666@gmail.com" className="underline">noxx.mc666@gmail.com</a> &middot;
          <a href="https://wa.me/5511987503790" className="underline ml-1">WhatsApp</a>
        </p>
      </div>
    </footer>
  );
}
