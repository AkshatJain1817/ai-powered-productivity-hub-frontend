import { Link, useLocation } from "react-router-dom"
import { Home, CheckSquare, FileText, MessageSquare, Mail, Lightbulb } from "lucide-react";

export default function SideBar() {
    const { pathname } = useLocation()

    const links = [ 
        { to: "/dashboard", label: "Dashboard", icon: <Home size={18} />},
        { to: "/dashboard/task", label: "Task Manager", icon: <CheckSquare size={18}/>},
        { to: "/dashboard/summarizer", label: "Summarizer", icon:<FileText size={18}/>},
        { to: "/dashboard/chatbot", label: "AI Chatbot", icon: <MessageSquare size={18}/>},
        { to: "/dashboard/email", label:  "Email Generator", icon: <Mail size={18}/>},
        { to: "/dashboard/recommendations", label: "Recommendations", icon: <Lightbulb size={18} />}
    ];

    return (
        <aside className="w-64 bg-gray-900 text-white flex flex-col p-6">
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
                <span className="bg-indigo-600 text-xs px-2 py-1 rounded">AI</span>
                Productivity Hub
            </h2>
            <nav className="flex flex-col gap-2">
                {links.map(link => (
                    <Link
                        key={link.to}
                        to={link.to}
                        className={`flex items-center gap-3 px-3 py-2 rounded-med transition ${
                            pathname === link.to ? "bg-gray-700" : "hover:bg-gray-800"
                        }`}
                    >
                        {link.icon}
                        {link.label}
                    </Link>
                ))}
            </nav>
        </aside>
    )
}