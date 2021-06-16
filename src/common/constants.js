/**
 * This module contains constants.
 */

module.exports = {
  // possible values: wait_for, true, false
  esRefreshOption: 'wait_for',
  Zapier: {
    Switch: {
      ON: 'ON',
      OFF: 'OFF'
    },
    MessageType: {
      JobCreate: 'job:create',
      JobUpdate: 'job:update',
      JobCandidateCreate: 'jobcandidate:create',
      JobCandidateUpdate: 'jobcandidate:update'
    }
  },
  Interview: {
    Status: {
      Scheduling: 'Scheduling',
      Scheduled: 'Scheduled',
      RequestedForReschedule: 'Requested for reschedule',
      Rescheduled: 'Rescheduled',
      Completed: 'Completed',
      Cancelled: 'Cancelled'
    },
    XaiTemplate: {
      '30MinInterview': 'interview-30',
      '60MinInterview': 'interview-60'
    }
  }
}
