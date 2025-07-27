<template>
  <div class="clock-container">
  <div class="clock-pair">
    <div class="clock-section">
      <h4>白天</h4>
      <svg width="240" height="240" viewBox="0 0 240 240">
        <g transform="translate(20,20)">
          <circle cx="100" cy="100" r="95" fill="none" stroke="#333" stroke-width="2"/>
          <path :d="generateArc(7, 11)" fill="none" stroke="#FFD700" stroke-width="8"/>
          <path :d="generateArc(11, 15)" fill="none" stroke="#FF4444" stroke-width="8"/>
          <path :d="generateArc(15, 19)" fill="none" stroke="#333333" stroke-width="8"/>
          <g v-for="mark in hourMarks" :key="mark.hour">
            <line :x1="mark.x1" :y1="mark.y1" :x2="mark.x2" :y2="mark.y2" stroke="#333" stroke-width="2"/>
            <text :x="mark.textX" :y="mark.textY" text-anchor="middle" font-size="11" fill="#333">{{ mark.hour }}</text>
          </g>
          <g v-for="meridian in dayMeridians" :key="meridian.text">
            <text :x="meridian.x" :y="meridian.y" text-anchor="middle" font-size="9" fill="#666">{{ meridian.text }}</text>
          </g>
        </g>
      </svg>
    </div>
    <div class="clock-section">
      <h4>黑夜</h4>
      <svg width="240" height="240" viewBox="0 0 240 240">
        <g transform="translate(20,20)">
          <circle cx="100" cy="100" r="95" fill="none" stroke="#333" stroke-width="2"/>
          <path :d="generateArc(7, 11)" fill="none" stroke="#8B4513" stroke-width="8"/>
          <path :d="generateArc(11, 15)" fill="none" stroke="#228B22" stroke-width="8"/>
          <path :d="generateArc(15, 19)" fill="none" stroke="#F5debf" stroke-width="8"/>
          <g v-for="mark in hourMarks" :key="mark.hour">
            <line :x1="mark.x1" :y1="mark.y1" :x2="mark.x2" :y2="mark.y2" stroke="#333" stroke-width="2"/>
            <text :x="mark.textX" :y="mark.textY" text-anchor="middle" font-size="11" fill="#333">{{ mark.hour }}</text>
          </g>
          <g v-for="meridian in nightMeridians" :key="meridian.text">
            <text :x="meridian.x" :y="meridian.y" text-anchor="middle" font-size="9" fill="#666">{{ meridian.text }}</text>
          </g>
        </g>
      </svg>
    </div>
  </div>
</div>
</template>

<script setup>
// 生成钟表刻度点
const generateHourMarks = () => {
  const marks = []
  for (let i = 1; i <= 12; i++) {
    const angle = (i * 30 - 90) * Math.PI / 180
    const x1 = 100 + 85 * Math.cos(angle)
    const y1 = 100 + 85 * Math.sin(angle)
    const x2 = 100 + 95 * Math.cos(angle)
    const y2 = 100 + 95 * Math.sin(angle)
    const textX = 100 + 105 * Math.cos(angle)
    const textY = 100 + 105 * Math.sin(angle) + 5
    marks.push({ x1, y1, x2, y2, hour: i, textX, textY })
  }
  return marks
}

// 生成弧线路径
const generateArc = (startHour, endHour, radius = 80) => {
  const startAngle = (startHour * 30 - 90) * Math.PI / 180
  const endAngle = (endHour * 30 - 90) * Math.PI / 180
  const x1 = 100 + radius * Math.cos(startAngle)
  const y1 = 100 + radius * Math.sin(startAngle)
  const x2 = 100 + radius * Math.cos(endAngle)
  const y2 = 100 + radius * Math.sin(endAngle)
  const largeArcFlag = (endHour - startHour) > 6 ? 1 : 0
  return `M ${x1} ${y1} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2}`
}

// 生成经络标注位置
const generateMeridianLabel = (startHour, endHour, text, radius = 55) => {
  const midHour = (startHour + endHour) / 2
  const angle = (midHour * 30 - 90) * Math.PI / 180
  const x = 100 + radius * Math.cos(angle)
  const y = 100 + radius * Math.sin(angle) + 5
  return { x, y, text }
}

const hourMarks = generateHourMarks()

// 白天经络标注
const dayMeridians = [
  generateMeridianLabel(7, 9, '胃经'),
  generateMeridianLabel(9, 11, '脾经'),
  generateMeridianLabel(11, 13, '心经'),
  generateMeridianLabel(13, 15, '小肠经'),
  generateMeridianLabel(15, 17, '膀胱经'),
  generateMeridianLabel(17, 19, '肾经')
]

// 夜晚经络标注
const nightMeridians = [
  generateMeridianLabel(7, 9, '心包经'),
  generateMeridianLabel(9, 11, '三焦经'),
  generateMeridianLabel(11, 13, '胆经'),
  generateMeridianLabel(13, 15, '肝经'),
  generateMeridianLabel(15, 17, '肺经'),
  generateMeridianLabel(17, 19, '大肠经')
]
</script>

<style scoped>
.clock-container {
  margin: 40px 0;
  text-align: center;
}

.clock-pair {
  display: flex;
  justify-content: center;
  gap: 60px;
  flex-wrap: wrap;
}

.clock-section {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.clock-section h4 {
  margin-bottom: 10px;
  font-size: 18px;
  color: #333;
}

@media (max-width: 768px) {
  .clock-pair {
    flex-direction: column;
    gap: 30px;
  }
}
</style>