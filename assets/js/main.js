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
        .replace(/([^ ]+)[ ]([^ ]+)$/, `<span class="nowrap">$1 $2</span>`);
});

///////////////////////////////////////////////////////////////////////////////
// Menu
const menuToggleButton = select('.js-menu-toggle-button');
const menuButtons = selectAll('.js-menu-item');

const toggleMenu = () => {
    const isExpanded =
        menuToggleButton.getAttribute('aria-expanded') === 'true';

    menuToggleButton.setAttribute('aria-expanded', !isExpanded);
};

menuToggleButton.addEventListener('click', toggleMenu);

menuButtons.forEach((item) => item.addEventListener('click', toggleMenu));

///////////////////////////////////////////////////////////////////////////////
// Fish
const bodyElement = select('body');
const NUM_FISH = 20;

const randomlyAdjustFishRoute = (fishElement) => {
    fishElement.style.setProperty(
        '--random-rotation',
        `${randomNumber(-30, 30)}deg`
    );
};

const fishContainerElement = document.createElement('div');
fishContainerElement.classList.add('fish-container');
bodyElement.appendChild(fishContainerElement);

Array.from(new Array(NUM_FISH)).forEach((fish) => {
    const fishElement = document.createElement('div');

    fishElement.classList.add('fish');
    fishElement.style.setProperty('--random-blur', `${randomNumber(1, 5)}px`);
    fishElement.style.setProperty('--random-delay', `${randomNumber(-90, 0)}s`);
    fishElement.style.setProperty(
        '--random-duration',
        `${randomNumber(30, 90)}s`
    );
    fishElement.style.setProperty('--random-scale', randomNumber(20, 80) / 100);
    fishElement.style.setProperty(
        '--random-left-offset',
        `${randomNumber(-10, 110)}%`
    );
    fishElement.style.setProperty(
        '--random-top-offset',
        `${randomNumber(10, 100)}%`
    );

    fishContainerElement.appendChild(fishElement);

    randomlyAdjustFishRoute(fishElement);

    setInterval(() => {
        randomlyAdjustFishRoute(fishElement);
    }, randomNumber(5000, 15000));
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

// integer
const MIN_BUBBLES = 40;
const MAX_BUBBLES = 80;

// seconds
const MIN_DELAY = -120;
const MAX_DELAY = 0;

// opacity
const MIN_BUBBLE_OPACITY = 0.4;
const MAX_BUBBLE_OPACITY = 1;

// scale factor
const MIN_BUBBLE_SIZE = 0.5;
const MAX_BUBBLE_SIZE = 1.5;

// seconds
const MIN_BUBBLE_SPEED = 5;
const MAX_BUBBLE_SPEED = 10;

// px
const MIN_BUBBLE_BLUR = 0;
const MAX_BUBBLE_BLUR = 6;

// seconds
const MIN_TRACK_SPEED = 45;
const MAX_TRACK_SPEED = 120;

// vw
const MIN_TRACK_WIDTH = 3;
const MAX_TRACK_WIDTH = 10;

// %
const MIN_TRACK_HEIGHT = 20;
const MAX_TRACK_HEIGHT = 110;

// vw
const MIN_TRACK_OFFSET = -5;
const MAX_TRACK_OFFSET = 105;

const bubblesContainer = select('.bubbles');

const randomNumberOfBubbles = randomNumber(MIN_BUBBLES, MAX_BUBBLES);

const randomTinyBubbleSizes = Array.from(
    new Array(50),
    () => randomNumber(15, 25) / 100
);

const randomSmallBubbleSizes = Array.from(
    new Array(20),
    () => randomNumber(51, 65) / 100
);

const randomMediumBubbleSizes = Array.from(
    new Array(10),
    () => randomNumber(65, 85) / 100
);

const randomLargeBubbleSizes = Array.from(
    new Array(5),
    () => randomNumber(100, 120) / 100
);

const randomScaleFactors = [].concat(
    randomTinyBubbleSizes,
    randomSmallBubbleSizes,
    randomMediumBubbleSizes,
    randomLargeBubbleSizes
);

Array.from(new Array(randomNumberOfBubbles)).forEach(() => {
    const randomBubbleOpacity = randomNumber(
        MIN_BUBBLE_OPACITY,
        MAX_BUBBLE_OPACITY
    );
    const randomBubbleScaleFactor =
        randomScaleFactors[randomNumber(0, randomScaleFactors.length)];
    const randomBubbleBlur = randomNumber(MIN_BUBBLE_BLUR, MAX_BUBBLE_BLUR);
    const randomBubbleSpeed = randomNumber(MIN_BUBBLE_SPEED, MAX_BUBBLE_SPEED);
    const randomDelay = randomNumber(MIN_DELAY, MAX_DELAY);
    const randomTrackSpeed = randomNumber(MIN_TRACK_SPEED, MAX_TRACK_SPEED);
    const randomTrackWidth = randomNumber(MIN_TRACK_WIDTH, MAX_TRACK_WIDTH);
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

    bubbleTrack.style.setProperty('--bubble-blur', `${randomBubbleBlur}px`);
    bubbleTrack.style.setProperty(
        '--bubble-scale-factor',
        randomBubbleScaleFactor
    );
    bubbleTrack.style.setProperty('--bubble-speed', `${randomBubbleSpeed}s`);
    bubbleTrack.style.setProperty('--bubble-opacity', randomBubbleOpacity);
    bubbleTrack.style.setProperty('--delay', `${randomDelay}s`);
    bubbleTrack.style.setProperty('--track-height', `${randomTrackHeight}%`);
    bubbleTrack.style.setProperty('--track-offset', `${randomTrackOffset}vw`);
    bubbleTrack.style.setProperty('--track-speed', `${randomTrackSpeed}s`);
    bubbleTrack.style.setProperty('--track-width', `${randomTrackWidth}vw`);
});

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
