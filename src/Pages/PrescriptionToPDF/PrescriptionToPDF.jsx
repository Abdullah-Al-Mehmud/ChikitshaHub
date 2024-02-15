import { PDFDownloadLink, Document, Page, Text } from "@react-pdf/renderer";

const PrescriptionToPDF = () => {
    const MyDocument = () => (
        <Document>
            <Page>
                <Text>Hello, World!</Text>
            </Page>
        </Document>
    );
    return (
        <div>
            <div className="h-[100vh] flex flex-col justify-center items-center my-10 space-y-5">
                <PDFDownloadLink className="mx-4 my-7" document={<MyDocument />} fileName="prescription.pdf">
                    {({ loading }) =>
                        loading ? "Loading document...." : <button className="btn btn-accent">Download Prescription</button>
                    }
                </PDFDownloadLink>
                <div className="h-[80vh] flex flex-col items-center justify-center">
                    <MyDocument />
                </div>
            </div>
        </div>
    );
};

export default PrescriptionToPDF;