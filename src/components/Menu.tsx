import { role } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

const Menu = () => {
  const menuItems = [
    { name: "Courses", href: "/course" },
    { name: "Assignments & Quizzes", href: "/assignment" },
    { name: "Messages", href: "/messages" },
    { name: "Announcements", href: "/announcements" },
    { name: "Results", href: "/results" },
    { name: "Support & Help", href: "/support" },
  ];

  return (
    <div className="mt-4 p-4">
      <aside className="w-full max-w-xs bg-gradient-to-b from-blue-900 text-white p-6 space-y-6 shadow-lg rounded-lg mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">📘 Study Streams</h2>
        <nav className="flex flex-col space-y-4">
          {menuItems.map((menu, idx) => (
            <Link
              key={idx}
              href={menu.href}
              className="block w-full bg-blue-800 hover:bg-blue-600 px-6 py-3 rounded-lg text-left text-white text-lg font-medium transition duration-300"
            >
              {menu.name}
            </Link>
          ))}
        </nav>
      </aside>
    </div>
  );
};

export default Menu;
