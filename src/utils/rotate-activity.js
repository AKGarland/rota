export default (activities) => {
  let nextParticipantId = activities[activities.length - 1].participantId;
  for (let activity of activities) {
    const participantId = activity.participantId;
    activity.participantId = nextParticipantId;
    nextParticipantId = participantId;
  }

  return activities;
}