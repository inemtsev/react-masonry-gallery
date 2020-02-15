import React, { useState } from 'react';
import './uploadMediaComponent.css';

class FileToUpload {
    static chunkSize = 1024000;
    static uploadUrl = '';
    readonly request: XMLHttpRequest;
    readonly file: File;
    readonly name: string;
    currentChunkStartByte: number;
    currentChunkFinalByte: number;

    constructor(file: File, name: string) {
        this.request = new XMLHttpRequest();
        this.file = file;
        this.name = name;

        this.currentChunkStartByte = 0;
        this.currentChunkFinalByte = FileToUpload.chunkSize > this.file.size ? this.file.size : FileToUpload.chunkSize;
    }

    uploadFile() {
        let chunk: Blob = this.file.slice(this.currentChunkStartByte, this.currentChunkFinalByte);
        this.request.overrideMimeType('application/octet-stream');
        this.request.setRequestHeader('Content-Range', `bytes ${this.currentChunkStartByte}-${this.currentChunkFinalByte}/${this.file.size}`);
        this.request.open('POST', FileToUpload.uploadUrl, true);
        this.request.onload = () => {
            if(this.currentChunkFinalByte === this.file.size) {
                // Do something once done with file
                return;
            }

            this.currentChunkStartByte = this.currentChunkStartByte;
            this.currentChunkFinalByte = this.currentChunkStartByte + FileToUpload.chunkSize;
        }

        this.request.send(chunk);
    }
}

const UploadMediaComponent: React.FC = () => {
    const [filesToUpload, setFilesToUpload] = useState([] as FileToUpload[]);

    const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files: FileList | null = e.target.files;
        if(!files) return;

        let filesToUpload: FileToUpload[] = [];
        for (let i = 0; i < files.length; i++) {
            filesToUpload.push(new FileToUpload(files[i], files[i].name));
        }

        setFilesToUpload(filesToUpload);
    };

    const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    return (
        <div className="upload-container">
            <h2 className="upload-title">File Uploader</h2>
            <div className="upload-form">
                <form id="file_upload" onSubmit={onFormSubmit}>
                    <div className="upload-file-select">
                        <label htmlFor="file_1">Select files for upload</label>
                        <input id="file_1" type="file" multiple onChange={onFileChange}/>
                    </div>

                    <div className="upload-file-list">
                        {filesToUpload.map((f,i) => <div className="upload-file" key={i}>{f.name} - {f.file.size}bytes</div>)}
                    </div>

                    <div className="upload-submit">
                        <input type="submit" value="submit"/>
                    </div>
                </form>
            </div>
        </div>    
    )
}

UploadMediaComponent.displayName = 'UploadMedia';
export default UploadMediaComponent;