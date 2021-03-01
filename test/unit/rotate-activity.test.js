import rotateActivity from '../../src/utils/rotate-activity';
import { Activity } from '../../src/DTOs/Activity';
import { Participant } from '../../src/DTOs/Participant';

describe('cycles participants activities', () => {
  it('shifts participants activity by one when equal numbers', () => {
    const bill = new Participant('Bill', 'bill-id');
    const peter = new Participant('Peter', 'peter-id');
    const mike = new Participant('Mike', 'mike-id');
    const guitarActivity = new Activity('guitar', 'dfasdf-324asdfs-32424', 'peter-id');
    const drumsActivity = new Activity('drums', 'sdfsd-sdfsdf', 'bill-id');
    const bassActivity = new Activity('bass', 'gvkhsdf-w534td-sdf', 'mike-id');

    const activities = [guitarActivity, drumsActivity, bassActivity];
    const participants = [bill, peter, mike];

    const result = rotateActivity(activities);

    expect(result).toEqual([new Activity('guitar', guitarActivity.id, 'mike-id'),
    new Activity('drums', drumsActivity.id, 'peter-id'),
    new Activity('bass', bassActivity.id, 'bill-id')]);
  });
});