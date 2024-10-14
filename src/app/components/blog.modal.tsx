// "use client";
// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";
// import Form from "react-bootstrap/Form";
// import { useEffect, useState } from "react";
// import { toast } from "react-toastify";
// import { mutate } from "swr";

// interface IProps {
//   action: "add" | "edit";
//   showModalCreate: boolean;
//   setShowModalCreate: (value: boolean) => void;
//   currentBlog?: IBlog;
// }

// function CreateModal(props: IProps) {
//   const { action, showModalCreate, setShowModalCreate, currentBlog} = props;

//   const [title, setTitle] = useState<string>("");
//   const [author, setAuthor] = useState<string>("");
//   const [content, setContent] = useState<string>("");

//   useEffect(() => {
//     if (action === "edit" && currentBlog) {
//       setTitle(currentBlog.title);
//       setAuthor(currentBlog.author);
//       setContent(currentBlog.content);
//     } else {
//       setTitle("");
//       setAuthor("");
//       setContent("");
//     }
//   }, [action, currentBlog]);

//   const handleSave = () => {
//     if (!title || !author || !content) {
//       toast.error("Please fill in all fields");
//       return;
//     }
//     switch (action) {
//       case "edit":
//         {
//           fetch(`http://localhost:8000/blogs/${currentBlog?.id}`, {
//             method: "PUT",
//             headers: {
//               "Content-Type": "application/json",
//             },
//             body: JSON.stringify({
//               title,
//               author,
//               content,
//             }),
//           })
//             .then((res) => res.json())
//             .then((res) => {
//               if (res) {
//                 toast.success("Blog updated successfully");
//                 handleCloseModal();
//                 mutate("http://localhost:8000/blogs");
//               }
//             });
//         }
//         break;
//       case "add":
//         {
//           fetch("http://localhost:8000/blogs", {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json",
//             },
//             body: JSON.stringify({
//               title,
//               author,
//               content,
//             }),
//           })
//             .then((res) => res.json())
//             .then((res) => {
//               if (res) {
//                 toast.success("Create success");
//                 handleCloseModal();
//                 mutate("http://localhost:8000/blogs");
//               }
//             });
//         }
//         break;
//     }
//   };

//   const handleCloseModal = () => {
//     setTitle("");
//     setAuthor("");
//     setContent("");
//     setShowModalCreate(false);
//   };

//   return (
//     <>
//       <Modal
//         show={showModalCreate}
//         onHide={() => setShowModalCreate(false)}
//         backdrop="static"
//         keyboard={false}
//         size="lg"
//       >
//         <Modal.Header closeButton>
//           <Modal.Title>
//             {action === "add" ? "Add Blog" : "Edit Blog"}
//           </Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form>
//             <Form.Group className="mb-3">
//               <Form.Label>Title</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="..."
//                 value={title}
//                 onChange={(e) => setTitle(e.target.value)}
//               />
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Form.Label>Author</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="..."
//                 value={author}
//                 onChange={(e) => setAuthor(e.target.value)}
//               />
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Form.Label>Content</Form.Label>
//               <Form.Control
//                 as="textarea"
//                 rows={3}
//                 value={content}
//                 onChange={(e) => setContent(e.target.value)}
//               />
//             </Form.Group>
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={() => handleCloseModal()}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={() => handleSave()}>
//             {action === "add" ? "Add" : "Update"}
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }

// export default CreateModal;
