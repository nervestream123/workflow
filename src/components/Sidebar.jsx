import { Flex, Text, Avatar, Box } from '@radix-ui/themes';

const actions = [
  { name: "API Request", color: "bg-teal-500", description: "Make requests to popular APIs or to custom ones." },
  { name: "Artificial Intelligence", color: "bg-cyan-500", description: "Prompt LLMs for any kind of task." },
  { name: "Decision", color: "bg-indigo-500", description: "Determine whether to continue, stop or branch a workflow." },
  { name: "Files & Data", color: "bg-purple-500", description: "Create, edit and transform your data." },
  { name: "Notification", color: "bg-pink-500", description: "Send a notification using text, email or sns." },
];

function Sidebar() {
  return (
    <Flex direction="column" width="100%" align="center" className="rounded-l-[5px] px-[15px] py-[15px] items-center  w-[100%] h-[100%]">
      {/* Header */}
      <Flex width="100%" className="px-[8px] py-[8px] rounded bg-[#090017] cursor-pointer!">
        <Flex className="items-center justify-center!">
          <Avatar
            size="3"
            src="/folder.png"
            radius="medium"
            fallback="T"
            className="bg-blue-500/90"
          />
        </Flex>
        <Flex direction="column" className="justify-center! ml-[10px]">
          <Text size="2" align="left" weight="bold" className="p-0 m-0">Workflow</Text>
          <Text size="1" align="left" weight="medium" className="p-0 m-0">Team</Text>
        </Flex>
      </Flex>

      {/* Category */}
      <Flex width="100%" className="mt-[15px] mb-[10px]">
        <Text width="100%" align="left" size="1" weight="bold">Actions</Text>
      </Flex>


      {/* Buttons */}
      <Flex direction="column" width="100%" className="grow">

        {actions.map((action) => {
          return (
            <Flex key={action.name} width="100%" className={`h-[75px] px-[2px] py-[8px] mb-[15px] rounded ${action.color} items-start! cursor-pointer!`}>
              <Flex direction="column" className="justify-center! ml-[10px]">
                <Text size="1" align="left" weight="bold" className="pt-[2px] pb-[5px]">{action.name}</Text>
                <Text size="1" align="left" weight="medium" className="p-0 m-0">{action.description}</Text>
              </Flex>
            </Flex>
          )
        })}

      </Flex>

      {/* Footer */}
      <Flex width="100%" className="px-[8px] py-[8px] rounded cursor-pointer!">
        <Flex className="items-center justify-center!">
          <Avatar
            size="3"
            src="/fox.png"
            radius="medium"
            fallback="T"
            className="bg-blue-500/90"
          />
        </Flex>
        <Flex direction="column" className="justify-center! ml-[10px]">
          <Text size="2" align="left" weight="bold" className="p-0 m-0">API Workflow</Text>
          <Text size="1" align="left" weight="medium" className="p-0 m-0">Saved</Text>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Sidebar;
