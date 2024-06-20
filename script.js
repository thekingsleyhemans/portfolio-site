let scrolling = false;
      let timeouId = null;
      let rotate = 0;
      let lastScrollTop = 0;
      let easing = 0.1;

      window.onscroll = () => {
        const scrollTop = window.scrollY;
        const scrollDirection = scrollTop > lastScrollTop ? 'down' : 'up';
        lastScrollTop = scrollTop;
         if (scrollTop === 0) {
          document.body.classList.add("scroll-stopped")
         }else{
          console.log("scrolling...", scrollDirection);
          scrolling = true;
          if (scrollDirection === 'down'){
            rotate += 1;
          } else if (scrollDirection === 'up') {
            rotate -= 1;
          }
         }
        

        document.querySelector('.rotating-circle').style.transform = `rotate(${rotate}deg)`;
        if (timeouId) {
          clearTimeout(timeouId);
        }
        timeouId = setTimeout(() =>{
          scrolling = false;
          if (!scrolling) {
            document.body.classList.add("scroll-stopped");
          }else{
            document.body.classList.remove("scroll-stopped");
          }
          document.body.classList.toggle("window-scrolling", scrolling)
        }, 200);
      };
