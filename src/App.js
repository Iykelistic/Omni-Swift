import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import StudentDetails from "./components/StudentDetails";
import Datatable from "./components/DataTable";

import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  /*const [openmodal, setOpenmodal] = useState(false);
  const [filter, setFilter] = useState([]);*/

  const getDetails = async () => {
    try {
      const res = await axios.get(
        "https://testapiomniswift.herokuapp.com/api/viewAllData"
      );
      setLoading(true);
      let result = res.data.data;
      console.log(result);
      setData(result);
      setShowDetails(true);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getDetails();
  }, []);

  /*function searchParents(e) {
    try {
      if (e) e.preventDefault();
      let filtered = [];
      setFilter({ data }, () => {
        if (filter.keyword) filtered = data;
        // find any entry that matches the keyword
        else
          filtered = _.filter(
            data,
            function (_dat) {
              return !_.isEmpty(
                _.find(
                  [
                    _data.students.age,
                    _data.students.state,
                    _data.students.level,
                    _data.students.gender,
                  ],
                  function (word) {
                    return _.includes(
                      filter.keyword.toLowerCase().split(" "),
                      word.toLowerCase()
                    );
                  }.bind(this)
                )
              );
            }.bind(this)
          );
        this.setState({
          : filtered,
        });
      });
    } catch (error) {
      console.log(error);
      this.displayNotif({ message: error.message, type: "danger" });
    }
  }*/

  console.log("TESTING APP", data);

  return (
    <div className="content">
      <Header />
      {showDetails && <StudentDetails details={data.students} />}
      {showDetails && <Datatable content={data.students} />}
    </div>
  );
}

export default App;
