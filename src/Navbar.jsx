export default function Navbar() {
  return (
    <nav className="py-6 md:py-8 fixed top-0 w-full !bg-[#191D26] z-50">
      <div className="container mx-auto flex items-center justify-between gap-x-6 pl-20">
        {/* <!-- Logo --> */}
        <a href="#">
          <img className="h-[45px]" src={"/lws-logo-en.svg"} alt="Logo" />
        </a>
        {/* <!-- Logo Ends --> */}
      </div>
    </nav>
  );
}
