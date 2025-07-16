import { Flex, Text, TextField, TextArea, Select } from '@radix-ui/themes';
import { useCallback } from 'react';
import { Handle } from '@xyflow/react';

const inputModel = [
  { agentFunc: 'email', color: 'bg-pink-500', displayName: 'Email' }
];

function Notification({ data, selected }) {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  return (
    <Flex
      id="api"
      width="100%"
      direction="column"
      className={`border border-pink-800 rounded bg-[#090017] border-[2px] ${selected ? 'border-pink-500!' : ''}`}>

      <Handle type="target" position="top" />

      {/* Header */}
      <Flex width="100%" align="center" className="justify-center! p-0 m-0 bg-pink-500">
        <Text size="1" weight="bold" align="center p-0 m-0">Notification</Text>
      </Flex>

      {/* Form */}
      <Flex width="100%" direction="column" className="items-start">
        <Text size="1">Name</Text>
        <TextField.Root size="1" placeholder="Send an email" onChange={onChange} className="nodrag w-[100%]!">
          {/* <TextField.Slot>
            <MagnifyingGlassIcon height="16" width="16" />
          </TextField.Slot> */}
        </TextField.Root>
      </Flex>

      <Flex width="100%" direction="column" className="items-start!">
        <Text size="1">Send Results By</Text>
        <Select.Root size="1" defaultValue={inputModel[0]?.agentFunc || ''}>
          <Select.Trigger />
          <Select.Content>
            {inputModel.map((s) => (
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
        <Text size="1">Prompt</Text>
        <TextArea size="1" placeholder="Enter Prompt" className="nodrag"/>
      </Flex>

    </Flex>
  );
}

export default Notification;
