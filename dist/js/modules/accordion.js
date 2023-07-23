const accordion = (triggersSelector, itemsSelector) => {
    const btns = document.querySelectorAll(triggersSelector),
		blocks = document.querySelectorAll(itemsSelector);

	//blocks.forEach(block => {
	//	block.classList.add('animated', 'fadeInDown');
	//});

	//btns.forEach(btn => {
	//    btn.addEventListener('click', function() {
	//        if (!this.classList.contains('edu22-box-open')) {
    //	        	btns.forEach(btn => {
    //	            	btn.classList.remove('edu22-box-open', 'edu22-container-inner edu22-opened');
	//            });
	//            this.classList.add('edu22-box-open', 'edu22-container-inner edu22-opened');
	//        }
	//    });
	//});

    btns.forEach(btn => {
        btn.addEventListener('click', function() {
            this.classList.toggle('edu22-box-open');
            this.nextElementSibling.classList.toggle('edu22-opened');

            if (this.classList.contains('edu22-box-open')) {
                this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + "px";
            } else {
                this.nextElementSibling.style.maxHeight = '0px';
            }
        });
    });

    //   blocks = document.querySelectorAll(itemsSelector);

    // blocks.forEach(block => {
    //     block.classList.add('animated', 'fadeInDown');
    // });

    // btns.forEach(btn => {
    //     btn.addEventListener('click', function() {
    //         if (!this.classList.contains('active')) {
    //             btns.forEach(btn => {
    //                 btn.classList.remove('active', 'active-style');
    //             });
    //             this.classList.add('active', 'active-style');
    //         }
    //     });
    // });
};

export default accordion;