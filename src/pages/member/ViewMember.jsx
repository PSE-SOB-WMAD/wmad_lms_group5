import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Button from "../../components/ButtonMember";

function ViewBookCatalog() {
  const [members, setData] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch(`http://localhost:3000/api/members/${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response.json();
      })
      .then((data) => {
        console.log("Data", data);
        setData(data);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  }, [id]);
  const handleDelete = (id) => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this member?"
    );

    if (isConfirmed) {
      const token = localStorage.getItem("token");
      navigate("/member");
      fetch(`http://localhost:3000/api/members/` + id, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).catch((error) => {
        console.error("Error", error);
      });
    }
  };
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Member Information</h1>

      <div className="flex mt-4 py-4 gap-9">
      
        <Button 
        text="Back" 
     
        onClick={() => navigate("/member")}
      />
       <Button 
        text="update" 
        type='button-blue'
      />
      
        <Button 
        text="Delete" 
        type='button-red'
        onClick={() =>handleDelete(members.id)}
      />
        
      </div>
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <table className="min-w-full bg-white border-b">
          <tbody>
            <tr className="border-t border-gray-200">
              <td className="px-6 py-5 text-black font-semibold">
                Member Code
              </td>
              <td className="px-6 py-5">{members.member_code}</td>
            </tr>
            <tr className="border-t border-gray-200">
              <td className="px-6 py-5 text-black font-semibold">Full Name</td>
              <td className="px-6 py-5">{members.fullname}</td>
            </tr>
            <tr className="border-t border-gray-200">
              <td className="px-6 py-5 text-black font-semibold">
                Date of Birth
              </td>
              <td className="px-6 py-5">{members.date_of_birth}</td>
            </tr>
            <tr className="border-t border-gray-200">
              <td className="px-6 py-5 text-black font-semibold">Email</td>
              <td className="px-6 py-5">{members.email}</td>
            </tr>
            <tr className="border-t border-gray-200">
              <td className="px-6 py-5 text-black font-semibold">Phone</td>
              <td className="px-6 py-5">{members.phone_number}</td>
            </tr>
            <tr className="border-t border-gray-200">
              <td className="px-6 py-5 text-black font-semibold">Address</td>
              <td className="px-6 py-5">{members.address}</td>
            </tr>
            <tr className="border-t border-gray-200">
              <td className="px-6 py-5 text-black font-semibold">Start Date</td>
              <td className="px-6 py-5">{members.start_date}</td>
            </tr>
            <tr className="border-t border-gray-200">
              <td className="px-6 py-5 text-black font-semibold">
                Expiry Date
              </td>
              <td className="px-6 py-5">{members.expiry_date}</td>
            </tr>
            <tr className="border-t border-gray-200">
              <td className="px-6 py-5 text-black font-semibold">Status</td>
              <td className="px-6 py-5 text-blue-500">
                {members.is_active ? "Active" : "Inactive"}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ViewBookCatalog;
