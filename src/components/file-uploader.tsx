import { FileUpload, useFileUpload } from '@ark-ui/react/file-upload'
import type {
    FileAcceptDetails
} from "@/types/file-upload-types";

interface Props {
    showUpload: boolean;
    onAcceptedFiles: (read: '1' | '2', files: File[]) => void;
}

export const FileUploader = ({showUpload, onAcceptedFiles}: Props) => {
    const read1Upload = useFileUpload(
        {
            maxFiles: 1,
            accept: ['.fastq', '.fq', '.gz'],
            allowDrop: false,
            onFileAccept: (details: FileAcceptDetails) => onAcceptedFiles('1', details.files)
        });

    const read2Upload = useFileUpload(
        {
            maxFiles: 1,
            accept: ['.fastq', '.fq', '.gz'],
            allowDrop: false,
            onFileAccept: (details: FileAcceptDetails) => onAcceptedFiles('2', details.files),
        });

    return (
        showUpload && (
            <>
                <h2>Upload Read 1 (Required)</h2>
                <FileUpload.RootProvider value={read1Upload}>
                    <FileUpload.Trigger>Choose Read 1</FileUpload.Trigger>
                    <FileUpload.ItemGroup>
                        <FileUpload.Context>
                            {({acceptedFiles}) =>
                                acceptedFiles.map((file) => (
                                    <FileUpload.Item key={file.name} file={file}>
                                        <FileUpload.ItemName/>
                                        <FileUpload.ItemSizeText/>
                                        <FileUpload.ItemDeleteTrigger>X</FileUpload.ItemDeleteTrigger>
                                    </FileUpload.Item>
                                ))
                            }
                        </FileUpload.Context>
                    </FileUpload.ItemGroup>
                    <FileUpload.HiddenInput/>
                </FileUpload.RootProvider>

                <h2>Upload Read 2 (Optional)</h2>
                <FileUpload.RootProvider value={read2Upload}>
                    <FileUpload.Trigger>Choose Read 2</FileUpload.Trigger>
                    <FileUpload.ItemGroup>
                        <FileUpload.Context>
                            {({acceptedFiles}) =>
                                acceptedFiles.map((file) => (
                                    <FileUpload.Item key={file.name} file={file}>
                                        <FileUpload.ItemName/>
                                        <FileUpload.ItemSizeText/>
                                        <FileUpload.ItemDeleteTrigger>X</FileUpload.ItemDeleteTrigger>
                                    </FileUpload.Item>
                                ))
                            }
                        </FileUpload.Context>
                    </FileUpload.ItemGroup>
                    <FileUpload.HiddenInput/>
                </FileUpload.RootProvider>
            </>)
    )
}
