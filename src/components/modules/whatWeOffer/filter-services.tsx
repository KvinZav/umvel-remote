import { useEffect, useState } from 'react';

export const Filter = ({ text, active, selected, setSelected, item, setButtons }) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  useEffect(() => {
    active && setIsActive(true);
  }, [active]);
  const handleClick = () => {
    if (isActive) {
      let removeFilter = selected;
      item.items.map((item) => {
        delete removeFilter[removeFilter.indexOf(item)];
      });
      setSelected(removeFilter.filter(Boolean));
      setButtons((prev) => {
        return prev.filter((item) => item === item.id);
      });
    }
    if (!isActive) {
      setSelected([...selected, ...item.items]);
      setButtons((prev) => [...prev, item.id]);
    }
    setIsActive(!isActive);
  };

  return (
    <button
      className={
        isActive
          ? 'border rounded-lg border-primary-black bg-primary-black text-primary-white p-4'
          : 'border rounded-lg border-secondary-10 p-4 text-secondary-60'
      }
      onClick={handleClick}
    >
      <p className="text-left text-sm">{text}</p>
    </button>
  );
};
