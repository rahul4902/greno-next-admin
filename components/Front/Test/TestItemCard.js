import { useState } from "react";
// import { ChevronDown, ChevronUp, Clock, Eye, Tag, Plus } from "lucide-react";
import TagIcon from "../../../svg/TagIcon";
import ChevronDownIcon from "../../../svg/ChevronDownIcon";
import AddToCartBtn from "./AddToCardBtn";

export default function TestItemCard({ test }) {
  const [expanded, setExpanded] = useState(false);

  const truncate = (str, num) => {
    if (str.length <= num) return str;
    return str.slice(0, num) + "...";
  };

  return (
    <div
      className={`bg-white rounded-lg overflow-hidden w-full mx-auto`}
      style={{
        background: "rgba(255, 255, 255, 0.8)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(14, 29, 82, 0.2)",
        boxShadow: "0 4px 6px rgba(14, 29, 82, 0.1)",
      }}
    >
      <div className="p-3 pb-3">
        <div className="d-flex justify-content-between items-start">
          <h2
            style={{ color: "#0e1d52" }}
            className="text-xl font-bold mb-2"
            title={test?.name}
          >
            {truncate(test?.name, 50)}
          </h2>
          <AddToCartBtn test={test}/>
        </div>
      </div>
      <div style={{ color: "#0e1d52" }} className="px-3 pb-3 space-y-4">
        {test?.package_or_test == "test" ? (
          <div
            style={{ backgroundColor: "rgba(14, 29, 82, 0.1)" }}
            className="d-flex items-center space-x-2 bg-opacity-10 p-2 rounded"
          >
            <TagIcon
              style={{ color: "#0e1d52" }}
              className="h-5 w-5 flex-shrink-0"
            />
            <p
              style={{ color: "#0e1d52" }}
              className="fw-semibold flex-shrink-0"
            >
              Parameter Names:
            </p>
            <p
              className="line-clamp-1 d-flex-1"
              title={test?.parameter?.slice(0, 3).join(", ")}
            >
              {test?.parameter?.slice(0, 3).join(", ")}
              {test?.parameter?.length > 3 && (
                <span style={{ color: "#0e1d52" }} className="fw-semibold">
                  <ChevronDownIcon className="mr-1 h-4 w-4" />
                  Read More
                </span>
              )}
            </p>
          </div>
        ) : (
          <div
            style={{ backgroundColor: "rgba(14, 29, 82, 0.1)" }}
            className="space-x-2 bg-opacity-10 p-2 rounded"
          >
            <p className="fw-semibold flex-shrink-0">
              It includes many tests that help in the early diagnosis of health
              diseases
            </p>
          </div>
        )}

        <p className="line-clamp-1">
          <span className="fw-semibold">Also Known As:</span>{" "}
          <span title={test?.also_known_as}>{test?.also_known_as}</span>
        </p>
        {/* <div className="d-flex gap-3 items-center space-x-2 overflow-x-auto">
          <div className="d-flex gap-1">
            <span className="font-semibold flex-shrink-0">Test Names:</span>
            <span className="whitespace-nowrap">
              {test?.parameter?.slice(0, 3).join(", ")}
            </span>
          </div>
          {test?.parameter?.length > 3 && (
            <span style={{ color: "#0e1d52" }} className="fw-semibold">
              <ChevronDown className="mr-1 h-4 w-4" />
              Read More
            </span>
          )}
        </div> */}
      </div>
      <div
        style={{ backgroundColor: "rgb(14 29 82 /0.1)" }}
        className="py-2 px-3 d-flex justify-content-between"
      >
        <div className="d-flex align-items-center gap-2">
          <p style={{ color: "#0e1d52" }} className="fw-semibold  m-0">
            Reports in {test?.tat_time}
          </p>
          <div
            style={{
              borderRight: "2px solid #0e1d52",
              height: "1.5rem",
              margin: "0 10px",
            }}
          ></div>
          <p style={{ color: "#0e1d52" }} className="fw-semibold m-0">
            {test?.parameter?.length} Tests
          </p>
        </div>
        <div>
          <p style={{ color: "#0e1d52" }} className="fw-semibold m-0">
            View More
          </p>
        </div>
      </div>
    </div>
  );
}
