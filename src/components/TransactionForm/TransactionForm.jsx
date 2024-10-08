import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Controller, useForm } from 'react-hook-form';
import { useModal } from 'hooks';
import DatePicker from 'react-datepicker';
import classNames from 'classnames';
import { yupResolver } from '@hookform/resolvers/yup';
import 'react-datepicker/dist/react-datepicker.css';
import './DatePicker.css'; // Import custom CSS
import { useNavigate } from 'react-router-dom';
import { Icon, Modal } from 'components';
import { CategoriesModal } from '../CategoriesModal/CategoriesModal';
import { selectUser } from '../../redux/User/userSlice';
import { formatDate, formatTime } from '../../helpers'; // Correct import
import { selectTransactionsError } from '../../redux/Transaction/TransactionSlice';
import { transactionSchema } from '../../schemas/validationSchema';
import s from './TransactionForm.module.css';

export const TransactionForm = ({
  transaction,
  transactionsType,
  onSubmitForm,
  history,
}) => {
  const user = useSelector(selectUser);
  const isError = useSelector(selectTransactionsError);
  const { currency } = user;
  const [categoryId, setCategoryId] = useState('');
  const [isOpenModalTransaction, toggleModalTransaction] = useModal();

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    getValues,
    control,
    formState: { errors },
    clearErrors,
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(transactionSchema),
  });
  const navigate = useNavigate();

  const clearFieldCategory = useCallback(
    type => {
      setValue('category', '');
      setCategoryId('');
      navigate(`/transactions/${type}`);
    },
    [setValue, setCategoryId, navigate]
  );

  const setDefaultValues = useCallback(() => {
    setValue('type', transactionsType);
    setValue('date', formatDate(new Date()));
    setValue('time', formatTime());
    setValue('category', '');
    setCategoryId('');
    setValue('sum', '');
    setValue('comment', '');
    clearErrors();
  }, [setValue, setCategoryId, transactionsType, clearErrors]);

  useEffect(() => {
    if (!transaction) {
      setDefaultValues();
    }

    if (transaction) {
      const { type, date, time, category, sum, comment } = transaction;

      setCategoryId(category?._id);
      setValue('type', type);
      setValue('date', date);
      setValue('time', time);
      setValue('category', category.categoryName);
      setValue('sum', sum);
      setValue('comment', comment);
    }
  }, [transaction, setValue, setDefaultValues]);

  const handleChangeCategory = item => {
    setValue('category', item.categoryName, { shouldValidate: true });
    setCategoryId(item._id);
    toggleModalTransaction();
  };

  const handleChangeDate = date => {
    const formattedDate = formatDate(date);
    setValue('date', formattedDate, { shouldValidate: true });
  };

  const onSubmit = data => {
    data.category = categoryId;

    if (transaction) {
      data._id = transaction._id;
    }

    onSubmitForm(data);

    if (!isError && !transaction) {
      reset();
      setDefaultValues();
    }
  };

  const fieldClasses = fieldName => {
    return classNames({
      [`${
        s[fieldName !== 'date' ? `${fieldName + 'Field'}` : 'datePicker']
      }`]: true,
      [`${s.errorField}`]: errors[fieldName]?.message,
    });
  };

  const renderMessage = fieldName => {
    if (errors[fieldName]?.message) {
      return <p className={s.messageError}>{errors[fieldName]?.message}</p>;
    }
  };

  const radioBtnExpenses = classNames({
    [`${s.typeLabel}`]: true,
    [`${s.radioLabel}`]:
      transaction?.type === 'incomes' || history === 'incomes',
  });

  const radioBtnIncomes = classNames({
    [`${s.typeLabel}`]: true,
    [`${s.radioLabel}`]:
      transaction?.type === 'expenses' || history === 'expenses',
  });

  return (
    <div>
      <div className={s.formWrapper}>
        <form className={s.transactionForm} onSubmit={handleSubmit(onSubmit)}>
          <div className={s.transactionTypes}>
            <label className={radioBtnExpenses}>
              <input
                className={s.radioBtn}
                type="radio"
                name="type"
                value="expenses"
                {...register('type')}
                disabled={
                  transaction?.type === 'incomes' || history === 'incomes'
                }
                onChange={() => clearFieldCategory('expenses')}
              />
              <span className={s.customRadioBtn}></span>
              Expense
            </label>
            <label className={radioBtnIncomes}>
              <input
                className={s.radioBtn}
                type="radio"
                name="type"
                value="incomes"
                {...register('type')}
                disabled={
                  transaction?.type === 'expenses' || history === 'expenses'
                }
                onChange={() => clearFieldCategory('incomes')}
              />
              <span className={s.customRadioBtn}></span>
              Income
            </label>
          </div>
          <div className={s.customFields}>
            <label className={s.customField}>
              Date
              <Controller
                control={control}
                name="date"
                render={({ field }) => (
                  <div className="datepickerContainer">
                    <DatePicker
                      className={fieldClasses('date')}
                      showPopperArrow={false}
                      maxDate={new Date()}
                      selected={field.value}
                      placeholderText="mm/dd/yyyy"
                      onChange={date => {
                        field.onChange(date);
                        handleChangeDate(date);
                      }}
                      calendarClassName="fixed-height-calendar"
                    />
                  </div>
                )}
              />
              <Icon name="calendar" className={s.iconDate} size="16" />
              {renderMessage('date')}
            </label>
            <label className={s.customField}>
              Time
              <input
                className={fieldClasses('time')}
                type="time"
                name="time"
                {...register('time')}
              />
              <Icon name="clock" className={s.iconTime} size="16" />
              {renderMessage('time')}
            </label>
          </div>
          <div className={s.fieldWrapper}>
            <label>Category</label>
            <input
              className={fieldClasses('category')}
              type="text"
              name="category"
              placeholder="Different"
              autoComplete="off"
              {...register('category')}
              required
              readOnly
              onClick={toggleModalTransaction}
            />
            {renderMessage('category')}
          </div>
          <div>
            <label className={s.sumLabel}>
              Sum
              <input
                className={fieldClasses('sum')}
                type="number"
                name="sum"
                placeholder="Enter the sum"
                autoComplete="off"
                {...register('sum')}
              />
              <span className={s.currency}>{currency?.toUpperCase()}</span>
              {renderMessage('sum')}
            </label>
          </div>
          <div className={s.fieldWrapper}>
            <label>Comment</label>
            <textarea
              className={fieldClasses('comment')}
              name="comment"
              placeholder="Enter the text"
              {...register('comment')}
            />
            {renderMessage('comment')}
          </div>
          <button
            className={s.submitBtn}
            type="submit"
            disabled={Object.entries(errors).length}
          >
            {transaction ? 'Save' : 'Add'}
          </button>
        </form>
      </div>
      {isOpenModalTransaction && (
        <Modal toggleModal={toggleModalTransaction}>
          <CategoriesModal
            transportCategory={handleChangeCategory}
            type={getValues('type')}
          />
        </Modal>
      )}
    </div>
  );
};
