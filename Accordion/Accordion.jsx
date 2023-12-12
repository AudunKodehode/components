import { useState, useEffect } from "react";
import PropTypes from "prop-types";

export default function Accordion({
  title,
  children,
  className,
  closedIcon,
  openIcon,
  open,
}) {
  useEffect(() => {
    if (open) {
      setAccordionOpen(true);
    } else {
      setAccordionOpen(false);
    }
  }, [open]);
  const [accordionOpen, setAccordionOpen] = useState(false);

  const toggleAccordion = () => {
    setAccordionOpen(!accordionOpen);
  };

  return (
    <div className={`accordion ${className}`} onClick={toggleAccordion}>
      <div
        className="accordion-header"
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
  title: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  closedIcon: PropTypes.element,
  openIcon: PropTypes.element,
  open: PropTypes.bool,
};
