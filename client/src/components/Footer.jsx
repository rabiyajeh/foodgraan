// components/Footer.jsx
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-blue-900 text-white py-8 mt-10">
    <div className="max-w-7xl mx-auto px-4 grid sm:grid-cols-2 md:grid-cols-4 gap-6">
      <div>
        <h3 className="font-bold text-lg mb-2">FoodGraan</h3>
        <p className="text-sm">Bringing taste and joy to your plate every day.</p>
      </div>

      <div>
        <h4 className="font-semibold mb-2">Quick Links</h4>
        <ul className="space-y-1 text-sm">
          <li><Link to="/" className="hover:text-green-400">Home</Link></li>
          <li><Link to="/menu" className="hover:text-green-400">Menu</Link></li>
          <li><Link to="/cart" className="hover:text-green-400">Cart</Link></li>
        </ul>
      </div>

      <div>
        <h4 className="font-semibold mb-2">Contact</h4>
        <p className="text-sm">Email: support@foodgraan.com</p>
        <p className="text-sm">Phone: +92 300 1234567</p>
      </div>

      <div>
        <h4 className="font-semibold mb-2">Follow Us</h4>
        <p className="text-sm">Facebook | Instagram | Twitter</p>
      </div>
    </div>

    <div className="text-center text-sm mt-6 text-gray-400">
      &copy; {new Date().getFullYear()} FoodGraan. All rights reserved.
    </div>
  </footer>
);

export default Footer;
