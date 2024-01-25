import { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  // const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <h2>{title}</h2>
      {isVisible ? (
        <div>
          <button onClick={() => setIsVisible(null)}>Hide</button>
          <p>{description}</p>
        </div>
      ) : (
        <button onClick={() => setIsVisible(true)}>Show</button>
      )}
    </>
  );
};

const InstaMart = () => {
  const [visibleSection, setVisibleSection] = useState(null);
  return (
    <>
      <Section
        title={"About InstaMart"}
        description={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        }
        isVisible={visibleSection === "about"}
        setIsVisible={() => setVisibleSection("about")}
      />

      <Section
        title={"Team InstaMart"}
        description={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        }
        isVisible={visibleSection === "team"}
        setIsVisible={() => setVisibleSection("team")}
      />

      <Section
        title={"Career at InstaMart"}
        description={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        }
        isVisible={visibleSection === "career"}
        setIsVisible={() => setVisibleSection("career")}
      />
    </>
  );
};

export default InstaMart;
