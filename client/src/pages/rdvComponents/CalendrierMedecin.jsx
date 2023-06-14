import  { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Calendar from 'moedim';

const StyledCalendar = styled(Calendar)`
--moedim-primary: #EF7BC3;
width: 320px;
height: 250px;
border: none;
border-radius: 8px;
filter: drop-shadow(0px 4px 12px rgba(0, 0, 0, 0.21));
padding: 20px;
background-color: #fff;
`;

const StyledDateSelector = styled.div`
--moedim-primary: #ff69b4;
`;

const Calendrier = ({ selectedDate, onDateChange }) => {
  const [value, setValue] = useState(selectedDate || new Date());

  const handleCalendarChange = (date) => {
    setValue(date);
    onDateChange(date);
  };

  return (
    <div className='absolute' style={{ transform: 'translate(890px, -270px)'}}>
      <StyledCalendar
        value={value}
        onChange={handleCalendarChange}
        dateSelectorComponent={StyledDateSelector}
      />
    </div>
  );
};

Calendrier.propTypes = {
  selectedDate: PropTypes.any,
  onDateChange: PropTypes.func.isRequired,
};

export default Calendrier;
