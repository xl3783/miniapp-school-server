'use strict';

/**
 * college-introduction service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::college-introduction.college-introduction');
