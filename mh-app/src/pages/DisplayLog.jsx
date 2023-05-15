import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const DisplayLog = () => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const response = await axios.get(
          "https://ironrest.fly.dev/api/mh-app-log"
        );
        setLogs(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    //const { logId } = useParams();

    fetchLogs();
  }, []);

  return (
    <div className="flex">
      {logs.map((log, idx) => (
        <div key={idx} className="border tile">
          <h2>Date: {log.date}</h2>
          <p>Thoughts: {log.thoughts}</p>
          <p>Mood: {log.mood}</p>
          {log.items && (
            <ul>
              {log.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          )}
          {console.log(log._id)}
          <Link to={`/displaylog/${log._id}`}> Learn more </Link>
        </div>
      ))}
    </div>
  );
};

export default DisplayLog;
