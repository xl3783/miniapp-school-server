'use strict';

/**
 * scenery service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::scenery.scenery');
