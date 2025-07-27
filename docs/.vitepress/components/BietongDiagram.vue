<template>
  <div class="bietong-diagram">
    <svg width="300" height="300" viewBox="0 0 300 300">
      <!-- 前 标签 -->
      <text x="150" y="30" text-anchor="middle" class="label">前</text>
      
      <!-- 后 标签 -->
      <text x="150" y="290" text-anchor="middle" class="label">后</text>
      
      <!-- 红色左半圆 -->
      <path d="M 150 60 A 80 80 0 0 0 150 240" 
            stroke="red" 
            stroke-width="3" 
            fill="none"/>
      
      <!-- 蓝色右半圆 -->
      <path d="M 150 60 A 80 80 0 0 1 150 240" 
            stroke="blue" 
            stroke-width="3" 
            fill="none"/>
      
      <!-- 红色圆点（左半圆上的三个点）-->
      <circle cx="120" cy="70" r="5" fill="red"/>    <!-- 红上点 -->
      <circle cx="70" cy="150" r="5" fill="red"/>     <!-- 红中点 -->
      <circle cx="120" cy="230" r="5" fill="red"/>   <!-- 红下点 -->
      
      <!-- 蓝色圆点（右半圆上的三个点）-->
      <circle cx="180" cy="70" r="5" fill="blue"/>  <!-- 蓝上点 -->
      <circle cx="230" cy="150" r="5" fill="blue"/>   <!-- 蓝中点 -->
      <circle cx="180" cy="230" r="5" fill="blue"/> <!-- 蓝下点 -->
      
      <!-- 连接线 -->
      <!-- 蓝上点与红下点 -->
      <line x1="180" y1="70" x2="120" y2="230" stroke="black" stroke-width="2"/>
      <!-- 红上点与蓝中点 -->
      <line x1="120" y1="70" x2="230" y2="150" stroke="black" stroke-width="2"/>
      <!-- 红中点与蓝下点 -->
      <line x1="70" y1="150" x2="180" y2="230" stroke="black" stroke-width="2"/>
    </svg>
  </div>
</template>

<style scoped>
.bietong-diagram {
  display: flex;
  justify-content: center;
  margin: 20px 0;
}

.label {
  font-size: 18px;
  font-weight: bold;
  fill: #333;
}

svg {
  max-width: 100%;
  height: auto;
}
</style>



