const ShortLink = () => {
  return (
    <div>
      <div>
        <h1 className="text-2xl font-semibold my-16 max-w-5xl mx-auto">
          Convert ShortURL
        </h1>
        <div className="mx-auto max-w-4xl w-full flex">
          <select
            className="border border-black/20 text-lg px-3 py-1 outline-none rounded-l-md"
          >
            <option value="one">One</option>
            <option value="Two">Two</option>
            <option value="three">Three</option>
            <option value="four">Four</option>
            <option value="five">Five</option>
          </select>
          <input
            className="border border-black/20 text-lg px-3 py-1 outline-none w-full"
            type="text"
            placeholder="Paste Your Website URL"
          />
          <input
            className="bg-[#3C50E0] border border-black/20 text-lg px-3 py-1 outline-none text-white rounded-r-md cursor-pointer"
            type="button"
            value="Short url"
          />
        </div>
        <h1 className="text-2xl font-semibold my-16 max-w-5xl mx-auto">
          Short URL Links
        </h1>

        <div className="flex flex-col max-w-4xl mx-auto">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full text-left text-sm font-light">
                  <thead className="border-b font-medium dark:border-neutral-500">
                    <tr>
                      <th scope="col" className="px-6 py-4">
                        Website
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Short URL
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Click
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="">
                    <tr className="border-b dark:border-neutral-500 hover:bg-gray-400/50">
                      <td className="whitespace-nowrap px-6 py-4 font-medium text-[#72afd2]">
                        1
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">Mark</td>
                      <td className="whitespace-nowrap px-6 py-4">Otto</td>
                      <td className="whitespace-nowrap px-6 py-4">@mdo</td>
                    </tr>
                    <tr className="border-b dark:border-neutral-500 hover:bg-gray-400/50">
                      <td className="whitespace-nowrap px-6 py-4 font-medium text-[#72afd2]">
                        2
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">Jacob</td>
                      <td className="whitespace-nowrap px-6 py-4">Thornton</td>
                      <td className="whitespace-nowrap px-6 py-4">@fat</td>
                    </tr>
                    <tr className="border-b dark:border-neutral-500 hover:bg-gray-400/50">
                      <td className="whitespace-nowrap px-6 py-4 font-medium text-[#72afd2]">
                        3
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">Larry</td>
                      <td className="whitespace-nowrap px-6 py-4">Wild</td>
                      <td className="whitespace-nowrap px-6 py-4">@twitter</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShortLink;
