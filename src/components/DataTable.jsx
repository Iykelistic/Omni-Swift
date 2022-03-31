import React, { useState } from "react";
import DataTable from "react-data-table-component";
import "./DataTable.css";

const Datatable = (props) => {
  const [columns] = useState([
    {
      name: "S/N",
      selector: (row, index) => {
        return row.id;
      },
    },

    {
      name: "Surname",
      selector: (row, index) => {
        return row.surname;
      },
    },

    {
      name: "first Name",
      selector: (row, index) => {
        return row.firstname;
      },
    },

    {
      name: "Age",
      selector: (row, index) => {
        return row.age;
      },
    },

    {
      name: "Gender",
      selector: (row, index) => {
        return row.gender;
      },
    },

    {
      name: "Level",
      selector: (row, index) => {
        return row.level;
      },
    },

    {
      name: "State",
      selector: (row, index) => {
        return row.state;
      },
    },
  ]);

  console.log("TEST DATA", props.content);
  return (
    <div className="data__table">
      <DataTable
        columns={columns}
        data={props.content}
        className="data-table"
        noHeader={true}
        striped={true}
        highlightOnHover={true}
        responsive={true}
      />
    </div>
  );
};

export default Datatable;
