import { Flex, Text, TextField, Select } from '@radix-ui/themes';
import { useCallback } from 'react';
import { Handle } from '@xyflow/react';

const inputAPI = [
  { agentFunc: 'google', color: 'bg-teal-500', displayName: 'Google' }
];

const inputEndpoint = [
  { agentFunc: 'searchEmails', color: 'bg-teal-500', displayName: 'Search Emails' }
];

const inputAuth = [
  { agentFunc: 'oauth', color: 'bg-teal-500', displayName: 'OAuth' }
];

function API({ data, selected }) {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  return (
    <Flex
      id="api"
      width="100%"
      direction="column"
      className={`border border-teal-800 rounded bg-[#090017] border-[2px] ${selected ? 'border-teal-500!' : ''}`}>

      <Handle type="target" position="top" />

      {/* Header */}
      <Flex width="100%" align="center" className="justify-center! p-0 m-0 bg-teal-500">
        <Text size="1" weight="bold" align="center p-0 m-0">API Request</Text>
      </Flex>

      {/* Form */}
      <Flex width="100%" direction="column" className="items-start">
        <Text size="1">Name</Text>
        <TextField.Root size="1" placeholder="Search emails" onChange={onChange} className="nodrag">
          {/* <TextField.Slot>
            <MagnifyingGlassIcon height="16" width="16" />
          </TextField.Slot> */}
        </TextField.Root>
      </Flex>

      <Flex width="100%" direction="column" className="items-start!">
        <Text size="1">API</Text>
        <Select.Root size="1" defaultValue={inputAPI[0]?.agentFunc || ''}>
          <Select.Trigger />
          <Select.Content>
            {inputAPI.map((s) => (
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
        <Text size="1">Endpoint</Text>
        <Select.Root size="1" defaultValue={inputEndpoint[0]?.agentFunc || ''}>
          <Select.Trigger />
          <Select.Content>
            {inputEndpoint.map((s) => (
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
        <Text size="1">Auth</Text>
        <Select.Root size="1" defaultValue={inputAuth[0]?.agentFunc || ''}>
          <Select.Trigger />
          <Select.Content>
            {inputAuth.map((s) => (
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

      <Handle type="source" position="right" />

    </Flex>
  );
}

export default API;
