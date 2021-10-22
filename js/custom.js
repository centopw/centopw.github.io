(function($) { 
    "use strict"; 
    // aos animation
    AOS.init();
    
    //loader
    $("#loader").fakeLoader({

        timeToHide:1, //Time in milliseconds for fakeLoader disappear
        
        zIndex:"999",//Default zIndex
        
        spinner:"spinner3",//Options: 'spinner1', 'spinner2', 'spinner3', 'spinner4', 'spinner5', 'spinner6', 'spinner7'
        
        bgColor:"#111", //Hex, RGB or RGBA colors
        
        imagePath:"" //If you want can you insert your custom image
    
    });

   
    // Menu Click Open
    $('#toggle').on('click',function() {
        $(this).toggleClass('active');
        $('#overlay').toggleClass('open');
       });

    // Home agency left bar active
    $('.nav-left').on('mouseenter', function(){
        $('.left-anim').addClass('-active'),  
        $('.decor').addClass('-active'),
        $('.logo').addClass('-active'),
        $('.copyright').addClass('-active'),
        $('.decor-bottom').addClass('-active-left');   
    }).on('mouseleave', function(){
        $('.left-anim').removeClass('-active'),  
        $('.decor').removeClass('-active'),
        $('.logo').removeClass('-active'),
        $('.copyright').removeClass('-active'),
        $('.decor-bottom').removeClass('-active-left'); 
    });    

    // Home agency right bar active
    $('.nav-right').on('mouseenter', function(){
        $('.right-anim').addClass('-active'),
        $('.decor').addClass('-active'),  
        $('.social').addClass('-active'),
        $('.button_container').addClass('-active'),
        $('.decor-bottom').addClass('-active-right');   
    }).on('mouseleave', function(){
        $('.right-anim').removeClass('-active'),
        $('.decor').removeClass('-active'),  
        $('.social').removeClass('-active'),
        $('.button_container').removeClass('-active'),
        $('.decor-bottom').removeClass('-active-right');  
    });   

    
    // Custom Cursor
    var cursor = {
        delay: 8,
        _x: 0,
        _y: 0,
        endX: (window.innerWidth / 2),
        endY: (window.innerHeight / 2),
        cursorVisible: true,
        cursorEnlarged: false,
        $dot: document.querySelector('.cursor-dot'),
        $outline: document.querySelector('.cursor-dot-outline'),
        
        init: function() {
            // Set up element sizes
            this.dotSize = this.$dot.offsetWidth;
            this.outlineSize = this.$outline.offsetWidth;
            
            this.setupEventListeners();
            this.animateDotOutline();
        },
        
        setupEventListeners: function() {
            var self = this;
            
            // Anchor hovering
            document.querySelectorAll('a').forEach(function(el) {
                el.addEventListener('mouseover', function() {
                    self.cursorEnlarged = true;
                    self.toggleCursorSize();
                });
                el.addEventListener('mouseout', function() {
                    self.cursorEnlarged = false;
                    self.toggleCursorSize();
                });
            });
            
            // Click events
            document.addEventListener('mousedown', function() {
                self.cursorEnlarged = true;
                self.toggleCursorSize();
            });
            document.addEventListener('mouseup', function() {
                self.cursorEnlarged = false;
                self.toggleCursorSize();
            });
      
            document.addEventListener('mousemove', function(e) {
                // Show the cursor
                self.cursorVisible = true;
                self.toggleCursorVisibility();
    
                // Position the dot
                self.endX = e.pageX;
                self.endY = e.pageY;
                self.$dot.style.top = self.endY + 'px';
                self.$dot.style.left = self.endX + 'px';
            });
            
            // Hide/show cursor
            document.addEventListener('mouseenter', function(e) {
                self.cursorVisible = true;
                self.toggleCursorVisibility();
                self.$dot.style.opacity = 1;
                self.$outline.style.opacity = 1;
            });
            
            document.addEventListener('mouseleave', function(e) {
                self.cursorVisible = true;
                self.toggleCursorVisibility();
                self.$dot.style.opacity = 0;
                self.$outline.style.opacity = 0;
            });
        },
        
        animateDotOutline: function() {
            var self = this;
            
            self._x += (self.endX - self._x) / self.delay;
            self._y += (self.endY - self._y) / self.delay;
            self.$outline.style.top = self._y + 'px';
            self.$outline.style.left = self._x + 'px';
            
            requestAnimationFrame(this.animateDotOutline.bind(self));
        },
        
        toggleCursorSize: function() {
            var self = this;
            
            if (self.cursorEnlarged) {
                self.$dot.style.transform = 'translate(-50%, -50%) scale(0.75)';
                self.$outline.style.transform = 'translate(-50%, -50%) scale(1.5)';
            } else {
                self.$dot.style.transform = 'translate(-50%, -50%) scale(1)';
                self.$outline.style.transform = 'translate(-50%, -50%) scale(1)';
            }
        },
        
        toggleCursorVisibility: function() {
            var self = this;
            
            if (self.cursorVisible) {
                self.$dot.style.opacity = 1;
                self.$outline.style.opacity = 1;
            } else {
                self.$dot.style.opacity = 0;
                self.$outline.style.opacity = 0;
            }
        }
    }
    
    cursor.init();
})(jQuery);
 
    