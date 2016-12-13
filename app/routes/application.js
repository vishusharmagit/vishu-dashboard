import Ember from 'ember';

import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

// export default Ember.Route.extend({
// 	actions: {
// 	    error: function(reason, transition) {
// 	      this.transitionTo('/login');
// 	      return false;
// 	    }
// 	  }
// });


export default Ember.Route.extend(ApplicationRouteMixin);


// export default Ember.Route.extend(ApplicationRouteMixin, {
// 	actions: {
//         invalidateSession: function() {
//             this.get('session').invalidate();
//         }
//     }

// });