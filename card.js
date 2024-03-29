function buildCard (data) {
    // TODO: test for empty tags
    tags = data.tags;

    $('#name').html(tags.name);

    // Contact
    contact = [];

    // TODO: use table so text is aligned

    // website
    // TODO: strip url to domain for display
    if ('contact:website' in tags ) {
        contact.push('<i class="fa fa-globe"></i> <a href="' + tags['contact:website'] + '" target="_blank">website</a>');
    }
    else if ('website' in tags ) {
        contact.push('<i class="fa fa-globe"></i> <a href="' + tags['website'] + '" target="_blank">website</a>');
    }

    // phone
    if ('contact:phone' in tags) {
        contact.push('<i class="fa fa-phone"></i> <a href="tel:' + tags['contact:phone'] + '">' + tags['contact:phone'] + '</a>');
    }
    else if ('phone' in tags) {
        contact.push('<i class="fa fa-phone"></i> <a href="tel:' + tags['phone'] + '">' + tags['phone'] + '</a>');
    }

    // fax
    if ('contact:fax' in tags) {
        contact.push('<i class="fa fa-fax"></i> <a href="fax:' + tags['contact:fax'] + '">' + tags['contact:fax'] + '</a>');
    }
    else if ('fax' in tags) {
        contact.push('<i class="fa fa-fax"></i> <a href="fax:' + tags['fax'] + '">' + tags['fax'] + '</a>');
    }

    // email
    if ('contact:email' in tags) {
        contact.push('<i class="fa fa-envelope"></i> <a href="mailto:' + tags['contact:email'] + '">' + tags['contact:email'] + '</a>');
    }
    else if ('email' in tags) {
        contact.push('<i class="fa fa-envelope"></i> <a href="mailto:' + tags['email'] + '">' + tags['email'] + '</a>');
    }

    // facebook
    if ('contact:facebook' in tags) {
        // if first 4 chars are http
        if (tags['contact:facebook'].slice(0,4) == 'http') {
            contact.push('<i class="fa fa-facebook-square"></i> <a href="' + tags['contact:facebook'] + '" target="_blank">' + tags['contact:facebook'].slice(24,-1) + '</a>');
        }
        else {
            contact.push('<i class="fa fa-facebook-square"></i> <a href="https://www.facebook.com/' + tags['contact:facebook'] + '" target="_blank">' + tags['contact:facebook'] + '</a>');
        }
    }
    else if ('facebook' in tags) {
        contact.push('<i class="fa fa-facebook-square"></i> <a href="https://www.facebook.com/' + tags['facebook'] + '" target="_blank">' + tags['facebook'] + '</a>');
    }

    // instagram
    if ('contact:instagram' in tags) {
        contact.push('<i class="fa fa-instagram"></i> <a href="https://www.instagram.com/' + tags['contact:instagram'] + '" target="_blank">' + tags['contact:instagram'] + '</a>');
    }
    else if ('instagram' in tags) {
        contact.push('<i class="fa fa-instagram"></i> <a href="https://www.instagram.com/' + tags['instagram'] + '" target="_blank">' + tags['instagram'] + '</a>');
    }

    // twitter
    if ('contact:twitter' in tags) {
        contact.push('<i class="fa fa-twitter"></i> <a href="https://www.twitter.com/' + tags['contact:twitter'] + '" target="_blank">' + tags['contact:twitter'] + '</a>');
    }
    else if ('twitter' in tags) {
        contact.push('<i class="fa fa-twitter"></i> <a href="https://www.twitter.com/' + tags['twitter'] + '" target="_blank">' + tags['twitter'] + '</a>');
    }

    // pinterest
    if ('contact:pinterest' in tags) {
        contact.push('<i class="fa fa-pinterest"></i> <a href="https://www.pinterest.com/' + tags['contact:pinterest'] + '" target="_blank">' + tags['contact:pinterest'] + '</a>');
    }
    else if ('pinterest' in tags) {
        contact.push('<i class="fa fa-pinterest"></i> <a href="https://www.pinterest.com/' + tags['pinterest'] + '" target="_blank">' + tags['pinterest'] + '</a>');
    }

    // yelp
    if ('contact:yelp' in tags) {
        contact.push('<i class="fa fa-yelp"></i> <a href="https://www.yelp.com/biz/' + tags['contact:yelp'] + '" target="_blank">' + tags['contact:yelp'] + '</a>');
    }
    else if ('yelp' in tags) {
        contact.push('<i class="fa fa-yelp"></i> <a href="https://www.yelp.com/biz/' + tags['yelp'] + '" target="_blank">' + tags['yelp'] + '</a>');
    }

    // youtube
    // TODO: this breaks for values that aren't URLs
    if ('contact:youtube' in tags) {
        contact.push('<i class="fa fa-youtube-play"></i> <a href="' + tags['contact:youtube'] + '" target="_blank">YouTube</a>');
    }
    else if ('youtube' in tags) {
        contact.push('<i class="fa fa-youtube-play"></i> <a href="' + tags['youtube'] + '" target="_blank">YouTube</a>');
    }

    $('#contact').html(contact.join('<br>'));

    // TODO: opening hours (requires parsing function)

    // Address
    if ('addr:full' in tags) {
        $('#address').html(tags["addr:full"]);
    }
    else if ('addr:street' in tags) {
        addr = '';
        if ('addr:housenumber' in tags) {
            addr += tags['addr:housenumber'] + '&nbsp;';
        }
        addr += tags['addr:street'];
        if ('addr:city' in tags) {
            addr += ',&nbsp;' + tags['addr:city'];
        }
        if ('addr:state' in tags) {
            addr += ',&nbsp;' + tags['addr:state'];
        }
        if ('addr:postcode' in tags) {
            addr += '&nbsp;' + tags['addr:postcode'];
        }
        $('#address').html(addr);
    }
}