import React from 'react';
import SkipCard from './SkipCard';
import type { SkipItem } from '../../types/skip-item';

type SkipSectionProp = {
  skips : SkipItem[] | undefined
  handleSelectedItem: (item:SkipItem | undefined)=>void
}



function SkipSection ({skips, handleSelectedItem}:SkipSectionProp) {
  const [selectedSize, setSelectedSize] = React.useState<number>(0);

  const handleSelect = (size: number) => {
    setSelectedSize(size);
    const item = skips?.find(skip=>skip.size===size)
    handleSelectedItem(item)
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skips?.map((skip) => (
          <SkipCard
            key={skip.size}
            skip={{ ...skip, isSelected: skip.size === selectedSize }}
            onSelect={() => handleSelect(skip.size)}
          />
        ))}
      </div>
    </div>
  );
};

export default SkipSection;
