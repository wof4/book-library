import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useEffect } from 'react';

export default function Selectors(props) {
  const { title, values } = props.data;
  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    props.setSelectedValue(event.target.value);
    setValue(event.target.value);
  };

  useEffect(() => {
    setValue(values[0]);
  }, []);

  return (
    <Box sx={{ width: '20%', padding: 2 }}>
      <FormControl fullWidth>
        <InputLabel
          sx={{
            background: 'snow', fontSize: '1.2rem', borderRadius: '10px', padding: '0 4px',
          }}
          id={title}
        >
          {title}
        </InputLabel>
        <Select
          sx={{ background: 'snow', borderRadius: '10px' }}
          labelId={title}
          value={value}
          label={title}
          onChange={handleChange}
        >
          {values.map((item) => <MenuItem key={item} value={item}>{item}</MenuItem>)}
        </Select>
      </FormControl>
    </Box>
  );
}
