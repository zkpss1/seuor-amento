import React from 'react';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from '@mui/material';

export type ExportFormat = 'pdf' | 'text';

interface ExportOptionsProps {
  format: ExportFormat;
  onFormatChange: (format: ExportFormat) => void;
}

const ExportOptions: React.FC<ExportOptionsProps> = ({ format, onFormatChange }) => {
  const handleChange = (event: SelectChangeEvent) => {
    onFormatChange(event.target.value as ExportFormat);
  };

  return (
    <FormControl fullWidth>
      <InputLabel>Formato de Exportação</InputLabel>
      <Select
        value={format}
        label="Formato de Exportação"
        onChange={handleChange}
      >
        <MenuItem value="pdf">PDF</MenuItem>
        <MenuItem value="text">Texto</MenuItem>
      </Select>
    </FormControl>
  );
};

export default ExportOptions;