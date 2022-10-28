import React, { Component } from "react";

class table1 extends Component {
  state = {
    schvalues: [
      {
        name: "Morning Upstairs",
        monday: 1,
        tuesday: 2,
        wednesday: 5,
        thursday: 3,
        friday: 8,
      },
      {
        name: "Morning Downstairs",
        monday: 1,
        tuesday: 2,
        wednesday: 8,
        thursday: 3,
        friday: 7,
      },
      {
        name: "Morning Parking lot",
        monday: 8,
        tuesday: 2,
        wednesday: 5,
        thursday: 3,
        friday: 7,
      },
      {
        name: "Lunch A",
        monday: 3,
        tuesday: 2,
        wednesday: 5,
        thursday: 8,
        friday: 7,
      },
      {
        name: "Lunch B",
        monday: 5,
        tuesday: 2,
        wednesday: 5,
        thursday: 3,
        friday: 7,
      },
      {
        name: "Lunch C",
        monday: 6,
        tuesday: 2,
        wednesday: 5,
        thursday: 3,
        friday: 7,
      },
      {
        name: "Lunch D",
        monday: 9,
        tuesday: 2,
        wednesday: 5,
        thursday: 3,
        friday: 7,
      },
      {
        name: "Afternoon Upstairs",
        monday: 1,
        tuesday: 2,
        wednesday: 5,
        thursday: 3,
        friday: 7,
      },
      {
        name: "Afternoon Downstairs",
        monday: 1,
        tuesday: 2,
        wednesday: 5,
        thursday: 3,
        friday: 7,
      },
      {
        name: "Afternoon Parking lot",
        monday: 1,
        tuesday: 2,
        wednesday: 5,
        thursday: 3,
        friday: 7,
      },
    ],
    loadvalues: [
      {
        name: "X1",
        monday: 1,
        tuesday: 2,
        wednesday: 5,
        thursday: 3,
        friday: 7,
      },
      {
        name: "X2",
        monday: 1,
        tuesday: 2,
        wednesday: 5,
        thursday: 3,
        friday: 7,
      },
      {
        name: "X3",
        monday: 1,
        tuesday: 2,
        wednesday: 5,
        thursday: 3,
        friday: 7,
      },
      {
        name: "X4",
        monday: 1,
        tuesday: 2,
        wednesday: 5,
        thursday: 3,
        friday: 7,
      },
      {
        name: "X5",
        monday: 1,
        tuesday: 2,
        wednesday: 5,
        thursday: 3,
        friday: 7,
      },
      {
        name: "X6",
        monday: 1,
        tuesday: 2,
        wednesday: 4,
        thursday: 3,
        friday: 7,
      },
      {
        name: "X7",
        monday: 1,
        tuesday: 2,
        wednesday: 5,
        thursday: 3,
        friday: 7,
      },
    ],
  };
  render() {
    return (
      <div>
        <div class="color-box">
          <div>
            <div class="color-red"></div>
            more than 7
          </div>
          <div>
            <div class="color-orange"></div>
            less than 2
          </div>
        </div>

        <table>
          <caption>
            <b>Schdule</b>
          </caption>
          <thead>
            <tr>
              <th></th>
              <th>Monday</th>
              <th>Tuesday</th>
              <th>Wednesday</th>
              <th>Thursday</th>
              <th>Friday</th>
              <th>Totals</th>
            </tr>
          </thead>

          <tbody class="tbl-accordion-header">
            {this.state.schvalues.map((val) => (
              <tr>
                <td>
                  <a data-toggle="toggle">
                    <strong>{val.name}</strong>
                  </a>
                </td>
                <td
                  style={{
                    backgroundColor:
                      val.monday > 7 ? "red" : val.monday < 2 ? "orange" : "",
                  }}
                >
                  {val.monday}
                </td>
                <td
                  style={{
                    backgroundColor:
                      val.tuesday > 7 ? "red" : val.tuesday < 2 ? "orange" : "",
                  }}
                >
                  {val.tuesday}
                </td>
                <td
                  style={{
                    backgroundColor:
                      val.wednesday > 7
                        ? "red"
                        : val.wednesday < 2
                        ? "orange"
                        : "",
                  }}
                >
                  {val.wednesday}
                </td>
                <td
                  style={{
                    backgroundColor:
                      val.thursday > 7
                        ? "red"
                        : val.thursday < 2
                        ? "orange"
                        : "",
                  }}
                >
                  {val.thursday}
                </td>
                <td
                  style={{
                    backgroundColor:
                      val.friday > 7 ? "red" : val.friday < 2 ? "orange" : "",
                  }}
                >
                  {val.friday}
                </td>
                <td>
                  {val.monday +
                    val.tuesday +
                    val.wednesday +
                    val.thursday +
                    val.friday}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <table>
          <caption>
            <b>Load</b>
          </caption>
          <thead>
            <tr>
              <th>Staff Member</th>
              <th>Monday</th>
              <th>Tuesday</th>
              <th>Wednesday</th>
              <th>Thursday</th>
              <th>Friday</th>
              <th>Totals</th>
            </tr>
          </thead>

          <tbody class="tbl-accordion-header">
            {this.state.loadvalues.map((val) => (
              <tr>
                <td>
                  <a data-toggle="toggle">
                    <strong>{val.name}</strong>
                  </a>
                </td>
                <td
                  style={{
                    backgroundColor:
                      val.monday > 7 ? "red" : val.monday < 2 ? "orange" : "",
                  }}
                >
                  {val.monday}
                </td>
                <td
                  style={{
                    backgroundColor:
                      val.tuesday > 7 ? "red" : val.tuesday < 2 ? "orange" : "",
                  }}
                >
                  {val.tuesday}
                </td>
                <td
                  style={{
                    backgroundColor:
                      val.wednesday > 7
                        ? "red"
                        : val.wednesday < 2
                        ? "orange"
                        : "",
                  }}
                >
                  {val.wednesday}
                </td>
                <td
                  style={{
                    backgroundColor:
                      val.thursday > 7
                        ? "red"
                        : val.thursday < 2
                        ? "orange"
                        : "",
                  }}
                >
                  {val.thursday}
                </td>
                <td
                  style={{
                    backgroundColor:
                      val.friday > 7 ? "red" : val.friday < 2 ? "orange" : "",
                  }}
                >
                  {val.friday}
                </td>
                <td>
                  {val.monday +
                    val.tuesday +
                    val.wednesday +
                    val.thursday +
                    val.friday}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default table1;
