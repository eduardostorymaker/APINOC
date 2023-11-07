'use strict';

/**
 * datalink service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::datalink.datalink');
