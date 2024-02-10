import { useQuery } from "@tanstack/react-query"
import DataTable from "react-data-table-component"
import useAxiosPublic from "../../../../Hooks/useAxiosPublic"

const AdminAllPatients = () => {
    const axiosPublic =useAxiosPublic()
    const {data : allpatients = [],refresh} = useQuery({
        queryKey:['appointments'],
        queryFn: async () => {
          const res =await axiosPublic.get('/users')
          return res.data
        }
      })
      console.log(allpatients);
      // table dec colum
      const column = [
       
        {
         name: "Name",
         selector: row =>row.name,
         sortable: true
        },
        {
         name: "email",
         selector: row =>row.email
        },
        {
         name: "Role",
         selector: row =>row.role
        },
      
         
       ]
    return(
        <div className="w-4/5 mx-auto overflow-x-auto" style={{paddingTop: "10px",backgroundColor:"gray" }}> 
        <DataTable
        columns={column}
        data={allpatients}
        pagination
        >
        </DataTable>
    </div>
    )}
export default AdminAllPatients;