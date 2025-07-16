import { Flex } from '@radix-ui/themes';
import Sidebar from './Sidebar';
import Flow from './Flow';

function View() {
  return (
    <Flex width="100%" direction="row" align="center" className="items-center py-[5px]">
      <Flex className="w-[350px] h-[750px] bg-violet-500/10 rounded">
        <Sidebar></Sidebar>
      </Flex>
      <Flex className="w-[100%] h-[750px] bg-violet-500/5 rounded">
        <Flow></Flow>
      </Flex>
    </Flex>
  );
}

export default View;
