import { Flex } from '@radix-ui/themes';

function View() {
  return (
    <Flex width="100%" direction="row" align="center" className="items-center py-[5px]">
      <Flex className="w-[300px] h-[750px] bg-violet-500/10 rounded-l-[5px]"></Flex>
      <Flex className="w-[100%] h-[750px] bg-violet-500/5 rounded-r-[5px]"></Flex>
    </Flex>
  );
}

export default View;
