/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React from "react";
import { useEffect, useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { MdOutlineCancel } from "react-icons/md";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import TableSearch from "../../../../Components/tableSearch/TableSearch";
import SpecialitiesForm from "./SpecialitiesForm";
import { imageUpload } from "../../../../api/utils";
import UpdateSpecialitiesForm from "./UpdateSpecialitiesForm";
import Swal from "sweetalert2";
const AdminSpecialities = () => {
  const queryClient = useQueryClient();
  const columnHelper = createColumnHelper();
  const axios = useAxiosPublic();
  const [uploadImageName, setUploadImageName] = useState("Upload Image");
  const [globalFilter, setGlobalFilter] = useState("");
  const [editedData, setEditedData] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const { data: specialties = [], refetch } = useQuery({
    queryKey: ["specialties"],
    queryFn: async () => {
      const res = await axios.get("/specialities");
      return res.data;
    },
  });
  //   console.log(specialties);
  // const refreshData = async () => {
  //   await queryClient.invalidateQueries("specialties");
  // };
  // useEffect(() => {
  //   refreshData();
  // }, []);
  const handleDelete = (dataId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`/specialities/${dataId}`).then(async (res) => {
          // console.log(res.statusText);
          if (res.statusText === "OK") {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            refetch();
          }
        });
      } else if (result.dismiss === "cancel") {
        Swal.fire({
          title: "Cancelled",
          text: "Your donation camp is safe!",
          icon: "info",
        });
      }
    });
  };
  const columns = [
    columnHelper.accessor("", {
      id: "S.No",
      cell: (info) => <span>{info.row.index + 1}</span>,
      header: "S.No",
    }),
    columnHelper.accessor("image", {
      cell: (info) => (
        <img
          src={info?.getValue()}
          alt="..."
          className="w-12 h-10 object-cover"
        />
      ),
      header: "Image",
    }),
    columnHelper.accessor("specialties", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Specialties Name",
    }),
    columnHelper.accessor("description", {
      cell: (info) => (
        <span className="text-sm text-slate-800">
          {info.getValue().slice(0, 15)}...
        </span>
      ),
      header: "description",
    }),
    columnHelper.accessor("action", {
      cell: (props) => {
        const { row } = props;
        const rowData = row.original;
        const { _id, image, specialties, description } = editedData || {};
        const handleEditClick = () => {
          setOpenModal(true);
          setEditedData(rowData);
        };
        return (
          <>
            <div className="flex gap-3 font-normal">
              <div>
                <button
                  onClick={() => handleEditClick(rowData)}
                  className="btn btn-sm btn-accent"
                >
                  Update
                </button>
                <div
                  className={`fixed flex justify-center items-center z-[100] ${
                    openModal ? "visible opacity-1" : "invisible opacity-0"
                  } inset-0 bg-black/10 duration-100`}
                >
                  <div
                    className={`absolute max-w-3xl p-4 text-center bg-white drop-shadow-2xl rounded-lg ${
                      openModal
                        ? "scale-1 opacity-1 duration-300"
                        : "scale-0 opacity-0 duration-150"
                    }`}
                  >
                    <div
                      onClick={() => setOpenModal(false)}
                      className="w-8 mx-auto mr-0 cursor-pointer text-red-600 font-semibold text-3xl"
                    >
                      <MdOutlineCancel />
                    </div>
                    <UpdateSpecialitiesForm
                      dataName={specialties}
                      dataDes={description}
                      dataId={_id}
                      dataImg={image}
                      handleUploadImage={handleUploadImage}
                      handleSubmit={handleSubmit}
                      refetch={refetch}
                    />

                    {/* <h1>{editedData.specialties}</h1> */}
                  </div>
                </div>
              </div>
              <button
                onClick={() => handleDelete(row.original._id)}
                className="btn btn-sm btn-error"
              >
                Delete
              </button>
            </div>
          </>
        );
      },
      header: "description",
    }),
  ];
  const table = useReactTable({
    data: specialties,
    columns,
    getRowId: (row) => row.id,
    state: { globalFilter },
    getFilteredRowModel: getFilteredRowModel(),
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const image = form.image.files[0];
    const specialties = form.specialties.value;
    const description = form.description.value;
    const img_url = await imageUpload(image);
    const specialitiesData = {
      image: img_url?.data?.display_url,
      specialties,
      description,
    };
    try {
      const res = await axios.post("/specialities", specialitiesData);
      console.log(res.statusText);
      if (res.statusText === "Created") {
        setOpenModal(false);
        setUploadImageName("Uploaded!");
        refetch();
        Swal.fire({
          title: "Specialist Added!",
          text: "Your request accepted.",
          icon: "success",
        });
      }
    } catch (err) {
      console.log(err);
    } finally {
      //   setLoading(false);
    }
  };

  const handleUploadImage = (image) => {
    setUploadImageName(image?.name);
  };
  return (
    <>
      <div className="p-2 mt-5 max-w-5xl mx-auto text-black">
        <div className="flex justify-between mb-2">
          <div className="w-full flex items-center gap-1">
            <TableSearch
              value={globalFilter ?? ""}
              onChange={(value) => setGlobalFilter(String(value))}
              className="p-2 bg-transparent outline-none border-b-2 w-1/5 focus:w-1/3 duration-300 border-indigo-100 text-black"
              placeholder="Search all columns..."
            />
          </div>
          <div>
            <button
              className="btn bg-[#409bd4] text-white"
              onClick={() => document.getElementById("my_modal_4").showModal()}
            >
              Add New Specialities
            </button>
            <dialog id="my_modal_4" className="modal">
              <div className="modal-box w-11/12 max-w-5xl">
                <SpecialitiesForm
                  handleUploadImage={handleUploadImage}
                  handleSubmit={handleSubmit}
                />
                <div className="modal-action">
                  <form method="dialog">
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="border border-gray-50 w-full text-left overflow-scroll table-auto">
            <thead className="bg-indigo-100 table-header-group">
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th key={header.id} className="capitalize px-3.5 py-2">
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody className="">
              {table.getRowModel().rows.length ? (
                table.getRowModel().rows.map((row, i) => (
                  <tr
                    key={row.id}
                    className={`${i % 2 === 0 ? "bg-gray-100" : "bg-gray-50"}`}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <td key={cell.id} className="px-3.5 py-2">
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    ))}
                  </tr>
                ))
              ) : (
                <tr className="text-center h-32">
                  <td colSpan={12}>No Record Found!</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="flex items-center justify-end mt-2 gap-2">
          <button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="p-1 border border-gray-300 px-2"
          >
            {"<"}
          </button>
          <button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="p-1 border border-gray-300 px-2"
          >
            {">"}
          </button>
          <span className="flex items-center gap-1">
            <div>Page</div>
            <strong>
              {table.getState().pagination.pageIndex + 1} of{" "}
              {table.getPageCount()}
            </strong>
          </span>
          <div className="lg:block hidden">
            <span className="flex items-center gap-1">
              | Go to page:
              <input
                type="number"
                defaultValue={table.getState().pagination.pageIndex + 1}
                onChange={(e) =>
                  table.setPageIndex(
                    e.target.value ? Number(e.target.value) - 1 : 0
                  )
                }
                className="border p-1 rounded w-16 bg-transparent"
              />
            </span>
          </div>
          <select
            value={table.getState().pagination.pageSize}
            onChange={(e) => table.setPageSize(Number(e.target.value))}
            className="p-2 bg-transparent"
          >
            {[10, 20, 30, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
};

export default AdminSpecialities;
