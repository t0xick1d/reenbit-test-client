import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { DateTime } from 'luxon';
import cities from '../../top-1000-cities.json';

import { addTrip } from '../../redux-store/weather/weatherSlice';

import s from './Modal.module.scss';

const Modal = ({ setActiveModal, activeModal }) => {
  const dispatch = useDispatch();
  const [startDateState, setStartDare] = useState(
    DateTime.now().plus({ days: 15 }).toFormat('y-LL-dd')
  );
  const [searchList, setSearchList] = useState([]);
  const searchCity = (value = '') => {
    if (value.length < 3) {
      return;
    }
    const array = cities.filter(str => {
      return str.name.toLowerCase().includes(value.toLowerCase());
    });
    console.log(array);
    setSearchList(array);
  };
  const formik = useFormik({
    initialValues: {
      city: '',
      startDate: DateTime.now().toFormat('y-LL-dd'),
      endDate: DateTime.now().plus({ days: 15 }).toFormat('y-LL-dd'),
    },
    validationSchema: Yup.object({
      city: Yup.string().required('Required'),
      startDate: Yup.date()
        .min(DateTime.now().toFormat('y-LL-dd'), 'Select a date later')
        .max(
          DateTime.now().plus({ days: 15 }).toFormat('y-LL-dd'),
          'Select a date earlier'
        )
        .required(),
      endDate: Yup.date()
        .min(Yup.ref('startDate'), 'Select a date later')
        .max(
          DateTime.fromISO(startDateState)
            .plus({ days: 15 })
            .toFormat('y-LL-dd'),
          'Select a date earlier'
        )
        .required(),
    }),
    onSubmit: (values, { resetForm }) => {
      dispatch(addTrip(values));
      resetForm({
        values: {
          city: '',
          startDate: DateTime.now().toFormat('y-LL-dd'),
          endDate: DateTime.now().plus({ days: 15 }).toFormat('y-LL-dd'),
        },
      });
      dispatch(setActiveModal(!activeModal));
    },
  });
  return (
    <div className={activeModal ? `${s.modal} ${s.active}` : s.modal}>
      <div className={s.modalContent}>
        <div>
          <h3>Create trip</h3>
          <form
            onSubmit={formik.handleSubmit}
            autoComplete="off"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'start',
              padding: 15,
            }}
          >
            <label htmlFor="email">City</label>
            <input
              id="city"
              type="text"
              name="city"
              placeholder="Please select a city"
              onChange={value => {
                formik.handleChange(value);
                searchCity(value.currentTarget.value);
              }}
              onBlur={formik.handleBlur}
              value={formik.values.city}
            />
            <ul>
              {searchList.length < 5 &&
                searchList.map(e => {
                  return (
                    <li
                      onClick={() => {
                        formik.setFieldValue('city', e.name);
                        setSearchList([]);
                      }}
                    >
                      {e.name}
                    </li>
                  );
                })}
            </ul>

            {formik.touched.city && formik.errors.city ? (
              <div style={{ color: 'var(--error-color)' }}>
                {formik.errors.email}
              </div>
            ) : null}
            <label htmlFor="startDate">Start date</label>
            <input
              id="startDate"
              type="date"
              name="startDate"
              placeholder="Select date"
              onChange={value => {
                setStartDare(value.currentTarget.value);
                formik.handleChange(value);
              }}
              onBlur={formik.handleBlur}
              value={formik.values.startDate}
            />
            {formik.touched.startDate && formik.errors.startDate ? (
              <div style={{ color: 'var(--error-color)' }}>
                {formik.errors.startDate}
              </div>
            ) : null}
            <label htmlFor="endDate">End date</label>
            <input
              id="endDate"
              type="date"
              name="endDate"
              placeholder="Select date"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.endDate}
            />

            {formik.touched.endDate && formik.errors.endDate ? (
              <div style={{ color: 'var(--error-color)' }}>
                {formik.errors.endDate}
              </div>
            ) : null}
            <button type="submit">Save</button>
          </form>
          <button
            type="button"
            onClick={() => dispatch(setActiveModal(!activeModal))}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
