import React from "react";

import Header from "../component/Header";
import Follow from "../component/Follow";
import Footer from "../component/Footer";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

function FollowersFollowing() {
  return (
    <>
      <div className="container full-height">
        <div className="header border-bottom">
          <Header />
        </div>

        <div>
          <p>User ID: {}</p>
          <p>DOB: {}</p>
        </div>

        <Tabs>
          <TabList>
            <Tab
              style={{ width: "43.2%", textAlign: "center", color: "#458C98" }}
            >
              Followers
            </Tab>
            <Tab
              style={{ width: "43.2%", textAlign: "center", color: "#458C98" }}
            >
              Following
            </Tab>
          </TabList>

          <TabPanel>
            <div className="follow px">
              <Follow buttonText="Follow" textColor="#fff" bgColor="#3D8FD8" />
              <Follow buttonText="Follow" textColor="#fff" bgColor="#3D8FD8" />
              <Follow buttonText="Follow" textColor="#fff" bgColor="#3D8FD8" />
              <Follow buttonText="Follow" textColor="#fff" bgColor="#3D8FD8" />
              <Follow buttonText="Follow" textColor="#fff" bgColor="#3D8FD8" />
              <Follow buttonText="Follow" textColor="#fff" bgColor="#3D8FD8" />
              {/* <Follow buttonText="Follow" textColor="#fff" bgColor="#3D8FD8" /> */}
              {/* <Follow buttonText="Follow" textColor="#fff" bgColor="#3D8FD8" /> */}
            </div>
          </TabPanel>

          <TabPanel>
            <div className="follow px">
              <Follow buttonText="Following" textColor="#000" bgColor="#fff" />
              <Follow buttonText="Following" textColor="#000" bgColor="#fff" />
              <Follow buttonText="Following" textColor="#000" bgColor="#fff" />
              <Follow buttonText="Following" textColor="#000" bgColor="#fff" />
              <Follow buttonText="Following" textColor="#000" bgColor="#fff" />
              <Follow buttonText="Following" textColor="#000" bgColor="#fff" />
              {/* <Follow buttonText="Following" textColor="#000" bgColor="#fff" /> */}
              {/* <Follow buttonText="Following" textColor="#000" bgColor="#fff" /> */}
            </div>
          </TabPanel>
        </Tabs>

        <Footer marginTop="110px" />
      </div>
    </>
  );
}

export default FollowersFollowing;
