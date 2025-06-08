import { FaCalendarAlt, FaCreditCard, FaMapMarkerAlt, FaTrash, FaTruck } from "react-icons/fa";
import ProgressCard from "./ui/ProgressCard";

type Step = {
  label: string;
  icon: React.ComponentType;
};

const steps: Step[] = [
  { label: 'Postcode', icon: FaMapMarkerAlt },
  { label: 'Waste Type', icon: FaTrash },
  { label: 'Select Skip', icon: FaTruck },
  { label: 'Choose Date', icon: FaCalendarAlt },
  { label: 'Payment', icon: FaCreditCard },
];

const currentStep = 2; 

function Header() {
  
  return (
    <div className="py-6 px-4 overflow-x-auto">
      {/* Mobile View: only previous, current, next */}
      <div className="flex sm:hidden gap-3 justify-start min-w-fit">
        {steps
          .filter((_, index) => Math.abs(index - currentStep) <= 1)
          .map((step, index, array) => {
            const actualIndex = currentStep - 1 + index - (array.length === 3 ? 1 : 0);
            let status: 'completed' | 'current' | 'upcoming' = 'upcoming';
            if (actualIndex < currentStep) status = 'completed';
            else if (actualIndex === currentStep) status = 'current';

            return (
              <div key={step.label} className="flex items-center gap-2">
                <ProgressCard
                  label={step.label}
                  Icon={step.icon}
                  status={status}
                  small={true}
                />
                {index < array.length - 1 && (
                  <div className="h-0.5 w-8 " />
                )}
              </div>
            );
          })}
      </div>

      {/* Desktop View: full progress bar */}
      <div className="hidden sm:flex items-center gap-8 justify-center min-w-fit">
        {steps.map((step, index) => {
          let status: 'completed' | 'current' | 'upcoming' = 'upcoming';
          if (index < currentStep) status = 'completed';
          else if (index === currentStep) status = 'current';

          return (
            <div key={step.label} className="flex items-center gap-2">
              <ProgressCard label={step.label} Icon={step.icon} status={status} />
              {index < steps.length - 1 && (
                <div className="h-0.5 w-15 bg-gray-500" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Header;
