'use strict';

/**
 * home-config service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::home-config.home-config');
