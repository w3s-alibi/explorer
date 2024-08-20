import React from 'react';

// Component
const Dnd = ({ onDataLoaded }: { onDataLoaded: (data: any) => void }) => {
    const [isDraggedOver, setDraggedOver] = React.useState(false);

    return (
        // <div className="bg-gray-100 h-screen flex items-center justify-center p-3" style={{ width: "100%", height: "100vh" }}>
        //     <h2 style={{ position: "absolute", left: 20, top: 20 }} className="mb-3 text-2xl font-semibold">
        //         Alibi
        //     </h2>
            <div className="w-full max-w-md p-9 bg-white rounded-lg shadow-lg">
                <h1 className="text-center text-2xl sm:text-2xl font-semibold mb-4 text-gray-800">Drop file and Upload</h1>
                <div
                    onDragOver={(event) => {
                        event.preventDefault();
                        if (!isDraggedOver)
                            console.log("drag over");
                            setDraggedOver(true);
                    }}
                    onDragLeave={(event) => {
                        event.preventDefault();
                        if (isDraggedOver)
                            console.log("drag leave");
                            setDraggedOver(false)
                    }}
                    onDrop={(event) => {
                        event.preventDefault();
                        setDraggedOver(false)
                        // handle files
                        const files = event.dataTransfer.files;
                        // handleFiles(files);
                        console.log(event.dataTransfer);
                    }}
                    className={`bg-gray-100 p-8 text-center rounded-lg border-dashed border-2 border-gray-300 hover:border-blue-500 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md ${isDraggedOver ? "border-blue-500 border-2" : ""}`}
                    id="dropzone"
                >
                    <label htmlFor="fileInput" className="cursor-pointer flex flex-col items-center space-y-2">
                        <svg className="w-16 h-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                        </svg>
                        <span className="text-gray-600">Drag and drop your files here</span>
                        <span className="text-gray-500 text-sm">(or click to select)</span>
                    </label>
                    <input type="file" id="fileInput" className="hidden" multiple />
                </div>
                <div className="mt-6 text-center" id="fileList"></div>
            </div>
        // </div>
    );
}

export default Dnd;