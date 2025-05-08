import React from 'react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <form>
      <h2>{t('contact_title')}</h2>
      <label htmlFor="">{t('form_name')} : </label>
      <input type="text" placeholder={t('form_name')} /><br />
      <label htmlFor="">{t('form_email')} : </label>
      <input type="email" placeholder={t('form_email')} /><br />
      <label htmlFor="">{t('form_message')} : </label>
      <textarea placeholder={t('form_message')} /><br />
      <button type="submit">{t('submit')}</button>
    </form>
  );
};

export default Contact;
