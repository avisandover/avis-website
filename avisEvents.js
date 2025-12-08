// List of events.
// Can be in any order, but to keep us sane, add new events at the beginning.
// Fields are:
// - title: text seen in the events table and the calendar.  Shouldn't contain html tags.
// - titleHtml: Optional, defaults to title; text seen in the events table.  Can contain html tags.
// - location:
// - description: can contain html tags
// - start: start date/time
// - end: Optional, end date/time

var avisEvents = [


    {
	title: 'Try Exploring Andover (TEA) Time',
	location: 'Den Rock Park and Bird Sanctuary',
	description: 'AVIS Trustee, Mark Kaluzny, is leading a series of hikes for the AMC. <a href="https://activities.outdoors.org/s/oc-activity/a5UUN0000022ARx2AM/act00017828">Registration Opens Sunday, December 28, 2025</a>',
	start: '2026-01-08T10:00',
    },
    {
	title: 'Try Exploring Andover (TEA) Time',
	location: 'Bay Circuit Trail through the Charles Ward Reservation',
	description: 'AVIS Trustee, Mark Kaluzny, is leading a series of hikes for the AMC. <a href="https://activities.outdoors.org/s/oc-activity/a5UUN000001rMZh2AM/act00016814">Registration Opens Sunday, February 1, 2026</a>',
	start: '2026-02-12T10:00',
    },
    {
	title: 'Try Exploring Andover (TEA) Time',
	location: 'Bay Circuit Trail – Deer Jump and Harold Rafton Reservations',
	description: 'AVIS Trustee, Mark Kaluzny, is leading a series of hikes for the AMC. <a href="https://activities.outdoors.org/s/oc-activity/a5UUN000001rMcv2AE/act00016815">Registration Opens Sunday, February 15, 2026</a>',
	start: '2026-02-26T10:00',
    },
    {
	title: 'Try Exploring Andover (TEA) Time',
	location: 'Bay Circuit Trail – Harold Parker State Forest to Skug River Reservation',
	description: 'AVIS Trustee, Mark Kaluzny, is leading a series of hikes for the AMC. <a href="https://activities.outdoors.org/s/oc-activity/a5UUN0000022AVB2A2/act00017830">Registration Opens Sunday, March 1, 2026</a>',
	start: '2026-03-12T10:00',
    },
    {
	title: 'Try Exploring Andover (TEA) Time',
	location: 'West Parish to Pomps Pond',
	description: 'AVIS Trustee, Mark Kaluzny, is leading a series of hikes for the AMC. <a href="https://activities.outdoors.org/s/oc-activity/a5UUN0000022ATZ2A2/act00017829">Registration Opens Sunday, March 15, 2026</a>',
	start: '2026-03-15T10:00',
    },
    {
	title: 'Try Exploring Andover (TEA) Time',
	location: 'Bay Circuit Trail Andover to Tewksbury Spur',
	description: 'AVIS Trustee, Mark Kaluzny, is leading a series of hikes for the AMC. <a href="https://activities.outdoors.org/s/oc-activity/a5UUN0000022AgT2AU/act00017831">Registration Opens Sunday, March 29, 2026</a>',
	start: '2026-04-09T10:00',
    },
    {
	title: 'Try Exploring Andover (TEA) Time',
	location: 'Harold Parker State Forest Stearns & Sudden Ponds',
	description: 'AVIS Trustee, Mark Kaluzny, is leading a series of hikes for the AMC. <a href="https://activities.outdoors.org/s/oc-activity/a5UUN0000022FoD2AU/act00017843">Registration Opens Sunday, April 12, 2026</a>',
	start: '2026-04-23T10:00',
    },
    {
	title: 'Try Exploring Andover (TEA) Time',
	location: 'Bay Circuit Trail – Deer Jump and Retelle Reservations and beyond',
	description: 'AVIS Trustee, Mark Kaluzny, is leading a series of hikes for the AMC. <a href="https://activities.outdoors.org/s/oc-activity/a5UUN0000022Fhl2AE/act00017841">Registration Opens Sunday, May 3, 2026</a>',
	start: '2026-05-14T10:00',
    },
    {
	title: 'Try Exploring Andover (TEA) Time',
	location: 'Bessie Goldsmith Reservation and All Persons Trail',
	description: 'AVIS Trustee, Mark Kaluzny, is leading a series of hikes for the AMC. <a href="https://activities.outdoors.org/s/oc-activity/a5UUN0000022FjN2AU/act00017842">Registration Opens Sunday, May 17, 2026</a>',
	start: '2026-05-28T10:00',
    },
    {
	title: 'Try Exploring Andover (TEA) Time',
	location: 'Bay Circuit Trail – Boxford State Forest in North Andover',
	description: 'AVIS Trustee, Mark Kaluzny, is leading a series of hikes for the AMC. <a href="https://activities.outdoors.org/s/oc-activity/a5UUN0000022IMH/act00017848">Registration Opens Sunday, May 31, 2026</a>',
	start: '2026-06-11T10:00',
    },

    
    {
	title: 'Try Exploring Andover (TEA) Time',
	location: 'Rafton, Fish Brook and Bald Hill, Wood Hill Reservations',
	description: 'AVIS Trustee, Mark Kaluzny, is leading a series of hikes for the AMC.   <a href="https://activities.outdoors.org/s/oc-activity/a5UUN000001nToH2AU/act00016532">Registration opens October 17</a>',
	start: '2025-10-30T10:00',
    },

    {
	title: 'Try Exploring Andover (TEA) Time',
	location: 'West Parish Meadow/Indian Ridge and Baker’s Meadow Reservations',
	description: 'AVIS Trustee, Mark Kaluzny, is leading a series of hikes for the AMC.   <a href="https://activities.outdoors.org/s/oc-activity/a5UUN000001nU7d2AE/act00016533">Registration opens November 21</a>',
	start: '2025-12-04T10:00',
    },

    {
	title: 'Try Exploring Andover (TEA) Time',
	location: 'Hike along the Shawsheen River through the Shawsheen and Dale Reservations',
	description: 'AVIS Trustee, Mark Kaluzny, is leading a series of hikes for the AMC.   <a href="https://activities.outdoors.org/s/oc-activity/a5UUN000001nUPN2A2/act00016535">Registration opens December 5</a>',
	start: '2025-12-18T10:00',
    },

    {
	title: 'Guided Nature & History Hike',
	location: '<a href="https://andoverhistoryandculture.org/indigenous-history-walk" target="__blank">Registration is required. Limited to 30 people.</a>',
	description: 'This special tour is typically offered in the fall. A collaboration between the Andover Center for History & Culture, AVIS, and Andover Conservation Commission, this walk is a guided nature and history hike on Deer Jump and Retelle Reservations.  <a href="​​https://andoverhistoryandculture.org/indigenous-history-walk">​​https://andoverhistoryandculture.org/indigenous-history-walk</a>',
	start: '2025-10-13T10:00',
	end: '2025-10-13T11:30'
    },
    
	{
		title: 'Try Exploring Andover (TEA) Time',
		location: 'West Parish Meadow, Indian Ridge and Baker’s Meadow Reservations',
	    description: '<p>We’ll hike a 4.0-mile loop with an elevation gain of 150ft across three of the most beautiful Andover Village Improvement Society (AVIS) reservations. More than 145 species of birds, including herons, migrating ducks and nesting Canadian geese, have been observed in these reservations. The wetlands also provide vital habitat for muskrat, mink and beaver. We will meander through the West Parish Meadow, across Indian Ridge Reservation and around Baker’s Meadow. We’ll intermittently be on the Bay Circuit Trail. If time allows we’ll include a side trip to the Alice Buck Memorial for a short talk about one of Andover’s first conservationists.</p><p>Meeting Point:<br/>West Parish Cemetery (Near the granite Arch)<br/>129 Reservation Rd, Andover, MA 01810</p><p><a href="https://trailsandsails.org/events/try-exploring-andover-hike-west-parish-meadow-indian-ridge-and-bakers-meadow-reservations/" target="_blank">Trails & Sails Link</a></p><p>Please contact Mark Kaluzny with questions: <a href="mailto:Treasurer@AvisAndover.org">Treasurer@AvisAndover.org</a> / mobile 603-531-9895</p>',
		start: '2025-09-18T10:00',
		end: '2025-09-18T13:00',
	},

    {
	title: 'Merrimack River Clean-up Afoot/Afloat',
	location: 'Afoot and Afloat',
	description:'<p><b>The Afoot hiking trail clean-up will begin at 15 Launching Road.</b><br/>There is plenty of street parking, and it has been the center of several past clean-ups. Thick trash bags, gloves, and grabber reacher tools for grasping those just out of reach floating water bottles, etc., will be provided.</p><p><b>The Afloat canoe/kayak clean-up will begin at the new Merrimack Conservation Area at the end of the Hefferon Right of Way.</b><br/>The site can be reached via a dirt road next to the Greater Lawrence Technical School. The paddling will begin and end here.  Folks are invited to bring their own watercraft; however, if someone needs a boat and gear, arrangements can possibly be pre-arranged. This is a bank launch, and rivers can be surprisingly challenging on occasion, so we are looking at experienced paddlers with medium to advanced skills.</p><p>Contact Bob Douglas at <a href="mailto:robert.douglas@andoverma.us">robert.douglas@andoverma.us</a> with questions.</p>',
	start: '2025-08-23T10:00',
	end: '2025-08-23T12:00',
    },
    
    {
	title: 'Photo Competition Winners Gallery Exhibit',
	location: 'Memorial Hall Library, 2 North Main Street, Andover',
	description: 'The public is welcome to view the winning AVIS Photo Competition images at the Memorial Hall Library from June 1 to June 30<br/>Hours: Mon-Thu: 9am—9pm; Fri-Sat: 9am—5pm;Sun: 1-5pm',
	start: '2025-06-01T09:00',
    },
    
    {
	title: '2025 Hike for Change, Day 16',
	location: '<a href="https://www.thedirtyhandsproject.org/event-details/day-16-lowell-memorial-auditorium-bald-hill-andover-2">Register</a>',
	description: 'Dirty Hands Project is a non-profit organization sponsoring the 2025 Hike for a Change. This 200-mile walk will occur throughout May (Mental Health Awareness Month) and follows the Bay Circuit Trail from Kingston, MA, to Newburyport, MA. Dirty Hands Project will be hiking the Andover sections of the BCT on May 19-21. Please join us as we hike through some of the amazing AVIS and Andover properties. Day 16: Lowell Memorial Auditorium -> Bald Hill, Andover.  Register <a href="https://www.thedirtyhandsproject.org/event-details/day-16-lowell-memorial-auditorium-bald-hill-andover-2">here</a>.',
        start: '2025-05-19T10:00',
        end: '2025-05-19T14:00',
    },
    {
	title: '2025 Hike for Change, Day 17',
	location: '<a href="https://www.thedirtyhandsproject.org/event-details/day-17-bald-hill-andover-ward-reservation-andover-2">Register</a>',
	description: 'Dirty Hands Project is a non-profit organization sponsoring the 2025 Hike for a Change. This 200-mile walk will occur throughout May (Mental Health Awareness Month) and follows the Bay Circuit Trail from Kingston, MA, to Newburyport, MA. Dirty Hands Project will be hiking the Andover sections of the BCT on May 19-21. Please join us as we hike through some of the amazing AVIS and Andover properties. Day 17: Bald Hill, Andover ->Ward Reservation, Andover.  Register <a href="https://www.thedirtyhandsproject.org/event-details/day-17-bald-hill-andover-ward-reservation-andover-2">here</a>.',
        start: '2025-05-20T10:00',
        end: '2025-05-20T14:00',
    },
    {
	title: '2025 Hike for Change, Day 18',
	location: '<a href="https://www.thedirtyhandsproject.org/event-details/day-18-ward-reservation-andover-to-boxford-state-forest-north-andover-2">Register</a>',
	description: 'Dirty Hands Project is a non-profit organization sponsoring the 2025 Hike for a Change. This 200-mile walk will occur throughout May (Mental Health Awareness Month) and follows the Bay Circuit Trail from Kingston, MA, to Newburyport, MA. Dirty Hands Project will be hiking the Andover sections of the BCT on May 19-21. Please join us as we hike through some of the amazing AVIS and Andover properties. Day 18: Ward Reservation, Andover to Boxford State Forest, North Andover.  Register <a href="https://www.thedirtyhandsproject.org/event-details/day-18-ward-reservation-andover-to-boxford-state-forest-north-andover-2">here</a>.',
        start: '2025-05-21T10:00',
        end: '2025-05-21T14:00',
    },
    {
	title: 'Mystic Link Trail Talk',
	location: 'Andover Library',
	description: 'Come and learn about the Mystic Link Trail, an exciting new walking & biking trail connecting Andover to Boston.<br/>Learn about a new recreational trail project called the <a href="https://mysticlinktrail.org" target="_blank">Mystic Link Trail</a> which originates in Andover and connects 10+ communities to Boston. This trail is a spur of the 230 mile Bay Circuit Trail that arcs around the city of Boston from Newburyport to Duxbury. Andover trail and conservation groups will also provide an overview of local trails and conservation efforts and help you get to the Mystic Link!<br/>Register on the <a href="https://mhl.libnet.info/event/13417792" target="_blank">Memorial Hall Library website</a>.',
	start: '2025-05-31T10:00',
	end: '2025-05-31T11:30',
    },
    {
	title: 'AVIS tent at the Andover Farmer\'s Market',
	titleHtml: 'AVIS tent at the Andover Farmer\'s Market <a href="https://andoverfarmersmarket.com">andoverfarmersmarket.com</a>',
	location: '34 Bartlet Street Andover between Town Offices and The Park.',
	description: "Stop by the AVIS tent at the Andover Farmer’s Market to learn about Eco Team, ongoing hikes, Goldsmith Woodlands APT updates, and ways students can fulfill community service requirements.",
	start: '2025-09-06T09:00',
	end:   '2025-09-06T13:00',
    },

    {
	title: 'AVIS tent at the Andover Farmer\'s Market',
	titleHtml: 'AVIS tent at the Andover Farmer\'s Market <a href="https://andoverfarmersmarket.com">andoverfarmersmarket.com</a>',
	location: '34 Bartlet Street Andover between Town Offices and The Park.',
	description: "Stop by the AVIS tent at the Andover Farmer’s Market to learn about Eco Team, ongoing hikes, Goldsmith Woodlands APT updates, and ways students can fulfill community service requirements.",
	start: '2025-07-26T09:00',
	end:   '2025-07-26T13:00',
    },

	{
		title: 'Try Exploring Andover (TEA) Time',
		location: 'Harold Rafton / Fish Brook and Bald Hill / Wood Hill Reservations',
		description: 'Try Exploring Andover (Tea) Time: Hike a 5 mile loop with an elevation gain of 600ft through a series of AVIS and Andover Conservation Commission reservations that are home to deer, beaver, fox and many bird species. Register <a href="https://activities.outdoors.org/s/oc-activity/a5UUN000000afMP2AY/act00010642">here.</a>',
		start: '2025-01-23T10:00',
		end: '2025-01-23T12:30',
	},

	{
	title: 'AVIS Photo Exhibit Opening Celebration and Reception',
	titleHtml: '<a href="/exhibit/2024-photo/index.html" target="_blank">AVIS Photo Exhibit Opening Celebration and Reception</a>',
	location: 'Robb Center, 30 Whittier Court, Andover',
	description: 'The public is welcome to join us for our Opening Night celebration presenting 33 winning images at the Robb Center.',
	start: '2025-03-06T18:30',
	end: '2025-03-06T20:00',
	},

	{
		title: 'Andover Winterfest 2025',
		location: 'Pomps Pond, 147 Abbot Street, Andover',
		description: 'Ice Fishing Derby, Guided Hikes, Hockey Target Competition, Wildlife Demo and Ice Rescue Demo. Register <a href="https://andoverma.myrec.com/info/activities/program_details.aspx?ProgramID=30471" target="_blank">here</a>.',
		start: '2025-02-02T11:00',
		end: '2025-02-02T14:00',
	},

	{
		title: 'Try Exploring Andover (TEA) Time',
		location: 'Goldsmith, Keck and Fosters Pond Reservations',
		description: 'AVIS Trustee, Mark Kaluzny, is leading this series of 11 hikes for the AMC. Held on the 2nd and 4th Thursday of each month through June, the hikes visit a combination of AVIS and surrounding organizations properties.  <a href="https://activities.outdoors.org/s/oc-activity/a5UUN000000bC742AE/act00010782" target="_blank"><b>Register here.</b></a>',
		start: '2025-02-13T10:00',
		end: '2025-02-13T13:00',
	},

	{
		title: 'Come energize at the Rockery!',
		location: '<a href="turtle.html">Turtle Mound Reservation</a>',
		description: 'Join Bill Kolbe, Warden of Follansbee Rockery, for a tour of this magnificent megalithic structure, otherwise known as the "Turtle Mound."  Immerse yourself in the energy and inspiration that emboldened a father and son to labor 20 years with only a capstan and an inclined plane to construct a magnificent sanctuary of natural beauty and tranquility.  The date of the tour also coincides with creator Paul B. Follansbee\'s birthday in 1811!  The Rockery is located on Lakeside Circle off Haggetts Pond Road.',
		start: '2025-02-22T10:00',
	},

	{
		title: 'Try Exploring Andover (TEA) Time',
		location: 'West Parish Meadow, Indian Ridge and Baker’s Meadow Reservations',
		description: 'AVIS Trustee, Mark Kaluzny, is leading this series of 11 hikes for the AMC. Held on the 2nd and 4th Thursday of each month through June, the hikes visit a combination of AVIS and surrounding organizations properties. <a href="https://activities.outdoors.org/s/oc-activity/a5UUN000000bdgj2AA/act00010827" target="_blank"><b>Register here.</b></a>',
		start: '2025-02-27T10:00',
		end: '2025-02-27T13:00',
	},

	{
		title: 'Try Exploring Andover (TEA) Time',
		location: 'Bay Circuit Trail—Deer Jump and Harold Rafton Reservations',
		description: 'AVIS Trustee, Mark Kaluzny, is leading this series of 11 hikes for the AMC. Held on the 2nd and 4th Thursday of each month through June, the hikes visit a combination of AVIS and surrounding organizations properties. <a href="https://activities.outdoors.org/s/oc-activity/a5UUN000000aeYP2AY/act00010637" target="_blank"><b>Register here.</b></a>',
		start: '2025-03-13T10:00',
		end: '2025-03-13T12:30',
	},

	{
		title: 'Try Exploring Andover (TEA) Time',
		location: 'Bay Circuit Trail—The Charles Ward Reservation',
		description: 'AVIS Trustee, Mark Kaluzny, is leading this series of 11 hikes for the AMC. Held on the 2nd and 4th Thursday of each month through June, the hikes visit a combination of AVIS and surrounding organizations properties. <a href="https://activities.outdoors.org/s/oc-activity/a5UUN000000aerl2AA/act00010638" target="_blank"><b>Register here.</b></a>',
		start: '2025-03-27T10:00',
		end: '2025-03-27T12:30',
	},

	{
		title: 'Eco Team Invasive Plant identification and Removal Session',
		location: '<a href="http://eepurl.com/ipSNWc">Sign up for Eco Team emails</a>',
		description: 'Email Lynn at <a href="mailto:HamletofLynn@gmail.com">HamletofLynn@gmail.com</a> if you have questions about Eco Team.',
		start: '2025-03-29T08:30',
		end: '2025-03-29T11:00',
	},

	{
		title: 'Try Exploring Andover (TEA) Time',
		location: 'Bay Circuit Trail—Andover to Tewksbury Spur',
		description: 'AVIS Trustee, Mark Kaluzny, is leading this series of 11 hikes for the AMC. Held on the 2nd and 4th Thursday of each month through June, the hikes visit a combination of AVIS and surrounding organizations properties. <a href="https://activities.outdoors.org/s/oc-activity/a5UUN000000bfKL2AY/act00010829" target="_blank"><b>Register here.</b></a>',
		start: '2025-04-10T10:00',
		end: '2025-04-10T13:00',
	},

	{
		title: 'The 2025 Annual Meeting of the Andover Village Improvement Society',
		location: 'Cormier Youth Center in Andover',
		description: '(6:00 p.m. - Welcome**/Dinner, 7:30 p.m. - Meeting/Speakers).<br/>Dr. Alex Maxwell, Fuss & O’Neil, senior environmental planner, and Ben Meade, the Town of Andover’s Conservation Commission’s Agent gave a talk on <i>Climate Ready Shawsheen</i>. <a href="https://imd0mxanj2.execute-api.us-west-2.amazonaws.com/ssr/watch/680a3c69559dded8edb81b07">Video of the meeting is here</a>.<br/>The dinner portion of the event requires prepayment. Tickets are $60 each. (AVIS Wardens and Eco Team Volunteers may purchase a ticket for $30). The Meeting/Speakers portion of the event is open to all members free of charge. All attendees should register for the event  <a href="https://secure.lglforms.com/form_engine/s/bevJO9zrH6xZ19GAN7KjjQ" target="_blank">here</a>.<br/>**Note that the Welcome hour cash bar will feature <u>non-alcoholic beverages only</u>.',
		start: '2025-04-22T18:00',
	},

	{
		title: 'Try Exploring Andover (TEA) Time',
		location: 'Along The Shawsheen River through The Shawsheen, Vale and Greene Reservations',
		description: 'AVIS Trustee, Mark Kaluzny, is leading this series of 11 hikes for the AMC. Held on the 2nd and 4th Thursday of each month through June, the hikes visit a combination of AVIS and surrounding organizations properties. <a href="https://activities.outdoors.org/s/oc-activity/a5UUN000000afHZ2AY/act00010641" target="_blank"><b>Register here.</b></a>',
		start: '2025-04-24T10:00',
		end: '2025-04-24T12:30',
	},

	{
		title: 'Eco Team Invasive Plant identification and Removal Session',
		location: '<a href="http://eepurl.com/ipSNWc">Sign up for Eco Team emails</a>',
		description: 'Email Lynn at <a href="mailto:HamletofLynn@gmail.com">HamletofLynn@gmail.com</a> if you have questions about Eco Team.',
		start: '2025-04-27T13:00',
		end: '2025-04-27T15:30',
	},

	{
		title: 'Try Exploring Andover (TEA) Time',
		location: 'Bay Circuit Trail—Harold Parker State Forest to Skug River Reservation',
		description: 'AVIS Trustee, Mark Kaluzny, is leading this series of 11 hikes for the AMC. Held on the 2nd and 4th Thursday of each month through June, the hikes visit a combination of AVIS and surrounding organizations properties. <a href="https://activities.outdoors.org/s/oc-activity/a5UUN000000dDBt2AM/act00010960" target="_blank"><b>Register here.</b></a>',
		start: '2025-05-08T10:00',
		end: '2025-05-08T13:00',
	},

	{
		title: 'Eco Team Invasive Plant identification and Removal Session',
		location: '<a href="http://eepurl.com/ipSNWc">Sign up for Eco Team emails</a>',
		description: 'Email Lynn at <a href="mailto:HamletofLynn@gmail.com">HamletofLynn@gmail.com</a> if you have questions about Eco Team.',
		start: '2025-05-17T08:30',
		end: '2025-05-17T11:00',
	},

	{
		title: 'Try Exploring Andover (TEA) Time',
		location: 'Bay Circuit Trail—Ward Hill to Skug River',
		description: 'AVIS Trustee, Mark Kaluzny, is leading this series of 11 hikes for the AMC. Held on the 2nd and 4th Thursday of each month through June, the hikes visit a combination of AVIS and surrounding organizations properties. <a href="https://activities.outdoors.org/s/oc-activity/a5UUN000000dDAI2A2/act00010961" target="_blank"><b>Register here.</b></a>',
		start: '2025-05-22T10:00',
		end: '2025-05-22T13:00',
	},

	{
		title: 'Eco Team Invasive Plant identification and Removal Session',
		location: '<a href="http://eepurl.com/ipSNWc">Sign up for Eco Team emails</a>',
		description: 'Email Lynn at <a href="mailto:HamletofLynn@gmail.com">HamletofLynn@gmail.com</a> if you have questions about Eco Team.',
		start: '2025-05-24T08:30',
		end: '2025-05-24T11:00',
	},

	{
		title: 'Eco Team Invasive Plant identification and Removal Session',
		location: '<a href="http://eepurl.com/ipSNWc">Sign up for Eco Team emails</a>',
		description: 'Email Lynn at <a href="mailto:HamletofLynn@gmail.com">HamletofLynn@gmail.com</a> if you have questions about Eco Team.',
		start: '2025-06-07T08:30',
		end: '2025-06-07T11:00',
	},

	{
		title: 'Try Exploring Andover (TEA) Time',
		location: 'West Parish, Indian Ridge, Shawsheen and Vale Reservations to Pomps Pond',
		description: 'AVIS Trustee, Mark Kaluzny, is leading this series of 11 hikes for the AMC. Held on the 2nd and 4th Thursday of each month through June, the hikes visit a combination of AVIS and surrounding organizations properties. <a href="https://activities.outdoors.org/s/oc-activity/a5UUN000000dDdJ2AU/act00010963" target="_blank"><b>Register here.</b></a>',
		start: '2025-06-12T10:00',
		end: '2025-06-12T13:00',
	},

	{
		title: 'Eco Team Invasive Plant identification and Removal Session',
		location: '<a href="http://eepurl.com/ipSNWc">Sign up for Eco Team emails</a>',
		description: 'Email Lynn at <a href="mailto:HamletofLynn@gmail.com">HamletofLynn@gmail.com</a> if you have questions about Eco Team.',
		start: '2025-06-21T08:30',
		end: '2025-06-21T11:00',
	},

	{
		title: 'Try Exploring Andover (TEA) Time',
		location: 'Den Rock Park and Bird Sanctuary',
		description: 'AVIS Trustee, Mark Kaluzny, is leading this series of 11 hikes for the AMC. Held on the 2nd and 4th Thursday of each month through June, the hikes visit a combination of AVIS and surrounding organizations properties. <a href="https://activities.outdoors.org/s/oc-activity/a5UUN000000dDjl2AE/act00010964" target="_blank"><b>Register here.</b></a>',
		start: '2025-06-26T10:00',
		end: '2025-06-26T13:00',
	},

	{
		title: 'Eco Team Invasive Plant identification and Removal Session',
		location: 'West Parish Meadow',
		description: 'Email Lynn at <a href="mailto:HamletofLynn@gmail.com">HamletofLynn@gmail.com</a> if you have questions about Eco Team.',
		start: '2025-06-29T13:00',
		end: '2025-06-29T15:30',
	},

	{
		title: 'Eco Team Invasive Plant identification and Removal Session',
		location: 'Goldsmith Reservation',
		description: 'Email Lynn at <a href="mailto:HamletofLynn@gmail.com">HamletofLynn@gmail.com</a> if you have questions about Eco Team.',
		start: '2025-07-06T08:30',
		end: '2025-07-06T11:00',
	},

	{
		title: 'Eco Team Invasive Plant identification and Removal Session',
		location: '<a href="http://eepurl.com/ipSNWc">Sign up for Eco Team emails</a>',
		description: 'Email Lynn at <a href="mailto:HamletofLynn@gmail.com">HamletofLynn@gmail.com</a> if you have questions about Eco Team.',
		start: '2025-07-19T08:30',
		end: '2025-07-19T11:00',
	},

	{
		title: 'Eco Team Invasive Plant identification and Removal Session',
		location: '<a href="http://eepurl.com/ipSNWc">Sign up for Eco Team emails</a>',
		description: 'Email Lynn at <a href="mailto:HamletofLynn@gmail.com">HamletofLynn@gmail.com</a> if you have questions about Eco Team.',
		start: '2025-08-02T08:30',
		end: '2025-08-02T11:00',
	},

	{
		title: 'Eco Team Invasive Plant identification and Removal Session',
		location: '<a href="http://eepurl.com/ipSNWc">Sign up for Eco Team emails</a>',
		description: 'Email Lynn at <a href="mailto:HamletofLynn@gmail.com">HamletofLynn@gmail.com</a> if you have questions about Eco Team.',
		start: '2025-08-16T08:30',
		end: '2025-08-16T11:00',
	},

	{
		title: 'Eco Team Invasive Plant identification and Removal Session',
		location: '<a href="http://eepurl.com/ipSNWc">Sign up for Eco Team emails</a>',
		description: 'Email Lynn at <a href="mailto:HamletofLynn@gmail.com">HamletofLynn@gmail.com</a> if you have questions about Eco Team.',
		start: '2025-08-30T08:30',
		end: '2025-08-30T11:00',
	},

	{
		title: 'Eco Team Invasive Plant identification and Removal Session',
		location: '<a href="http://eepurl.com/ipSNWc">Sign up for Eco Team emails</a>',
		description: 'Email Lynn at <a href="mailto:HamletofLynn@gmail.com">HamletofLynn@gmail.com</a> if you have questions about Eco Team.',
		start: '2025-09-13T08:30',
		end: '2025-09-13T11:00',
	},

	{
		title: 'Eco Team Invasive Plant identification and Removal Session',
		location: '<a href="http://eepurl.com/ipSNWc">Sign up for Eco Team emails</a>',
		description: 'Email Lynn at <a href="mailto:HamletofLynn@gmail.com">HamletofLynn@gmail.com</a> if you have questions about Eco Team.',
		start: '2025-09-27T08:30',
		end: '2025-09-27T11:00',
	},

	{
		title: 'Eco Team Invasive Plant identification and Removal Session',
		location: '<a href="http://eepurl.com/ipSNWc">Sign up for Eco Team emails</a>',
		description: 'Email Lynn at <a href="mailto:HamletofLynn@gmail.com">HamletofLynn@gmail.com</a> if you have questions about Eco Team.',
		start: '2025-10-11T08:30',
		end: '2025-10-11T11:00',
	},

	{
		title: 'Eco Team Invasive Plant identification and Removal Session',
		location: '<a href="http://eepurl.com/ipSNWc">Sign up for Eco Team emails</a>',
		description: 'Email Lynn at <a href="mailto:HamletofLynn@gmail.com">HamletofLynn@gmail.com</a> if you have questions about Eco Team.',
		start: '2025-10-18T08:30',
		end: '2025-10-18T11:00',
	},

	{
		title: 'Eco Team Invasive Plant identification and Removal Session',
		location: '<a href="http://eepurl.com/ipSNWc">Sign up for Eco Team emails</a>',
		description: 'Email Lynn at <a href="mailto:HamletofLynn@gmail.com">HamletofLynn@gmail.com</a> if you have questions about Eco Team.',
		start: '2025-11-01T08:30',
		end: '2025-11-01T11:00',
	},

	{
		title: 'Eco Team Invasive Plant identification and Removal Session',
		location: '<a href="http://eepurl.com/ipSNWc">Sign up for Eco Team emails</a>',
		description: 'Email Lynn at <a href="mailto:HamletofLynn@gmail.com">HamletofLynn@gmail.com</a> if you have questions about Eco Team.',
		start: '2025-11-15T08:30',
		end: '2025-11-15T11:00',
	},

	{
		title: 'Eco Team Invasive Plant identification and Removal Session',
		location: '<a href="http://eepurl.com/ipSNWc">Sign up for Eco Team emails</a>',
		description: 'Email Lynn at <a href="mailto:HamletofLynn@gmail.com">HamletofLynn@gmail.com</a> if you have questions about Eco Team.',
		start: '2025-11-29T08:30',
		end: '2025-11-29T11:00',
	},

	{
		title: 'Invasive Plant identification and Removal Session',
		location: 'Andover Highlands',
		description: 'Email Lynn at <a href="mailto:HamletofLynn@gmail.com">HamletofLynn@gmail.com</a> if you have questions about Eco Team.',
		start: '2024-11-30T08:30',
		end: '2024-11-30T11:00',
	},

	{
		title: 'Invasive Plant identification and Removal Session',
		location: 'Deer Jump at Brundrett Avenue',
		description: 'Email Lynn at <a href="mailto:HamletofLynn@gmail.com">HamletofLynn@gmail.com</a> if you have questions about Eco Team.',
		start: '2024-11-16T08:30',
		end: '2024-11-16T11:00',
	},

	{
		title: 'Invasive Plant identification and Removal Session',
		location: 'Goldsmith Woods',
		description: 'Email Lynn at <a href="mailto:HamletofLynn@gmail.com">HamletofLynn@gmail.com</a> if you have questions about Eco Team.',
		start: '2024-11-03T13:00',
		end: '2024-11-03T15:00',
	},

	{
		title: 'Guided Nature &amp; History Hike',
		location: 'Deer Jump and Retelle Reservations',
		description: 'Andover Center for History & Culture, AVIS, and Andover Conservation Commission offer a guided nature and history hike on Deer Jump and Retelle Reservations. Join us for a Fall discovery of birds, plants, trees, ecology and those who settled here over the last 10,000 years, including the Pennacook Native peoples. <br /><br />Pre-registration is required <a href="https://andoverhistoryandculture.org/indigenous-history-walk" target="_blank">https://andoverhistoryandculture.org/indigenous-history-walk</a>. Easy terrain ~ Limited to 35 people.',
		start: '2024-11-02T10:30',
		end: '2024-11-02T12:00',
	},

	{
		title: 'Invasive Plant identification and Removal Session',
		location: 'Sanborn Reservation',
		description: 'Email Lynn at <a href="mailto:HamletofLynn@gmail.com">HamletofLynn@gmail.com</a> if you have questions about Eco Team.',
		start: '2024-10-05T08:30',
		end: '2024-10-05T11:00',
	},

	{
		title: 'Invasive Plant identification and Removal Session',
		location: 'Deer Jump at Jillian Way',
		description: 'Email Lynn at <a href="mailto:HamletofLynn@gmail.com">HamletofLynn@gmail.com</a> if you have questions about Eco Team.',
		start: '2024-10-13T13:00',
		end: '2024-10-13T15:00',
	},

	{
		title: 'Invasive Plant identification and Removal Session',
		location: 'Deer Jump at Brundrett Avenue',
		description: 'Email Lynn at <a href="mailto:HamletofLynn@gmail.com">HamletofLynn@gmail.com</a> if you have questions about Eco Team.',
		start: '2024-10-26T08:30',
		end: '2024-10-26T11:00',
	},

	{
		title: 'Invasive Plant identification and Removal Session',
		location: 'Deer Jump at Nollet',
		description: 'Email Lynn at <a href="mailto:HamletofLynn@gmail.com">HamletofLynn@gmail.com</a> if you have questions about Eco Team.',
		start: '2024-08-31T08:30',
		end: '2024-08-31T11:00',
	},

	{
		title: 'Invasive Plant identification and Removal Session',
		location: 'Deer Jump at Nollet',
		description: 'Email Lynn at <a href="mailto:HamletofLynn@gmail.com">HamletofLynn@gmail.com</a> if you have questions about Eco Team.',
		start: '2024-09-08T08:30',
		end: '2024-09-08T11:00',
	},

	{
		title: 'Invasive Plant identification and Removal Session',
		location: 'Andover Highlands',
		description: 'Email Lynn at <a href="mailto:HamletofLynn@gmail.com">HamletofLynn@gmail.com</a> if you have questions about Eco Team.',
		start: '2024-09-21T08:30',
		end: '2024-09-21T11:00',
	},

	{
		title: 'World Conservation Day',
		location: 'TBA',
		description: 'Email Lynn at <a href="mailto:HamletofLynn@gmail.com">HamletofLynn@gmail.com</a> if you have questions about Eco Team.',
		start: '2024-07-27T09:00',
		end: '2024-07-27T13:00',
	},

	{
		title: 'Invasive Plant identification and Removal Session',
		location: 'Andover Highlands',
		description: 'Email Lynn at <a href="mailto:HamletofLynn@gmail.com">HamletofLynn@gmail.com</a> if you have questions about Eco Team.',
		start: '2024-08-03T08:30',
		end: '2024-08-03T11:00',
	},

	{
		title: 'Invasive Plant identification and Removal Session',
		location: 'Sakowich Reservation',
		description: 'Email Lynn at <a href="mailto:HamletofLynn@gmail.com">HamletofLynn@gmail.com</a> if you have questions about Eco Team.',
		start: '2024-08-17T08:30',
		end: '2024-08-17T11:00',
	},

	{
		title: 'HIKE THE LOWELL LAWRENCE RAILROAD FROM HAGGETTS POND TO THE TEWKSBURY HOSPITAL',
		location: 'Lowell & Lawrence Railroad Reservation',
		description: 'Join us on a 5 mile one way hike along the old Lowell & Lawrence Railroad which started operation in 1848. We will meet in Tewksbury and carpool to Haggett’s pond to start our hike.  We\'ll cover parts of the Bay Circuit Spur through Fishbrook Reservation, Haggett\'s Pond, Bellevue Reservation, Pinnacle / Hospital Conservation Trail, past the Ogonowski Memorial Model Flying Field and the Tewksbury State Hospital grounds and cemetery.<br /><br /> We\'ll discuss some of the history of the area as well as current challenges with conservation and combatting invasive plant species. <a href="https://activities.outdoors.org/search/index.cfm/action/details/id/151064" target="_blank">Register here</a>',
		start: '2024-07-20T09:00',
		end: '2024-07-20T13:00',
	},

	{
		title: 'Invasive Plant identification and Removal Session',
		location: 'Deer Jump at Brundrett Avenue',
		description: 'We will be celebrating World Conservation Day at the Andover Farmers\' Market (AFM) South Church parking lot @ 41 Central St, Andover, MA 01810. Come and join the celebration.',
		start: '2024-07-20T08:30',
		end: '2024-07-20T11:00',
	},

	{
		title: 'Invasive Plant identification and Removal Session',
		location: 'Andover Highlands Reservation',
		description: 'Email Lynn at <a href="mailto:HamletofLynn@gmail.com">HamletofLynn@gmail.com</a> if you have questions about Eco Team.',
		start: '2024-07-07T13:00',
		end: '2024-07-07T15:30',
	},

	{
		title: 'Invasive Plant identification and Removal Session',
		location: 'Andover Highlands',
		description: 'Email Lynn at <a href="mailto:HamletofLynn@gmail.com">HamletofLynn@gmail.com</a> if you have questions about Eco Team.',
		start: '2024-06-29T08:30',
		end: '2024-06-29T11:00',
	},

	{
		title: 'Invasive Plant identification and Removal Session',
		location: 'Shawsheen River Reservation',
		description: 'Email Lynn at <a href="mailto:HamletofLynn@gmail.com">HamletofLynn@gmail.com</a> if you have questions about Eco Team.',
		start: '2024-06-15T08:30',
		end: '2024-06-15T11:00',
	},

	{
		title: 'Invasive Plant identification and Removal Session',
		location: 'Richard J. Bonier',
		description: 'Email Lynn at <a href="mailto:HamletofLynn@gmail.com">HamletofLynn@gmail.com</a> if you have questions about Eco Team.',
		start: '2024-05-18T08:30',
		end: '2024-05-18T11:00',
	},

	{
		title: 'HIKE THE SHAWSHEEN RIVER AND POMP’S POND IN ANDOVER',
		location: 'Pomps Pond',
		description: 'Come and enjoy a one-way riverside hike, approx 5+ miles, along the beautiful Shawsheen River and Bay Circuit Trail in Andover. We\'ll visit some of the recent habitat restoration sites and see local efforts to fight invasive plant species as well as hear stories about the history of the properties. Registration opens on May 15th: <a href="https://activities.outdoors.org/search/index.cfm/action/details/id/149389" target="_blank">https://activities.outdoors.org/search/index.cfm/action/details/id/149389</a>',
		start: '2024-05-26T10:30',
		end: '2024-05-26T14:30',
	},

	{
		title: 'Invasive Plant identification and Removal Session',
		location: 'Lupine Road Reservation and Shawsheen River Reservation',
		description: 'Email Lynn at <a href="mailto:HamletofLynn@gmail.com">HamletofLynn@gmail.com</a> if you have questions about Eco Team.',
		start: '2024-06-01T08:30',
		end: '2024-06-01T11:00',
	},

	{
		title: 'Invasive Plant identification and Removal Session',
		location: 'Sunset Rock at Hammond Way',
		description: 'Email Lynn at <a href="mailto:HamletofLynn@gmail.com">HamletofLynn@gmail.com</a> if you have questions about Eco Team. <br/><br/>The weather looks to be a mix of clouds and sun in the morning. Sunset Rock was basically closed for years due to the trails and entrance being impassible. A lot of work has been done in the last couple of years by the wardens, various volunteer groups, and the Eco Team. The trails are very well-defined now. It has an astounding amount of Burning Bush (Euonymus alatus). You\'ll learn to identify all stages of this plant.<br /><br />Park on Hammond Way. Please do not block any driveways. The entrance is down the dirt road, which is actually someone\'s driveway. Please walk along the grass on the right, which is the AVIS easement.',
		start: '2024-04-13T08:30',
		end: '2024-04-13T11:00',
	},

	{
		title: 'Andover Volunteer Fair',
		location: 'Cormier Youth Center',
		description: 'Stop by our booth to find out about all the different volunteer opportunities with AVIS. See more about the event <a href="https://www.facebook.com/AndoverSeniorCenter/posts/pfbid02cL871iAzV64X4Na1a2xRBJ4WCc3Z5tL8WBMoVdwkdtYAp7msGVBajYUkpg4knMjbl/" target="_blank">here</a>.',
		start: '2024-04-17T10:00',
		end: '2024-04-17T13:00',
	},

	{
		title: 'Hike the Bay Circuit Trail through West Parish Cemetery and Indian Ridge Reservation',
		location: 'West Parish Cemetery and Indian Ridge Reservation',
		description: 'Come join us for a ~4.5 mile loop hike across some of the most beautiful AVIS reservations. We will meander through the West Parish Cemetery, around Baker\'s Meadow and return via Indian Ridge Reservation and the West Parish Meadow.<br /><br /> This will include a stop at the Alice Buck Memorial for a short conversation about one of Andover\'s first conservationists.<br /><br /> More than 145 species of birds, including herons, migrating ducks and nesting Canadian geese, have been observed in these reservations. The wetlands also provide vital habitat for muskrat, mink and beaver. <br /><br /> We plan to end our hike between 1:30 and 2:00PM, depending on the pace of the group.<br /><br /> ppropriate hiking footwear required (no sneakers please).<br /><br /> Rain, high winds and snowstorm will cancel the hike.<br /><br /> Sorry no dogs.<br /><br /> onfirmed participants will be e-mailed directions and reminders prior to the hike. Any questions contact the leaders.<br /><br /> Registration is required. Registration opens Apr 17, 2024 Please visit: <a target="_blank" href="https://activities.outdoors.org/search/index.cfm/action/details/id/148875">https://activities.outdoors.org/search/index.cfm/action/details/id/148875</a>',
		start: '2024-04-27T10:00',
		end: '2024-04-27T14:00',
	},

	{
		title: 'Invasive Plant identification and Removal Session',
		location: 'Goldsmith Woods',
		description: 'Email Lynn at <a href="mailto:HamletofLynn@gmail.com">HamletofLynn@gmail.com</a> if you have questions about Eco Team.',
		start: '2024-04-27T08:30',
		end: '2024-04-27T11:00',
	},

	{
		title: 'Invasive Plant identification and Removal Session',
		location: 'Sunset Rock',
		description: 'Email Lynn at <a href="mailto:HamletofLynn@gmail.com">HamletofLynn@gmail.com</a> if you have questions about Eco Team.',
		start: '2024-05-05T08:30',
		end: '2024-05-05T11:00',
	},

	{
		title: 'AVIS Annual Meeting',
		location: 'Old Town Hall on Main Street in Andover',
		description: 'The AVIS Annual Meeting will be the evening of Tuesday, April 9, 2024 at the Old Town Hall on Main Street in Andover. The schedule of events is as follows: <ul> <li>Cocktails at 6:00 PM </li> <li>Dinner at 6:30 PM</li> <li>Business Meeting at 7:00-8:30 PM</li></ul> The business Meeting will include the election of trustees, AVIS Financial Report, Land Management Report, Land Stewardship Report, and a special projects update. This will be followed by guest speaker Meg Holmes, who will discuss Traversing the Bay Circuit Trail in Andover.',
		start: '2024-04-09T18:00',
		end: '2024-04-09T20:30',
	},

	{
		title: 'Invasive Plant identification and Removal Session',
		location: 'Deer Jump at Brundrett Avenue',
		description: 'Email Lynn at <a href="mailto:HamletofLynn@gmail.com">HamletofLynn@gmail.com</a> if you have questions about Eco Team.',
		start: '2024-03-30T08:30',
		end: '2024-03-30T11:00',
	},

	{
		title: 'Hike the Shawsheen River &amp; Pomp\'s Pond in Andover',
		location: 'Shawsheen River &amp; Pomp\'s Pond in Andover',
		description: 'Come and enjoy a one-way riverside hike, approx 5+ miles, along the beautiful Shawsheen River and Bay Circuit Trail in Andover.<br /><br /> We\'ll hike through several local reservations including:<br /> <ul> <li>West Parish Meadow</li> <li>Bakers Meadow</li> <li>Indian Ridge Reservation</li> <li>Shawsheen Reservation</li> <li>Vale Reservation</li> <li>Pomp\'s Pond</li> </ul> We\'ll visit some of the recent habitat restoration sites and see local efforts to fight invasive plant species as well as hear stories about the history of the properties. <br /><br /> We will be hiking at an easy pace over roots and rocks with numerous ups and downs as we alternate being directly on the shore of the river to the higher ground overlooking it. We plan to end our hike between 1:30 and 2:00PM, depending on the pace of the group. <br /><br /> Registration is required. Registration opens Mar 13, 2024 <br /><br /> Please visit: <a href="https://activities.outdoors.org/search/index.cfm/action/details/id/148650">https://activities.outdoors.org/search/index.cfm/action/details/id/148650</a>',
		start: '2024-05-23T10:00',
		end: '2024-05-23T14:00',
	},

	{
		title: 'Hike the Bay Circuit Trail through Deer Jump AND Rafton Reservations',
		location: 'Deer Jump AND Rafton Reservations',
		description: 'Come and enjoy a one-way hike along the Merrimack River and Fish Brook, approximately 5 miles. We will leave our cars at the Tewksbury Pumping station and carpool to the starting point. We\'ll hike through several smaller reservations and see extensive stands of Hemlock and immense white pines.<br /><br />We will be hiking at an easy pace over roots and rocks with numerous ups and downs as we alternate being directly on the shore of the river to the higher ground overlooking it. We plan to end our hike between 1:30 and 2:00PM, depending on the pace of the group.<br /><br /> Registration is required. Please visit: <a target="_blank" href="https://activities.outdoors.org/search/index.cfm/action/details/id/148379">https://activities.outdoors.org/search/index.cfm/action/details/id/148379</a>',
		start: '2024-02-17T10:00',
		end: '2024-02-17T14:00',
	},

]

