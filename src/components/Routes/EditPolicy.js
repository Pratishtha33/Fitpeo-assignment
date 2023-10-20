import React from "react";
import "../stylesheets/PlacementPolicy.css";
import AdminSideNav from "../components/AdminSideNav";
import TopNav from "../components/TopNav";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  makeStyles,
  TextareaAutosize,
} from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function EditPolicy() {
  const classes = useStyles();

  return (
    <div className="pp">
      <div className="main-section">
        <div className="left-section">
          <AdminSideNav />
        </div>
        <div className="right-section">
          <TopNav />
          <div className="profile-heading">
            <h3>Edit Placement Policy</h3>
            <h5>
              &nbsp;Edit the list of guidelines to be followed during the placement
              season of 2023-2024 batch.
            </h5>
          </div>
          <section>
            <div className="pp-section">
              <TableContainer component={Paper} id="tc">
                <Table className={classes.table} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell id="text" >Label</TableCell>
                      <TableCell align="center">CTC Range</TableCell>
                      <TableCell align="center" colSpan={2}>
                        Eligibility Criteria
                      </TableCell>
                      <TableCell align="center">Remarks</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                      <TableCell align="center">Multiplier</TableCell>
                      <TableCell align="center">Absolute</TableCell>
                      <TableCell></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell component="th" scope="row">
                        Mass Recruitment
                      </TableCell>
                      <TableCell align="center"><TextareaAutosize/></TableCell>
                      <TableCell align="center"><TextareaAutosize/></TableCell>
                      <TableCell align="center"><TextareaAutosize/></TableCell>
                      <TableCell id="arx" align="center"><TextareaAutosize/></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell component="th" scope="row">
                        Middle
                      </TableCell>
                      <TableCell align="center"><TextareaAutosize/></TableCell>
                      <TableCell align="center"><TextareaAutosize/></TableCell>
                      <TableCell align="center"><TextareaAutosize/></TableCell>
                      <TableCell id="ar" align="center"><TextareaAutosize/></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell component="th" scope="row">
                        High
                      </TableCell>
                      <TableCell align="center"><TextareaAutosize/></TableCell>
                      <TableCell align="center"><TextareaAutosize/></TableCell>
                      <TableCell align="center"><TextareaAutosize/></TableCell>
                      <TableCell id="ar" align="center"><TextareaAutosize/></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell component="th" scope="row">
                        Elite
                      </TableCell>
                      <TableCell align="center"><TextareaAutosize/></TableCell>
                      <TableCell align="center"><TextareaAutosize/></TableCell>
                      <TableCell align="center"><TextareaAutosize/></TableCell>
                      <TableCell id="ar" align="center"><TextareaAutosize/></TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
              <div className="imp-points">
                <p>
                   <li>Some Important Points</li>
                  <TextareaAutosize/>
                </p>
                <button id = "save-changes" className="btn-primary">Save Changes</button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default EditPolicy;
