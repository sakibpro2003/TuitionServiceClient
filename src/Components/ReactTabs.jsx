import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import axios from "axios";
import TuitionCard from "./TuitionCard";

const ReactTabs = () => {
  const [serviceData, setServiceData] = useState([]);
  // console.log(`{$(import.meta.env.VITE_API_URL)}`)

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios("http://localhost:5000/services", {
        withCredentials: true,
      });
      // console.log(`${import.meta.env.VITE_API_URL}`)
      console.log(data);
      setServiceData(data);
    };
    getData();
  }, []);

  console.log(serviceData);
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Title 1</Tab>
          <Tab>Title 2</Tab>
          <Tab>Title 3</Tab>
        </TabList>

        <TabPanel>
          <div>
            {serviceData
              .filter((s) => s.subject === "Physics")
              .map((singleData) => (
                <TuitionCard singleData={singleData} key={singleData._id}>1</TuitionCard>
              ))}
          </div>
        </TabPanel>

        <TabPanel>
        <div>
            {serviceData
              .filter((s) => s.subject === "Math")
              .map((singleData) => (
                <TuitionCard singleData={singleData} key={singleData._id}>1</TuitionCard>
              ))}
          </div>
        </TabPanel>

        <TabPanel>
        <div>
            {serviceData
              .filter((s) => s.subject === "Biology")
              .map((singleData) => (
                <TuitionCard singleData={singleData} key={singleData._id}>1</TuitionCard>
              ))}
          </div>
        </TabPanel>

      </Tabs>
    </div>
  );
};

export default ReactTabs;
