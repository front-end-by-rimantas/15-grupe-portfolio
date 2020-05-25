"use strict";

function renderProgressBar( selector, data ) {
    // validacija
    const DOM = document.querySelector(selector);
    if ( !DOM ) {
        throw 'ERROR: could not find element to render new content.';
    }
    if ( !Array.isArray(data) ) {
        throw 'ERROR: need some data (array format).';
    }
    if ( data.length === 0 ) {
        throw 'ERROR: need some data (non empty array).';
    }

    // logika
    let HTML = '';
    for ( let i=0; i<data.length; i++ ) {
        const skill = data[i];
        // elemento validacija
        if ( typeof(skill) !== 'object' ) {
            continue;
        }
        if ( typeof(skill.title) !== 'string' || skill.title === '' ) {
            continue;
        }
        if ( !isFinite(skill.value) || skill.value < 0 || skill.value > 100 ) {
            continue;
        }

        // elemento logika
        HTML += `
            <div class="progress-bar"
                data-animated="false"
                data-value="${skill.value}%">
                <div class="title">${skill.title}</div>
                <div class="progress">
                    <div class="bar" style="width: 0%;">
                        <div class="value">0%</div>
                    </div>
                </div>
            </div>`;
    }

    if ( HTML === '' ) {
        throw 'ERROR: totally messed up dude... no correct data :(';
    }

    // rezultato grazinimas
    DOM.innerHTML = HTML;
    return;
}

function animateProgressBars( progressBarsSelector ) {
    const progressBars = document.querySelectorAll( progressBarsSelector + ' > .progress-bar' );

    window.addEventListener('scroll', () => {
        const windowBottomHeight = window.scrollY + window.innerHeight;
        
        for ( let i=0; i<progressBars.length; i++ ) {
            const pg = progressBars[i];
            const bar = pg.querySelector('.bar');
            const DOMvalue = bar.querySelector('.value');
            const pgBottonHeight = pg.offsetTop + pg.offsetHeight;
        
            if ( pgBottonHeight < windowBottomHeight &&
                pg.dataset.animated === 'false' ) {
                pg.dataset.animated = 'true';
                bar.style.width = pg.dataset.value;
                animateProgressBarTextValue( DOMvalue, pg.dataset.value );
            }
        }
    });
}

function animateProgressBarTextValue( element, value ) {
    const number = parseInt(value);         // final number to reach ( 0...[number] )
    const time = 2000;                      // miliseconds
    const fps = 30;                         // 30 frames per second
    
    const refreshTime = 1000 / fps;
    const totalSteps = time / refreshTime;
    let step = 0;

    const timer = setInterval(() => {
        step++;
        element.innerText = Math.round( step / totalSteps * number ) + '%';

        if ( step >= totalSteps ) {
            clearInterval( timer );
        }
    }, refreshTime);
}

export default {
    renderProgressBar,
    animateProgressBars
};