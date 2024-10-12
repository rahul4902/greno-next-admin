import { useState } from "react";
import { ChevronDown, ChevronUp, Clock, Eye, Tag, Plus } from "lucide-react";

const Button = ({ children, className = "", ...props }) => (
  <button
    className={`rounded font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 ${className}`}
    {...props}
  >
    {children}
  </button>
);

const Card = ({ children, className = "", ...props }) => (
  <div
    className={`bg-white rounded-lg overflow-hidden ${className}`}
    style={{
      background: "rgba(255, 255, 255, 0.8)",
      backdropFilter: "blur(10px)",
      border: "1px solid rgba(14, 29, 82, 0.2)",
      boxShadow: "0 4px 6px rgba(14, 29, 82, 0.1)",
    }}
    {...props}
  >
    {children}
  </div>
);

const CardHeader = ({ children, className = "", ...props }) => (
  <div className={`p-3 ${className}`} {...props}>
    {children}
  </div>
);

const CardContent = ({ children, className = "", ...props }) => (
  <div className={`px-3 pb-3 ${className}`} {...props}>
    {children}
  </div>
);

const CardFooter = ({ children, className = "", ...props }) => (
  <div className={`px-3 py-3 ${className}`} {...props}>
    {children}
  </div>
);

export default function TestItemCard() {
  const [expanded, setExpanded] = useState(false);

  const testNames = [
    "Test 1",
    "Test 2",
    "Test 3",
    "Test 4",
    "Test 5",
    "Test 6",
    "Test 7",
    "Test 8",
    "Test 9",
    "Test 10",
    "Test 11",
  ];

  const truncate = (str, num) => {
    if (str.length <= num) return str;
    return str.slice(0, num) + "...";
  };

  return (
    <Card className="w-full mx-auto">
      <CardHeader className="pb-3">
        <div className="d-flex justify-content-between items-start">
          <h2
            style={{ color: "#0e1d52" }}
            className="text-xl font-bold mb-2"
            title="Fit India Full Body Checkup With Vitamin Screening with Free"
          >
            {truncate(
              "Fit India Full Body Checkup With Vitamin Screening with Free",
              50
            )}
          </h2>
          <Button
            // style={{ backgroundColor: 'rgb(14, 29, 82 ,1)' }}
            className="ml-2 text-white flex-shrink-0"
          >
            <Plus className="mr-2 h-4 w-4" />
            Add to Card
          </Button>
        </div>
      </CardHeader>
      <CardContent style={{ color: "#0e1d52" }} className="space-y-4">
        <div
          style={{ backgroundColor: 'rgba(14, 29, 82, 0.1)' }}
          
          className="d-flex items-center space-x-2 bg-opacity-10 p-2 rounded"
        >
          <Tag style={{ color: "#0e1d52" }} className="h-5 w-5 flex-shrink-0" />
          <p
            style={{ color: "#0e1d52" }}
            className="font-semibold flex-shrink-0"
          >
            Parameter Names:
          </p>
          <p
            className="line-clamp-1 d-flex-1"
            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          >
            {truncate(
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              30
            )}
          </p>
        </div>
        <p className="line-clamp-1">
          <span className="font-semibold">Also Known As:</span>{" "}
          <span title="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.">
            {truncate(
              "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
              40
            )}
          </span>
        </p>
        <div className="d-flex gap-3 items-center space-x-2 overflow-x-auto">
          <div className="d-flex gap-3">
          <span className="font-semibold flex-shrink-0">Test Names:</span>
          {testNames.slice(0, expanded ? 11 : 3).map((test, index) => (
            <span key={index} className="whitespace-nowrap">
              {test}
            </span>
          ))}
          </div>
          {testNames.length > 3 && (
            <Button
              style={{ color: "#0e1d52" }}
              className=" p-0 h-auto d-flex bg-transparent hover:bg-transparent border-0 p-0 ms-0 ps-0 read-btn"
              
            >
              {expanded ? (
                <>
                  <ChevronUp className="mr-1 h-4 w-4" />
                  Read Less
                </>
              ) : (
                <>
                  <ChevronDown className="mr-1 h-4 w-4" />
                  Read More
                </>
              )}
            </Button>
          )}
        </div>
      </CardContent>
      <CardFooter
        style={{ backgroundColor: "rgb(14 29 82 /0.1)" }}
        className="d-flex justify-content-between bg-opacity-10"
      >
        <Button
          // style={{ backgroundColor: "#0e1d52" }}
          className="d-flex items-center text-white"
        >
          <Clock className="mr-2 h-4 w-4" />
          Reports in 10 hours
        </Button>
        <Button
          // style={{ backgroundColor: "#0e1d52" }}
          className="d-flex items-center text-white"
        >
          <Eye className="mr-2 h-4 w-4" />
          View  More Details
        </Button>
      </CardFooter>
    </Card>
  );
}
