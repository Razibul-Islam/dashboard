import ChartL from "../compinents/Chart";
import Table from "../compinents/Table";

const Home = () => {
  return (
    <div className="p-5">
      <div className="pb-5">
        <h1 className="text-2xl">Dashboard</h1>
      </div>
      <div className="grid grid-cols-4 gap-8">
        <div className="flex border border-black/5">
          {/* Setting */}
          <div className="p-5 bg-[#00C0EF]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="3"></circle>
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
            </svg>
          </div>
          <div className="pl-3 pt-2">
            <p className="text-sm">CPU TRAFFIC</p>
            <span className="font-bold">90%</span>
          </div>
        </div>

        <div className="flex border border-black/5">
          {/* Google Plus */}
          <div className="p-5 bg-[#DD4B39]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="white"
            >
              <path
                d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z"
                fillRule="evenodd"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="pl-3 pt-2">
            <p className="text-sm">CPU TRAFFIC</p>
            <span className="font-bold">90%</span>
          </div>
        </div>
        <div className="flex border border-black/5">
          <div className="p-5 bg-[#00A65A]">
            {/* Add TO Card */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="white"
            >
              <path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm1.336-5l1.977-7h-16.813l2.938 7h11.898zm4.969-10l-3.432 12h-12.597l.839 2h13.239l3.474-12h1.929l.743-2h-4.195z" />
            </svg>
          </div>
          <div className="pl-3 pt-2">
            <p className="text-sm">CPU TRAFFIC</p>
            <span className="font-bold">90%</span>
          </div>
        </div>
        <div className="flex border border-black/5">
          <div className="p-5 bg-[#F39C12]">
            {/* Multiple Users */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="white"
            >
              <path d="M17.997 18h-.998c0-1.552.06-1.775-.88-1.993-1.438-.332-2.797-.645-3.293-1.729-.18-.396-.301-1.048.155-1.907 1.021-1.929 1.277-3.583.702-4.538-.672-1.115-2.707-1.12-3.385.017-.576.968-.316 2.613.713 4.512.465.856.348 1.51.168 1.908-.49 1.089-1.836 1.4-3.262 1.728-.982.227-.92.435-.92 2.002h-.995l-.002-.623c0-1.259.1-1.985 1.588-2.329 1.682-.389 3.344-.736 2.545-2.209-2.366-4.365-.676-6.839 1.865-6.839 2.492 0 4.227 2.383 1.867 6.839-.775 1.464.824 1.812 2.545 2.209 1.49.344 1.589 1.072 1.589 2.333l-.002.619zm4.81-2.214c-1.289-.298-2.489-.559-1.908-1.657 1.77-3.342.47-5.129-1.4-5.129-1.265 0-2.248.817-2.248 2.325 0 1.269.574 2.175.904 2.925h1.048c-.17-.75-1.466-2.562-.766-3.736.412-.692 1.704-.693 2.114-.012.38.631.181 1.812-.534 3.161-.388.733-.28 1.301-.121 1.648.305.666.977.987 1.737 1.208 1.507.441 1.368.042 1.368 1.48h.997l.002-.463c0-.945-.074-1.492-1.193-1.75zm-22.805 2.214h.997c0-1.438-.139-1.039 1.368-1.48.761-.221 1.433-.542 1.737-1.208.159-.348.267-.915-.121-1.648-.715-1.349-.914-2.53-.534-3.161.41-.682 1.702-.681 2.114.012.7 1.175-.596 2.986-.766 3.736h1.048c.33-.75.904-1.656.904-2.925.001-1.509-.982-2.326-2.247-2.326-1.87 0-3.17 1.787-1.4 5.129.581 1.099-.619 1.359-1.908 1.657-1.12.258-1.194.805-1.194 1.751l.002.463z" />
            </svg>
          </div>
          <div className="pl-3 pt-2">
            <p className="text-sm">CPU TRAFFIC</p>
            <span className="font-bold">90%</span>
          </div>
        </div>
      </div>
      <div className="flex gap-5">
        <div className="flex-[2] mt-5">
          <ChartL />
        </div>
        <div className="flex-1 space-y-5 mt-5">
          <h5 className="text-center font-bold text-sm">Goal Completion</h5>
          <div>
            <div className="flex justify-between">
              <p className="font-semibold">Add Products to Cart</p>
              <p>
                <span className="font-semibold">160</span>/200
              </p>
            </div>
            <div className="w-full h-2 bg-[#F5F5F5] relative">
              <div className="absolute w-[75%] h-full bg-[#00C0EF]"></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between">
              <p className="font-semibold">Complete Purchase</p>
              <p>
                <span className="font-semibold">310</span>/400
              </p>
            </div>
            <div className="w-full h-2 bg-[#F5F5F5] relative">
              <div className="absolute w-[75%] h-full bg-[#DD4B39]"></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between">
              <p className="font-semibold">Visit Premium Page</p>
              <p>
                <span className="font-semibold">480</span>/800
              </p>
            </div>
            <div className="w-full h-2 bg-[#F5F5F5] relative">
              <div className="absolute w-[75%] h-full bg-[#00A65A]"></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between">
              <p className="font-semibold">Send Inquiries</p>
              <p>
                <span className="font-semibold">250</span>/500
              </p>
            </div>
            <div className="w-full h-2 bg-[#F5F5F5] relative">
              <div className="absolute w-[75%] h-full bg-[#F39C12]"></div>
            </div>
          </div>
        </div>
      </div>
      <Table />
    </div>
  );
};

export default Home;
