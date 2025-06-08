import type { SkipItem } from "../../types/skip-item";

import LgSkip from "../../assets/images/lg-skip.jpg";
import SmSkip from "../../assets/images/sm-skip.jpg";

interface SkipOption extends SkipItem {
  isSelected: boolean;
}

type SkipCardProps = {
  skip: SkipOption;
  onSelect: () => void;
};

function SkipCard(prop: SkipCardProps) {
  const { skip, onSelect } = prop;
  return (
    <div
      className={`rounded-2xl shadow-md p-4 bg-white flex flex-col justify-between transition hover:scale-105 duration-300 border-2 ${
        skip.isSelected ? "border-blue-600" : "border-transparent"
      }`}
      role="region"
      aria-label={`Skip option ${skip.size} yards`}
    >
      <div className="w-full cursor-pointer"  onClick={onSelect}>
        <div className="w-full h-40 rounded overflow-hidden">
          <img
            src={skip.size <= 14 ? SmSkip : LgSkip}
            alt={`${skip.size} yard skip`}
            className="h-full w-full"
          />
        </div>
        <h2 className="text-xl font-semibold mt-4 text-center">
          {skip.size} Yard Skip
        </h2>
        <p className="text-sm text-gray-500 text-center">
          {skip.hire_period_days} day hire period
        </p>
        {skip.price_before_vat > 0 && (
          <p className="text-lg font-semibold text-blue-600 mt-2 text-center">
            £{skip.price_before_vat - skip.vat}
          </p>
        )}
        {!skip.allowed_on_road && (
          <div className="mt-2 text-yellow-600 text-sm flex items-center justify-center">
            ⚠️ Not Allowed On The Road
          </div>
        )}
      </div>
      <button
        onClick={onSelect}
        className={`mt-4 py-2 px-4 w-full rounded text-white font-medium ${
          skip.isSelected ? "bg-blue-600" : "bg-gray-800 hover:bg-gray-700"
        }`}
        aria-pressed={skip.isSelected}
        aria-label={`Select ${skip.size} yard skip`}
      >
        {skip.isSelected ? "Selected" : "Select This Skip"}
      </button>
    </div>
  );
}

export default SkipCard;
