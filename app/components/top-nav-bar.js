import Ember from 'ember';

export default Ember.Component.extend({
	// classNames: ["top_nav"],
 //  tagName: "div",
  tagName: '',
  session: Ember.inject.service(),
  actions : {
		invalidateSession() {
      this.get('session').invalidate();
    }
	}
});
