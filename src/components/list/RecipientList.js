import React, { useEffect, useState } from 'react';
// eslint-disable-next-line
// import styled from 'styled-components';
import RecipientCard from './RecipientCard';
import { getRecipients } from '../../api/GetApi';

function RecipientList() {
  const [recipients, setRecipients] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleRecipientsLoad = async () => {
    try {
      const response = await getRecipients();
      const data = response.results;
      setRecipients(data);
    } catch (error) {
      // console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleRecipientsLoad();
  }, []);

  if (isLoading) {
    return <div>ㅎㅅㅎ</div>;
  }

  return (
    <div>
      {recipients.map((recipient) => {
        console.log(recipient);
        return <RecipientCard key={recipient.id} recipient={recipient} />;
      })}
    </div>
  );
}

export default RecipientList;
