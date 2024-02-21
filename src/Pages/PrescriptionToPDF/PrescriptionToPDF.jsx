import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFDownloadLink,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#409bd4",
    color: "#fff",
    justifyContent: "space-between",
    // justifyContent: "center",
    // alignItems: "center",
    // rowGap: 20,
    gap: 10,
  },
  section: {
    margin: 30,
    padding: 20,
    fontWeight: 700,
    fontSize: 20,
  },
  text: {
    textAlign: "center",
  },
  textNew: {
    textAlign: "center",
    color: "#00000",
  },
  main: {
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100vh",
  },
});
const PrescriptionToPDF = () => {
  const x = "hello world pdf";

  const MyDocument = () => (
    <Document style={styles.section}>
      <Page size="A4">
        <view style={styles.main}>
          <View style={styles.page}>
            <View>
              <Text style={styles.text}>{x}</Text>
              <Text style={styles.text}>{x} world new pdf</Text>
            </View>
            <View>
              <Text style={styles.text}>{x}</Text>
              <Text style={styles.text}>{x} world new pdf</Text>
            </View>
          </View>
          <view>
            <Text style={styles.textNew}>{x}</Text>
          </view>
          <View style={styles.page}>
            <View>
              <Text style={styles.text}>{x}</Text>
              <Text style={styles.text}>{x} world new pdf</Text>
            </View>
            <View>
              <Text style={styles.text}>{x}</Text>
              <Text style={styles.text}>{x} world new pdf</Text>
            </View>
          </View>
        </view>
      </Page>
    </Document>
  );
  return (
    <div>
      <div className="h-[100vh] flex flex-col justify-center items-center my-10 space-y-5">
        <PDFDownloadLink
          className="mx-4 my-7 text-center"
          document={<MyDocument />}
          fileName="prescription.pdf"
        >
          {({ loading }) =>
            loading ? (
              "Loading document...."
            ) : (
              <button className="btn btn-accent">Download Prescription</button>
            )
          }
        </PDFDownloadLink>
        {/* <div className="h-[80vh] flex flex-col items-center justify-center">
          <MyDocument />
        </div> */}
      </div>
    </div>
  );
};

export default PrescriptionToPDF;
