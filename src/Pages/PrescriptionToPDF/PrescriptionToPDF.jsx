/* eslint-disable no-unused-vars */
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFDownloadLink,
  Image,
} from "@react-pdf/renderer";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

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
    fontSize: 20,
  },
  text: {
    textAlign: "center",
    fontWeight: 700,
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
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 60, // Set the width of the image
    height: 60, // Set the height of the image
  },
});
const PrescriptionToPDF = ({ meetingId }) => {
  const axios = useAxiosPublic();
  const x = "hello world pdf";
  const { data: medicine = [], refetch } = useQuery({
    queryKey: ["medicineAll"],
    queryFn: async () => {
      const res = await axios.get(`/medicines/1/${meetingId}`);
      return res.data;
    },
  });
  const [medicineData] = medicine || [];
  console.log(medicineData.medicines);
  console.log(medicineData)
  const MyDocument = () => (
    <Document style={styles.section}>
      <Page size="A4">
        <view style={styles.main}>
          <View style={styles.page}>
            <View>
              <Text style={styles.text}>{medicineData?.doctorName}</Text>
              <Text style={styles.text}></Text>
            </View>
            <View style={styles.imageContainer}>
              <Image src="https://i.ibb.co/V2NKtfr/chikitsha-Hub-logo.png" style={styles.image} />
            </View>
          </View>
          <View>
            <Text>{medicineData?.patientName}</Text>
            <Text>{medicineData?.age}</Text>
            <Text>{medicineData?.date}</Text>
          </View>
          <view>
            <Text>RX</Text>
            <View style={styles.textNew}>
              {
                medicineData?.medicines?.map((isMedicine, index)=><View key={index}>
                  <Text >{isMedicine?.medicineName}</Text>
                  <Text >{isMedicine?.frequency}</Text>
                  <Text >{isMedicine?.days}</Text>
                </View>)
              }
            </View>
          </view>
          <View style={styles.page}>
            <View>
              <Text style={styles.text}>ChikitshaHub</Text>
              <Text style={styles}>chikishahub@gmail.com</Text>
            </View>
            <View>
              <Text style={styles}>+5678908765432</Text>
              <Text style={styles}>Mirpur-10 road-306</Text>
              <Text>Webpage.com</Text>
            </View>
          </View>
        </view>
      </Page>
    </Document>
  );
  return (
    <div>
      <div className="">
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
