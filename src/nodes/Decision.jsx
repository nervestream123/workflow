import { Flex, Text, TextField, Select } from '@radix-ui/themes';
import { useCallback } from 'react';
import { Handle } from '@xyflow/react';

const inputDecision = [
  { agentFunc: 'continue', color: 'bg-indigo-500', displayName: 'Continue' }
];

const inputIf = [
  { agentFunc: 'ifGreaterThan', color: 'bg-indigo-500', displayName: 'Greater than' }
];

const inputAuth = [
  { agentFunc: 'oauth', color: 'bg-indigo-500', displayName: 'OAuth' }
];

function Decision({ data, selected }) {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  return (
    <Flex
      id="api"
      width="100%"
      direction="column"
      className={`border border-indigo-800 rounded bg-[#090017] border-[2px] ${selected ? 'border-indigo-500!' : ''}`}>

      <Handle type="target" position="top" />

      {/* Header */}
      <Flex width="100%" align="center" className="justify-center! p-0 m-0 bg-indigo-500">
        <Text size="1" weight="bold" align="center p-0 m-0">Decision</Text>
      </Flex>

      {/* Form */}
      <Flex width="100%" direction="column" className="items-start">
        <Text size="1">Name</Text>
        <TextField.Root size="1" placeholder="Make decision" onChange={onChange} className="nodrag">
          {/* <TextField.Slot>
            <MagnifyingGlassIcon height="16" width="16" />
          </TextField.Slot> */}
        </TextField.Root>
      </Flex>

      <Flex width="100%" direction="column" className="items-start!">
        <Text size="1">Decision</Text>
        <Select.Root size="1" defaultValue={inputDecision[0]?.agentFunc || ''}>
          <Select.Trigger />
          <Select.Content>
            {inputDecision.map((s) => (
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

      <Flex width="100%" direction="column" className="items-start!">
        <Text size="1">If</Text>
        <Select.Root size="1" defaultValue={inputIf[0]?.agentFunc || ''}>
          <Select.Trigger />
          <Select.Content>
            {inputIf.map((s) => (
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
        <Text size="1">Condition</Text>
        <TextField.Root size="1" placeholder="0" onChange={onChange} className="nodrag">
          {/* <TextField.Slot>
            <MagnifyingGlassIcon height="16" width="16" />
          </TextField.Slot> */}
        </TextField.Root>
      </Flex>

    </Flex>
  );
}

export default Decision;
