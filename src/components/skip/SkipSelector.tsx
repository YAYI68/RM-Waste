import type { SkipItem } from "../../types/skip-item"

type SkipSelectorProp = {
  skip: SkipItem
}

function SkipSelector({skip}:SkipSelectorProp) {
  return (
      <div className="w-screen mt-8 p-8 flex flex-col items-center gap-4 bg-black fixed bottom-0 left-0">
        <p className="text-sm text-gray-500">Imagery and information shown throughout this website may not reflect the exact shape or size specification, colours may vary, options and/or accessories may be featured at additional cost.</p>
        <div className="  w-full flex flex-col sm:flex-row justify-between items-center gap-4">
           <p className="text-gray-200">
          <strong>{skip.size} Yard Skip — </strong> <span className="text-blue-500 text-3xl">£{skip.price_before_vat - skip.vat}</span> <span>— {skip.hire_period_days} days hire </span>
        </p>
        <div className="space-x-2">
          <button className="px-4 py-2 rounded bg-gray-300 text-black font-medium hover:bg-gray-400">Back</button>
          <button className="px-4 py-2 rounded bg-blue-600 text-white font-medium hover:bg-blue-700">Continue</button>
        </div>
        </div>
       
      </div>
  )
}

export default SkipSelector