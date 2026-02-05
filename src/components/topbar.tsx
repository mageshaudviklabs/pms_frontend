const TopBar = () => {
  return (
    <header className="h-14 bg-[#8879B8] border-b flex items-center justify-between px-6 text-white">
      <h2 className="font-semibold">Manager Dashboard</h2>

      {/* Profile Dropdown */}
      <div className="relative group">
        {/* Avatar */}
        <div
          className="text-md bg-white px-4 py-2 font-semibold rounded-3xl
                     border border-white text-[#8879B8] cursor-pointer"
        >
          M
        </div>

        {/* Hover Card */}
        <div
          className="
            absolute right-0 mt-2 w-56
            bg-white text-gray-700
            rounded-lg shadow-lg border border-[#B3AACF]
            opacity-0 invisible
            group-hover:opacity-100 group-hover:visible
            transition-all duration-200
            z-50
          "
        >
          <div className="p-4 border-b border-[#B3AACF]/50">
            <p className="font-semibold text-[#8879B8]">Manager</p>
            <p className="text-sm text-gray-500">Project Manager</p>
            <p className="text-xs text-gray-400 mt-1">
              managerh@company.com
            </p>
          </div>

          <div className="py-2">
            <button
              className="w-full text-left px-4 py-2 text-sm
                         hover:bg-[#F2F0F7] transition"
            >
              View Profile
            </button>
            <button
              className="w-full text-left px-4 py-2 text-sm
                         hover:bg-[#F2F0F7] transition"
            >
              Settings
            </button>
            <button
              className="w-full text-left px-4 py-2 text-sm text-red-600
                         hover:bg-red-50 transition"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
