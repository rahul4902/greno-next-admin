import React, { useEffect, useState } from "react";
import { TestTube } from "lucide-react";
import apiService from "@/services/apiService";
import "/components/Front/HomeTabs.css";
import Image from "next/image";
import Link from "next/link";

function CategoryComponent() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategory = async () => {
      const query = "?allActive=true";
      const response = await apiService.fetchCategories("", query);
      setCategories(response);
    };
    fetchCategory();
  }, []);
  return (
    <div>
      <div className="container mt-4">
        <div className="col-12">
          <h4 className="text-primary-custom">Tests By Category</h4>
        </div>
        <div className="row justify-content-center">
          {categories?.map((_v, _x) => {
            return (
              <>
                <div className="col-6 col-md-3 col-lg-2 col-xl-2 mt-3">
                  <Link
                    href={`/search?category=${(_v?.name).replace(/ /g, "+")}`}
                    className="h_tabs position-relative"
                  >
                    <Image
                      src={_v?.icon_url}
                      alt={_v?.name}
                      width={100} // Adjust as needed
                      height={0} // Not required when using layout="intrinsic"
                      layout="intrinsic"
                      loading="lazy"
                    />
                    <h5>{_v?.name}</h5>
                  </Link>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CategoryComponent;
