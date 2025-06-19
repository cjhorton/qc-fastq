import './App.css'
import { FileUploader } from "@/components/file-uploader.tsx";
import type { UploadedFiles } from "@/types/uploaded-files.ts";
import { useState } from "react";

export const App = () => {
    const [files, setFiles] = useState<UploadedFiles>({read1: null, read2: null});

    const handleAcceptedFiles = (read: '1' | '2', acceptedFiles: File[]) => {
        setFiles(prev => ({
            read1: read === '1' ? (acceptedFiles[0] ?? null) : prev.read1,
            read2: read === '2' ? (acceptedFiles[0] ?? null) : prev.read2,
        }));
    };

    const handleAnalyze = () => {
        console.log('Analysis started!');
    }

    const isAnalyzeDisabled = !files.read1;

    return (
        <>
            <h1>Under Development - Coming Soon!</h1>
            <FileUploader
                showUpload={true}
                onAcceptedFiles={handleAcceptedFiles}/>
            <button onClick={handleAnalyze} disabled={isAnalyzeDisabled}>Analyze</button>
        </>
    );
}

export default App
