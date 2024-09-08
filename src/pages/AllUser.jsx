import axios from "axios";
import { useEffect, useState } from "react";
import Modal from "react-modal";
import { ImCancelCircle } from "react-icons/im";

const fetchUserData = async () => {
  try {
    const response = await axios.get("https://spanchatbk.vercel.app/getUserData");
    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};

const AllUser = () => {
  const [openTab, setOpenTab] = useState(1);
  const [createUser, setCreateUser] = useState(false);
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null); // Store the selected user
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    // Fetch user data when the component mounts
    const getData = async () => {
      try {
        const data = await fetchUserData();
        setUserData(data);
      } catch (err) {
        setError("Error fetching user data. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  const openModal = (user) => {
    setSelectedUser(user);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedUser(null);
    setModalIsOpen(false);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "400px",
      height: "400px",
      position: "relative",
    },
  };

  console.log(userData);

  return (
    <div className="bg-[#F1F5F9] w-full p-0 md:p-10">
      <div className="bg-white p-5 md:p-10">
        <div className="md:flex justify-between items-center">
          <h1 className="text-[#8a99af] text-xl font-medium">
            User Information
          </h1>
          <button
            onClick={() => setCreateUser((prev) => !prev)}
            className="bg-[#3C50E0] text-white px-12 py-3 rounded-md"
          >
            {!createUser ? "Create New User" : "Cancel"}
          </button>
        </div>
        {!createUser ? (
          <div className="flex flex-wrap">
            <div className="w-full">
              <ul
                className="flex mb-0 list-none gap-5 flex-wrap pt-3 pb-4 flex-row"
                role="tablist"
              >
                {["All", "Paid", "Pending", "Free", "Trial", "Expired"].map(
                  (tab, index) => (
                    <li
                      className="-mb-px mr-2 last:mr-0 flex-auto text-center"
                      key={index}
                    >
                      <a
                        className={
                          "text-xs font-bold uppercase p-2 rounded block leading-normal text-white " +
                          (openTab === index + 1
                            ? "bg-[#4F61E3]"
                            : "bg-[#738296]")
                        }
                        onClick={() => setOpenTab(index + 1)}
                        role="tablist"
                      >
                        {tab}
                      </a>
                    </li>
                  )
                )}
              </ul>
              <h1 className="text-[#dee4ee] font-bold text-center text-xl py-8">
                Total All Users: {userData.length}
              </h1>
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                <div className="px-1 md:px-4 py-5 flex-auto">
                  <div className="tab-content tab-space">
                    {["All", "Paid", "Pending", "Free", "Trial", "Expired"].map(
                      (tab, index) => (
                        <div
                          className={openTab === index + 1 ? "block" : "hidden"}
                          key={index}
                        >
                          <div className="flex flex-col">
                            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                              <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                                <div className="overflow-hidden">
                                  <table className="min-w-full text-left text-sm font-light">
                                    <thead className="border-b font-medium dark:border-neutral-500">
                                      <tr>
                                        <th scope="col" className="px-6 py-4">
                                          ID
                                        </th>
                                        <th scope="col" className="px-6 py-4">
                                          Email
                                        </th>
                                        <th scope="col" className="px-6 py-4">
                                          PASSWORD
                                        </th>
                                        <th scope="col" className="px-6 py-4">
                                          MORE
                                        </th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {userData.map((user, index) => (
                                        <tr
                                          key={index}
                                          className="font-medium text-base"
                                        >
                                          <td className="px-6 py-4">
                                            {index + 1}
                                          </td>
                                          <td className="px-6 py-4">
                                            {user.email}
                                          </td>
                                          <td className="px-6 py-4">
                                            {user.password}
                                          </td>
                                          <td className="px-6 py-4">
                                            <button
                                              onClick={() => openModal(user)}
                                              className="text-blue-500 hover:text-blue-700"
                                            >
                                              More
                                            </button>
                                          </td>
                                        </tr>
                                      ))}
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="p-3 md:p-10">
            <form className="w-full bg-[#F1F5F9] py-10">
              <div className="w-full md:w-1/2 px-5 md:px-0 mx-auto space-y-5">
                <div className="flex flex-col">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="border border-black/10 outline-none w-full p-3 text-lg rounded-md"
                    placeholder="EX:(Jhon Doe)"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="border border-black/10 outline-none w-full p-3 text-lg rounded-md"
                    placeholder="EX:(example@gmail.com)"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="gender">Gender</label>
                  <select
                    className="border border-black/10 outline-none w-full p-3 text-lg rounded-md"
                    name="gender"
                    id="gender"
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="border border-black/10 outline-none w-full p-3 text-lg rounded-md"
                    placeholder="Add Type"
                  />
                </div>
                <input
                  type="submit"
                  value="Create New User"
                  className="text-lg bg-[#3C50E0] py-3 text-white w-full rounded-md"
                />
              </div>
            </form>
          </div>
        )}
      </div>
      <Modal
        isOpen={modalIsOpen}
        style={customStyles}
        onRequestClose={closeModal}
      >
        <button
          className="absolute top-0 right-0 bg-red-500 text-xl text-white p-2 rounded-full"
          onClick={closeModal}
        >
          <ImCancelCircle />
        </button>
        <h2 className="text-center font-semibold text-lg">Image Details</h2>
        <div>
          Front Image:{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href={selectedUser && selectedUser.frontImageUrl}
            className="text-blue-400"
          >
            {selectedUser && selectedUser.frontImageUrl}
          </a>
        </div>
        <div>
          Back Image:{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href={selectedUser && selectedUser.backImageUrl}
            className="text-blue-400"
          >
            {selectedUser && selectedUser.backImageUrl}
          </a>
        </div>
        <div>
          SSN Image:{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href={selectedUser && selectedUser.ssnImageUrl}
            className="text-blue-400"
          >
            {selectedUser && selectedUser.ssnImageUrl}
          </a>
        </div>
        <div>
          Selfi with Govment ID Card:{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href={selectedUser && selectedUser.imageUrls}
            className="text-blue-400"
          >
            {selectedUser && selectedUser.imageUrls}
          </a>
        </div>
      </Modal>
    </div>
  );
};

export default AllUser;
