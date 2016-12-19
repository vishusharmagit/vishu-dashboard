import Ember from 'ember';

export default Ember.Component.extend({
  tagName: '',
  session: Ember.inject.service(),
  messages :
  [
  { 
    id: 1,
    userName:"Vishu",
    userEmail: 'vishusharmagit@gmail.com',
    messageContent: "Message From Server 1",
    messageTime: new Date(),
    profileImageUrl:"http://vignette2.wikia.nocookie.net/althistory/images/a/a6/Venstre_(Denmark)_Logo.png/revision/latest?cb=20081224190313" 
  },
  { 
    id: 1,
    userName:"Vishu",
    userEmail: 'vishusharmagit@gmail.com',
    messageContent: "Message From Server 2",
    messageTime: new Date(),
    profileImageUrl:"http://vignette2.wikia.nocookie.net/althistory/images/a/a6/Venstre_(Denmark)_Logo.png/revision/latest?cb=20081224190313" 
  }
  ],
  actions : {
		invalidateSession() {
      this.get('session').invalidate();
    }
	}
});
