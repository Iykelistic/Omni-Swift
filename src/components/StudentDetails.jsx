import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import "./StudentDetails.css";

const StudentDetails = (props) => {
  const handleSearch = () => {};

  console.log("TESTING", props.details);
  return (
    <>
      <div className="student__holder">
        <p className="student__filter">Filter Student Table By:</p>
        <div className="box__container">
          <div className="box__content">
            <Box sx={{ minWidth: 120 }}>
              <FormControl className="box__control">
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  /*value={age}*/
                  placeholder="select age"
                  label="Age"
                  /*onChange={handleChange}*/
                >
                  {props.details.map((student, i) => (
                    <MenuItem key={i} value={student.age}>
                      <p>{student.age}</p>
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>

            <Box sx={{ minWidth: 120 }}>
              <FormControl className="box__control">
                <InputLabel id="demo-simple-select-label">State</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  /*value={state}*/
                  placeholder="select state"
                  label="State"
                  /*onChange={handleState}*/
                >
                  {props.details.map((student, i) => (
                    <MenuItem key={i} value={student.state}>
                      <p>{student.state}</p>
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>

            <Box sx={{ minWidth: 120 }}>
              <FormControl className="box__control">
                <InputLabel id="demo-simple-select-label">Level</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  /*value={level}*/
                  placeholder="select level"
                  label="Level"
                  /*onChange={handleLevel}*/
                >
                  {props.details.map((student, i) => (
                    <MenuItem key={i} value={student.level}>
                      <p>{student.level}</p>
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </div>
        </div>

        <div className="box__holder">
          <div className="box__gender">
            <Box sx={{ minWidth: 120 }}>
              <FormControl className="box__control">
                <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  /*value={gender}*/
                  placeholder="select gender"
                  label="Gender"
                  /*onChange={handleGender}*/
                >
                  {props.details.map((student, i) => (
                    <MenuItem key={i} value={student.gender}>
                      <p>{student.gender}</p>
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </div>
          <div>
            <button className="search__button">search</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentDetails;
