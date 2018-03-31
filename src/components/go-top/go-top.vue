<template>
    <div class="goto-top" v-show="isShow" @click.stop.prevent="goTop">
        <div class="goto-top-inner">
        <i class="iconfont icon-goTop"></i><br>
        顶部
        </div>
    </div>
</template>

<style lang="scss">
    @import "./style";
</style>
<script>
	export default
	{
		name: "go-top",
		
		props:
		{
			refDom: String	// 传入需要出现滚动条的box的class  默认给body
		},

		data()
		{
		    return {
			    isShow: false
		    };
		},
		
		mounted()
		{
			this._scroll = document.querySelector(this.refDom);
			
		    let _this = this,
				scroll = this._scroll || document,
				containerHeight = document.body.offsetHeight;

			scroll.addEventListener("scroll", function()
			{
				let marginTop = scroll.scrollTop || document.body.scrollTop;
				
				if(marginTop > containerHeight)
				{
				    _this.isShow = true;
				}
				else
				{
				    _this.isShow = false;
			    }
		    });
		},
		
		methods:
		{
			goTop()
			{
			    let scroll = this._scroll || document.body,
					timer = null;
					
				timer = setInterval(function ()
				{
					if(scroll.scrollTop > 0)
					{
					    scroll.scrollTop -= 60;
					}
					else
					{
					    clearInterval(timer);
					    timer = null;
				    }
			    }, 20);
		    }
	    }
    }
</script>