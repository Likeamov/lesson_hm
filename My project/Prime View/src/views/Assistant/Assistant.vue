<template>
  <Start v-if="showShadow" @click="showShadow = false" />
   <div 
   class="chatPage container h-[calc(100vh-3rem)] relative bg-gradient-to-r from-blue-400 to-blue-200"
   >
    <!-- 顶部 -->
    <div
      class="chat-header h-[calc(10vh)] w-full flex items-center justify-between bg-transparent px-4 border-b border-white rounded-xl"
    >
      <div class="talk">
        <van-icon name="chat-o text-black" size="1.5rem" />
      </div>
      <div class="title">
        <h2>AI 助手</h2>
      </div>
      <div class="avatar">
        <van-icon name="user-o text-black" size="1.5rem" />
      </div>
    </div>
        <!-- 聊天记录 -->
        <div class="chat_wrapper h-[calc(72vh)] overflow-y-auto mx-auto p-4 z-1">
      <div
        class="chat-item w-full"
        v-for="(item, index) in msgController"
        :key="index"
      >
        <component
          :is="item.type == 1 ? AIReply : UserQuery"
          :msg="item.content"
        />
      </div>
    </div>
        <!-- 底部提问栏 -->
        <div
      class="chat_footer h-16 w-full bottom-0 absolute z-999 border-t border-white rounded-xl"
      v-show="type"
    >
      <van-search
        v-model="searchField"
        placeholder="请输入..."
        show-action
        shape="round"
        background="transparent"
        class="mt-0.5"
         @keydown.enter="SubmitEvent"
      >
        <template #action>
          <div class="text-white transform translate-y-1" @click="SubmitEvent">
            <van-icon name="guide-o" class="text-blue-500" size="1.25rem" />
          </div>
        </template>
      </van-search>
    </div>
    <!-- 加载 -->
    <div v-show="!type">
      <van-loading vertical class="text-black">
        <template #icon>
          <van-icon name="star-o" size="30" color="black" />
        </template>
        加载中...
      </van-loading>
    </div>
   </div>
</template>

<script setup lang="ts">
import UserQuery from "@/components/AI/UserQuery.vue";
import AIReply from "@/components/AI/AIReply.vue";
import Start from "@/components/Assistant/Start.vue";
import { ref, onMounted } from "vue";
import chatApi from "../../api/index";
// 控制进入组件
const showShadow = ref(true);
//
const searchField = ref("");

type msgItem = {
  type: number; // 1:AI 2:用户
  content: string;
};

const msgController = ref<msgItem[]>([
  {
    type: 1,
    content:
      "✨✨✨\n \t欢迎使用AI小助手！我是您的专属智能助手——小影🤖🚀",
  },
]);

const type = ref(true);
//提交事件
const SubmitEvent = async() => {
  if (searchField.value === "") {
    return;
  }
  const msg = searchField.value;
  console.log(msg);
  //提问框收起，显示loading
  type.value = false;
  //存入用户提问
  msgController.value.push({
    type: 2,
    content: msg,
  });
  msgController.value.push({
    type: 1,
    content: "✨✨✨\n \t好的，我正在为您查询，稍后给您回复收到！🌟",
  });

  searchField.value = "";
  // 发送请求
  try {
    const res = await chatApi({message: msg});
    type.value = true;
    
    if (res.code === 200) {
      console.log(res);
      console.log(res.message);
      msgController.value.push({
        type: 1,
        content: res.message,
      })
      
    }
  } catch (error) {
    msgController.value.push({
      type: 1,
      content: "数据错误！！！请检查网络！！！",
    });
    type.value = true;
    return;
  }

}

</script>

<style scoped>

</style>