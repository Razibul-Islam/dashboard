import { useState } from "react";

const AllUser = () => {
  const [openTab, setOpenTab] = useState(1);
  const [createUser, setCreateUser] = useState(false);

  return (
    <div className="bg-[#F1F5F9] w-full  p-10">
      <div className="bg-white p-10">
        <div className="flex justify-between items-center">
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
                className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
                role="tablist"
              >
                <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                  <a
                    className={
                      "text-xs font-bold uppercase p-2 rounded block leading-normal text-white " +
                      (openTab === 1 ? "bg-[#4F61E3]" : "bg-[#738296]")
                    }
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTab(1);
                    }}
                    data-toggle="tab"
                    href="#link1"
                    role="tablist"
                  >
                    All
                  </a>
                </li>
                <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                  <a
                    className={
                      "text-xs font-bold uppercase p-2 rounded block leading-normal text-white " +
                      (openTab === 2 ? "bg-[#4F61E3]" : "bg-[#738296]")
                    }
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTab(2);
                    }}
                    data-toggle="tab"
                    href="#link2"
                    role="tablist"
                  >
                    Paid
                  </a>
                </li>
                <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                  <a
                    className={
                      "text-xs font-bold uppercase p-2 rounded block leading-normal text-white " +
                      (openTab === 3 ? "bg-[#4F61E3]" : "bg-[#738296]")
                    }
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTab(3);
                    }}
                    data-toggle="tab"
                    href="#link3"
                    role="tablist"
                  >
                    Panding
                  </a>
                </li>
                <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                  <a
                    className={
                      "text-xs font-bold uppercase p-2 rounded block leading-normal text-white " +
                      (openTab === 4 ? "bg-[#4F61E3]" : "bg-[#738296]")
                    }
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTab(4);
                    }}
                    data-toggle="tab"
                    href="#link4"
                    role="tablist"
                  >
                    Free
                  </a>
                </li>
                <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                  <a
                    className={
                      "text-xs font-bold uppercase p-2 rounded block leading-normal text-white " +
                      (openTab === 5 ? "bg-[#4F61E3]" : "bg-[#738296]")
                    }
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTab(5);
                    }}
                    data-toggle="tab"
                    href="#link5"
                    role="tablist"
                  >
                    Trial
                  </a>
                </li>
                <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                  <a
                    className={
                      "text-xs font-bold uppercase p-2 rounded block leading-normal text-white " +
                      (openTab === 6 ? "bg-[#4F61E3]" : "bg-[#738296]")
                    }
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTab(6);
                    }}
                    data-toggle="tab"
                    href="#link6"
                    role="tablist"
                  >
                    Expired
                  </a>
                </li>
              </ul>
              <h1 className="text-[#dee4ee] font-bold text-center text-xl py-8">
                Total All Users:0
              </h1>
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                <div className="px-4 py-5 flex-auto">
                  <div className="tab-content tab-space">
                    <div
                      className={openTab === 1 ? "block" : "hidden"}
                      id="link1"
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
                                      Name
                                    </th>
                                    <th scope="col" className="px-6 py-4">
                                      Email
                                    </th>
                                    <th scope="col" className="px-6 py-4">
                                      CREATED TIME
                                    </th>
                                    <th scope="col" className="px-6 py-4">
                                      VALIDITY
                                    </th>
                                    <th scope="col" className="px-6 py-4">
                                      STATUS
                                    </th>
                                  </tr>
                                </thead>
                                <tbody></tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className={openTab === 2 ? "block" : "hidden"}
                      id="link2"
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
                                      Name
                                    </th>
                                    <th scope="col" className="px-6 py-4">
                                      Email
                                    </th>
                                    <th scope="col" className="px-6 py-4">
                                      CREATED TIME
                                    </th>
                                    <th scope="col" className="px-6 py-4">
                                      VALIDITY
                                    </th>
                                    <th scope="col" className="px-6 py-4">
                                      STATUS
                                    </th>
                                  </tr>
                                </thead>
                                <tbody></tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className={openTab === 3 ? "block" : "hidden"}
                      id="link3"
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
                                      Name
                                    </th>
                                    <th scope="col" className="px-6 py-4">
                                      Email
                                    </th>
                                    <th scope="col" className="px-6 py-4">
                                      CREATED TIME
                                    </th>
                                    <th scope="col" className="px-6 py-4">
                                      VALIDITY
                                    </th>
                                    <th scope="col" className="px-6 py-4">
                                      STATUS
                                    </th>
                                  </tr>
                                </thead>
                                <tbody></tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className={openTab === 4 ? "block" : "hidden"}
                      id="link4"
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
                                      Name
                                    </th>
                                    <th scope="col" className="px-6 py-4">
                                      Email
                                    </th>
                                    <th scope="col" className="px-6 py-4">
                                      CREATED TIME
                                    </th>
                                    <th scope="col" className="px-6 py-4">
                                      VALIDITY
                                    </th>
                                    <th scope="col" className="px-6 py-4">
                                      STATUS
                                    </th>
                                  </tr>
                                </thead>
                                <tbody></tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className={openTab === 5 ? "block" : "hidden"}
                      id="link5"
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
                                      Name
                                    </th>
                                    <th scope="col" className="px-6 py-4">
                                      Email
                                    </th>
                                    <th scope="col" className="px-6 py-4">
                                      CREATED TIME
                                    </th>
                                    <th scope="col" className="px-6 py-4">
                                      VALIDITY
                                    </th>
                                    <th scope="col" className="px-6 py-4">
                                      STATUS
                                    </th>
                                  </tr>
                                </thead>
                                <tbody></tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className={openTab === 6 ? "block" : "hidden"}
                      id="link6"
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
                                      Name
                                    </th>
                                    <th scope="col" className="px-6 py-4">
                                      Email
                                    </th>
                                    <th scope="col" className="px-6 py-4">
                                      CREATED TIME
                                    </th>
                                    <th scope="col" className="px-6 py-4">
                                      VALIDITY
                                    </th>
                                    <th scope="col" className="px-6 py-4">
                                      STATUS
                                    </th>
                                  </tr>
                                </thead>
                                <tbody></tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="p-10">
            <form className="w-full bg-[#F1F5F9] py-10">
              <div className="w-1/2 mx-auto space-y-5">
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
    </div>
  );
};

export default AllUser;
