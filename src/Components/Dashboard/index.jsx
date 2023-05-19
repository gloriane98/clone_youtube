import React, { useEffect } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import authAxios from "../../utils/client";

const Dashboard = () => {
  useEffect(() => {
    authAxios().then(async (axios) => {
      const response = await axios.post("/user");
    });
  }, []);

  useEffect(() => {
    authAxios().then(async(axios)=>{
      const res = await axios.get("/user");
      // console.log(res)
    })
  }, [])

  return (
    <div className="detailscontainer">
      <Navbar />
      <Sidebar />
    </div>
  );
};

export default Dashboard;
