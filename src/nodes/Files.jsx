import { Flex, Text, TextField, TextArea, Select } from '@radix-ui/themes';
import { useCallback } from 'react';
import { Handle } from '@xyflow/react';

const inputType = [
  { agentFunc: 'json', color: 'bg-purple-500', displayName: 'JSON' }
];

const inputText = [
  { agentFunc: 'json', color: 'bg-purple-500', displayName: 'JSON' }
];

function Files({ data, selected }) {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  return (
    <Flex
      id="api"
      width="100%"
      direction="column"
      className={`border border-purple-800 rounded bg-[#090017] border-[2px] ${selected ? 'border-purple-500!' : ''}`}>

      <Handle type="target" position="top" />

      {/* Header */}
      <Flex width="100%" align="center" className="justify-center! p-0 m-0 bg-purple-500">
        <Text size="1" weight="bold" align="center p-0 m-0">Files & Data</Text>
      </Flex>

      {/* Form */}
      <Flex width="100%" direction="column" className="items-start">
        <Text size="1">Name</Text>
        <TextField.Root size="1" placeholder="API Request Body" onChange={onChange} className="nodrag w-[100%]!">
          {/* <TextField.Slot>
            <MagnifyingGlassIcon height="16" width="16" />
          </TextField.Slot> */}
        </TextField.Root>
      </Flex>

      <Flex width="100%" direction="column" className="items-start!">
        <Text size="1">Type</Text>
        <Select.Root size="1" defaultValue={inputType[0]?.agentFunc || ''}>
          <Select.Trigger />
          <Select.Content>
            {inputType.map((s) => (
              <Select.Item key={s.agentFunc} value={s.agentFunc}>
                <Flex direction="row" align="center" className="content-center items-center">
                  <div className={`w-2 h-2 ${s.color} rounded-full mr-[5px]`}></div>
                  <Text size="1">{s.displayName}</Text>
                </Flex>
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Root>
      </Flex>

      <Flex width="100%" direction="column" className="items-start">
        <Text size="1">Text</Text>
        <TextArea size="1" placeholder="Enter Body Text" className="nodrag"/>
      </Flex>

    </Flex>
  );
}

export default Files;
