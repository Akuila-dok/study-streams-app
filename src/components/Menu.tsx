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
    <div className="mt-4 bg-slate-700 p-4">
      <aside className="w-64 bg-gradient-to-b from-blue-900 text-white p-6 space-y-4 shadow-lg">
        <h2 className="text-3xl font-bold mb-8">📘 Study Streams</h2>
        <nav className="space-y-4">
          {menuItems.map((menu, idx) => (
            <Link
              key={idx}
              href={menu.href}
              className="block w-full bg-blue-800 hover:bg-blue-600 px-4 py-3 rounded-lg text-left text-white text-lg font-medium transition"
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
