import utils from '../utils';

describe('Launch', function() {
  beforeEach(utils.beforeEach);
  afterEach(utils.afterEach);

  it('shows the proper application title', function() {
    return app.client.getTitle()
      .then((title) => {
        expect(title).to.equal('alttpr-vue-twitch-chat-tracker');
      });
  });
});
