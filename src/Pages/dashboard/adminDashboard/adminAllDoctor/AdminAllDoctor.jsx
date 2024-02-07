import { useQuery } from "@tanstack/react-query"
import useAxiosPublic from "../../../../Hooks/useAxiosPublic"
import DataTable from "react-data-table-component"
import { IoEyeSharp } from "react-icons/io5";

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
        {
            name:"View Doctor",
            cell:() => <button><IoEyeSharp /></button>,
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
          },
         
       ]

    return(
        <div style={{paddingTop: "10px",backgroundColor:"gray" }}> 
            <DataTable
            columns={column}
            data={appointments}
            pagination
            >
            </DataTable>
        </div>
    )}
export default AdminAllDoctor;