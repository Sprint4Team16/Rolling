import React, { useEffect, useState } from 'react';
// eslint-disable-next-line
import RecipientCard from './RecipientCard';
import { getRecipients } from '../../api/GetApi';

function RecipientList() {
  const [recipients, setRecipients] = useState([]);

  const handleRecipientsLoad = async () => {
    try {
      const response = await getRecipients();
      const data = response.results;
      setRecipients(data);
    } catch (error) {
      throw new Error('롤링페이퍼를 불러오지 못했습니다.', error);
    }
  };

  useEffect(() => {
    handleRecipientsLoad();
  }, []);

  return (
    <div>
      {recipients.map((recipient) => (
        <RecipientCard key={recipient.id} recipient={recipient} />
      ))}
    </div>
  );
}

export default RecipientList;
