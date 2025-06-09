import React from 'react';
import './index.scss'

interface Props {
  value: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
}

const TextArea: React.FC<Props> = ({ value, onChange }) => {
  return <textarea
    className="text-area"
    placeholder="Paste your text here..." onChange={onChange} value={value} />
}

export default TextArea
