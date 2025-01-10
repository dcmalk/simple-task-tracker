interface ToastProps {
  message: string;
  type: 'success' | 'error';
  onClose: () => void;
}

function Toast({ message, type, onClose }: ToastProps) {
  return (
    <div className="fixed bottom-4 right-4 z-50 animate-fade-in">
      <div
        className={`px-4 py-3 rounded-lg shadow-lg flex items-center gap-2 ${
          type === 'success' ? 'bg-green-500' : 'bg-red-500'
        } text-white`}
      >
        <p className="text-sm">{message}</p>
        <button
          onClick={onClose}
          className="ml-2 text-white hover:text-gray-200"
        >
          ×
        </button>
      </div>
    </div>
  );
}

export default Toast; 