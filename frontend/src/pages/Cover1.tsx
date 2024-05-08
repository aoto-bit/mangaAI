// import { Link } from "react-router-dom"

import { Viewer, Worker } from '@react-pdf-viewer/core';
// import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
// import jp_JP from '@react-pdf-viewer/locales/lib/jp_JP.json';

// Import styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

import PdfUrl from "../manga/Give_My_Regards_to_Black_Jack/001bj.pdf"

const Cover1: React.FunctionComponent = () => {

    // const defaultLayoutPluginInstance = defaultLayoutPlugin();
    // const pdfUrl = import('../pdfs/example.pdf');

    return (
        <div>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                <div style={{ height: '600px', width: '700px'}}>
                    <Viewer
                        fileUrl={PdfUrl}
                        // fileUrl={"pass"}
                        // plugins={[
                        //     defaultLayoutPluginInstance,
                        // ]}
                    />
                </div>
            </Worker>
        </div>
    )
}

export default Cover1