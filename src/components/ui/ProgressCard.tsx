
type ProgressCardProp = {
    Icon: React.ComponentType
    label: string
    status: 'completed' | 'current' | 'upcoming';
    small?: boolean;

}

function ProgressCard(prop:ProgressCardProp) {
    const {Icon, label, status, small } = prop
  const iconColor =
    status === 'completed' || status === 'current'
      ? 'text-blue-500 border-blue-500'
      : 'text-gray-500 border-gray-500';

  const labelColor = status === 'completed' || status === 'current'
    ? 'text-blue-500'
    : 'text-gray-500';

  const disabled = status!=="upcoming" ? "cursor-pointer":""

  const iconSize = small ? 'p-2 text-base' : 'p-3 text-xl';
  const textSize = small ? 'text-xs' : 'text-sm';

  return (
    <button disabled={status!=="upcoming"} className={`flex flex-col items-center ${disabled}  shrink-0 min-w-[60px]`}>
      <button className={`rounded-full border-2 ${iconSize} ${iconColor}`}>
        <Icon />
      </button>
      <span className={`mt-1 text-center ${textSize} ${labelColor}`}>{label}</span>
    </button>
  );

}

export default ProgressCard