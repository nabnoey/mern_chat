import { X, Send, Image as ImageIcon } from "lucide-react";
import { useState } from "react";

function Chat() {
  const [message, setMessage] = useState("");

  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col">
      
      {/* Top Bar */}
      <div className="h-14 border-b border-slate-800 flex items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <img
            src="https://i.pravatar.cc/40"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="font-medium">Tharwaa</p>
            <p className="text-xs text-green-400">Online</p>
          </div>
        </div>

        <button className="text-slate-400 hover:text-white">
          <X size={20} />
        </button>
      </div>

      {/* Chat Area */}
      <div className="flex-1 p-6 overflow-y-auto flex flex-col justify-between">
        
        {/* Empty State */}
        <div className="flex flex-col items-center justify-center text-center mt-20">
          <img
            src="https://i.pravatar.cc/100"
            className="w-20 h-20 rounded-full mb-4"
          />
          <p className="text-slate-400 text-sm">
            You must be friends with this user to send messages.
          </p>
          <button className="text-cyan-400 text-sm mt-1 hover:underline">
            Add Friend
          </button>
        </div>

        {/* Message Input */}
        <div className="mt-6">
          <div className="flex items-center gap-3 bg-slate-800 rounded-xl px-4 py-2 border border-slate-700">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 bg-transparent outline-none text-sm"
            />

            <button className="text-slate-400 hover:text-white">
              <ImageIcon size={18} />
            </button>

            <button className="bg-cyan-500 hover:bg-cyan-600 p-2 rounded-lg transition">
              <Send size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;