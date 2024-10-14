// import Table from "react-bootstrap/Table";
// import { Button } from "react-bootstrap";
// import BlogModal from "./blog.modal";
// import { useState } from "react";

// interface IProps {
//   blogs: IBlog[];
// }

// const AppTable = (props: IProps) => {
//   const { blogs } = props;

//   const [showModalCreate, setShowModalCreate] = useState<boolean>(false);
//   const [modalAction, setModalAction] = useState<"add" | "edit">("add");
//   const [currentBlog, setCurrentBlog] = useState<IBlog | undefined>(undefined);

//   const handleAddModal = () => {
//     setModalAction("add");
//     setCurrentBlog(undefined);
//     setShowModalCreate(true);
//   };

//   const handleEditModal = (blog: IBlog) => {
//     setModalAction("edit");
//     setCurrentBlog(blog);
//     setShowModalCreate(true);
//   };
//   return (
//     <>
//       <div
//         className="mb-3"
//         style={{ display: "flex", justifyContent: "space-between" }}
//       >
//         <h3>Table Blogs</h3>
//         <Button variant="secondary" onClick={() => handleAddModal()}>
//           Add New
//         </Button>
//       </div>
//       <Table striped bordered hover>
//         <thead>
//           <tr>
//             <th>#</th>
//             <th>Title</th>
//             <th>Author</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {blogs.map((blog) => {
//             return (
//               <tr key={blog.id}>
//                 <td>{blog.id}</td>
//                 <td>{blog.title}</td>
//                 <td>{blog.author}</td>
//                 <td>
//                   <Button>View</Button>
//                   <Button
//                     variant="warning"
//                     className="mx-3"
//                     onClick={() => handleEditModal(blog)}
//                   >
//                     Edit
//                   </Button>
//                   <Button variant="danger">Delete</Button>
//                 </td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </Table>
//       <BlogModal
//         action={modalAction}
//         showModalCreate={showModalCreate}
//         setShowModalCreate={setShowModalCreate}
//         currentBlog={currentBlog}
//       />
//     </>
//   );
// };

// export default AppTable;
