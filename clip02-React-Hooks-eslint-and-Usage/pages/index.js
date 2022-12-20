import React, { useEffect, useState } from 'react';

const InputElement = () => {

  const [isLoading,setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    },2000);
  });

  return isLoading ? (
    <div>Loading</div>
  ) : (
    <div>
      <input placeholder="Enter Some Text" />
    </div>
  );
};

export default InputElement;
