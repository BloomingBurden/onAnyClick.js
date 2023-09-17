// data-click-close;
// data-click-option="ADD/REMOVE/TOGGLE";
// data-click-section
// data-click-checkbox="BOOLEAN"
// data-click-btn="CLASS"
// data-click-fixed="BOOLEAN"
// data-click-body="classes for body, through ,"

export const onAnyClick = () => {
    const ELEMENTS = new Map();

    const setDefaultElemes = () => {
        const buttons = document.querySelectorAll('[data-click-btn]');
        buttons.forEach(item => {
            if (item.classList.contains('active')) {
                const section = item.dataset.clickBtn.length === 0 ? item.closest('[data-click-section]') : document.querySelector(item.dataset.clickBtn);
                ELEMENTS.set(item, [section, item]);
            }
        });
    };
    setDefaultElemes();

    const getCloseButton = (target) => {
        let closeButton = target.closest('[data-click-close]');
        if (!closeButton) return;

        let element = null;

        if (closeButton) {
            closeButton = closeButton.dataset.clickClose.length === 0 ? closeButton : closeButton.dataset.clickClose;
        }

        if (closeButton.length > 0) {
            element = document.querySelector(`.${closeButton}`);
        } else {
            element = closeButton.closest('[data-click-section]');
        }

        return element;
    }

    const removeClassFromBody = (hasBody) => {
        const arr = hasBody.split(',');
        arr.forEach(item => document.body.classList.remove(item.trim()));
    }

    const reset = (currentSection, target, method) => {
        for (let item of ELEMENTS) {
            const array = item[1];
            const section = array[0];
            const button = array[1];    
            const hasBody = array[2];  
            const fixed = section.dataset.clickFixed ? true : false;   
            let currentClass = currentSection ? currentSection.classList[0] : false;
            let hasChild = section.querySelector(`.${currentClass}`);
            hasChild = hasChild ? false : true;
            let closeButton = getCloseButton(target)
            
            if (!!closeButton && section === closeButton) {
                section.classList.remove('show');
                button.classList.remove('active');
                ELEMENTS.delete(item[0]);
                
                if (hasBody) {
                    removeClassFromBody(hasBody);
                }
            }

            if (section !== currentSection && hasChild) {
                if (method !== 'default' && !fixed 
                    ||method === 'default' && !fixed 
                    || method === 'click' && fixed ) {
                    section.classList.remove('show');
                    button.classList.remove('active');
                    ELEMENTS.delete(item[0]);
                    
                    if (hasBody) {
                        removeClassFromBody(hasBody);
                    }
                }
            } 
        }
    };
    
    document.addEventListener('click', (evt) => {
        const target = evt.target;
        const button = target.closest('[data-click-btn]');

        if (button) {
            const section = button.dataset.clickBtn.length === 0 ? button.closest('[data-click-section]') : document.querySelector(button.dataset.clickBtn);
            if (!section) return;
            
            const option = button.dataset.clickOption ? button.dataset.clickOption.toLowerCase() : 'add';
            const checkbox = button.dataset.clickCheckbox ? button.dataset.clickCheckbox : false;
            const hasClickBody = button.dataset.clickBody ? button.dataset.clickBody : false;


            if (!checkbox) {
                reset(section, target, 'click');
            }

            if (!ELEMENTS.has(button)) {
                ELEMENTS.set(button, [section, button, hasClickBody]);
            }

            if (hasClickBody) {
                const classes = hasClickBody.split(',');
                classes.forEach(item => {
                    document.body.classList.add(item.trim());
                })
            }
            
            if (option === 'add') {
                section.classList.add('show');
                button.classList.add('active');
            }
            if (option === 'remove') {
                section.classList.remove('show');
                button.classList.remove('active');
            }
            if (option === 'toggle') {
                section.classList.toggle('show');
                button.classList.toggle('active');
            }
        } else {
            const currentSection = target.closest('[data-click-section]');
            reset(currentSection, target, 'default')
        }
    });
};