function buildCard (data) {
    // console.log(data.tags);
    // console.log(data.type);
    // console.log(data.id);

    // TODO: test for empty tags
    tags = data.tags;

    $('#name').html(tags.name);

    // Contact
    contact = [];

    // website
    // TODO strip url to domain for display
    if ('contact:website' in tags ) {
        contact.push('<i class="fa fa-globe"></i> <a href="' + tags['contact:website'] + '">website</a>');
    }
    else if ('website' in tags ) {
        contact.push('<i class="fa fa-globe"></i> <a href="' + tags['website'] + '">website</a>');
    }

    // phone
    if ('contact:phone' in tags) {
        contact.push('<i class="fa fa-phone"></i> <a href="tel:' + tags['contact:phone'] + '">' + tags['contact:phone'] + '</a>');
    }
    else if ('phone' in tags) {
        contact.push('<i class="fa fa-phone"></i> <a href="tel:' + tags['phone'] + '">' + tags['phone'] + '</a>');
    }

    // email
    if ('contact:email' in tags) {
        contact.push('<i class="fa fa-envelope"></i> <a href="mailto:' + tags['contact:email'] + '">' + tags['contact:email'] + '</a>');
    }
    else if ('email' in tags) {
        contact.push('<i class="fa fa-envelope"></i> <a href="mailto:' + tags['email'] + '">' + tags['email'] + '</a>');
    }

    // TODO fax
    // TODO facebook
    // TODO instagram
    // TODO twitter
    // TODO pinterest
    // TODO youtube

    $('#contact').html(contact.join('<br>'));

    // TODO opening hours (requires parsing function)

    // Address
    if ('addr:full' in tags) {
        $('#address').html(tags["addr:full"]);
    }
    else {
        addr = tags['addr:housenumber'] + '&nbsp;' + tags['addr:street'] + ',&nbsp;' + tags['addr:city'] + ',&nbsp;' + tags['addr:state'] + '&nbsp;' + tags['addr:postcode'];
        $('#address').html(addr);
    }

}