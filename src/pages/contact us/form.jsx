import React from "react";
import "./contactus.css";
function form() {
  return (
    <div>
      <main style={{ padding: "10rem 0" }}>
        <h1>contact us</h1>
        <div className="cont_form">
          <form>
            <table>
              <tr>
                <th>NAME</th>
                <td>:</td>
                <td>
                  {" "}
                  <input
                    type="text"
                    name="username"
                    value={inputs.username || ""}
                    onChange={handleChange}
                  ></input>
                </td>
              </tr>
              <tr>
                <th>ADDRESS</th>
                <td>:</td>
                <td>
                  <input
                    type="text"
                    name="address"
                    value={inputs.address || ""}
                    onChange={handleChange}
                  ></input>
                </td>
              </tr>
              <tr>
                <th>POST CODE </th>
                <td>:</td>
                <td>
                  <input
                    type="text"
                    name="postcode"
                    value={inputs.POSTCODE || ""}
                    onChange={handleChange}
                  ></input>
                </td>
              </tr>
              <tr>
                <th>ADDRESS</th>
                <td>:</td>
                <td>
                  <input
                    type="teliphone number"
                    name="tel no"
                    value={inputs.telno || ""}
                    onChange={handleChange}
                  ></input>
                </td>
              </tr>
              <tr>
                <th>EMAIL</th>
                <td>:</td>
                <td>
                  <input
                    type="email"
                    name="email"
                    value={inputs.email || ""}
                    onChange={handleChange}
                  ></input>
                </td>
              </tr>
              <tr>
                <th>ENQUIRY</th>
                <td>:</td>
                <td>
                  <textarea value={textarea} onChange={handleChange} />
                </td>
              </tr>
              <tr>
                <td> </td>
                <tr>
                  <input type="submit" />
                </tr>
              </tr>
            </table>
          </form>
        </div>
      </main>
    </div>
  );
}
