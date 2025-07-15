import { Flex } from '@radix-ui/themes';

function View() {
  return (
    <Flex width="100%" direction="row" align="center" className="items-center py-[5px]">
      <Flex className="w-[300px] h-[750px] bg-violet-500/60"></Flex>
      <Flex className="w-[100%] h-[750px] bg-violet-500/20"></Flex>
    </Flex>
  );
}

export default View;
