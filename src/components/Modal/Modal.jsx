import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { DateTime } from 'luxon';

import s from './Modal.module.scss';

const Modal = ({ setActiveModal, activeModal }) => {
  const dispatch = useDispatch();

  // console.log(new Date(DateTime.now().ts));
  // console.log(new Date(DateTime.now().plus({ days: 15 })));

  const formik = useFormik({
    initialValues: {
      city: '',
      startDate: DateTime.utc(),
      endDate: new Date(DateTime.now().plus({ days: 15 })),
    },
    validationSchema: Yup.object({
      // city: Yup.string().required('Required'),
      // startDate: Yup.date().min(today2).required(),
      // endDate: Yup.date().max(nextDays).required(),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      dispatch();

      resetForm();
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
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />

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
              placeholder="Selcet date"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
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
              placeholder="Selcet date"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
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
