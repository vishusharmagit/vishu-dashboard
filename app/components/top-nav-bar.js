import Ember from 'ember';

export default Ember.Component.extend({
  tagName: '',
  session: Ember.inject.service(),
  actions : {
		invalidateSession() {
      this.get('session').invalidate();
    }
	}
});
