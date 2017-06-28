<template>
	<div>
		<live></live>
		<slide></slide>
		<recommand></recommand>
		<tool></tool>
	</div>
</template>
<script>
	import tool from '@/pages/welcome/tool'
	import recommand from '@/pages/welcome/recommand'
	import live from '@/pages/welcome/video'
	import slide from '@/pages/welcome/slide'
	export default {
		name: 'pages',
		components: {tool,recommand,live,slide}
	}
</script>