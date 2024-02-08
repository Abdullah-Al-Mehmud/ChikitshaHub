import { useQuery } from "@tanstack/react-query"
import useAxiosPublic from "../../../../Hooks/useAxiosPublic"
import DataTable from "react-data-table-component"
import { IoEyeSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const AdminAllDoctor = () => {
    const axiosPublic =useAxiosPublic()
    const {data : appointments = [],refresh} = useQuery({
        queryKey:['appointments'],
        queryFn: async () => {
          const res =await axiosPublic.get('/doctors')
          return res.data
        }
      })
      console.log(appointments);
      // table dec colum
      const column = [
       
        {
         name: "Name",
         selector: row =>row.name,
         sortable: true
        },
        {
         name: "BMDC Number",
         selector: row =>row.bmdcNumber
        },
        {
         name: "Joining Date",
         selector: row =>row.joiningDate
        },
        // {
            
        //     cell:() => <Link to={`/doctor/${appointments[0]._id}`} ><button className="flex items-center gap-2"> view profile </button></Link>,
        //     ignoreRowClick: true,
        //     allowOverflow: true,
        //     button: true,
        //   },
        {
            name:"View Profile",
          selector: row  => <Link to={`/doctor/${row._id}`}>View Profile</Link>,
            ignoreRowClick: true,
            allowOverflow: true,
           
          },
         
       ]

    return(
        <div className="w-4/5 mx-auto overflow-x-auto" style={{paddingTop: "10px",backgroundColor:"gray" }}> 
            <DataTable
            columns={column}
            data={appointments}
            pagination
            >
            </DataTable>
        </div>
    )}
export default AdminAllDoctor;