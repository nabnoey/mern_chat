import { useState } from "react";

const themes = [
  { name: "Light", colors: ["#6366f1", "#ec4899", "#000000"] },
  { name: "Dark", colors: ["#1e293b", "#0f172a", "#000000"] },
  { name: "Cupcake", colors: ["#65c3c8", "#ef9fbc", "#291334"] },
  { name: "Bumblebee", colors: ["#facc15", "#f59e0b", "#000000"] },
  { name: "Emerald", colors: ["#10b981", "#059669", "#064e3b"] },
  { name: "Corporate", colors: ["#4b5563", "#1f2937", "#111827"] },
  { name: "Synthwave", colors: ["#ff00ff", "#00ffff", "#1a0033"] },
  { name: "Retro", colors: ["#ef4444", "#f59e0b", "#84cc16"] },
];

function Theme() {
  const [selectedTheme, setSelectedTheme] = useState("Light");

  return (
    <div className="min-h-screen bg-slate-900 text-white p-8">
      <h1 className="text-2xl font-bold mb-6">Theme</h1>
      <p className="text-slate-400 mb-6">
        Choose a theme for your chat interface
      </p>

      {/* Theme Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {themes.map((theme) => (
          <div
            key={theme.name}
            onClick={() => setSelectedTheme(theme.name)}
            className={`cursor-pointer rounded-xl p-4 border transition-all
              ${
                selectedTheme === theme.name
                  ? "border-blue-500 bg-slate-800"
                  : "border-slate-700 hover:border-slate-500"
              }`}
          >
            <div className="flex gap-2 mb-3">
              {theme.colors.map((color, index) => (
                <div
                  key={index}
                  className="w-6 h-6 rounded"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
            <p className="text-sm font-medium text-center">
              {theme.name}
            </p>
          </div>
        ))}
      </div>

      {/* Preview Section */}
      <div className="mt-12">
        <h2 className="text-lg font-semibold mb-4">Preview</h2>
        <div className="bg-slate-800 rounded-xl p-6 max-w-md">
          <div className="mb-4">
            <p className="text-sm text-slate-400">John Doe • Online</p>
            <div className="bg-slate-700 p-3 rounded-lg mt-2 text-sm">
              Hey! How's it going?
            </div>
            <div className="bg-orange-500 text-black p-3 rounded-lg mt-2 text-sm self-end">
              I'm doing great! Just working on some new features.
            </div>
          </div>
          <input
            type="text"
            placeholder="This is a preview"
            className="w-full bg-slate-700 rounded-lg p-2 text-sm outline-none"
          />
        </div>
      </div>
    </div>
  );
}

export default Theme;