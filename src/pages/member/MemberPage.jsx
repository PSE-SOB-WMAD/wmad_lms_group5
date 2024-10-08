import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getMember } from '../../api/MemberApi';

const MembersPage = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const data = await getMember();
        setMembers(data);
        console.log(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchMembers();
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold pb-5">Members</h1>

      <button
       className="bg-blue-500 text-white px-6 py-2 mb-4 rounded-lg">
        <Link to={`/member/new`}>Create</Link></button>

      <div className="overflow-hidden rounded-xl border border-gray-500">
        <table className="min-w-full bg-white border-b">
          <thead>
            <tr className="bg-slate-100">
              <th className="px-6 py-5 border-b border-black">Action</th>
              <th className="px-6 py-5 border-b border-black">Member Code</th>
              <th className="px-6 py-5 border-b border-black">Full Name</th>
              <th className="px-6 py-5 border-b border-black">Phone</th>
              <th className="px-6 py-5 border-b border-black">Address</th>
              <th className="px-6 py-5 border-b border-black">Start Date</th>
              <th className="px-6 py-5 border-b border-black">Expiry Date</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member, index) => (
              <tr key={index}>
                <td className="py-5 px-7 border-b border-black">
                  <Link 
                    className="bg-blue-400 text-white py-1 px-3 rounded hover:bg-blue-500 "
                    to={`/member/${member.id}`}
                  >
                    View
                  </Link>
                </td>
                <td className="px-7 py-5 border-b border-black">{member.member_code}</td>
                <td className="px-7 py-5 border-b border-black">{member.fullname}</td>
                <td className="px-7 py-5 border-b border-black">{member.phone_number}</td>
                <td className="px-7 py-5 border-b border-black">{member.address}</td>
                <td className="px-7 py-5 border-b border-black">{member.start_date}</td>
                <td className="px-7 py-5 border-b border-black">{member.expiry_date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

  );
};

export default MembersPage;
