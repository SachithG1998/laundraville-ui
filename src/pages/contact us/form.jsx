import React from "react";
function form() {
  return (
    <div>
      <main style={{ padding: "10rem 0" }}>
        <h1>contact us</h1>
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
          </table>
        </form>
      </main>
    </div>
  );
}
