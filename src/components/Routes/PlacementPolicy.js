import React from "react";
import "../stylesheets/PlacementPolicy.css";
import SideNav from "../components/SideNav";
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
} from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function PlacementPolicy() {
  const classes = useStyles();

  return (
    <div className="pp">
      <div className="main-section">
        <div className="left-section">
          <SideNav />
        </div>
        <div className="right-section">
          <TopNav />
          <div className="profile-heading">
            <h3>Placement Policy</h3>
            <h5>
              &nbsp;List of guidelines to be followed during the placement
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
                      <TableCell align="center">0 - 4.5 lakhs</TableCell>
                      <TableCell align="center">x2</TableCell>
                      <TableCell align="center">-</TableCell>
                      <TableCell id="arx" align="center">Students are encouraged to participate in all mass recruitment drives and secure maximum mass recruitment offers.</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell component="th" scope="row">
                        Middle
                      </TableCell>
                      <TableCell align="center">4.5 - 13 lakhs</TableCell>
                      <TableCell align="center">x1.5</TableCell>
                      <TableCell align="center">$1000</TableCell>
                      <TableCell id="ar" align="center">A student can have only one offer at one CTC level.</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell component="th" scope="row">
                        High
                      </TableCell>
                      <TableCell align="center">13 - 26 lakhs</TableCell>
                      <TableCell align="center">x1</TableCell>
                      <TableCell align="center">$5000</TableCell>
                      <TableCell id="ar" align="center">A student can have only one offer at one CTC level.</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell component="th" scope="row">
                        Elite
                      </TableCell>
                      <TableCell align="center">More than 26 lakhs</TableCell>
                      <TableCell align="center">x0.5</TableCell>
                      <TableCell align="center">$10,000</TableCell>
                      <TableCell id="ar" align="center">A student can have only one offer at one CTC level.</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
              <div className="imp-points">
                <p>
                  <li>After the declaration of Mass Recruitment Drives’ Results, students having multiple mass recruitment offers will be asked to choose one with a choice of internship (if applicable) for joining in Feb 2023 or direct on-boarding in Jun / Jul 2023.</li>
                  <li>Students will join the same campus recruitment company on the basis of which they secured the 8th semester fast-track program. If such a student withdraws before / after the start / in-between / after the completion of the fast-track program, she/he shall not be permitted to participate in any future placement drives.</li>
                  <li>From 01 Jan 2023, only unplaced and regular 8th semester students will be eligible for participation in the placement drives as per the eligibility criteria given in the table above.</li>
                  <li>Students having off-campus offer(s) will join the company in Jun / Jul 2023 only, after the regular final semester. The date of joining will be clarified and addressed by the student with the off-campus company well in advance. No claims for joining the fast-track program, by the off-campus offered students, will be accepted.</li>
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default PlacementPolicy;
