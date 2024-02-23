/* eslint-disable no-unused-vars */
import { PDFDownloadLink, Document, Page, Text, StyleSheet, View } from "@react-pdf/renderer";
import useAxiosPrivet from "../../Hooks/useAxiosPrivet";

import { useEffect, useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useSelector, useDispatch } from "react-redux";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
const PrescriptionToPDF = () => {
  const user = useSelector((state) => state.auth.user);
  const { photoURL, email, displayName } = user || {};
  const axios = useAxiosPrivet();

  //doctor data get
 /*  const { data: doctors = [] } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      const res = await useAxiosPublic.get(`/doctors`);
      return res.data;
    },
  });

  const doctor = doctors.find(data=> data.doctorEmail === doctorEmail )
 */
  /* const { data: prescriptionData = [], refetch } = useQuery({
    queryKey: ["prescriptionData"],
    queryFn: async () => {
      const res = await axios.get(`/medicines/${user.email}`);
      return res.data;
    },
  }); */

  const { data: prescriptionData = [], refetch } = useQuery({
    queryKey: ["prescriptionData", user?.email], // Include user.email in the query key
    queryFn: async ({ queryKey }) => {
      const [, userEmail] = queryKey;
      const res = await axios.get(`/medicines/${userEmail}`);
      return res.data;
    },
  });
  console.log(prescriptionData);

  const styles = StyleSheet.create({
    page: {
      backgroundColor: "white",
      boxShadow: "10px 10px 5px 0px rgba(0, 0, 0, 0.5)"
    },
    head: {
      backgroundColor: "#409bd4",
      display: "flex",
      justifyContent: "space-between",
      color: "white",
      padding: "12px",
    },
    logo: {
      width: '80px'
    },
    DName: {
      fontSize: "20px",
      fontWeight: "bold"
    },
    DInfo: {
      display: "flex",
      flexDirection: "column"
    },
    footer: {
      backgroundColor: "#409bd4",
      color: "white",
      marginTop: "30px"
    },
    footer1:{
      display:"flex",
      flexDirection: "row",
      justifyContent: "space-between",
      padding: "12px"
    },
    chikitshaHub:{
      fontWeight: "bold"
    },
    footerInfo:{
      display: "flex",
      gap: "5px",
      flexDirection: "row"
    },
  })
  const MyDocument = () => (
    <Document>
      <Page size="A4">
        <View>
          <View style={styles.head}>
            <View style={styles.DInfo}>
              <Text style={styles.DName}>Doctor</Text>
              <Text>ppppp</Text>
              <Text>bbbbb</Text>
            </View>
            <img
              style={styles.logo}
              src="https://i.ibb.co/V2NKtfr/chikitsha-Hub-logo.png"
              alt=""
            />
          </View>
          <View>
           {/*  {
              prescriptionData.map(medicine=>
                <View key={medicine._id}>
                  <Text>{medicine.medicineName}</Text>
                </View>
                )
            } */}
          </View>
          <View style={styles.footer}>
            <View style={styles.footer1}>
              <Text style={styles.chikitshaHub}>ChikitshaHub</Text>
              <View>
                <View style={styles.footerInfo}>
                  <Text>+5678908765432</Text>
                  <Text>chikishahub@gmail.com</Text>
                </View>
                <View style={styles.footerInfo}>
                  <Text>Mirpur-10 road-306</Text>
                  <Text>Webpage.com</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
  return (
    <div>
      <div className="h-[100vh] flex flex-col justify-center items-center my-10 space-y-5">
        <PDFDownloadLink
          className="mx-4 my-7"
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
        <div className="h-[80vh] flex flex-col items-center justify-center">
          <MyDocument />
        </div>
      </div>
    </div>
  );
};

export default PrescriptionToPDF;
