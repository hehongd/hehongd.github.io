<template>
  <div class="menu">
			<div class="item">手机
				<div class="nav">
					<a href=""><img src="@/assets/images/xiaomi.jpg" alt="" width="40">黑鲨5 Pro</a>
					<a href=""><img src="@/assets/images/xiaomi.jpg" alt="" width="40">黑鲨5</a>
					<a href=""><img src="@/assets/images/xiaomi.jpg" alt="" width="40">Redmi 10A</a>
					<a href=""><img src="@/assets/images/xiaomi.jpg" alt="" width="40">Redmi K50 Pro</a>
					<a href=""><img src="@/assets/images/xiaomi.jpg" alt="" width="40">Redmi K40S</a>
					<a href=""><img src="@/assets/images/xiaomi.jpg" alt="" width="40">黑鲨5 Pro</a>
					<a href=""><img src="@/assets/images/xiaomi.jpg" alt="" width="40">黑鲨5</a>
					<a href=""><img src="@/assets/images/xiaomi.jpg" alt="" width="40">Redmi 10A</a>
					<a href=""><img src="@/assets/images/xiaomi.jpg" alt="" width="40">Redmi K50 Pro</a>
					<a href=""><img src="@/assets/images/xiaomi.jpg" alt="" width="40">Redmi K40S</a>
				</div>
			</div>
			<div class="item">电视
				<div class="nav">
					<a href=""><img src="@/assets/images/xiaomi.jpg" alt="" width="40">黑鲨5 Pro</a>
					<a href=""><img src="@/assets/images/xiaomi.jpg" alt="" width="40">黑鲨5</a>
					<a href=""><img src="@/assets/images/xiaomi.jpg" alt="" width="40">Redmi 10A</a>
					<a href=""><img src="@/assets/images/xiaomi.jpg" alt="" width="40">Redmi K50 Pro</a>
					<a href=""><img src="@/assets/images/xiaomi.jpg" alt="" width="40">Redmi K40S</a>
					<a href=""><img src="@/assets/images/xiaomi.jpg" alt="" width="40">黑鲨5 Pro</a>
					<a href=""><img src="@/assets/images/xiaomi.jpg" alt="" width="40">黑鲨5</a>
					<a href=""><img src="@/assets/images/xiaomi.jpg" alt="" width="40">Redmi 10A</a>
					<a href=""><img src="@/assets/images/xiaomi.jpg" alt="" width="40">Redmi K50 Pro</a>
					<a href=""><img src="@/assets/images/xiaomi.jpg" alt="" width="40">Redmi K40S</a>
					<a href=""><img src="@/assets/images/xiaomi.jpg" alt="" width="40">Redmi K50 Pro</a>
					<a href=""><img src="@/assets/images/xiaomi.jpg" alt="" width="40">Redmi K40S</a>
				</div>
			</div>
			<div class="item">笔记本 平板
				<div class="nav">
					<a href=""><img src="@/assets/images/xiaomi.jpg" alt="" width="40">黑鲨5 Pro</a>
					<a href=""><img src="@/assets/images/xiaomi.jpg" alt="" width="40">黑鲨5</a>
					<a href=""><img src="@/assets/images/xiaomi.jpg" alt="" width="40">Redmi 10A</a>
					<a href=""><img src="@/assets/images/xiaomi.jpg" alt="" width="40">Redmi K50 Pro</a>
					<a href=""><img src="@/assets/images/xiaomi.jpg" alt="" width="40">Redmi K40S</a>
					<a href=""><img src="@/assets/images/xiaomi.jpg" alt="" width="40">黑鲨5</a>
					<a href=""><img src="@/assets/images/xiaomi.jpg" alt="" width="40">Redmi 10A</a>
					<a href=""><img src="@/assets/images/xiaomi.jpg" alt="" width="40">Redmi K50 Pro</a>
					<a href=""><img src="@/assets/images/xiaomi.jpg" alt="" width="40">Redmi K40S</a>
					<a href=""><img src="@/assets/images/xiaomi.jpg" alt="" width="40">黑鲨5 Pro</a>
					<a href=""><img src="@/assets/images/xiaomi.jpg" alt="" width="40">黑鲨5</a>
					<a href=""><img src="@/assets/images/xiaomi.jpg" alt="" width="40">Redmi 10A</a>
					<a href=""><img src="@/assets/images/xiaomi.jpg" alt="" width="40">Redmi K50 Pro</a>
					<a href=""><img src="@/assets/images/xiaomi.jpg" alt="" width="40">Redmi K40S</a>
					<a href=""><img src="@/assets/images/xiaomi.jpg" alt="" width="40">黑鲨5 Pro</a>
					<a href=""><img src="@/assets/images/xiaomi.jpg" alt="" width="40">黑鲨5</a>
					<a href=""><img src="@/assets/images/xiaomi.jpg" alt="" width="40">Redmi 10A</a>
					<a href=""><img src="@/assets/images/xiaomi.jpg" alt="" width="40">Redmi K50 Pro</a>
					<a href=""><img src="@/assets/images/xiaomi.jpg" alt="" width="40">Redmi K40S</a>
				</div>
			</div>
			<div class="item">家电</div>
			<div class="item">出行 穿戴</div>
			<div class="item">智能 路由器</div>
			<div class="item">电源 配件</div>
			<div class="item">健康 儿童</div>
			<div class="item">耳机 音箱</div>
			<div class="item">生活 箱包</div>
		</div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
			body {
				margin: 0;
				padding: 0;
				background-image: linear-gradient(to right, skyblue, #fff);
			}

			a {
				text-decoration: none;
			}

			.menu {
				width: 230px;
				height: 420px;
				padding: 20px 0;
				background-color: rgba(0, 0, 0, 0.5);
				margin: 50px 0 0 50px;
				position: relative;
			}

			.menu .item {
				height: 42px;
				/* border: 1px solid red; */
				color: #fff;
				font-size: 14px;
				line-height: 42px;
				padding-left: 30px;
				background: url('@/assets/images/jiantou.png') no-repeat;
                background-position: 90% 100%;
                background-size: contain;
				cursor: pointer;
			}

			.menu .item:hover {
				background-color: #ff6700;
				background-image: url('@/assets/images/xiajiantou.png');
			}

			/* 右侧二级菜单 */
			.menu .item .nav {
				min-width: 250px;
				height: 460px;
				background-color: #fff;
				border: 1px solid #666;
				position: absolute;
				top: 0;
				left: 100%;
				box-sizing: border-box;
				/* 六行单元格平分整个区域 */
				display: grid;
				grid-template-rows: repeat(6, 1fr);
				grid-template-columns: 250px;
				/* 排列方式设置为先列后行 */
				grid-auto-flow: column;
				/* 设置隐式网格宽度 */
				grid-auto-columns: 250px;
				padding: 20px;
				/* 初始默认隐藏 */
				display: none;
			}

			.item .nav a {
				/* border: 1px solid red; */
				color: #000;
				display: flex;
				/* 垂直方向居中对齐,防止随父元素高度而被拉伸 */
				align-items: center;
			}

			.item .nav a img {
				margin-right: 10px;
			}

			.item .nav a:hover {
				color: #ff6700;
			}

			.item:hover .nav {
				display: grid;
			}

		</style>
