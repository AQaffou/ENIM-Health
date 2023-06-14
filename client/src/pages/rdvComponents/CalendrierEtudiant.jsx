import { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Calendar from "moedim";

const StyledCalendar = styled(Calendar)`
  --moedim-primary: #ef7bc3;
  width: 320px;
  height: 300px;
  border: none;
  border-radius: 8px;
  filter: drop-shadow(0px 4px 12px rgba(0, 0, 0, 0.21));
  padding: 20px;
  background-color: #fff;
`;

const StyledDateSelector = styled.div`
  --moedim-primary: #ff69b4;
`;

const CalendrierEtudiant = ({ selectedDate, onDateChange }) => {
  const [value, setValue] = useState(selectedDate || new Date());

  const handleCalendarChange = (date) => {
    setValue(date);
    onDateChange(date);
  };

  return (
    <div className="absolute" style={{ transform: "translate(890px, -200px)" }}>
      <StyledCalendar
        value={value}
        onChange={handleCalendarChange}
        dateSelectorComponent={StyledDateSelector}
      />
      <div
        className="font-mulish flex items-center font-mulish text-black "
        style={{
          transform: "translate(10px, -80px)",
          background: "#F0F9FD",
          width: "300px",
          height: "50px",
          borderRadius: "8px",
        }}
      >
        <div
          className="ml-1 "
          style={{ position: "relative", display: "inline-block" }}
        >
          <img
            className="block"
            style={{ width: "30px", height: "30px" }}
            src="../assets/rendez_vous/Ellipse 38.png"
            alt=""
          />
          <span
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              fontSize: "15px",
              fontWeight: "bold",
              color: "white",
              zIndex: 1,
            }}
          >
            D
          </span>
        </div>
        <span className="pl-2 ">
          <h6 className="font-medium">Disponibilité du médecin</h6>
          <p className=" font-normal text-xs text-gray-500">
            Tous les Lundis et Jeudis | 04:00 PM - 06:00 PM
          </p>
        </span>
      </div>
    </div>
  );
};

CalendrierEtudiant.propTypes = {
  selectedDate: PropTypes.any,
  onDateChange: PropTypes.func.isRequired,
};

export default CalendrierEtudiant;
