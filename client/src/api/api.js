import React, { useEffect, useState } from 'react';

const baseUrl = 'https://api-bootcamp.do.dibimbing.id';

const Api = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`${baseUrl}/api/v1/data`)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {/* Render data from API */}
    </div>
  );
};

export default Api;