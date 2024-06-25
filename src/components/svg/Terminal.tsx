import { motion } from 'framer-motion';

interface Props {
  size?: number;
  className?: string;
}

export const Terminal = ({ size = 24, className }: Props) => (
  <motion.svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" strokeWidth="1.5"/>
  <path d="M7 12L8.22654 13.0572C8.74218 13.5016 9 13.7239 9 14C9 14.2761 8.74218 14.4984 8.22654 14.9428L7 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <motion.path initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ ease: 'anticipate', duration: 0.5, repeat: Infinity, repeatDelay: 0.5,}}  d="M11 16H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</motion.svg>
)