import React from "react";

const PreventionTips = () => {
  const tipsList = [
    {
      id: 1,
      title: "Wash Your Hands",
      description:
        "Wash your hands regularly with soap and water for at least 20 seconds, especially after being in a public place, touching your face, or coughing/sneezing.",
    },
    {
      id: 2,
      title: "Wear a Mask",
      description:
        "Wear a mask that covers your nose and mouth when you are in public settings, especially when social distancing measures are difficult to maintain.",
    },
    {
      id: 3,
      title: "Practice Social Distancing",
      description:
        "Maintain at least 6 feet of distance from others who are not from your household. Avoid close contact with people who are sick.",
    },
    {
      id: 4,
      title: "Avoid Touching Your Face",
      description:
        "Avoid touching your eyes, nose, and mouth with unwashed hands. This helps prevent the spread of germs from your hands to your face.",
    },
    // Add more prevention tips as needed
  ];

  return (
    <div className="prevention-tips-container">
      <h2>Preventive Measures Against COVID-19</h2>
      <ul className="tips-list">
        {tipsList.map((tip) => (
          <li key={tip.id}>
            <h3>{tip.title}</h3>
            <p>{tip.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PreventionTips;
