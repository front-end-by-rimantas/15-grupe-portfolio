"use strict";

import skills from './data/skills.js';
import progressBars from './components/progress-bar.js';

const progressBarsSelector = '#skills .col-7';
progressBars.renderProgressBar( progressBarsSelector, skills );
progressBars.animateProgressBars( progressBarsSelector );