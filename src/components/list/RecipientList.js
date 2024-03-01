import React, { useEffect, useState } from 'react';
// eslint-disable-next-line
import RecipientCard from './RecipientCard';

function RecipientList() {
  const [recipients, setRecipients] = useState([]);

  useEffect(() => {
    async function fetchRecipients() {
      try {
        const response = await fetch(
          'https://rolling-api.vercel.app/4-16/recipients/',
          {
            headers: {
              accept: 'application/json',
              'X-CSRFToken':
                'kDLwGD7Vu7tIAXJvek2yHOi9PQlW47yOzln2IqgbfMGbYYsElGHTQwLyTQfn2obC',
            },
          },
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setRecipients(data.results);
      } catch (error) {
        console.error(error);
      }
    }

    fetchRecipients();
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
