import { useState } from 'react';

const usePlotScroll = (allDataLength: number) => {
  const step = 12;
  const [startIndex, setStartIndex] = useState(0);

  const nextPage = () => {
    const newIndex = startIndex + 2;
    if (newIndex <= allDataLength / 2) {
      setStartIndex(newIndex);
    }
  };

  const prevPage = () => {
    const newIndex = startIndex - 2;
    if (newIndex >= 0) {
      setStartIndex(newIndex);
    }
  };

  return { startIndex, endIndex: startIndex + step, nextPage, prevPage };
};

export default usePlotScroll;
