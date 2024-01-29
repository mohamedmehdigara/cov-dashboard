import React from "react";

const HealthTip = ({ title, description }) => (
  <div className="health-tip">
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

const HealthTips = () => {
  const tipsList = [
    {
      id: 1,
      title: "Morning Exercise Routine",
      description:
        "Start your day with a 20-minute workout. It can be a brisk walk, yoga, or simple stretching exercises to boost your energy levels.",
    },
    {
      id: 2,
      title: "Healthy Recipe of the Week",
      description:
        "Try a nutritious recipe with plenty of vegetables, lean proteins, and whole grains. Check out our website for the latest healthy recipes.",
    },
    {
      id: 3,
      title: "Mindful Breathing Exercise",
      description:
        "Practice mindful breathing for 5 minutes. Inhale deeply, hold for a moment, and exhale slowly. Repeat to reduce stress and improve focus.",
    },
    {
      id: 4,
      title: "Stay Hydrated",
      description:
        "Drink plenty of water throughout the day. Staying hydrated is crucial for overall health, energy levels, and maintaining clear skin.",
    },
    // Add more health tips as needed
  ];

  return (
    <div className="health-tips-container">
      <h2>Health Tips</h2>
      <div className="tips-list">
        {tipsList.map((tip) => (
          <HealthTip
            key={tip.id}
            title={tip.title}
            description={tip.description}
          />
        ))}
      </div>
    </div>
  );
};

export default HealthTips;
