"use strict";

import achievementsData from './data/achievements.js';
import skillsData from './data/skills.js';
import jobHistoryData from './data/job-history.js';
import Achievements from './components/achievements/Achievements.js';
import progressBars from './components/progress-bar/progress-bar.js';
import JobHistory from './components/job-history/JobHistory.js';

const achievementsSelector = '#achievements > .row';
new Achievements( achievementsSelector, achievementsData );

const progressBarsSelector = '#skills .col-7';
progressBars.renderProgressBar( progressBarsSelector, skillsData );
progressBars.animateProgressBars( progressBarsSelector );

const jobHistorySelector = '#history .jobs-list';
new JobHistory( jobHistorySelector, jobHistoryData );
