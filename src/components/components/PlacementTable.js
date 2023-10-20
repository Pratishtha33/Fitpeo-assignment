import React, { useState } from 'react';
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableSortLabel,
  TextField,
  TablePagination,
} from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faDownload } from '@fortawesome/free-solid-svg-icons';
import '../stylesheets/AdminDashboard.css';
import { Link } from 'react-router-dom';
import { CSVLink } from 'react-csv';

const PlacementTable = ({ data }) => {
  const [sortedData, setSortedData] = useState(data);
  const [sortConfig, setSortConfig] = useState({ column: '', direction: '' });
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const csvData = [
    Object.keys(data[0]), // Headers
    ...data.map((student) => Object.values(student)), // Rows
  ];

  // Function to handle sorting
  const handleSort = (column) => {
    const direction =
      sortConfig.column === column && sortConfig.direction === 'asc' ? 'desc' : 'asc';
    const sorted = [...data].sort((a, b) => {
      if (a[column] < b[column]) {
        return direction === 'asc' ? -1 : 1;
      }
      if (a[column] > b[column]) {
        return direction === 'asc' ? 1 : -1;
      }
      return 0;
    });

    setSortedData(sorted);
    setSortConfig({ column, direction });
  };

  // Function to handle search
  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);

    const filtered = data.filter(
      (student) =>
        student.name.toLowerCase().includes(value) ||
        student.rollNumber.toLowerCase().includes(value) ||
        student.branch.toLowerCase().includes(value) ||
        student.status.toLowerCase().includes(value) ||
        student.company.toLowerCase().includes(value) // Added filtering by company
    );

    setSortedData(filtered);
  };

  // Function to handle pagination
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const displayedData = sortedData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  const calculateAveragePackage = (data) => {
    const packages = data.map((student) => parseFloat(student.package.slice(1).replace(',', '')));
    const sum = packages.reduce((total, averagePackage) => total + averagePackage, 0);
    const average = sum / packages.length;
    return average.toFixed(2);
  };
  
  const calculatePlacementPercentage = (data) => {
    const placedStudents = data.filter((student) => student.status === 'Placed');
    const placementPercentage = (placedStudents.length / data.length) * 100;
    return placementPercentage.toFixed(2);
  };
const averagePackage = calculateAveragePackage(data);
const placementPercentage = calculatePlacementPercentage(data);

  return (
    <div className='pt'>
      <h3 className='ps'>
        Placement Statistics <FontAwesomeIcon icon={faChartLine} />
      </h3>
      <div className='search-csv'>
        <TextField
          className='placement-table-search'
          label='Search'
          variant='outlined'
          value={searchTerm}
          onChange={handleSearch}
          style={{
            marginBottom: '1rem',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
          InputLabelProps={{ style: { textAlign: 'center', marginBottom: '1vw' } }}
        />
        
        <CSVLink data={csvData} filename='placement_data.csv' className='btn-primary' id='download-csv'>
          Download <FontAwesomeIcon icon={faDownload} />
        </CSVLink>
      </div>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <TableSortLabel
                  active={sortConfig.column === 'name'}
                  direction={sortConfig.direction}
                  onClick={() => handleSort('name')}
                >
                  Student Name
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={sortConfig.column === 'rollNumber'}
                  direction={sortConfig.direction}
                  onClick={() => handleSort('rollNumber')}
                >
                  Roll Number
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={sortConfig.column === 'branch'}
                  direction={sortConfig.direction}
                  onClick={() => handleSort('branch')}
                >
                  Branch
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={sortConfig.column === 'company'}
                  direction={sortConfig.direction}
                  onClick={() => handleSort('company')}
                >
                  Company
                </TableSortLabel>
              </TableCell>
              <TableCell align='center'>
                <TableSortLabel
                  active={sortConfig.column === 'offers'}
                  direction={sortConfig.direction}
                  onClick={() => handleSort('offers')}
                >
                  No. of Offers
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={sortConfig.column === 'status'}
                  direction={sortConfig.direction}
                  onClick={() => handleSort('status')}
                >
                  Placement Status
                </TableSortLabel>
              </TableCell>
              <TableCell align='center'>
                <TableSortLabel
                  active={sortConfig.column === 'package'}
                  direction={sortConfig.direction}
                  onClick={() => handleSort('package')}
                >
                  (Highest) Placement Package
                </TableSortLabel>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody className='tb'>
            {displayedData.map((student) => (
              <TableRow key={student.rollNumber}>
                <TableCell className='student-name'>
                  <Link to={`/profile`}>{student.name}</Link>
                </TableCell>
                <TableCell>{student.rollNumber}</TableCell>
                <TableCell>{student.branch}</TableCell>
                <TableCell>{student.company}</TableCell>
                <TableCell align='center'>{student.offers}</TableCell>
                <TableCell>{student.status}</TableCell>
                <TableCell align='center'>{student.package}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 15]}
        component='div'
        count={sortedData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </div>
  );
};

export default PlacementTable;
