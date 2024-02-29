import React, { useEffect, useState } from 'react';
// eslint-disable-next-line
// import styled from 'styled-components';
import RecipientCard from './RecipientCard';

function RecipientList() {
  const [recipients, setRecipients] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchRecipients() {
      try {
        const response = await fetch(
          'https://rolling-api.vercel.app/4-5/recipients/',
          {
            headers: {
              accept: 'application/json',
              'X-CSRFToken':
                'fMj2sOIqI9AcFOHzN97CRfUfKEmwG2fzuuVyuBRGtONF3PqIUvMX0XnEOEgXEjSn',
            },
          },
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setRecipients(data.results);
      } catch (error) {
        console.error('Fetching recipients failed', error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchRecipients();
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
