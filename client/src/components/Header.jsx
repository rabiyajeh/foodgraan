import { Link, NavLink } from "react-router-dom";
import { Menu, X, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { useCart } from "../context/CartContext"; // 👈 import the context

const Header = () => {
  const [open, setOpen] = useState(false);
  const { cartItems } = useCart(); // 👈 get items from context
  const cartItemCount = cartItems.length;

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Menu", path: "/menu" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
        <Link to="/" className="text-2xl font-bold text-red-600">FoodGraan</Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item, i) => (
            <NavLink
              key={i}
              to={item.path}
              className={({ isActive }) =>
                isActive ? "text-green-600 font-semibold" : "text-gray-700 hover:text-red-500"
              }
            >
              {item.name}
            </NavLink>
          ))}

          <NavLink
            to="/cart"
            className="relative text-gray-700 hover:text-red-500"
          >
            <ShoppingCart className="w-6 h-6" />
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
                {cartItemCount}
              </span>
            )}
          </NavLink>
        </div>

        {/* Mobile Menu Toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {open && (
        <div className="md:hidden px-4 pb-4 bg-white space-y-2">
          {navItems.map((item, i) => (
            <NavLink
              key={i}
              to={item.path}
              className={({ isActive }) =>
                isActive ? "block text-green-600 font-semibold" : "block text-gray-700 hover:text-red-500"
              }
              onClick={() => setOpen(false)}
            >
              {item.name}
            </NavLink>
          ))}

          <NavLink
            to="/cart"
            className="flex items-center gap-2 text-gray-700 hover:text-red-500"
            onClick={() => setOpen(false)}
          >
            <ShoppingCart className="w-5 h-5" />
            <span>Cart</span>
            {cartItemCount > 0 && (
              <span className="ml-auto bg-red-500 text-white text-xs rounded-full px-2 py-0.5">
                {cartItemCount}
              </span>
            )}
          </NavLink>
        </div>
      )}
    </header>
  );
};

export default Header;
