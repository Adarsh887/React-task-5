import { useState } from 'react';
import PropTypes from 'prop-types';

const AgeCalc = ({ calculateAge }) => {
  const [birthDate, setBirthDate] = useState('');

  const handleChangeDate = (e) => {
    setBirthDate(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    calculateAge(birthDate);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4'
    >
        <center>
      <input
        className='form-control bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
        style={{width:"20%"}}
        value={birthDate}
        type='date'
        onChange={handleChangeDate}
      />
      </center>
      <br/>
      <button
        className='disabled:bg-slate-400 disabled:cursor-not-allowed text-light btn btn-primary bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-sm text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
        disabled={!birthDate}
        type='submit'
      >
        Calculate Age
      </button>
    </form>
  );
};

AgeCalc.propTypes = {
  calculateAge: PropTypes.func.isRequired,
};

export default AgeCalc;