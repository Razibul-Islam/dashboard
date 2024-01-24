const WebsiteManage = () => {
  return (
    <div className="p-10 bg-[#F1F5F9]">
      <form className="w-full bg-white py-10">
        <div className="w-1/2 mx-auto space-y-5">
          <div className="flex flex-col">
            <label htmlFor="url">Sites URL</label>
            <input
              type="text"
              name="url"
              id="url"
              className="border border-black/10 outline-none w-full p-3 text-lg rounded-md"
              placeholder="EX:(https://www.example.com)"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="catagory">Catagory</label>
            <select
              className="border border-black/10 outline-none w-full p-3 text-lg rounded-md"
              name="catagory"
              id="catagory"
            >
              <option value="choose one">choose one</option>
              <option value="Eros">Eros</option>
              <option value="Mega">Mega</option>
              <option value="PD">PD</option>
              <option value="Skip">Skip</option>
              <option value="Tryst">Tryst</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="type">Add Type</label>
            <input
              type="text"
              name="type"
              id="type"
              className="border border-black/10 outline-none w-full p-3 text-lg rounded-md"
              placeholder="Add Type"
            />
          </div>
          <input
            type="submit"
            value="Create New Links"
            className="text-lg bg-[#3C50E0] py-3 text-white w-full rounded-md"
          />
        </div>
      </form>
    </div>
  );
};

export default WebsiteManage;
