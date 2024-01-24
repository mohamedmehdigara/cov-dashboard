import React, { useState } from "react";

const FAQItem = ({ question, answer, isOpen, toggleOpen }) => (
  <div className={`faq-item ${isOpen ? "open" : ""}`} onClick={toggleOpen}>
    <h3>{question}</h3>
    {isOpen && <p>{answer}</p>}
  </div>
);

const FAQs = () => {
  const [faqItems, setFAQItems] = useState([
    {
      id: 1,
      question: "What is COVID-19?",
      answer:
        "COVID-19 is a respiratory illness caused by the SARS-CoV-2 virus. It was first identified in December 2019 in Wuhan, China.",
    },
    {
      id: 2,
      question: "How does COVID-19 spread?",
      answer:
        "COVID-19 primarily spreads through respiratory droplets when an infected person coughs, sneezes, or talks. It can also spread by touching surfaces contaminated with the virus.",
    },
    {
      id: 3,
      question: "What are the symptoms of COVID-19?",
      answer:
        "Common symptoms include fever, cough, and shortness of breath. Other symptoms may include fatigue, body aches, loss of taste or smell, sore throat, and more.",
    },
    // Add more FAQs as needed
  ]);

  const toggleFAQ = (id) => {
    setFAQItems((prevFAQs) =>
      prevFAQs.map((faq) =>
        faq.id === id ? { ...faq, isOpen: !faq.isOpen } : faq
      )
    );
  };

  return (
    <div className="faqs-container">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqItems.map((item) => (
          <FAQItem
            key={item.id}
            question={item.question}
            answer={item.answer}
            isOpen={item.isOpen || false}
            toggleOpen={() => toggleFAQ(item.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQs;
