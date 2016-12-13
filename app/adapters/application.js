import DS from 'ember-data';

// export default DS.JSONAPIAdapter.extend({
//Vishu :
//Above one giving error. Need to debug it.	
// export default DS.RESTAdapter.extend({
// 	namespace: 'api',

// 	authManager: Ember.inject.service(),

// 	  headers: Ember.computed('authManager.accessToken', function() {
// 	    return {
// 	      "Authorization": `Bearer ${this.get("authManager.accessToken")}`
// 	    };
// 	  })
// });



import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default DS.RESTAdapter.extend(DataAdapterMixin, {
  namespace: 'api',
  authorizer: 'authorizer:application'
});