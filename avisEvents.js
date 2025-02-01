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
	location: 'Harold Rafton / Fish Brook and Bald Hill / Wood Hill Reservations',
	description: 'Try Exploring Andover (Tea) Time: Hike a 5 mile loop with an elevation gain of 600ft through a series of AVIS and Andover Conservation Commission reservations that are home to deer, beaver, fox and many bird species. Register <a href="https://activities.outdoors.org/s/oc-activity/a5UUN000000afMP2AY/act00010642">here.</a>',
	start: '2025-01-23T10:00',
	end: '2025-01-23T12:30',
    },

    {
	title: 'AVIS Photo Exhibit Opening Night',
	titleHtml: '<a href="/exhibit/2024-photo/index.html" target="_blank">AVIS Photo Exhibit Opening Night</a>',
	location: 'Robb Center, 30 Whittier Court, Andover',
	description: 'The public is welcome to join us for our Opening Night celebration presenting 33 winning images at the Robb Center.',
	start: '2025-02-06T18:30',
	end: '2025-02-06T20:00',
    },

    {
	title: 'Andover Winterfest 2025',
	location: 'Pomps Pond, 147 Abbot Street, Andover',
	description: 'Ice Fishing Derby, Guided Hikes, Hockey Target Competition, Wildlife Demo and Ice Rescue Demo. Register <a href="https://andoverma.myrec.com/info/activities/program_details.aspx?ProgramID=30471" target="_blank">here</a>.',
	start: '2025-02-05T11:00',
	end: '2025-02-05T14:00',
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
	location: 'TBD',
	description: 'Email Lynn at <a href="mailto:HamletofLynn@gmail.com">HamletofLynn@gmail.com</a> to be put on the Eco Team email list. You’ll get up-to-date notifications about the location.',
	start: '2025-03-29T08:30',
	end: '2025-03-29T11:00',
    },
    
    {
	title: 'Try Exploring Andover (TEA) Time',
	location: 'Bay Circuit Trail—Andover to Tewksbury Spur',
	description: 'AVIS Trustee, Mark Kaluzny, is leading this series of 11 hikes for the AMC. Held on the 2nd and 4th Thursday of each month through June, the hikes visit a combination of AVIS and surrounding organizations properties. <a href="https://activities.outdoors.org/s/oc-activity/a5UUN000000bfKL2AY/act00010829" target="_blank"><b>Register here.</b></a>',
	start: '2025-04-10T10:00',
	end: '2025-04-10T11:30',
    },
    
    {
	title: 'Eco Team Invasive Plant identification and Removal Session',
	location: 'TBD',
	description: 'Email Lynn at <a href="mailto:HamletofLynn@gmail.com">HamletofLynn@gmail.com</a> to be put on the Eco Team email list. You’ll get up-to-date notifications about the location.',
	start: '2025-04-12T08:30',
	end: '2025-04-12T11:00',
    },
    
    {
	title: 'The 2025 Annual Meeting of the Andover Village Improvement Society',
	location: 'Cormier Youth Center in Andover',
	description: '(6:00 p.m. - Cocktails/Dinner, 7:30 p.m. - Meeting/Speakers).<br/>The dinner portion of the event requires prepayment. Tickets are $60 each. (AVIS Wardens and Eco Team Volunteers may purchase a ticket for $30). The Meeting/Speakers portion of the event is open to all members free of charge. All attendees should register for the event  <a href="https:secure.lglforms.com/form_engine/s/bevJO9zrH6xZ19GAN7KjjQ" target="_blank">here</a>.',
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
	location: 'TBD',
	description: 'Email Lynn at <a href="mailto:HamletofLynn@gmail.com">HamletofLynn@gmail.com</a> to be put on the Eco Team email list. You’ll get up-to-date notifications about the location.',
	start: '2025-04-26T08:30',
	end: '2025-04-26T11:00',
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
	location: 'TBD',
	description: 'Email Lynn at <a href="mailto:HamletofLynn@gmail.com">HamletofLynn@gmail.com</a> to be put on the Eco Team email list. You’ll get up-to-date notifications about the location.',
	start: '2025-05-10T08:30',
	end: '2025-05-10T11:00',
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
	location: 'TBD',
	description: 'Email Lynn at <a href="mailto:HamletofLynn@gmail.com">HamletofLynn@gmail.com</a> to be put on the Eco Team email list. You’ll get up-to-date notifications about the location.',
	start: '2025-05-24T08:30',
	end: '2025-05-24T11:00',
    },
    
    {
	title: 'Eco Team Invasive Plant identification and Removal Session',
	location: 'TBD',
	description: 'Email Lynn at <a href="mailto:HamletofLynn@gmail.com">HamletofLynn@gmail.com</a> to be put on the Eco Team email list. You’ll get up-to-date notifications about the location.',
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
	location: 'TBD',
	description: 'Email Lynn at <a href="mailto:HamletofLynn@gmail.com">HamletofLynn@gmail.com</a> to be put on the Eco Team email list. You’ll get up-to-date notifications about the location.',
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
	location: 'TBD',
	description: 'Email Lynn at <a href="mailto:HamletofLynn@gmail.com">HamletofLynn@gmail.com</a> to be put on the Eco Team email list. You’ll get up-to-date notifications about the location.',
	start: '2025-06-29T13:00',
	end: '2025-06-29T15:30',
    },
   
    {
	title: 'Eco Team Invasive Plant identification and Removal Session',
	location: 'TBD',
	description: 'Email Lynn at <a href="mailto:HamletofLynn@gmail.com">HamletofLynn@gmail.com</a> to be put on the Eco Team email list. You’ll get up-to-date notifications about the location.',
	start: '2025-07-06T13:00',
	end: '2025-07-06T15:30',
    },
    
    {
	title: 'Eco Team Invasive Plant identification and Removal Session',
	location: 'TBD',
	description: 'Email Lynn at <a href="mailto:HamletofLynn@gmail.com">HamletofLynn@gmail.com</a> to be put on the Eco Team email list. You’ll get up-to-date notifications about the location.',
	start: '2025-07-19T08:30',
	end: '2025-07-19T11:00',
    },
    
    {
	title: 'Eco Team Invasive Plant identification and Removal Session',
	location: 'TBD',
	description: 'Email Lynn at <a href="mailto:HamletofLynn@gmail.com">HamletofLynn@gmail.com</a> to be put on the Eco Team email list. You’ll get up-to-date notifications about the location.',
	start: '2025-08-02T08:30',
	end: '2025-08-02T11:00',
    },
    
    {
	title: 'Eco Team Invasive Plant identification and Removal Session',
	location: 'TBD',
	description: 'Email Lynn at <a href="mailto:HamletofLynn@gmail.com">HamletofLynn@gmail.com</a> to be put on the Eco Team email list. You’ll get up-to-date notifications about the location.',
	start: '2025-08-16T08:30',
	end: '2025-08-16T11:00',
    },
    
    {
	title: 'Eco Team Invasive Plant identification and Removal Session',
	location: 'TBD',
	description: 'Email Lynn at <a href="mailto:HamletofLynn@gmail.com">HamletofLynn@gmail.com</a> to be put on the Eco Team email list. You’ll get up-to-date notifications about the location.',
	start: '2025-08-30T08:30',
	end: '2025-08-30T11:00',
    },
    
    {
	title: 'Eco Team Invasive Plant identification and Removal Session',
	location: 'TBD',
	description: 'Email Lynn at <a href="mailto:HamletofLynn@gmail.com">HamletofLynn@gmail.com</a> to be put on the Eco Team email list. You’ll get up-to-date notifications about the location.',
	start: '2025-09-13T08:30',
	end: '2025-09-13T11:00',
    },
    
    {
	title: 'Eco Team Invasive Plant identification and Removal Session',
	location: 'TBD',
	description: 'Email Lynn at <a href="mailto:HamletofLynn@gmail.com">HamletofLynn@gmail.com</a> to be put on the Eco Team email list. You’ll get up-to-date notifications about the location.',
	start: '2025-09-27T08:30',
	end: '2025-09-27T11:00',
    },
    
    {
	title: 'Eco Team Invasive Plant identification and Removal Session',
	location: 'TBD',
	description: 'Email Lynn at <a href="mailto:HamletofLynn@gmail.com">HamletofLynn@gmail.com</a> to be put on the Eco Team email list. You’ll get up-to-date notifications about the location.',
	start: '2025-10-11T08:30',
	end: '2025-10-11T11:00',
    },
    
    {
	title: 'Eco Team Invasive Plant identification and Removal Session',
	location: 'TBD',
	description: 'Email Lynn at <a href="mailto:HamletofLynn@gmail.com">HamletofLynn@gmail.com</a> to be put on the Eco Team email list. You’ll get up-to-date notifications about the location.',
	start: '2025-10-19T13:00',
	end: '2025-10-19T15:30',
    },
    
    {
	title: 'Eco Team Invasive Plant identification and Removal Session',
	location: 'TBD',
	description: 'Email Lynn at <a href="mailto:HamletofLynn@gmail.com">HamletofLynn@gmail.com</a> to be put on the Eco Team email list. You’ll get up-to-date notifications about the location.',
	start: '2025-11-01T08:30',
	end: '2025-11-01T11:00',
    },
    
    {
	title: 'Eco Team Invasive Plant identification and Removal Session',
	location: 'TBD',
	description: 'Email Lynn at <a href="mailto:HamletofLynn@gmail.com">HamletofLynn@gmail.com</a> to be put on the Eco Team email list. You’ll get up-to-date notifications about the location.',
	start: '2025-11-15T08:30',
	end: '2025-11-15T11:00',
    },
    
    {
	title: 'Eco Team Invasive Plant identification and Removal Session',
	location: 'TBD',
	description: 'Email Lynn at <a href="mailto:HamletofLynn@gmail.com">HamletofLynn@gmail.com</a> to be put on the Eco Team email list. You’ll get up-to-date notifications about the location.',
	start: '2025-11-29T08:30',
	end: '2025-11-29T11:00',
    },
    
    {
	title: 'Invasive Plant identification and Removal Session',
	location: 'Andover Highlands',
	description: 'Email Lynn at <a href="mailto:HamletofLynn@gmail.com">HamletofLynn@gmail.com</a> to be put on the Eco Team email list. You’ll get up-to-date notifications about the location.',
	start: '2024-11-30T08:30',
	end: '2024-11-30T11:00',
    },
    
    {
	title: 'Invasive Plant identification and Removal Session',
	location: 'Deer Jump at Brundrett Avenue',
	description: 'Email Lynn at <a href="mailto:HamletofLynn@gmail.com">HamletofLynn@gmail.com</a> to be put on the Eco Team email list. You’ll get up-to-date notifications about the location.',
	start: '2024-11-16T08:30',
	end: '2024-11-16T11:00',
    },
    
    {
	title: 'Invasive Plant identification and Removal Session',
	location: 'Goldsmith Woods',
	description: 'Email Lynn at <a href="mailto:HamletofLynn@gmail.com">HamletofLynn@gmail.com</a> to be put on the Eco Team email list. You’ll get up-to-date notifications about the location.',
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
	description: 'Email Lynn at <a href="mailto:HamletofLynn@gmail.com">HamletofLynn@gmail.com</a> to be put on the Eco Team email list. You’ll get up-to-date notifications about the location.',
	start: '2024-10-05T08:30',
	end: '2024-10-05T11:00',
    },

    {
	title: 'Invasive Plant identification and Removal Session',
	location: 'Deer Jump at Jillian Way',
	description: 'Email Lynn at <a href="mailto:HamletofLynn@gmail.com">HamletofLynn@gmail.com</a> to be put on the Eco Team email list. You’ll get up-to-date notifications about the location.',
	start: '2024-10-13T13:00',
	end: '2024-10-13T15:00',
    },

    {
	title: 'Invasive Plant identification and Removal Session',
	location: 'Deer Jump at Brundrett Avenue',
	description: 'Email Lynn at <a href="mailto:HamletofLynn@gmail.com">HamletofLynn@gmail.com</a> to be put on the Eco Team email list. You’ll get up-to-date notifications about the location.',
	start: '2024-10-26T08:30',
	end: '2024-10-26T11:00',
    },

    {
	title: 'Invasive Plant identification and Removal Session',
	location: 'Deer Jump at Nollet',
	description: 'Email Lynn at <a href="mailto:HamletofLynn@gmail.com">HamletofLynn@gmail.com</a> to be put on the Eco Team email list. You’ll get up-to-date notifications about the location.',
	start: '2024-08-31T08:30',
	end: '2024-08-31T11:00',
    },

    {
	title: 'Invasive Plant identification and Removal Session',
	location: 'Deer Jump at Nollet',
	description: 'Email Lynn at <a href="mailto:HamletofLynn@gmail.com">HamletofLynn@gmail.com</a> to be put on the Eco Team email list. You’ll get up-to-date notifications about the location.',
	start: '2024-09-08T08:30',
	end: '2024-09-08T11:00',
    },

    {
	title: 'Invasive Plant identification and Removal Session',
	location: 'Andover Highlands',
	description: 'Email Lynn at <a href="mailto:HamletofLynn@gmail.com">HamletofLynn@gmail.com</a> to be put on the Eco Team email list. You’ll get up-to-date notifications about the location.',
	start: '2024-09-21T08:30',
	end: '2024-09-21T11:00',
    },

    {
	title: 'World Conservation Day',
	location: 'TBA',
	description: 'Email Lynn at <a href="mailto:HamletofLynn@gmail.com">HamletofLynn@gmail.com</a> to be put on the Eco Team email list. You’ll get up-to-date notifications about the location.',
	start: '2024-07-27T09:00',
	end: '2024-07-27T13:00',
    },

    {
	title: 'Invasive Plant identification and Removal Session',
	location: 'Andover Highlands',
	description: 'Email Lynn at <a href="mailto:HamletofLynn@gmail.com">HamletofLynn@gmail.com</a> to be put on the Eco Team email list. You’ll get up-to-date notifications about the location.',
	start: '2024-08-03T08:30',
	end: '2024-08-03T11:00',
    },

    {
	title: 'Invasive Plant identification and Removal Session',
	location: 'Sakowich Reservation',
	description: 'Email Lynn at <a href="mailto:HamletofLynn@gmail.com">HamletofLynn@gmail.com</a> to be put on the Eco Team email list. You’ll get up-to-date notifications about the location.',
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
	description: 'Email Lynn at <a href="mailto:HamletofLynn@gmail.com">HamletofLynn@gmail.com</a> to be put on the Eco Team email list. You’ll get up-to-date notifications about the location.',
	start: '2024-07-07T13:00',
	end: '2024-07-07T15:30',
    },

    {
	title: 'Invasive Plant identification and Removal Session',
	location: 'Andover Highlands',
	description: 'Email Lynn at <a href="mailto:HamletofLynn@gmail.com">HamletofLynn@gmail.com</a> to be put on the Eco Team email list. You’ll get up-to-date notifications about the location.',
	start: '2024-06-29T08:30',
	end: '2024-06-29T11:00',
    },

    {
	title: 'Invasive Plant identification and Removal Session',
	location: 'Shawsheen River Reservation',
	description: 'Email Lynn at <a href="mailto:HamletofLynn@gmail.com">HamletofLynn@gmail.com</a> to be put on the Eco Team email list. You’ll get up-to-date notifications about the location.',
	start: '2024-06-15T08:30',
	end: '2024-06-15T11:00',
    },

    {
	title: 'Invasive Plant identification and Removal Session',
	location: 'Richard J. Bonier',
	description: 'Email Lynn at <a href="mailto:HamletofLynn@gmail.com">HamletofLynn@gmail.com</a> to be put on the Eco Team email list. You’ll get up-to-date notifications about the location.',
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
	description: 'Email Lynn at <a href="mailto:HamletofLynn@gmail.com">HamletofLynn@gmail.com</a> to be put on the Eco Team email list. You’ll get up-to-date notifications about the location.',
	start: '2024-06-01T08:30',
	end: '2024-06-01T11:00',
    },

    {
	title: 'Invasive Plant identification and Removal Session',
	location: 'Sunset Rock at Hammond Way',
	description: 'Email Lynn at <a href="mailto:HamletofLynn@gmail.com">HamletofLynn@gmail.com</a> to be put on the Eco Team email list. <br/><br/>The weather looks to be a mix of clouds and sun in the morning. Sunset Rock was basically closed for years due to the trails and entrance being impassible. A lot of work has been done in the last couple of years by the wardens, various volunteer groups, and the Eco Team. The trails are very well-defined now. It has an astounding amount of Burning Bush (Euonymus alatus). You\'ll learn to identify all stages of this plant.<br /><br />Park on Hammond Way. Please do not block any driveways. The entrance is down the dirt road, which is actually someone\'s driveway. Please walk along the grass on the right, which is the AVIS easement.',
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
	description: 'Email Lynn at <a href="mailto:HamletofLynn@gmail.com">HamletofLynn@gmail.com</a> to be put on the Eco Team email list. You’ll get up-to-date notifications about the location.',
	start: '2024-04-27T08:30',
	end: '2024-04-27T11:00',
    },

    {
	title: 'Invasive Plant identification and Removal Session',
	location: 'Sunset Rock',
	description: 'Email Lynn at <a href="mailto:HamletofLynn@gmail.com">HamletofLynn@gmail.com</a> to be put on the Eco Team email list. You’ll get up-to-date notifications about the location.',
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
	description: 'Email Lynn at <a href="mailto:HamletofLynn@gmail.com">HamletofLynn@gmail.com</a> to be put on the Eco Team email list. You’ll get up-to-date notifications about the location.',
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

    {
	title: 'Invasive Plant identification and Removal Session',
	location: 'TBA',
	description: 'Email Lynn at <a href="mailto:HamletofLynn@gmail.com">HamletofLynn@gmail.com</a> to be put on the Eco Team email list. You’ll get up-to-date notifications about the location.',
	start: '2023-11-04T08:30',
	end: '2023-11-04T11:00',
    },

    {
	title: 'Invasive Plant identification and Removal Session',
	location: 'TBA',
	description: 'Email Lynn at <a href="mailto:HamletofLynn@gmail.com">HamletofLynn@gmail.com</a> to be put on the Eco Team email list. You’ll get up-to-date notifications about the location.',
	start: '2023-11-18T08:30',
	end: '2023-11-18T11:00',
    },

    {
	title: 'Invasive Plant identification and Removal Session',
	location: 'TBA',
	description: 'Email Lynn at <a href="mailto:HamletofLynn@gmail.com">HamletofLynn@gmail.com</a> to be put on the Eco Team email list. You’ll get up-to-date notifications about the location.',
	start: '2023-11-25T08:30',
	end: '2023-11-25T11:00',
    },

    {
	title: 'Invasive Plant identification and Removal Session',
	location: 'TBA',
	description: 'Email Lynn at <a href="mailto:HamletofLynn@gmail.com">HamletofLynn@gmail.com</a> to be put on the Eco Team email list. You’ll get up-to-date notifications about the location.',
	start: '2023-10-08T08:30',
	end: '2023-10-08T11:00',
    },

    {
	title: 'Guided Nature &amp; History Hike on Indigenous People\'s Day 2023',
	location: 'Meeting location will be shared with registration confirmation',
	description: 'Andover Center for History & Culture, AVIS, and Andover Conservation Commission offer a guided nature and history hike on Deer Jump and Retelle Reservations Join us for a Fall discovery of birds, plants, trees, ecology and those who settled here over the last 8,000 years, including the Pennacook Native peoples. Register here: https://andoverhistoryandculture.org/Public-Programs. Limited seats!',
	start: '2023-05-05T08:30',
	end: '2023-05-05T11:00',
    },

    {
	title: 'Goldsmith Woodlands',
	location: 'Goldsmith trailhead at 941 S.Main Street, Andover',
	description: 'Come search with us for some of nature\'s treasures. The walk will be held, weather permitting, on October 14th. We will walk the wide, gently sloping trails of the reservation and then up the short hill to Bessie\'s Point, and on to Scout Hollow, if the group wishes. Let\'s see what we might find along the way! October is a beautiful time to explore the woodland.',
	start: '2023-10-14T10:00',
    },

    {
	title: 'Ballardvale Day',
	location: 'Ballardvale',
	description: 'Please visit the AVIS table in downtown Ballardvale, in the historic Ballardvale neighborhood of Andover. Learn about the history of Andover, take a guided hike, or just hang out.',
	start: '2023-10-14T10:00',
	end: '2023-10-14T14:00',
    },

    {
	title: 'Invasive Plant identification and Removal Session',
	location: 'TBA',
	description: 'Email Lynn at <a href="mailto:HamletofLynn@gmail.com">HamletofLynn@gmail.com</a> to be put on the Eco Team email list. You’ll get up-to-date notifications about the location.',
	start: '2023-10-21T08:30',
	end: '2023-10-21T11:00',
    },

    {
	title: 'Trails and Sails hike',
	location: '<a href="/shawsheenriver.html">Shawsheen River</a> &amp; <a href="/vale.html">Vale Reservations',
	description: 'Please join AVIS Trustee Denise Boucher in a hike through the Shawsheen River and Vale Reservations. Park on Abbot Bridge Drive',
	start: '2023-09-28T10:00',
    },

    {
	title: 'Andover Day',
	location: 'Downtown Andover',
	description: 'please visit the AVIS table at Andover Day in downtown Andover.',
	start: '2023-09-30',
	allday: true,
    },

    {
	title: 'Invasive Plant identification and Removal Session',
	location: 'TBA',
	description: 'Email Lynn at <a href="mailto:HamletofLynn@gmail.com">HamletofLynn@gmail.com</a> to be put on the Eco Team email list. You’ll get up-to-date notifications about the location.',
	start: '2023-09-30T08:30',
	end: '2023-09-30T11:00',
    },

    {
	title: 'AVIS Fall Hike',
	location: '<a href="/goldsmith.html">Bessie Goldsmith Reservation</a>',
	description: 'Starting at 4:00 with a stop at Scout Hollow for a campfire, hot cider and donuts at 5:30 on the way back. Sunset is at 6:26 so it will start to get shadowy if not actually dark. We take the main trail back to the parking lot as it gets dusky.',
	start: '2023-09-30T16:00',
    },

    {
	title: 'Invasive Plant identification and Removal Session',
	location: 'TBA',
	description: 'Email Lynn at <a href="mailto:HamletofLynn@gmail.com">HamletofLynn@gmail.com</a> to be put on the Eco Team email list. You’ll get up-to-date notifications about the location.',
	start: '2023-09-24T08:30',
	end: '2023-09-24T11:00',
    },

    {
	title: 'Trails & Sails',
	location: 'TBA',
	description: 'This is an annual event all over Essex County. AVIS and other Andover organizations are participating in this celebration of culture, nature, and history by sponsoring a hike and other activities throughout town. Learn more at trailsandsails.org.',
	start: '2023-09-15',
	end: '2023-09-24',
    },

    {
	title: 'Invasive Plant identification and Removal Session',
	location: 'TBA',
	description: 'Email Lynn at <a href="mailto:HamletofLynn@gmail.com">HamletofLynn@gmail.com</a> to be put on the Eco Team email list. You’ll get up-to-date notifications about the location.',
	start: '2023-09-02T08:30',
	end: '2023-09-02T11:00',
    },

    {
	title: 'Farmers Market',
	location: 'South Church, Central Street, Andover',
	description: 'please visit the AVIS table at the Andover Farmers Market at South Church, Central Street, Andover',
	start: '2023-08-26T09:00',
	end: '2023-08-26T13:00',
    },

    {
	title: 'Invasive Plant identification and Removal Session',
	location: 'TBA',
	description: 'Email Lynn at <a href="mailto:HamletofLynn@gmail.com">HamletofLynn@gmail.com</a> to be put on the Eco Team email list. You’ll get up-to-date notifications about the location.',
	start: '2023-08-06T08:30',
	end: '2023-08-06T11:00',
    },

    {
	title: 'Invasive Plant identification and Removal Session',
	location: 'TBA',
	description: 'Email Lynn at <a href="mailto:HamletofLynn@gmail.com">HamletofLynn@gmail.com</a> to be put on the Eco Team email list. You’ll get up-to-date notifications about the location.',
	start: '2023-08-19T08:30',
	end: '2023-08-19T11:00',
    },

    {
	title: 'Invasive Plant identification and Removal Session',
	location: 'TBA',
	description: 'Email Lynn at <a href="mailto:HamletofLynn@gmail.com">HamletofLynn@gmail.com</a> to be put on the Eco Team email list. You’ll get up-to-date notifications about the location.',
	start: '2023-07-01T08:30',
	end: '2023-07-01T11:00',
    },

    {
	title: 'Invasive Plant identification and Removal Session',
	location: 'TBA',
	description: 'Email Lynn at <a href="mailto:HamletofLynn@gmail.com">HamletofLynn@gmail.com</a> to be put on the Eco Team email list. You’ll get up-to-date notifications about the location.',
	start: '2023-07-15T08:30',
	end: '2023-07-15T11:00',
    },

    {
	title: 'Invasive Plant identification and Removal Session',
	location: 'TBA',
	description: 'Email Lynn at <a href="mailto:HamletofLynn@gmail.com">HamletofLynn@gmail.com</a> to be put on the Eco Team email list. You’ll get up-to-date notifications about the location.',
	start: '2023-07-29T08:30',
	end: '2023-07-29T11:00',
    },

    {
	title: 'Invasive Plant identification and Removal Session',
	location: 'TBA',
	description: 'The AVIS Eco-Team will be joining forces members of Grow Native Massachusetts for an invasive plant identification and removal session. We will be tackling bittersweet and buckthorn using manual methods such as hand pulling, weed wrenches, hand saws, and buckthorn baggies. Please email Lynn at Hamletoflynn@gmail.com to be put on the mailing list for this and other Eco-Team events. It helps us know if you will attend to plan for tool needs.',
	start: '2023-06-17T08:30',
	end: '2023-06-17T11:00',
    },


    {
	title: 'Shawsheen River Reservation Garlic Mustard Pulling Event',
	location: 'Shawsheen River Reservation, Central St between the RR bridge and the River',
	description: 'Park on Abbott Bridge Drive and meet at the gated entrance to the Shawsheen River Reservation on Central Street at 8:30 am. Two years ago there was enough of this invasive plant to fill 23 garbage bags---let\'s see what we can remove this year! We welcome new and occasional volunteers. Please Email Eco-team Lead	(hamletoflynn@gmail.com) for more information and to let us know you\'re coming so that we can have tools and gloves available for all.',
	start: '2023-05-07T08:30',
	end: '2023-05-07T11:00',
    },

    {
	title: 'Three Reservation walk',
	location: 'Arch at West Parish Cemetery @ 129 Reservation Rd',
	description: 'Come join us for a ~3.25 mile / ~2 hour hike across three of the most beautiful AVIS reservations. We will meander through the West Parish Meadow, around Baker’s Meadow and return via Indian Ridge Reservation. This will include a side trip to the Alice Buck Memorial for a short talk about one of Andover’s first conservationists. More than 145 species of birds, including herons, migrating ducks and nesting Canadian geese, have been observed in these reservations. The wetlands also provide vital habitat for muskrat, mink and beaver. Meet at the Arch at West Parish Cemetery @ 129 Reservation Rd, Andover, MA 01810 @ 9:20',
	start: '2023-05-06T09:30',
    },

    {
	title: 'Shawsheen River Hike',
	location: 'Shawsheen Reservation',
	description: 'Led by Trustee Mark Kaluzny, we will be hosting an easy fun hike at the Shawsheen River Reservation. Let\'s walk along the Shawsheen River and see which critters are back or waking up! Maybe we\'ll find Andover\'s famous "Octopus Tree"! Meet at the far end of the Ballardvale Communter parking lot at 195 Andover St, Andover MA.',
	start: '2023-04-18T10:00',
    },

    {
	title: 'West Parish Scavenger Hunt',
	location: 'West Parish Church',
	description: 'Cheryl McKeough, teacher and naturalist will be leading a fun scavenger hunts in the West Parish Reservation. We\'ll meet at the children\'s garden across from West Parish Church at 10:00AM, Monday, April 17, for an easy one-hour scavenger hunt and walk in nature. No dogs, please. Children must be accompanied by an adult.',
	start: '2023-04-17T10:00',
    },

    {
	title: 'Annual Meeting',
	location: ' Andover Town House',
	description: 'The Andover Village Improvement Society will hold its Annual Meeting at the Andover Town House on Tuesday, April 11, 2023 beginning at 6 PM. Cocktails and self-serve appetizers start at 6 PM (cash bar) followed by a buffet style dinner at 6:30.',
	start: '2023-04-11T18:00',
    },

    {
	title: 'Harold Rafton Hike',
	location: 'Rafton Reservation',
	description: 'Come join us for a ~2.75 mile / ~2 hour hike at the largest of the AVIS reservations. Maple, birch, oak, hickory and sassafras trees can be found in these serene woods. Tall white pines grow along the ridges and hilltops and the ski loop trail passes through lovely hemlock groves. The forest floor is carpeted with ferns, partridgeberry and teaberry. Deer, beaver, fox and numerous bird species have been observed here. Meet at the Andover Community Garden @ 265 High Plain Rd, Andover, MA 01810 at 2:00p.',
	start: '2023-04-02T14:00',
    },

    {
	title: 'Weed Warriors Kickoff',
	location: 'West Parish Church',
	description: 'Meet at West Parish Church\'s parking lot at 8:30a. We\'ll have a guided hike for newcomers, while experianced team members get started on removing some glossy buckthorn and European honeysuckle.',
	start: '2023-04-01T08:30',
	end: '2023-04-01T11:00',
    },

]

