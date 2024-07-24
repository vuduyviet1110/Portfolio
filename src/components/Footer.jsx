function Footer() {
  return (
    <div className="flex items-center justify-center w-full h-24 border-t border-gray-700">
      <p className="text-sm text-gray-500">
        Copyright &copy; {new Date().getFullYear()} Vitra Vu
      </p>
    </div>
  );
}

export default Footer;
