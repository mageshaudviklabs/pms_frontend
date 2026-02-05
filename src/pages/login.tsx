// import ManagerDashboard from "../layout/managersection";

//@ts-ignore
const LoginPage = ({onNext}) => {
  return (
    <div className="flex min-h-screen w-full font-sans">
      {/* Left Section - Illustration */}
      <div className="relative hidden w-1/2 flex-col items-center justify-center bg-[#f8f9fa] p-12 lg:flex">
        {/* Logo */}
        <div className="absolute left-8 top-8 flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded bg-blue-600 text-white font-bold">
            A
          </div>
          <span className="text-xl font-bold text-gray-800">AudvikLabs Test</span>
        </div>

        {/* Illustration Content */}
        <div className="relative z-10 w-full max-w-lg">
          {/* Background Circle */}
          <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-200/50" />

          {/* Main Illustration SVG Representation */}
          <div className="relative z-20 flex justify-center">
            <svg
              viewBox="0 0 600 500"
              className="h-auto w-full"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Abstract representations of the people and charts */}
              
              {/* Man Figure (Left) */}
              <g transform="translate(50, 100)">
                {/* Head */}
                <circle cx="60" cy="40" r="25" fill="#333" />
                {/* Body */}
                <path
                  d="M60 70 L60 180 L30 280 M60 180 L90 280"
                  stroke="#333"
                  strokeWidth="20"
                  strokeLinecap="round"
                />
                {/* Arm pointing up */}
                <path
                  d="M60 90 L20 40"
                  stroke="#9d4edd"
                  strokeWidth="18"
                  strokeLinecap="round"
                />
                {/* Arm pointing to chart */}
                <path
                  d="M60 90 L100 100"
                  stroke="#9d4edd"
                  strokeWidth="18"
                  strokeLinecap="round"
                />
              </g>

              {/* Woman Figure (Right) */}
              <g transform="translate(350, 100)">
                {/* Head */}
                <circle cx="40" cy="40" r="25" fill="#333" />
                {/* Ponytail */}
                <path d="M60 40 Q80 50 70 90" stroke="#333" strokeWidth="8" fill="none" />
                {/* Body/Dress */}
                <path
                  d="M40 70 L20 280 L60 280 L40 70"
                  fill="#333"
                />
                {/* Arm holding paper */}
                <path
                  d="M40 90 L80 120 L80 160"
                  stroke="#fff"
                  strokeWidth="12"
                  strokeLinecap="round"
                  fill="none"
                />
                {/* Legs */}
                <path d="M25 280 L25 350" stroke="#fff" strokeWidth="10" />
                <path d="M55 280 L55 350" stroke="#fff" strokeWidth="10" />
                {/* Shoe */}
                <path d="M20 350 L40 350" stroke="#333" strokeWidth="4" />
              </g>

              {/* Dashboard Elements (Center/Background) */}
              
              {/* Top Chart Card */}
              <rect x="150" y="50" width="180" height="120" rx="10" fill="white" stroke="#e9ecef" strokeWidth="2" />
              {/* Line Chart */}
              <path d="M170 120 L190 100 L210 130 L230 90 L250 110 L270 80 L290 100 L310 70" stroke="#9d4edd" strokeWidth="3" fill="none" />
              {/* Bar Chart inside card */}
              <rect x="170" y="140" width="20" height="10" fill="#9d4edd" />
              <rect x="200" y="140" width="20" height="10" fill="#e9ecef" />
              <rect x="230" y="140" width="20" height="10" fill="#9d4edd" />
              
              {/* Middle Donut Chart Card */}
              <rect x="180" y="200" width="120" height="100" rx="10" fill="white" stroke="#e9ecef" strokeWidth="2" />
              <circle cx="240" cy="250" r="30" stroke="#9d4edd" strokeWidth="8" fill="none" strokeDasharray="60 40" />
              <circle cx="240" cy="250" r="30" stroke="#e9ecef" strokeWidth="8" fill="none" strokeDasharray="40 60" strokeDashoffset="-60" />

              {/* Bottom Bar Chart Card */}
              <rect x="130" y="320" width="200" height="100" rx="10" fill="white" stroke="#e9ecef" strokeWidth="2" />
              <rect x="150" y="380" width="15" height="30" fill="#333" />
              <rect x="175" y="370" width="15" height="40" fill="#9d4edd" />
              <rect x="200" y="385" width="15" height="25" fill="#e9ecef" />
              <rect x="225" y="360" width="15" height="50" fill="#333" />
              <rect x="250" y="375" width="15" height="35" fill="#9d4edd" />
              <rect x="275" y="390" width="15" height="20" fill="#e9ecef" />
              <rect x="300" y="365" width="15" height="45" fill="#333" />

              {/* Decorative Gears */}
              <circle cx="120" cy="150" r="15" fill="none" stroke="#ccc" strokeWidth="2" strokeDasharray="4 4" />
              <circle cx="320" cy="300" r="20" fill="none" stroke="#ccc" strokeWidth="2" strokeDasharray="6 6" />
              <circle cx="100" cy="350" r="10" fill="none" stroke="#ccc" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>

      {/* Right Section - Login */}
      <div className="flex w-full flex-col items-center justify-center bg-[#8b7db5] lg:w-1/2">
        <div className="w-full max-w-md px-8">
          <button
            className="w-full rounded-md bg-white py-3 text-sm font-semibold tracking-wide text-[#8b7db5] shadow-lg transition-transform hover:scale-[1.02] active:scale-[0.98]"
            onClick={onNext}
          >
            LOGIN
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;