import React from "react";

const LinkItem = ({ title, url }) => (
  <li>
    <a href={url} target="_blank" rel="noopener noreferrer">
      {title}
    </a>
  </li>
);

const ResourceLinks = () => {
  const resourceList = [
    {
      id: 1,
      title: "World Health Organization (WHO)",
      url: "https://www.who.int/",
    },
    {
      id: 2,
      title: "Centers for Disease Control and Prevention (CDC)",
      url: "https://www.cdc.gov/",
    },
    {
      id: 3,
      title: "National Institutes of Health (NIH)",
      url: "https://www.nih.gov/",
    }    // Add more reputable sources as needed
  ];

  return (
    <div className="resource-links-container">
      <h2>Reputable Resources</h2>
      <ul className="resource-list">
        {resourceList.map((item) => (
          <LinkItem key={item.id} title={item.title} url={item.url} />
        ))}
      </ul>
    </div>
  );
};

export default ResourceLinks;
