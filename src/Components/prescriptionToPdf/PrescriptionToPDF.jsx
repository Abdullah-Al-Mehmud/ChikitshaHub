/* eslint-disable no-unused-vars */
import { PDFDownloadLink, Document, Page, Text } from "@react-pdf/renderer";
import useAxiosPrivet from "../../Hooks/useAxiosPrivet";

import { useEffect, useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useSelector, useDispatch } from "react-redux";
const PrescriptionToPDF = () => {
  const user = useSelector((state) => state.auth.user);
  const { photoURL, email, displayName } = user || {};
  const axios = useAxiosPrivet();
  const { data: prescriptionData = [], refetch } = useQuery({
    queryKey: ["prescriptionData"],
    queryFn: async () => {
      const res = await axios.get(`/medicines/${user.email}`);
      return res.data;
    },
  });
  console.log(prescriptionData);
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
