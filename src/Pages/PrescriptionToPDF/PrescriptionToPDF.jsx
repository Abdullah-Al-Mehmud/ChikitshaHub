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
    padding: 20
  },
  section: {
    margin: 30,
    // padding: 20,
    fontSize: 20,
  },
  textHeader: {
    fontWeight: "bold",
    fontSize: 20
  },
  textRx: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#409bd4"
  },
  text: {
    fontSize: 16,
    // textAlign: "center",
    // fontWeight: 700,
  },
  textNew: {
    // textAlign: "center",
    color: "#00000",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    // gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
  },
  main: {
    // flexDirection: "column",
    // justifyContent: "space-between",
    height: "100vh",
    // fontFamily: "poppins"
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 60, // Set the width of the image
    height: 60, // Set the height of the image
  },
  footer:{
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100vh",
    marginTop: 10,
    lineHeight: 2
  },
  paddings:{
    padding: 15,
    marginTop: 5,
    lineHeight: 3,
  }
});
const PrescriptionToPDF = ({ meetingId }) => {
  const axios = useAxiosPublic();
  const { data: medicine = [], refetch } = useQuery({
    queryKey: ["medicineAll"],
    queryFn: async () => {
      const res = await axios.get(`/medicines/1/${meetingId}`);
      return res.data;
    },
  });
  const [medicineData] = medicine || [];
  console.log(medicineData?.medicines);
  console.log(medicineData)
  const MyDocument = () => (
    <Document style={styles.section}>
      <Page size="A4">
        <view style={styles.main}>
          <View style={styles.page}>
            <View style={styles.paddings}>
              <Text style={styles.textHeader}>{medicineData?.doctorName}</Text>
              <Text style={styles.text}>{medicineData?.degrees[0]}</Text>
              <Text style={styles.text}>{medicineData?.specialties}</Text>
              <Text style={styles.text}>{medicineData?.doctorEmail}</Text>
            </View>
            <View style={styles.imageContainer}>
              <Image src="https://i.ibb.co/V2NKtfr/chikitsha-Hub-logo.png" style={styles.image} />
            </View>
          </View>
          <View style={styles.paddings}>
            <Text >Patient Name: {medicineData?.patientName}</Text>
            <Text >Patient Age: {medicineData?.age}</Text>
            <Text >Patient Date: {medicineData?.date}</Text>
          </View>
          <View style={styles.footer}>
            <view style={styles.paddings}>
              <Text style={styles.textRx}>Rx.</Text>
              <View>
                {
                  medicineData?.medicines?.map((isMedicine, index) => <View style={styles.textNew} key={index}>
                    <Text style={styles.medicineInfo}>{isMedicine?.medicineName}</Text>
                    <Text >{isMedicine?.frequency}</Text>
                    <Text >{isMedicine?.days}</Text>
                  </View>)
                }
              </View>
            </view>
            <View style={styles.page}>
              <View>
                <Text style={styles.text}>ChikitshaHub</Text>
                <Text style={styles.text}>chikishahub@gmail.com</Text>
              </View>
              <View>
                <Text style={styles.text}>+5678908765432</Text>
                <Text style={styles.text}>Mirpur-10 road-306</Text>
                <Text>Webpage.com</Text>
              </View>
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
