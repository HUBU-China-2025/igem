document.addEventListener('DOMContentLoaded', function() {  
    const video = document.getElementById('myVideo');  
    const playButton = document.getElementById('playButton');  
  
    function handlePlayButtonClick() {  
        video.muted = false; // 取消静音  
        video.play()  
            .then(() => {  
                // 视频成功播放，隐藏播放按钮  
                playButton.style.display = 'none';  
            })  
            .catch(error => {  
                // 视频播放失败（理论上在这里不应该再次失败，除非有其他因素）  
                console.error('Failed to play video:', error);  
            });  
  
        // 移除事件监听器，避免重复添加  
        playButton.removeEventListener('click', handlePlayButtonClick);  
    }  
  
    function play() {  
        video.muted = true; // 设置视频为静音  
        video.play()  
            .then(() => {  
                // 视频成功播放，隐藏播放按钮（如果默认不显示，这里可以不做任何操作）  
            })  
            .catch(error => {  
                // 视频播放失败，显示播放按钮  
                playButton.style.display = 'block';  
                playButton.addEventListener('click', handlePlayButtonClick);  
            });  
    }  
  
    play(); // 调用函数尝试自动播放视频  
});