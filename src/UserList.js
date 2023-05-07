import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getQuotes } from "./CreateSlice";

function UserList() {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.user.data);

  const newData = [
    ...new Map(userList.map((item) => [item.userId, item])).values(),
  ];

  console.log("newData", newData);
  console.log("userList", userList);

  useEffect(() => {
    dispatch(getQuotes());
  }, []);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>user-Id</th>
            <th>Id</th>
            <th>Title</th>
            <th>Body</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {newData &&
            newData.length > 0 &&
            newData.map((item, i) => (
              <tr key={i}>
                <td>
                  {item.userId}
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.body}</td>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
