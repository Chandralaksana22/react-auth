// components/Home.js
import React, { useEffect, useState } from "react";
import { getUsers } from "../lib/api";
const Home = () => {
  const [users, setUsers] = useState([]);
  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("token");
  };
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getUsers();
        setUsers(response.data);
      } catch (error) {
        console.error("Fetch users error:", error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div>
      <div>
        <div className="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
              List User
            </h5>
            <a
              href="#"
              onClick={handleLogout}
              className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
            >
              Logout
            </a>
          </div>
          <div className="flow-root">
            <ul
              role="list"
              className="divide-y divide-gray-200 dark:divide-gray-700"
            >
              {users.map((user) => (
                <li key={user.id} className="py-3 sm:py-4">
                  <a href={`/users/${user.id}`}>
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <img
                          className="w-8 h-8 rounded-full"
                          src={user.avatar}
                          alt={user.avatar}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                          {user.first_name} {user.last_name}
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                          {user.email}
                        </p>
                      </div>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
