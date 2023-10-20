import React, { useState } from 'react';
import "../../../src/components/stylesheets/AvailableJobs.css"
import {
  FormControl,
  FormControlLabel,
  Checkbox,
  Slider,
  Typography,
  FormGroup,
  Divider,
} from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSort
} from "@fortawesome/free-solid-svg-icons";


const Filter = () => {
  const [location, setLocation] = useState({
    onsite: false,
    remote: false,
  });

  const [jobType, setJobType] = useState({
    internship: false,
    fta: false,
  });
  const [cgpaValue, setCgpaValue] = useState(0);

  const handleCgpaChange = (event, newValue) => {
    setCgpaValue(newValue);
  };

  const handleLocationChange = (event) => {
    setLocation({ ...location, [event.target.name]: event.target.checked });
  };

  const handleJobTypeChange = (event) => {
    setJobType({ ...jobType, [event.target.name]: event.target.checked });
  };

  return (
    <div className='filter'>
      <h4>Filters <FontAwesomeIcon icon={faSort} /></h4>
      <Typography variant="h6" id = "filter-head" className='add-padding'>Location</Typography>
      <Divider />
      <FormControl component="fieldset">
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={location.onsite}
                onChange={handleLocationChange}
                name="onsite"
                color="primary"
              />
            }
            label="Onsite" 
          />
          <FormControlLabel
            control={
              <Checkbox id = "filter-head"
                checked={location.remote}
                onChange={handleLocationChange}
                name="remote"
                color="primary"
              />
            }
            label="Remote"
          />
        </FormGroup>
      </FormControl>
      <br />
      <Typography variant="h6" id = "filter-head">Job Type</Typography>
      <Divider />
      <FormControl component="fieldset">
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox id = "filter-head"
                checked={jobType.internship}
                onChange={handleJobTypeChange}
                name="internship"
                color="primary"
              />
            }
            label="Internship"
          />
          <FormControlLabel
            control={
              <Checkbox id = "filter-head"
                checked={jobType.fta}
                onChange={handleJobTypeChange}
                name="fta"
                color="primary"
              />
            }
            label="Full-Time" 
          />
        </FormGroup>
      </FormControl>
      <br/>
      <Typography variant="h6" id = "filter-head">Batch</Typography>
      <Divider />
      <FormControl component="fieldset">
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox id = "filter-head"
                checked={jobType.internship}
                onChange={handleJobTypeChange}
                name="2023"
                color="primary"
              />
            }
            label="Class of 2023"
          />
          <FormControlLabel
            control={
              <Checkbox id = "filter-head"
                checked={jobType.fta}
                onChange={handleJobTypeChange}
                name="2024"
                color="primary"
              />
            }
            label="Class of 2024" 
          />
        </FormGroup>
      </FormControl>
      <Typography variant="h6" id = "filter-head">Batch</Typography>
      <Divider />
      <FormControl component="fieldset">
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox id = "filter-head"
                checked={jobType.internship}
                onChange={handleJobTypeChange}
                name="2023"
                color="primary"
              />
            }
            label="Class of 2023"
          />
          <FormControlLabel
            control={
              <Checkbox id = "filter-head"
                checked={jobType.fta}
                onChange={handleJobTypeChange}
                name="2024"
                color="primary"
              />
            }
            label="Class of 2024" 
          />
        </FormGroup>
      </FormControl>
      <br/>
      <Typography className="cgpa-slider" id = "filter-head" variant="h6" gutterBottom>
        Required CGPA
      </Typography>
      <Slider
        value={cgpaValue}
        onChange={handleCgpaChange}
        min={0}
        max={10}
        step={0.1}
        aria-labelledby="cgpa-slider"
      />
      <Typography variant="body2" gutterBottom>
        CGPA: {cgpaValue}
      </Typography>
    </div>
  );
};

export default Filter;
