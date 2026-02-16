import { Users, MessageSquare } from "lucide-react";

function Contact() {
  return (
    <div className="min-h-screen w-screen bg-slate-900 text-white flex">

      {/* LEFT SIDEBAR */}
      <div className="w-72 bg-slate-950 border-r border-slate-800 p-4">

        {/* header */}
        <div className="flex items-center gap-2 mb-4">
          <Users size={20} />
          <h2 className="font-semibold">Contacts</h2>
        </div>

        {/* online only */}
        <div className="flex items-center gap-2 mb-6 text-sm text-gray-400">
          <input type="checkbox" />
          <span>Show online only</span>
        </div>

        {/* no users */}
        <div className="text-gray-500 text-sm mt-10">
          No online users
        </div>
      </div>

      {/* RIGHT CHAT AREA */}
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center">
          
          <div className="flex justify-center mb-4">
            <div className="bg-orange-500 p-4 rounded-xl">
              <MessageSquare size={28} />
            </div>
          </div>

          <h1 className="text-xl font-bold mb-2">
            Welcome to SE Chat!
          </h1>
          <p className="text-gray-400">
            Select a conversation from the sidebar to start chatting
          </p>

        </div>
      </div>
    </div>
  );
}

export default Contact;
