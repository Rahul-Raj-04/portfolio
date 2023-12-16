import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faFileCode,
  faStar,
  faLaptopCode,
  faFontAwesome,
  faQrcode,
} from "@fortawesome/free-solid-svg-icons";
function Skill() {
  return (
    <div>
      <div className="flex items-center justify-center  flex-col  min-h-[700px] bg-gray-400">
        <div className=" text-white text-4xl mb-16 font-bold flex gap-2">
          MY<h1 className="text-[rgb(0,238,255)] flex"> SKILL</h1>
        </div>
        <section className="w-full p-6 rounded-lg max-w-2xl shadow-lg shadow-gray-300 bg-white">
          <header className="flex items-center">
            <svg
              xmlns=""
              className="mr-2 shrink-0 w-6 h-6 text-gray-500"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M4 19l16 0"></path>
              <path d="M4 15l4 -6l4 2l4 -5l4 4"></path>
            </svg>
            <h3 className="font-medium text-lg">SKILL</h3>
          </header>
          <section className="py-4 grid grid-cols-2 gap-x-6">
            <div className="flex items-center py-3">
              <span className="w-8 h-8 shrink-0 mr-4 rounded-full bg-blue-50 flex items-center justify-center">
                <FontAwesomeIcon icon={faCode} />
              </span>
              <div className="space-y-3 flex-1">
                <div className="flex items-center">
                  <h4 className="font-medium text-sm mr-auto text-gray-700 flex items-center">
                    HTML
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-2 shrink-0 w-5 h-5 text-gray-500"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                      <path d="M12 9h.01"></path>
                      <path d="M11 12h1v4h1"></path>
                    </svg>
                  </h4>
                  <span className="px-2 py-1 rounded-lg bg-green-50 text-green-700 text-xs">
                    9 / 10
                  </span>
                </div>
                <div className="overflow-hidden bg-blue-50 h-1.5 rounded-full w-full">
                  <span className="h-full bg-blue-500 w-[90%] block rounded-full"></span>
                </div>
              </div>
            </div>
            <div className="flex items-center py-3">
              <span className="w-8 h-8 shrink-0 mr-4 rounded-full bg-blue-50 flex items-center justify-center">
                <FontAwesomeIcon icon={faFileCode} />
              </span>
              <div className="space-y-3 flex-1">
                <div className="flex items-center">
                  <h4 className="font-medium text-sm mr-auto text-gray-700 flex items-center">
                    CSS
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-2 shrink-0 w-5 h-5 text-gray-500"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                      <path d="M12 9h.01"></path>
                      <path d="M11 12h1v4h1"></path>
                    </svg>
                  </h4>
                  <span className="px-2 py-1 rounded-lg bg-red-50 text-red-500 text-xs">
                    8.5 / 10
                  </span>
                </div>
                <div className="overflow-hidden bg-blue-50 h-1.5 rounded-full w-full">
                  <span className="h-full bg-blue-500 w-[85%] block rounded-full"></span>
                </div>
              </div>
            </div>
            <div className="flex items-center py-3 border-t border-gray-100">
              <span className="w-8 h-8 shrink-0 mr-4 rounded-full bg-blue-50 flex items-center justify-center">
                <FontAwesomeIcon icon={faStar} />
              </span>
              <div className="space-y-3 flex-1">
                <div className="flex items-center">
                  <h4 className="font-medium text-sm mr-auto text-gray-700 flex items-center">
                    JAVASCRIPT
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-2 shrink-0 w-5 h-5 text-gray-500"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                      <path d="M12 9h.01"></path>
                      <path d="M11 12h1v4h1"></path>
                    </svg>
                  </h4>
                  <span className="px-2 py-1 rounded-lg bg-green-50 text-green-700 text-xs">
                    7.5 / 10
                  </span>
                </div>
                <div className="overflow-hidden bg-blue-50 h-1.5 rounded-full w-full">
                  <span className="h-full bg-blue-500 w-[75%] block rounded-full"></span>
                </div>
              </div>
            </div>
            <div className="flex items-center py-3 border-t border-gray-100">
              <span className="w-8 h-8 shrink-0 mr-4 rounded-full bg-blue-50 flex items-center justify-center">
                <FontAwesomeIcon icon={faLaptopCode} />
              </span>
              <div className="space-y-3 flex-1">
                <div className="flex items-center">
                  <h4 className="font-medium text-sm mr-auto text-gray-700 flex items-center">
                    TailwindCSS
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-2 shrink-0 w-5 h-5 text-gray-500"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                      <path d="M12 9h.01"></path>
                      <path d="M11 12h1v4h1"></path>
                    </svg>
                  </h4>
                  <span className="px-2 py-1 rounded-lg bg-green-50 text-green-700 text-xs">
                    8.0 / 10
                  </span>
                </div>
                <div className="overflow-hidden bg-blue-50 h-1.5 rounded-full w-full">
                  <span className="h-full bg-blue-500 w-[80%] block rounded-full"></span>
                </div>
              </div>
            </div>
            <div className="flex items-center py-3 border-t border-gray-100">
              <span className="w-8 h-8 shrink-0 mr-4 rounded-full bg-blue-50 flex items-center justify-center">
                <FontAwesomeIcon icon={faFontAwesome} />
              </span>
              <div className="space-y-3 flex-1">
                <div className="flex items-center">
                  <h4 className="font-medium text-sm mr-auto text-gray-700 flex items-center">
                    BOOTSTRAP
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-2 shrink-0 w-5 h-5 text-gray-500"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                      <path d="M12 9h.01"></path>
                      <path d="M11 12h1v4h1"></path>
                    </svg>
                  </h4>
                  <span className="px-2 py-1 rounded-lg bg-green-50 text-green-700 text-xs">
                    5.0 / 10
                  </span>
                </div>
                <div className="overflow-hidden bg-blue-50 h-1.5 rounded-full w-full">
                  <span className="h-full bg-blue-500 w-[50%] block rounded-full"></span>
                </div>
              </div>
            </div>
            <div className="flex items-center py-3 border-t border-gray-100">
              <span className="w-8 h-8 shrink-0 mr-4 rounded-full bg-blue-50 flex items-center justify-center">
                <FontAwesomeIcon icon={faQrcode} />
              </span>
              <div className="space-y-3 flex-1">
                <div className="flex items-center">
                  <h4 className="font-medium text-sm mr-auto text-gray-700 flex items-center">
                    Reactjs
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-2 shrink-0 w-5 h-5 text-gray-500"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                      <path d="M12 9h.01"></path>
                      <path d="M11 12h1v4h1"></path>
                    </svg>
                  </h4>
                  <span className="px-2 py-1 rounded-lg bg-green-50 text-green-700 text-xs">
                    7.0 / 10
                  </span>
                </div>
                <div className="overflow-hidden bg-blue-50 h-1.5 rounded-full w-full">
                  <span className="h-full bg-blue-500 w-[70%] block rounded-full"></span>
                </div>
              </div>
            </div>
          </section>
        </section>
      </div>
    </div>
  );
}

export default Skill;
