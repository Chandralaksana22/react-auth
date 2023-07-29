import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getUserById } from "../../lib/api";

const UserDetailPage = () => {
  const { id } = useParams();

  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await getUserById(id);
        setUser(response.data);
      } catch (error) {
        console.error("Fetch user error:", error);
      }
    };
    fetchUser();
  }, [id]);

  if (!user) {
    return <div className="container flex justify-center  mx-auto px-10 py-10">Loading...</div>;
  }

  return (
    <div className="container flex justify-center  mx-auto px-10 py-10">
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="flex flex-col items-center pb-10">
          <img
            className="w-24 h-24 mb-3 rounded-full shadow-lg"
            src={user.avatar}
            alt={user.avatar}
          />
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            {user.first_name} {user.last_name}
          </h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {user.email}
          </span>
          <div className="flex mt-4 space-x-3 md:mt-6">
                <a href="/" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Back</a>
                <a href={`/users/${user.id + 1}`} className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Next</a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetailPage;
