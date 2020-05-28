"use strict";

import achievementsData from './data/achievements.js';
import skillsData from './data/skills.js';
import worksData from './data/works.js';
import jobHistoryData from './data/job-history.js';
import servicesData from './data/services.js';
import CardsList from './components/cards/CardsList.js';
import progressBars from './components/progress-bar/progress-bar.js';
import Gallery from './components/gallery/Gallery.js';
import JobHistory from './components/job-history/JobHistory.js';

const achievementsSelector = '#achievements > .row';
new CardsList( achievementsSelector, achievementsData );

const progressBarsSelector = '#skills .col-7';
progressBars.renderProgressBar( progressBarsSelector, skillsData );
progressBars.animateProgressBars( progressBarsSelector );

const workGallerySelector = '#works > .row:nth-child(3) > .col-12';
const worksDirectoryPath = 'works';
new Gallery(workGallerySelector, worksData, worksDirectoryPath);

const jobHistorySelector = '#history .jobs-list';
new JobHistory( jobHistorySelector, jobHistoryData );

const servicesSelector = '#services > .row:nth-child(3)';
new CardsList( servicesSelector, servicesData );
