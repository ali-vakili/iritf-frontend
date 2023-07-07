import React, { useState, useEffect, useRef } from 'react';
import moment from "jalali-moment";

import "./DateTime.scss"


const DateTime = () => {
  const persianDays = [
    'یکشنبه',
    'دوشنبه',
    'سه‌شنبه',
    'چهارشنبه',
    'پنجشنبه',
    'جمعه',
    'شنبه',
  ];
  const persianMonths = [
    'فروردین',
    'اردیبهشت',
    'خرداد',
    'تیر',
    'مرداد',
    'شهریور',
    'مهر',
    'آبان',
    'آذر',
    'دی',
    'بهمن',
    'اسفند',
  ];

  moment.locale('fa', {
    weekdays: persianDays,
  });

  const formattedTimeRef = useRef('');

  useEffect(() => {
    const updateDateTime = () => {
      const currentTime = moment().locale('fa').format(`dddd , jD ${persianMonths[moment().jMonth()]} jYYYY - HH:mm`);

      if (formattedTimeRef.current !== currentTime) {
        formattedTimeRef.current = currentTime;
        setCurrentTime(currentTime);
      }

      requestAnimationFrame(updateDateTime);
    };

    requestAnimationFrame(updateDateTime);

    return () => {
      cancelAnimationFrame(updateDateTime);
    };
  }, []);

  const [currentTime, setCurrentTime] = useState(formattedTimeRef.current);

  return (
    <div className='iran-date-time'>
      <p style={{"fontSize":"14px", "fontWeight":"500"}} className='m-0'>
        {currentTime}
      </p>
    </div>
  );
};

export default DateTime;