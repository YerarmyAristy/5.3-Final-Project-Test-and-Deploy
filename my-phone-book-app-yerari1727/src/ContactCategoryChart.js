import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from "chart.js";

ChartJS.register(Title, Tooltip, Legend, ArcElement);

const ContactCategoryChart = ({ contacts }) => {
  // Aggregate contacts by category
  const categories = contacts.reduce((acc, contact) => {
    acc[contact.category] = (acc[contact.category] || 0) + 1;
    return acc;
  }, {});

  // Chart data configuration
  const data = {
    labels: Object.keys(categories),
    datasets: [
      {
        label: "Contacts by Category",
        data: Object.values(categories),
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
      },
    ],
  };

  return (
    <div style={{ maxWidth: "300px", margin: "auto" }}>
      <Pie data={data} />
    </div>
  );
};

export default ContactCategoryChart;
