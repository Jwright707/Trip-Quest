import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

const Breadcrumbs = props => {
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbItem tag="a" href="/  ">
          Home
        </BreadcrumbItem>
        <BreadcrumbItem tag="a" href="/list">
          Create
        </BreadcrumbItem>

        <BreadcrumbItem tag="a" href="/list2">
          Search
        </BreadcrumbItem>
      </Breadcrumb>
    </div>
  );
};

export default Breadcrumbs;
