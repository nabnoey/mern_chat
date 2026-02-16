import { MessageSquare } from "lucide-react";

function Navbar() {
  return (
    <div className="navbar bg-bule-500 shadow-sm px-4">
      
      {/* left */}
      <div className="flex-1 flex items-center gap-2">
        <MessageSquare className="text-blue-600" size={28}/>
        <a className="text-xl font-bold text-white">SE Chat</a>
      </div>

      {/* right */}
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 items-center">
          <li>
            <a>Home</a>
          </li>

          <li>
            <details>
              <summary>Menu</summary>
              <ul className="bg-base-100 rounded-box p-2 shadow">
                <li><a>Profile</a></li>
                <li><a>Logout</a></li>
              </ul>
            </details>
          </li>
        </ul>
      </div>

    </div>
  );
}

export default Navbar;
