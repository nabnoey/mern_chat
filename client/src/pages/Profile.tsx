import { useState } from "react";
import { Camera, User, Mail } from "lucide-react";

function Profile() {
  const [image, setImage] = useState<string | null>(null);
  const [name, setName] = useState("John");
  const [email, setEmail] = useState("john@mail.com");

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white flex items-center justify-center p-6">
      <div className="w-full max-w-xl bg-slate-950/60 backdrop-blur rounded-2xl p-8 shadow-2xl border border-slate-800">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold">Profile</h1>
          <p className="text-slate-400 text-sm mt-1">
            Your profile information
          </p>
        </div>

        {/* Avatar */}
        <div className="flex justify-center mb-6 relative">
          <div className="relative">
            <div className="w-32 h-32 rounded-full border-4 border-slate-600 overflow-hidden flex items-center justify-center bg-slate-800">
              {image ? (
                <img
                  src={image}
                  alt="profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                <User size={60} className="text-slate-400" />
              )}
            </div>

            {/* Camera Button */}
            <label className="absolute bottom-2 right-2 bg-slate-700 hover:bg-slate-600 p-2 rounded-full cursor-pointer transition">
              <Camera size={18} />
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </label>
          </div>
        </div>

        <p className="text-center text-slate-400 text-sm mb-6">
          Click the camera icon to update your photo
        </p>

        {/* Form */}
        <div className="space-y-4">
          <div>
            <label className="text-sm text-slate-400 flex items-center gap-2 mb-1">
              <User size={16} /> Full Name
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>

          <div>
            <label className="text-sm text-slate-400 flex items-center gap-2 mb-1">
              <Mail size={16} /> Email Address
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-slate-800"></div>

        {/* Account Info */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Account Information</h2>

          <div className="flex justify-between text-sm mb-2">
            <span className="text-slate-400">Member Since</span>
            <span>2025-03-11</span>
          </div>

          <div className="flex justify-between text-sm">
            <span className="text-slate-400">Account Status</span>
            <span className="text-green-400">Active</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;