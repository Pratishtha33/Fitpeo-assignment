import React from 'react';
import '../stylesheets/ApplicationDashboard.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';

const columns = [
    { field: 'id', headerName: 'ID', width: 90, headerClassName: 'myHeader' },
    { field: 'Role', headerName: 'Role', width: 250, headerClassName: 'myHeader' },
    { field: 'Company', headerName: 'Company Name', width: 150, headerClassName: 'myHeader' },
    { field: 'Status', headerName: 'Status', width: 100, headerClassName: 'myHeader' },
    { field: 'date', headerName: 'Date Applied', type: 'number', width: 100, headerClassName: 'myHeader' },
  ];
  

  const rows = [
    { id: 1, Role: 'Software Engineer', Company: 'Google', Status: 'Applied', date: '2022-04-25' },
    { id: 2, Role: 'Product Manager', Company: 'Facebook', Status: 'Interview', date: '2022-04-24' },
    { id: 3, Role: 'Data Analyst', Company: 'Amazon', Status: 'Offer', date: '2022-04-23' },
    { id: 4, Role: 'UI/UX Designer', Company: 'Apple', Status: 'Applied', date: '2022-04-22' },
    { id: 5, Role: 'Marketing Manager', Company: 'Microsoft', Status: 'Rejected', date: '2022-04-21' },
  ];
function JobHistory() {
    

    return (
        <div className="job-history">
            <h3>Recent Application History <FontAwesomeIcon icon={faClockRotateLeft} /></h3>
            <DataGrid className="datagrid" rows={rows} columns={columns} pageSize={5} />
        </div>
    );
}

export default JobHistory;
