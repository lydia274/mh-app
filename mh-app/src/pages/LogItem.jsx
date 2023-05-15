import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const LogItem = () => {
  const [log, setLog] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://ironrest.fly.dev/api/mh-app-log/${id}`
        );
        setLog(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div>
      <h2>Date: {log.date}</h2>
      <p>Thoughts: {log.thoughts}</p>
      <p>Mood: {log.mood}</p>
      {log.items && (
        <ul>
          {log.items.map((item, idx) => (
            <li key={idx}>{item}dtdty</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LogItem;
