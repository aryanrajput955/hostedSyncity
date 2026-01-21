export function Card({ className = "", children }) {
  return (
    <div
      className={`rounded-lg border bg-[#EEE6CA] border-[#E5BEB5] hover:shadow-lg transition-shadow ${className}`}
    >
      {children}
    </div>
  );
}

export function CardContent({ className = "", children }) {
  return (
    <div className={`p-6 ${className}`}>
      {children}
    </div>
  );
}

export function CardHeader({ className = "", children }) {
  return (
    <div className={`px-6 pt-6 ${className}`}>
      {children}
    </div>
  );
}

export function CardTitle({ className = "", children }) {
  return (
    <h3 className={`text-2xl font-bold text-[#896C6C] ${className}`}>
      {children}
    </h3>
  );
}

export function Input({ className = "", type = "text", ...props }) {
  return (
    <input
      type={type}
      className={`w-full p-3 bg-[#EEE6CA] border border-[#E5BEB5] rounded-md focus:border-[#896C6C] focus:outline-none ${className}`}
      {...props}
    />
  );
}

export function Button({ className = "", children, ...props }) {
  return (
    <button
      className={`w-full bg-[#896C6C] hover:bg-[#896C6C]/90 text-[#EEE6CA] py-3 px-4 rounded-md font-semibold transition-colors ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}