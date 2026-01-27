import { useRef } from "react";

const FileUpload = ({ label, file, onChange }) => {
    const inputRef = useRef(null);

    const handleFile = (file) => {
        onChange(file);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const droppedFile = e.dataTransfer.files[0];
        if (droppedFile) handleFile(droppedFile);
    };

    return (
        <div className="w-full mt-4 border border-green-600">
            <label className="font-medium text-primary text-20">{label}</label>
            <div
                onClick={() => inputRef.current.click()}
                onDragOver={(e) => e.preventDefault()}
                onDrop={handleDrop}
                className="p-5 border-2 border-dashed rounded cursor-pointer text-center hover:bg-gray-100"
            >
                <input
                    type="file"
                    ref={inputRef}
                    hidden
                    onChange={(e) => handleFile(e.target.files[0])}
                />

                {!file ? (
                    <p className="text-primary">
                        Select from folder or drag drop
                    </p>
                ) : (
                    <p className="text-brand-primary font-medium">
                        Selected: {file.name}
                    </p>
                )}
            </div>
        </div>
    );
};

export default FileUpload;
