import { IconBaseProps, IconType } from 'react-icons';

export default function Icon({ name }: IconBaseProps) {
  const IconModule = require(`react-icons/fa6`);
  const Icon = IconModule[name as keyof typeof IconModule] as IconType;
  return <Icon />;
}
