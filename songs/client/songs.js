Template.songs.helpers({
    songsSelector: {
        collection: songs,
        displayTemplate: 'song',
        fields: [{field: 'title', type: String}],
        sort: [['title', 1]],
        addbutton: false
    }
});

Template.songs.events({
    'click #song-new': function () {
        Meteor.call('songNew');
    }
});
