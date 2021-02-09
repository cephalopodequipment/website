// Handy functions!
const select = (selector) => document.querySelector(selector);

const selectAll = (selector, scope = document) =>
    scope.querySelectorAll(selector);

const randomNumber = (min = 0, max = 3) =>
    min + Math.floor(Math.random() * (max - min));

///////////////////////////////////////////////////////////////////////////////
// Prevent Widows
const textContainers = selectAll('.js-prevent-widows');
textContainers.forEach((textContainer) => {
    textContainer.innerHTML = textContainer.innerHTML
        .trim()
        .replace(/[ ]([^ ]+)$/, `${String.fromCharCode(160)}$1`);
});

///////////////////////////////////////////////////////////////////////////////
// Font Themes
const fontOptions = [
    {
        name: 'Catamaran',
        fontURL:
            'https://fonts.googleapis.com/css2?family=Catamaran:wght@500;700&display=swap',
    },
    {
        name: 'Roboto',
        fontURL:
            'https://fonts.googleapis.com/css2?family=Roboto:wght@400;900&display=swap',
    },
    {
        name: 'Lato',
        fontURL:
            'https://fonts.googleapis.com/css2?family=Lato:wght@400;900&display=swap',
    },
    {
        name: 'Ubuntu',
        fontURL:
            'https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;700&display=swap',
    },
    {
        name: 'Rubik',
        fontURL:
            'https://fonts.googleapis.com/css2?family=Rubik:wght@300;700&display=swap',
    },
    {
        name: 'Quicksand',
        fontURL:
            'https://fonts.googleapis.com/css2?family=Quicksand:wght@300;700&display=swap',
    },
    {
        name: 'Kanit',
        fontURL:
            'https://fonts.googleapis.com/css2?family=Kanit:wght@300;700&display=swap',
    },
    {
        name: 'Fira Sans',
        fontURL:
            'https://fonts.googleapis.com/css2?family=Fira%20Sans:wght@300;900&display=swap',
    },
];

const linkElement = select('#js-google-font');
const bodyElement = select('body');
const navItems = selectAll('.siteFooter-navItems')[1];

const setFont = (name, url) => {
    linkElement.setAttribute('href', url);
    bodyElement.style.fontFamily = name;
};

setFont(fontOptions[0].name, fontOptions[0].fontURL);

fontOptions.forEach((fontOption) => {
    const navItem = document.createElement('li');
    const navButton = document.createElement('a');

    navItem.classList.add('siteFooter-navItem');
    navButton.classList.add('siteFooter-navButton');
    navButton.setAttribute('href', '#');
    navButton.innerText = fontOption.name;
    navButton.addEventListener('click', (evt) => {
        evt.preventDefault();
        setFont(fontOption.name, fontOption.fontURL);
    });
    navItem.appendChild(navButton);
    navItems.appendChild(navItem);
});

///////////////////////////////////////////////////////////////////////////////
// Tabs

const ACTIVE_TAB_CLASS_NAME = 'is-active';

const selectTabIndex = (targetTabIndex, tabSet) => {
    const tabs = selectAll('.js-tab', tabSet);
    const tabContentContainers = selectAll('.js-tab-content', tabSet);

    tabs.forEach((tab, tabIndex) => {
        const tabContentContainer = tabContentContainers[tabIndex];

        if (tabIndex === targetTabIndex) {
            tab.classList.add(ACTIVE_TAB_CLASS_NAME);
            tabContentContainer.classList.add(ACTIVE_TAB_CLASS_NAME);
            return;
        }

        tab.classList.remove(ACTIVE_TAB_CLASS_NAME);
        tabContentContainer.classList.remove(ACTIVE_TAB_CLASS_NAME);
    });
};

const tabSets = selectAll('.js-tabs');

tabSets.forEach((tabSet) => {
    const tabs = selectAll('.js-tab', tabSet);

    tabs.forEach((tab, tabIndex) => {
        const handleClick = () => selectTabIndex(tabIndex, tabSet);

        tab.addEventListener('click', handleClick);
    });

    selectTabIndex(0, tabSet);
});

///////////////////////////////////////////////////////////////////////////////
// Bubbles

// int
const MIN_BUBBLES = 60;
const MAX_BUBBLES = 100;

