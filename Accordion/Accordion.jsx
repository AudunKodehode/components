import { useState } from "react";
import PropTypes from "prop-types";

export default function Accordion({
  title,
  children,
  className,
  closedIcon,
  openIcon,
}) {
  const [accordionOpen, setAccordionOpen] = useState(false);

  const toggleAccordion = () => {
    setAccordionOpen(!accordionOpen);
  };

  return (
    <div className={`accordion ${className}`}>
      <div
        className="accordion-header"
        onClick={toggleAccordion}
        style={{ cursor: "pointer", display: "flex", alignItems: "center" }}
      >
        <h4>{title}</h4>

        {accordionOpen ? openIcon : closedIcon}
      </div>
      {accordionOpen && <div className="accordion-body">{children}</div>}
    </div>
  );
}

Accordion.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  closedIcon: PropTypes.element.isRequired,
  openIcon: PropTypes.element.isRequired,
};
