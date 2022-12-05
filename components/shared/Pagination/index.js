import React, { useState } from "react";
import PaginationButton from "@/shared/Pagination/PaginationButton";

function Pagination(props) {
  const { data, pageSwitch } = props;
  const [pageLength, setPageLength] = useState(props ?? []);

  return <div className="flex justify-start items-center">Pagination</div>;
}

export default Pagination;
