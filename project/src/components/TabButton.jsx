const TabButton = ({ label, isActive, onClick }) => (
    <button
        onClick={onClick}
        className={`bg-green-50 cursor-pointer pb-2 px-1 py-2.5 border text-15 text-primary font-medium transition-all ${isActive
            ? "border-b-4 border-b-[var(--color-brand-primary)]"
            : "text-gray-500 hover:text-gray-700"
            }`}
    >
        {label}
    </button>
);

export default TabButton;