// s
const MIN_DELAY = -120;
const MAX_DELAY = 0;

// s
const MIN_BUBBLE_SPEED = 5;
const MAX_BUBBLE_SPEED = 10;

// %
const MIN_TRACK_HEIGHT = 20;
const MAX_TRACK_HEIGHT = 110;

// vw
const MIN_TRACK_OFFSET = -5;
const MAX_TRACK_OFFSET = 105;

const BUBBLE_STYLES = {
    tiny: {
        // Tiny; way back
        '--bubble-blur': '0',
        '--bubble-size': '5px',
        '--track-speed': '60s',
        '--track-width': '20px',
    },
    small: {
        // Small; back
        '--bubble-blur': '3px',
        '--bubble-size': '3vw',
        '--track-speed': '120s',
        '--track-width': '10vw',
    },
    medium: {
        // Medium; middle
        '--bubble-blur': '5px',
        '--bubble-size': '6vw',
        '--track-speed': '90s',
        '--track-width': '15vw',
    },
    large: {
        // Large; front
        '--bubble-blur': '1px',
        '--bubble-size': '10vw',
        '--track-speed': '60s',
        '--track-width': '25vw',
    },
};

const BUBBLE_STYLE_FREQUENCY = [
    ...Array(50).fill('tiny'),
    ...Array(20).fill('small'),
    ...Array(5).fill('medium'),
    ...Array(1).fill('large'),
];

const bubblesContainer = select('.bubbles');

const randomNumberOfBubbles = randomNumber(MIN_BUBBLES, MAX_BUBBLES);

const animationToggleButton = select('.animationToggleButton[role="switch"]');

const isAnimating = () =>
    animationToggleButton.getAttribute('aria-pressed') === 'true';

const toggleAnimation = (forcedState = null) => {
    const newAnimationState =
        forcedState !== null ? forcedState : !isAnimating();

    bubblesContainer.classList.toggle(
        'is-animating-bubbles',
        newAnimationState
    );

    animationToggleButton.setAttribute(
        'aria-pressed',
        String(newAnimationState)
    );

    window.localStorage.setItem('is-animating-bubbles', newAnimationState);
};

// Hook up the toggle button
animationToggleButton.addEventListener(
    'click',
    toggleAnimation.bind(null, null)
);

const savedState = window.localStorage.getItem('is-animating-bubbles');

toggleAnimation(savedState !== null ? savedState === 'true' : isAnimating());

for (var i = 0; i < randomNumberOfBubbles; i++) {
    const randomBubbleSpeed = randomNumber(MIN_BUBBLE_SPEED, MAX_BUBBLE_SPEED);
    const randomBubbleStyle =
        BUBBLE_STYLE_FREQUENCY[
            (BUBBLE_STYLE_FREQUENCY.length * Math.random()) | 0
        ];
    const randomBubbleStyleObject = BUBBLE_STYLES[randomBubbleStyle];
    const randomDelay = randomNumber(MIN_DELAY, MAX_DELAY);
    const randomTrackHeight = randomNumber(MIN_TRACK_HEIGHT, MAX_TRACK_HEIGHT);
    const randomTrackOffset = randomNumber(MIN_TRACK_OFFSET, MAX_TRACK_OFFSET);

    const bubbleTrack = document.createElement('div');
    const bubbleWrapper = document.createElement('div');
    const bubble = document.createElement('div');

    bubbleTrack.classList.add('bubble-track');
    bubbleWrapper.classList.add('bubble-wrapper');
    bubble.classList.add('bubble');

    bubblesContainer.appendChild(bubbleTrack);
    bubbleTrack.appendChild(bubbleWrapper);
    bubbleWrapper.appendChild(bubble);

    bubbleTrack.style.setProperty('--bubble-speed', `${randomBubbleSpeed}s`);
    bubbleTrack.style.setProperty('--delay', `${randomDelay}s`);
    bubbleTrack.style.setProperty('--track-height', `${randomTrackHeight}%`);
    bubbleTrack.style.setProperty('--track-offset', `${randomTrackOffset}vw`);

    Object.keys(randomBubbleStyleObject).map((propertyName) => {
        bubbleTrack.style.setProperty(
            propertyName,
            randomBubbleStyleObject[propertyName]
        );
    });
}
