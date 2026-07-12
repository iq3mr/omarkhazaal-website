type ButtonProps = {
  children: React.ReactNode;
};

export default function Button({ children }: ButtonProps) {
  return (
    <button className="rounded-xl bg-red-700 px-6 py-3 text-sm font-medium text-white transition hover:bg-red-800">
      {children}
    </button>
  );
}