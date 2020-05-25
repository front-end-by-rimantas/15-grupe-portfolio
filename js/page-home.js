"use strict";

import skillsData from './data/skills.js';
import jobHistoryData from './data/job-history.js';
import progressBars from './components/progress-bar/progress-bar.js';
import JobHistory from './components/job-history/JobHistory.js';

const progressBarsSelector = '#skills .col-7';
progressBars.renderProgressBar( progressBarsSelector, skillsData );
progressBars.animateProgressBars( progressBarsSelector );

const jobHistorySelector = '#history .row:nth-child(3)';
new JobHistory( jobHistorySelector, jobHistoryData );
