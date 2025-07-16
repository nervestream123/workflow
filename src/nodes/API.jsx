import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { Flex, Text, TextField } from '@radix-ui/themes';
import { useCallback } from 'react';
import { Handle } from '@xyflow/react';

function API({ data, selected }) {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  return (
    <Flex 
      width="100%" 
      direction="column" 
      className={`p-[10px] border border-teal-800 rounded bg-[#090017] border-[2px] ${selected ? 'border-teal-500!' : ''}`}>
      <Handle type="target" position="top" />
      <Text size="1">Input: 200</Text>
      <Text size="1">Output: 200</Text>
      <TextField.Root size="1" placeholder="Search the docs…" onChange={onChange} className="nodrag">
        <TextField.Slot>
          <MagnifyingGlassIcon height="16" width="16" />
        </TextField.Slot>
      </TextField.Root>
    </Flex>
  );
}

export default API;
