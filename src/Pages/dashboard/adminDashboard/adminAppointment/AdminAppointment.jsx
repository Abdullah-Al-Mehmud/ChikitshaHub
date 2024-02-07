import { useQuery } from "@tanstack/react-query"
import useAxiosPublic from "../../../../Hooks/useAxiosPublic"
import DataTable from "react-data-table-component"
import { useState } from "react"
import { IoEyeSharp } from "react-icons/io5"
import { MdDelete } from "react-icons/md"

const AdminAppointment = () => {
    const axiosPublic =useAxiosPublic()
    const {data : appointments = [],refresh} = useQuery({
        queryKey:['appointments'],
        queryFn: async () => {
          const res =await axiosPublic.get('/appointments')
          return res.data
        }
      })
      console.log(appointments);
      // table dec colum
      const column = [
       {
        name: "DoctorCode",
        selector: row =>row.doctorCode,
        sortable: true
       },
       {
        name: "DoctorName",
        selector: row =>row.doctorName
       },
       {
        name: "PatientName",
        selector: row =>row.patientName
        
       },
       {
        name: "PatientEmail",
        selector: row =>row.doctorCode,
      
       },
       {
        name: "AppointmentTime",
        selector: row =>row.appointmentTime,
      
       },
       {
        name:"View Appointment",
        cell:() => <button><IoEyeSharp /></button>,
        ignoreRowClick: true,
        allowOverflow: true,
        button: true,
      
      },
      {
        name:"Delete",
        cell:() => <button> <MdDelete /> </button>,
        ignoreRowClick: true,
        allowOverflow: true,
        button: true,
      
      },
      {
        name:"Status",
        cell:() => <button> <a className="text-red-500"> Pending</a> </button>,
        ignoreRowClick: true,
        allowOverflow: true,
        button: true,
       
      },
      ]
     
    return(
        <div style={{paddingTop: "10px",backgroundColor:"gray", }}> 
            <DataTable
            columns={column}
            data={appointments}
            pagination
            >
            </DataTable>
        </div>
    )}
export default AdminAppointment;