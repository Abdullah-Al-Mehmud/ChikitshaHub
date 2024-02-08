import { useQuery } from "@tanstack/react-query"
import useAxiosPublic from "../../../../Hooks/useAxiosPublic"
import DataTable from "react-data-table-component"
import { useState } from "react"
import { IoEyeSharp } from "react-icons/io5"
import { MdDelete } from "react-icons/md"
import Swal from "sweetalert2"

const AdminAppointment = () => {
    const axiosPublic =useAxiosPublic()
    const {data : appointments = [],refetch} = useQuery({
        queryKey:['appointments'],
        queryFn: async () => {
          const res =await axiosPublic.get('/appointments')
          return res.data
        }
      })
      console.log(appointments);
      // delete
        // do work of delete
  const handleDelete = id => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        // Swal.fire({
        //   title: "Deleted!",
        //   text: "Your file has been deleted.",
        //   icon: "success"
        // });
        axiosPublic.delete(`/appointments/${id}`)
          .then(res => {
            refetch()
            if (res.data.deletedCount > 0) {
              Swal.fire({
                title: "Good job!",
                text: "You clicked the button!",
                icon: "success"
              });
            }
          })
      }
      
    });
  }
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
        name:"Delete",
        selector: row =>  <button onClick={()=>handleDelete(row._id)} > <MdDelete /> </button>,
        ignoreRowClick: true,
        allowOverflow: true,
        button: true,
      
      },
      // {
      //   name:"Status",
      //   cell:() => <button> <a className="text-red-500"> Pending</a> </button>,
      //   ignoreRowClick: true,
      //   allowOverflow: true,
      //   button: true,
       
      // },
      ]
     
    return(
        <div className="w-11/12 mx-auto overflow-x-auto" style={{paddingTop: "10px",backgroundColor:"gray", }}> 
            <DataTable
            columns={column}
            data={appointments}
            pagination
            >
            </DataTable>
        </div>
    )}
export default AdminAppointment;